"""
Movement: "Institutional Study"
Lys, varm bakgrunn. Kortene er objekter på en overflate — ikke digitale mockups i mørket.
Sterk asymmetri. Ansattkortet dominerer: mørkt, personlig, dramatisk mot lys bakgrunn.
Studentkortet er sekundært: lyst, tilbaketrukket, overlappende.
"""

from PIL import Image, ImageDraw, ImageFilter
import numpy as np

W, H = 1920, 700

# ── Background: warm linen / off-white ───────────────────────────────────
y_c, x_c = np.mgrid[0:H, 0:W].astype(np.float32)

# Subtle directional gradient — slightly lighter top-left, darker bottom-right
grad = 1.0 - (x_c / W * 0.06 + y_c / H * 0.04)

base = np.array([232, 230, 225], dtype=np.float32)       # warm off-white
r_ch = np.clip(base[0] * grad, 0, 255).astype(np.uint8)
g_ch = np.clip(base[1] * grad, 0, 255).astype(np.uint8)
b_ch = np.clip(base[2] * grad, 0, 255).astype(np.uint8)
a_ch = np.full((H, W), 255, dtype=np.uint8)
canvas = Image.fromarray(np.stack([r_ch, g_ch, b_ch, a_ch], axis=2), 'RGBA')


# ── Helpers ───────────────────────────────────────────────────────────────
def safe_composite(canvas, layer, px, py):
    cw, ch = canvas.size
    lw, lh = layer.size
    sx, sy = max(0, -px), max(0, -py)
    dx, dy = max(0, px), max(0, py)
    w, h = min(lw - sx, cw - dx), min(lh - sy, ch - dy)
    if w <= 0 or h <= 0:
        return
    tmp = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
    tmp.paste(layer.crop((sx, sy, sx + w, sy + h)), (dx, dy))
    canvas.alpha_composite(tmp)


def drop_shadow(rot, canvas, cx, cy, blur, opacity, ox, oy):
    # Dark warm shadow for light background
    s = Image.new('RGBA', rot.size, (18, 16, 14, opacity))
    s.putalpha(rot.split()[3])
    safe_composite(canvas, s.filter(ImageFilter.GaussianBlur(blur)),
                   cx - rot.width // 2 + ox, cy - rot.height // 2 + oy)


def place_card(canvas, path, target_h, cx, cy, angle_deg):
    card = Image.open(path).convert('RGBA')
    tw = int(target_h * card.width / card.height)
    card = card.resize((tw, target_h), Image.LANCZOS)

    # Clean rounded corners — no soft fade needed on light background
    radius = max(20, int(tw * 0.062))
    mask = Image.new('L', (tw, target_h), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [(0, 0), (tw - 1, target_h - 1)], radius=radius, fill=255
    )
    card.putalpha(mask)

    rot = card.rotate(-angle_deg, expand=True, resample=Image.BICUBIC)

    # Three shadow layers: ambient → mid → contact
    drop_shadow(rot, canvas, cx, cy, blur=55, opacity=38, ox=28, oy=36)
    drop_shadow(rot, canvas, cx, cy, blur=28, opacity=58, ox=15, oy=19)
    drop_shadow(rot, canvas, cx, cy, blur=10, opacity=80, ox=6,  oy=8)

    safe_composite(canvas, rot, cx - rot.width // 2, cy - rot.height // 2)


# ── Composition ───────────────────────────────────────────────────────────
# Studentkort: behind, right, generous tilt
place_card(canvas, 'public/images/adgangskort/studentkort.png',
           target_h=460, cx=1260, cy=355, angle_deg=13)

# Ansattkort: front, left-centre, dominant — dark card is the drama on light bg
place_card(canvas, 'public/images/adgangskort/ansattkort.png',
           target_h=590, cx=720,  cy=338, angle_deg=-11)


# ── Accent line — teal from the card design ──────────────────────────────
draw = ImageDraw.Draw(canvas)
# Very thin teal bar at bottom, spanning left half
draw.rectangle([(80, H - 5), (480, H - 3)], fill=(78, 195, 179, 160))


# ── Film grain (light, matching the light bg aesthetic) ──────────────────
np.random.seed(42)
arr = np.array(canvas).astype(np.float32)
arr[:, :, :3] = np.clip(
    arr[:, :, :3] + np.random.normal(0, 3.5, (H, W))[:, :, np.newaxis], 0, 255
)
canvas = Image.fromarray(arr.astype(np.uint8), 'RGBA')


# ── Save ──────────────────────────────────────────────────────────────────
canvas.convert('RGB').save('public/images/adgangskort/hero.png', optimize=True)
print(f'✓  {W}×{H}  public/images/adgangskort/hero.png')
