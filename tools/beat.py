"""Original trap instrumental (140 BPM, C minor), synthesized from scratch."""
import sys, wave
import numpy as np

SR = 44100
BPM = 140
BEAT = 60 / BPM
STEP = BEAT / 4            # 16th note
BAR = BEAT * 4
DUR = 27.0
N = int(SR * DUR)
rng = np.random.default_rng(7)

out = np.zeros((N, 2))


def add(sig, t, pan=0.0, gain=1.0):
    i = int(t * SR)
    if i >= N:
        return
    sig = sig[: N - i] * gain
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    out[i:i + len(sig), 0] += sig * l * 1.414
    out[i:i + len(sig), 1] += sig * r * 1.414


def midi(n):
    return 440 * 2 ** ((n - 69) / 12)


def env(n, a, d):
    t = np.arange(n) / SR
    e = np.exp(-t / d)
    na = max(1, int(a * SR))
    e[:na] *= np.linspace(0, 1, na)
    return e


def kick():
    n = int(0.35 * SR)
    t = np.arange(n) / SR
    f = 45 + 110 * np.exp(-t / 0.03)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.tanh(2.5 * np.sin(ph) * env(n, 0.001, 0.12))


def bass808(note, length):
    n = int(length * SR)
    t = np.arange(n) / SR
    f = midi(note) * (1 + 0.6 * np.exp(-t / 0.02))
    ph = 2 * np.pi * np.cumsum(f) / SR
    e = env(n, 0.003, max(0.25, length * 0.7))
    rel = min(n, int(0.03 * SR))
    e[-rel:] *= np.linspace(1, 0, rel)
    return np.tanh(1.8 * np.sin(ph)) * e


def clap():
    n = int(0.25 * SR)
    noise = rng.uniform(-1, 1, n)
    noise = noise - np.concatenate([[0], noise[:-1]]) * 0.6   # crude high-pass
    e = np.zeros(n)
    for k, o in enumerate([0, 0.011, 0.022]):
        i = int(o * SR)
        e[i:] += env(n - i, 0.0005, 0.012 if k < 2 else 0.09)
    t = np.arange(n) / SR
    body = np.sin(2 * np.pi * 190 * t) * env(n, 0.001, 0.04) * 0.5
    return (noise * e * 0.7 + body)


def hat(length=0.045):
    n = int(length * SR)
    noise = rng.uniform(-1, 1, n)
    hp = noise - np.concatenate([[0], noise[:-1]])
    hp = hp - np.concatenate([[0], hp[:-1]]) * 0.5
    return hp * env(n, 0.0003, length / 4) * 0.5


def bell(note, length):
    n = int(length * SR)
    t = np.arange(n) / SR
    f = midi(note)
    s = (np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * f * 3.01 * t) * np.exp(-t / 0.15)
         + 0.15 * np.sin(2 * np.pi * f * 5.4 * t) * np.exp(-t / 0.05))
    return s * env(n, 0.002, 0.45)


def pad(notes, length):
    n = int(length * SR)
    t = np.arange(n) / SR
    s = np.zeros(n)
    for note in notes:
        for det in (-0.12, 0.0, 0.12):
            f = midi(note + det)
            s += 2 * (t * f % 1) - 1          # saw
    # one-pole low-pass
    y = np.zeros(n)
    a = 0.06
    acc = 0.0
    for i in range(n):
        acc += a * (s[i] - acc)
        y[i] = acc
    e = np.minimum(1, t / 0.4) * np.minimum(1, (length - t) / 0.4)
    return y * e / (3 * len(notes))


# Progression (C minor): Cm - Ab - Eb - Bb, one bar each
chords = [[60, 63, 67], [56, 60, 63], [55, 58, 63], [58, 62, 65]]
roots = [36, 32, 39, 34]
melody = [  # (16th step in a 2-bar phrase, midi note)
    (0, 75), (3, 74), (6, 72), (8, 70), (10, 72), (14, 67),
    (16, 75), (19, 77), (22, 75), (24, 74), (27, 72), (30, 70),
]

bars = int(DUR / BAR) + 1
intro_bars = 1          # pad + bells only, then the drop
for b in range(bars):
    t0 = b * BAR
    c = b % 4
    add(pad(chords[c], BAR + 0.3), t0, gain=0.55)
    for s, note in melody:
        if (s // 16) == (b % 2):
            add(bell(note, 0.9), t0 + (s % 16) * STEP, pan=0.25 if s % 2 else -0.25, gain=0.22)
    if b < intro_bars:
        continue
    # kicks + 808s
    for s in (0, 7, 10) if b % 2 == 0 else (0, 6, 11, 14):
        add(kick(), t0 + s * STEP, gain=0.8)
    add(bass808(roots[c], BAR * 0.62), t0, gain=0.55)
    add(bass808(roots[c] + (7 if c % 2 else 3), BAR * 0.35), t0 + 10 * STEP, gain=0.5)
    # clap on 3 (half-time)
    add(clap(), t0 + 8 * STEP, gain=0.55)
    # hats: 8ths with 16th / triplet rolls
    for s in range(0, 16, 2):
        add(hat(), t0 + s * STEP, pan=0.3, gain=0.5)
    if b % 2 == 1:
        for k in range(6):  # triplet roll in last beat
            add(hat(0.03), t0 + 12 * STEP + k * (BEAT / 6), pan=0.3, gain=0.35 + 0.05 * k)
    else:
        for s in (5, 13):
            add(hat(0.03), t0 + s * STEP, pan=0.3, gain=0.3)

out = np.tanh(out * 0.9)
out /= np.max(np.abs(out)) * 1.05
pcm = (out * 32767).astype(np.int16)
with wave.open(sys.argv[1], "wb") as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes(pcm.tobytes())
