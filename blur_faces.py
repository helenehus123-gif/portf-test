import cv2
import numpy as np
import os

cascade_dir = cv2.data.haarcascades
frontal = cv2.CascadeClassifier(cascade_dir + "haarcascade_frontalface_alt2.xml")
profile = cv2.CascadeClassifier(cascade_dir + "haarcascade_profileface.xml")

def blur_region(img, x, y, w, h, padding=0.25):
    px = int(w * padding)
    py = int(h * padding)
    x1 = max(0, x - px)
    y1 = max(0, y - py)
    x2 = min(img.shape[1], x + w + px)
    y2 = min(img.shape[0], y + h + py)
    region = img[y1:y2, x1:x2]
    blurred = cv2.GaussianBlur(region, (99, 99), 30)
    img[y1:y2, x1:x2] = blurred

def detect_and_blur(path, extra_regions=None):
    img = cv2.imread(path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    h_img, w_img = img.shape[:2]

    faces = set()

    for scale in [1.05, 1.1, 1.15]:
        for neighbors in [3, 4, 5]:
            detected = frontal.detectMultiScale(gray, scaleFactor=scale, minNeighbors=neighbors, minSize=(30, 30))
            if len(detected):
                for (x, y, w, h) in detected:
                    faces.add((x, y, w, h))

            detected = profile.detectMultiScale(gray, scaleFactor=scale, minNeighbors=neighbors, minSize=(30, 30))
            if len(detected):
                for (x, y, w, h) in detected:
                    faces.add((x, y, w, h))

            # Flipped for profile from other side
            gray_flip = cv2.flip(gray, 1)
            detected = profile.detectMultiScale(gray_flip, scaleFactor=scale, minNeighbors=neighbors, minSize=(30, 30))
            if len(detected):
                for (x, y, w, h) in detected:
                    faces.add((w_img - x - w, y, w, h))

    for (x, y, w, h) in faces:
        blur_region(img, x, y, w, h)

    # Extra manual regions as (x_frac, y_frac, w_frac, h_frac) relative to image size
    if extra_regions:
        for (xf, yf, wf, hf) in extra_regions:
            x = int(xf * w_img)
            y = int(yf * h_img)
            w = int(wf * w_img)
            h = int(hf * h_img)
            blur_region(img, x, y, w, h, padding=0)

    print(f"{os.path.basename(path)}: {len(faces)} faces auto-detected + {len(extra_regions or [])} manual regions")
    cv2.imwrite(path, img)

base = "/Users/helenehuseby/projects/Porto/public/images/dk/"

# img_7538: wide shot, many people sitting facing camera
detect_and_blur(base + "img_7538.png", extra_regions=[
    # Left cluster: ~4 faces in left half, row 1
    (0.0,  0.28, 0.10, 0.12),
    (0.08, 0.28, 0.10, 0.12),
    (0.15, 0.25, 0.10, 0.12),
    (0.22, 0.25, 0.10, 0.12),
    # Left cluster row 2
    (0.02, 0.38, 0.10, 0.12),
    (0.12, 0.38, 0.10, 0.12),
    # Right cluster
    (0.58, 0.28, 0.10, 0.12),
    (0.68, 0.28, 0.10, 0.12),
    (0.78, 0.28, 0.10, 0.12),
    (0.88, 0.28, 0.10, 0.12),
    (0.62, 0.38, 0.10, 0.12),
    (0.75, 0.38, 0.10, 0.12),
    (0.85, 0.38, 0.10, 0.12),
    # Back row
    (0.25, 0.18, 0.08, 0.10),
    (0.35, 0.18, 0.08, 0.10),
    (0.45, 0.18, 0.08, 0.10),
    (0.52, 0.18, 0.08, 0.10),
    (0.60, 0.18, 0.08, 0.10),
])

# img_7528: people leaning over desks
detect_and_blur(base + "img_7528.png", extra_regions=[
    # Back left, people standing
    (0.02, 0.15, 0.08, 0.12),
    (0.10, 0.12, 0.08, 0.12),
    (0.18, 0.12, 0.08, 0.12),
    # Right side person looking down
    (0.80, 0.22, 0.12, 0.15),
    # Center people leaning
    (0.38, 0.25, 0.10, 0.13),
    (0.50, 0.22, 0.10, 0.13),
])

# img_7539: people at wall, some profiles
detect_and_blur(base + "img_7539.png", extra_regions=[
    # Right person's face (profile)
    (0.68, 0.28, 0.12, 0.14),
    # Far right person
    (0.84, 0.30, 0.10, 0.13),
])

# img_7541: person mostly from behind, edge of face
detect_and_blur(base + "img_7541.png", extra_regions=[
    # Right side profile
    (0.86, 0.30, 0.12, 0.15),
])

print("Done.")
