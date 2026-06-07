import cv2
import numpy as np

def blur_region(img, x1_frac, y1_frac, x2_frac, y2_frac):
    h, w = img.shape[:2]
    x1 = max(0, int(x1_frac * w))
    y1 = max(0, int(y1_frac * h))
    x2 = min(w, int(x2_frac * w))
    y2 = min(h, int(y2_frac * h))
    region = img[y1:y2, x1:x2]
    blurred = cv2.GaussianBlur(region, (99, 99), 30)
    img[y1:y2, x1:x2] = blurred

base = "/Users/helenehuseby/projects/Porto/public/images/dk/"

# img_7528: portrait image ~900x1200 roughly
# Right person in black sweater: head top-right area
img = cv2.imread(base + "img_7528.png")
h, w = img.shape[:2]
print(f"img_7528 size: {w}x{h}")
# Blur the entire right person's head area generously
blur_region(img, 0.78, 0.15, 1.00, 0.38)  # right person - wide sweep
# Back-left group, all heads
blur_region(img, 0.00, 0.08, 0.28, 0.30)  # back left cluster
# Middle-left area
blur_region(img, 0.22, 0.15, 0.42, 0.30)  # center-back
cv2.imwrite(base + "img_7528.png", img)
print("img_7528.png done")
