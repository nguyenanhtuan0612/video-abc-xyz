# Prompt Gemini (Nano Banana) cho mèo mascot "Dưa"

Dùng **một cuộc trò chuyện duy nhất** cho cả bộ ảnh để Gemini nhớ nhân vật. Lưu mỗi ảnh ưng ý vào `assets/` ngay.

## Style khoá (dán vào mọi prompt)
`cute chibi mochi cat sticker style, thick dark-brown outline, soft peach shading, tiny dot eyes, small "w" mouth, pink blush, round chubby body, flat 2D, clean simple, no text, no watermark`

## Bước 1 — Character sheet (tải kèm: ảnh mèo thật + ảnh style mochi)
```
Use the first image as the cat's real appearance (orange and white kitten) and the second image as the art style reference. Draw a character sheet of this same cat as a cute chibi mochi cat: orange patch on top of head and tail, white face, white belly and paws, pink inner ears. Show front view, side view, back view, and 4 expressions (neutral, happy, surprised, confused). Plain solid white background, no text. Style: [STYLE KHOÁ]
```
Chọn bản đẹp nhất → đặt tên `assets/characters/dua_sheet.png`. Nếu chưa ưng, nói tiếp: "make the head rounder / eyes smaller / body chubbier".

## Bước 2 — Đổi trang phục (giữ nguyên mèo)
```
Keep this exact cat unchanged (same face, same orange patches, same proportions, same style). Full body, standing, front view, plain solid white background, wearing: [TRANG PHỤC]. No text.
```
Ví dụ [TRANG PHỤC]: a white chef hat and white chef coat · a blue hoodie · a yellow raincoat with a small hood · cozy pajamas with a nightcap · a pink apron and a cleaning cloth · small round glasses and a red scarf.

## Bước 3 — Dáng/hành động
```
Same cat, same style. Pose: [DÁNG]. Full body, plain solid white background, no text.
```
[DÁNG]: waving one paw · pointing with one paw · holding [ĐẠO CỤ] with both paws · sitting · lying on belly · surprised with paws on cheeks · giving a thumbs-up.

## Bước 4 — Cảnh cho clip (9:16)
```
Vertical 9:16 illustration. Same cat, same style, [DÁNG + TRANG PHỤC]. Setting: [BỐI CẢNH ĐƠN GIẢN, 2-3 đồ vật]. Soft pastel flat background. Leave empty space at the top and the bottom for captions. No text.
```

## Mẹo
- Gemini không xuất PNG trong suốt: dùng nền trắng/xanh lá trơn rồi xoá nền bằng CapCut ("Cutout/Xoá nền") hoặc remove.bg.
- Khi bị lệch nhân vật: gửi lại ảnh `dua_sheet.png` kèm câu "match this cat exactly".
- Tạo 3-4 biến thể rồi chọn; đừng nhờ Gemini vẽ chữ, thêm chữ ở CapCut.
