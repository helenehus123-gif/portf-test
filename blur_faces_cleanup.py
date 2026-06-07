import cv2
import numpy as np

def blur_region(img, x1_frac, y1_frac, x2_frac, y2_frac):
    h, w = img.shape[:2]
    x1 = int(x1_frac * w)
    y1 = int(y1_frac * h)
    x2 = int(x2_frac * w)
    y2 = int(y2_frac * h)
    region = img[y1:y2, x1:x2]
    blurred = cv2.GaussianBlur(region, (99, 99), 30)
    img[y1:y2, x1:x2] = blurred

base = "/Users/helenehuseby/projects/Porto/public/images/dk/"

# img_7528: person in black sweater far right has visible face
img = cv2.imread(base + "img_7528.png")
blur_region(img, 0.82, 0.18, 0.97, 0.35)  # right person face
blur_region(img, 0.00, 0.10, 0.12, 0.28)  # back left people
blur_region(img, 0.10, 0.10, 0.22, 0.26)  # back left continued
cv2.imwrite(base + "img_7528.png", img)
print("img_7528.png done")

# img_7539: bald man on right still has partial face visible
img = cv2.imread(base + "img_7539.png")
blur_region(img, 0.70, 0.34, 0.86, 0.52)  # right man face/head
cv2.imwrite(base + "img_7539.png", img)
print("img_7539.png done")

# img_7541: profile visible on right edge
img = cv2.imread(base + "img_7541.png")
blur_region(img, 0.86, 0.24, 1.00, 0.48)  # right edge profile
cv2.imwrite(base + "img_7541.png", img)
print("img_7541.png done")

# img_7538: a few remaining faces on left side
img = cv2.imread(base + "img_7538.png")
blur_region(img, 0.00, 0.27, 0.15, 0.42)  # leftmost people
blur_region(img, 0.13, 0.25, 0.30, 0.40)  # center-left people
blur_region(img, 0.27, 0.30, 0.42, 0.44)  # center person
cv2.imwrite(base + "img_7538.png", img)
print("img_7538.png done")

print("All cleanup done.")
