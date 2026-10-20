// Renders every post in a week file to media/<date>/.
// usage: node tools/build.mjs content/<week>.mjs <music.mp3> [only-id] [--preview]
import { chromium } from "/opt/node-tools/node_modules/playwright/index.mjs";
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [weekFile, music, only] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const preview = process.argv.includes("--preview");
const { posts } = await import(pathToFileURL(resolve(weekFile)));
const browser = await chromium.launch();

for (const post of posts) {
  if (only && post.id !== only) continue;
  const out = `${root}/media/${post.date}`;
  mkdirSync(out, { recursive: true });
  if (post.kind === "carousel") {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
    await page.addInitScript((s) => { window.SPEC = s; }, post.spec);
    await page.goto(`file://${root}/tools/carousel.html`);
    await page.waitForTimeout(300);
    const n = await page.evaluate(() => COUNT);
    for (let i = 0; i < n; i++) {
      await page.evaluate((i) => show(i), i);
      await page.screenshot({ path: `${out}/${post.id}-${i + 1}.jpg`, type: "jpeg", quality: 93 });
    }
    await page.close();
  } else {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
    await page.addInitScript((s) => { window.SPEC = s; }, post.spec);
    await page.goto(`file://${root}/tools/reel.html`);
    await page.waitForTimeout(400);
    const dur = post.spec.duration;
    if (preview) {
      for (const t of post.previewAt) { await page.evaluate((t) => render(t), t); await page.screenshot({ path: `/tmp/prev-${post.id}-${t}.png` }); }
    } else {
      const frames = `/tmp/frames-${post.id}`;
      rmSync(frames, { recursive: true, force: true }); mkdirSync(frames);
      for (let f = 0; f < dur * 30; f++) {
        await page.evaluate((t) => render(t), f / 30);
        await page.screenshot({ path: `${frames}/${String(f).padStart(4, "0")}.jpg`, type: "jpeg", quality: 92 });
      }
      const fade = dur - 2.5;
      execFileSync("ffmpeg", ["-y", "-v", "error", "-framerate", "30", "-i", `${frames}/%04d.jpg`,
        "-ss", String(post.musicAt || 0), "-i", music,
        "-filter_complex", `[1:a]atrim=0:${dur},asetpts=PTS-STARTPTS,loudnorm=I=-14:TP=-1.5:LRA=11,afade=t=in:d=0.15,afade=t=out:st=${fade}:d=2.5[a]`,
        "-map", "0:v", "-map", "[a]", "-c:v", "libx264", "-crf", "18", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k",
        "-shortest", "-movflags", "+faststart", `${out}/${post.id}.mp4`]);
      rmSync(frames, { recursive: true, force: true });
      // cover image for the reel grid
      execFileSync("ffmpeg", ["-y", "-v", "error", "-ss", String(post.coverAt || 1.5), "-i", `${out}/${post.id}.mp4`, "-frames:v", "1", "-q:v", "2", `${out}/${post.id}-cover.jpg`]);
    }
    await page.close();
  }
  writeFileSync(`${out}/${post.id}.txt`, post.caption + "\n");
  console.log("built", post.date, post.id);
}
await browser.close();
