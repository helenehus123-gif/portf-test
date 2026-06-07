"""
Konverterer HEIC-filer til PNG og anonymiserer ansikter med blur.
Output-filer lagres i public/images/dk/ med snake_case navn.
"""

import cv2
import numpy as np
import pillow_heif
from PIL import Image
from pathlib import Path

SRC = Path("public/images/dk")
FACE_CASCADE = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)

def blur_faces(img_array):
    gray = cv2.cvtColor(img_array, cv2.COLOR_RGB2GRAY)
    faces = FACE_CASCADE.detectMultiScale(
        gray,
        scaleFactor=1.05,
        minNeighbors=4,
        minSize=(40, 40),
    )
    count = 0
    for (x, y, w, h) in faces:
        # Expand bounding box slightly to catch hairline and chin
        pad_x = int(w * 0.18)
        pad_y = int(h * 0.18)
        x1 = max(0, x - pad_x)
        y1 = max(0, y - pad_y)
        x2 = min(img_array.shape[1], x + w + pad_x)
        y2 = min(img_array.shape[0], y + h + pad_y)
        roi = img_array[y1:y2, x1:x2]
        # Strong pixelation blur
        small = cv2.resize(roi, (12, 12), interpolation=cv2.INTER_LINEAR)
        blurred = cv2.resize(small, (x2 - x1, y2 - y1), interpolation=cv2.INTER_NEAREST)
        img_array[y1:y2, x1:x2] = blurred
        count += 1
    return img_array, count


heics = sorted(SRC.glob("*.HEIC")) + sorted(SRC.glob("*.heic"))
print(f"Fant {len(heics)} HEIC-filer\n")

for heic_path in heics:
    out_name = heic_path.stem.lower().replace(" ", "_") + ".png"
    out_path = SRC / out_name

    # Convert HEIC -> PIL -> numpy
    heif_file = pillow_heif.read_heif(str(heic_path))
    pil_img = Image.frombytes(
        heif_file.mode, heif_file.size, heif_file.data, "raw"
    )
    # Resize to max 1600px wide for web
    max_w = 1600
    if pil_img.width > max_w:
        ratio = max_w / pil_img.width
        pil_img = pil_img.resize(
            (max_w, int(pil_img.height * ratio)), Image.LANCZOS
        )

    arr = np.array(pil_img.convert("RGB"))
    arr, n_faces = blur_faces(arr)

    Image.fromarray(arr).save(str(out_path), optimize=True)
    print(f"  {heic_path.name} -> {out_name}  ({n_faces} ansikt{'er' if n_faces != 1 else ''} anonymisert)")

print("\nFerdig.")
