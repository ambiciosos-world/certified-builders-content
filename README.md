# Certified Builders: media for social posts

Public hosting for the videos and images that Metricool publishes to the
Certified Builders Instagram. Files live under `media/<publish-date>/`.
All data shown in the content is made-up sample data.

## How a week is made
1. Write `content/<first-post-date>.mjs`: one entry per post (id, date, time,
   kind `reel` or `carousel`, caption, and the scene/slide spec).
2. `node tools/build.mjs content/<week>.mjs <music.mp3>` renders
   `media/<date>/<id>.mp4` (reels, 1080×1920 + cover) or
   `media/<date>/<id>-N.jpg` (carousels, 1080×1350) and `<id>.txt` (caption).
   Add `<id> --preview` to render a few stills of one reel to `/tmp`.
3. Push, then schedule each post in Metricool with the
   `raw.githubusercontent.com/.../main/media/...` URLs.

Music is mixed in at build time (royalty-free track, never committed here).

## Brand rules
- Faceless: the owner never appears; nothing linked to their personal or music accounts.
- Colors: black, neon green (#39e75f), silver.
- Never assert the viewer's financial situation and never promise results
  ("guaranteed", "delete collections", "+100 points"). Include "Results vary" / "Los resultados varían".
- Only made-up sample data.
- Every caption ends with "Link in bio" / "Link en la bio".
- Don't advertise the done-for-you service until its payment terms are reviewed for CROA.
- Half English, half Spanish.
