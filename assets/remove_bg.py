"""Tách nền ảnh mascot từ Gemini (nền trắng) -> PNG trong suốt, bỏ bóng tím và logo/đốm lạ.
Chạy:  python remove_bg.py <ảnh_vào> <ảnh_ra.png>
"""
import sys
from collections import deque
import numpy as np
from PIL import Image, ImageFilter

def components(fg):
    h, w = fg.shape
    lab = np.zeros((h, w), int); sizes = {}; n = 0
    for sy in range(h):
        for sx in range(w):
            if fg[sy, sx] and lab[sy, sx] == 0:
                n += 1; lab[sy, sx] = n; q = deque([(sy, sx)]); c = 0
                while q:
                    y, x = q.popleft(); c += 1
                    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                        ny, nx = y + dy, x + dx
                        if 0 <= ny < h and 0 <= nx < w and fg[ny, nx] and lab[ny, nx] == 0:
                            lab[ny, nx] = n; q.append((ny, nx))
                sizes[n] = c
    return lab, sizes

def main(src, dst, pad=20):
    im = Image.open(src).convert("RGB"); a = np.array(im).astype(int); h, w, _ = a.shape
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    near = (r > 235) & (g > 235) & (b > 235)
    bg = np.zeros((h, w), bool); dq = deque()
    for x in range(w):
        for y in (0, h - 1):
            if near[y, x] and not bg[y, x]: bg[y, x] = True; dq.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if near[y, x] and not bg[y, x]: bg[y, x] = True; dq.append((y, x))
    while dq:
        y, x = dq.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and near[ny, nx] and not bg[ny, nx]:
                bg[ny, nx] = True; dq.append((ny, nx))
    fg = ~bg & ~((b > r + 12) & (b > g + 12) & (r > g + 5) & (r < 225))  # bỏ bóng tím (không đụng áo xanh dương)
    lab, sizes = components(fg)
    mask = lab == max(sizes, key=sizes.get)
    m = Image.fromarray((mask * 255).astype("uint8")).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))
    rgba = im.convert("RGBA"); rgba.putalpha(m)
    x0, y0, x1, y1 = m.point(lambda v: 255 if v > 10 else 0).getbbox()
    out = rgba.crop((max(0, x0 - pad), max(0, y0 - pad), min(w, x1 + pad), min(h, y1 + pad)))
    out.save(dst); print(dst, out.size)

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
