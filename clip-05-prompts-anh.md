# Prompt ảnh cho clip 5 – Lò vi sóng (Gemini / Nano Banana)

## Cách dùng
- Dùng **một cuộc trò chuyện Gemini duy nhất** cho cả clip. Tải kèm `assets/characters/dua_chef.png` ở nhóm A, và `assets/characters/base_mascot.png` nếu Gemini lệch mặt Dưa.
- Tạo 3-4 biến thể mỗi ảnh, chọn ảnh đẹp nhất.
- Nền trắng trơn → tách nền bằng `python assets/remove_bg.py <vào> <ra.png>`. Riêng nền bếp (nhóm B) giữ nguyên, không tách.
- Lưu ảnh theo tên gợi ý bên dưới vào `assets/characters/`, `assets/props/`, `assets/backgrounds/`.
- Không nhờ Gemini vẽ chữ. Chữ và dấu ✗, ✓ thêm lúc dựng.

**STYLE KHOÁ** (đã có trong các prompt bên dưới):
`cute chibi mochi cat sticker style, thick dark-brown outline, soft peach shading, tiny dot eyes, small "w" mouth, pink blush, round chubby body, flat 2D, clean simple, no text, no watermark`

## A. Dưa đầu bếp (tải kèm `dua_chef.png`)

Lời mở đầu mỗi prompt: "Keep this exact cat unchanged (same face, same yellow-orange patches, same white belly, same proportions, same chef hat and chef coat, same style)."

**A1 – Ngạc nhiên** (cảnh 1) → `assets/characters/dua_chef_surprised.png`
```
Keep this exact cat unchanged (same face, same yellow-orange patches, same white belly, same proportions, same chef hat and chef coat, same style). Pose: surprised, both paws on cheeks, eyes round and wide, small open mouth. Full body, front view, plain solid white background, no text, no watermark. Style: cute chibi mochi cat sticker style, thick dark-brown outline, soft peach shading, pink blush, round chubby body, flat 2D, clean simple
```

**A2 – Cầm bát cơm nguội, hào hứng** (cảnh 2) → `assets/characters/dua_chef_holdbowl.png`
```
Keep this exact cat unchanged (same face, same yellow-orange patches, same white belly, same proportions, same chef hat and chef coat, same style). Pose: happy and eager, holding a small bowl of cold white rice with both paws in front of the body. Full body, front view, plain solid white background, no text, no watermark. Style: cute chibi mochi cat sticker style, thick dark-brown outline, soft peach shading, tiny dot eyes, small "w" mouth, pink blush, round chubby body, flat 2D, clean simple
```

**A3 – Soi đáy hộp nhựa** (cảnh 6) → `assets/characters/dua_chef_checkbox.png`
```
Keep this exact cat unchanged (same face, same yellow-orange patches, same white belly, same proportions, same chef hat and chef coat, same style). Pose: curious, holding a plastic food container upside down with both paws, tilting head and looking at the bottom of the container. Full body, front view, plain solid white background, no text, no watermark. Style: cute chibi mochi cat sticker style, thick dark-brown outline, soft peach shading, pink blush, round chubby body, flat 2D, clean simple
```

**A4 – Cầm bát sứ đậy hờ, đắc ý** (cảnh 7) → `assets/characters/dua_chef_ceramic.png`
```
Keep this exact cat unchanged (same face, same yellow-orange patches, same white belly, same proportions, same chef hat and chef coat, same style). Pose: proud and happy, holding a white ceramic bowl covered loosely with a small plate on top, with both paws. Full body, front view, plain solid white background, no text, no watermark. Style: cute chibi mochi cat sticker style, thick dark-brown outline, soft peach shading, tiny dot eyes, small "w" mouth, pink blush, round chubby body, flat 2D, clean simple
```

(Cảnh 1 cần Dưa đứng cạnh lò, cảnh 8 vẫy tay: dùng lại `dua_chef.png`, đã có.)

## B. Nền bếp (không tách nền)

**B1 – Nền bếp trống, chừa chỗ chữ** → `assets/backgrounds/bg_bep.png`
```
Vertical 9:16 illustration, empty cute kitchen background, no characters. Soft cream wall, one simple wooden kitchen counter in the lower middle with an empty flat top, a small window on the wall, one small plant on a shelf. Soft pastel flat colors, thick dark-brown outline style, clean simple. Leave empty space at the top and the bottom for captions. No text, no watermark.
```
Mẹo: chừa mặt bàn trống để đặt lò vi sóng và đạo cụ lên trên khi dựng.

## C. Đạo cụ (nền trắng trơn, tách nền)

Mẫu chung, thay `[ĐẠO CỤ]`:
```
A cute flat 2D illustration of [ĐẠO CỤ]. Thick dark-brown outline, soft pastel colors, soft peach shading, clean simple, plain solid white background, centered, no text, no watermark.
```

| Tên file | `[ĐẠO CỤ]` | Dùng ở |
|---|---|---|
| `microwave_closed.png` | a retro-style microwave oven, front view, door closed with cream glass window, small dial, soft pastel blue-grey body | 1-8 |
| `microwave_open.png` | the same retro-style microwave oven, front view, door open to the left, empty clean cream interior with a round glass plate | 3-7 |
| `foil_spoon.png` | a roll of shiny aluminum foil, a metal spoon, and a white bowl with a gold rim, arranged side by side with space between them | 3 |
| `egg_whole.png` | a whole white egg with shell, front view | 4 |
| `egg_cracked.png` | a white egg with a large crack on the shell and tiny steam puffs coming out | 4 |
| `box_sealed.png` | a clear plastic food container with a tightly closed lid, food visible inside | 5 |
| `box_popped.png` | a clear plastic food container with its lid popping open upward, food splashing out, tiny steam puffs | 5 |
| `box_warped.png` | a melted, warped, crooked plastic food container, slightly sagging, soft pastel color | 6 |
| `bowl_ceramic.png` | a white ceramic bowl covered loosely with a small plate on top, small steam puffs rising | 7 |
| `rice_bowl.png` | a small bowl of cold white rice, no steam | 2 |

**Mẹo tiết kiệm lượt:** gộp nhiều đạo cụ vào một ảnh bảng (prop sheet):
```
A cute flat 2D prop sheet with these separate items arranged in a grid with wide spacing, each item fully separated: [LIỆT KÊ 3-4 ĐẠO CỤ]. Thick dark-brown outline, soft pastel colors, plain solid white background, no text, no watermark.
```
Rồi cắt từng món khi tách nền.

## D. Cảnh ghép sẵn (tuỳ chọn, thử nhanh nếu muốn xem cảnh hoàn chỉnh)

Cảnh 1 (Dưa ngạc nhiên cạnh lò) – tải kèm `dua_chef.png` → `assets/scenes/scene_01.png`
```
Vertical 9:16 illustration. Same cat, same style, wearing a white chef hat and white chef coat, surprised with both paws on cheeks, standing next to a cute retro microwave oven on a wooden kitchen counter. Setting: soft cream kitchen wall, one counter, one microwave. Soft pastel flat background. Leave empty space at the top and the bottom for captions. No text, no watermark.
```

## E. Tự vẽ SVG, không cần AI
Dấu ✗ đỏ, dấu ✓ xanh, tia lửa, hiệu ứng "bùm", dấu "!" bật lên, hơi nước. Làm khi dựng; mình có thể vẽ sẵn SVG nếu bạn cần.

## Checklist ảnh
- [x] `dua_chef.png` (đã có, đã tách nền)
- [x] A1 `dua_chef_surprised.png`
- [ ] A2 `dua_chef_holdbowl.png`
- [ ] A3 `dua_chef_checkbox.png`
- [ ] A4 `dua_chef_ceramic.png`
- [ ] B1 `bg_bep.png`
- [ ] C: microwave_closed, microwave_open, foil_spoon, egg_whole, egg_cracked, box_sealed, box_popped, box_warped, bowl_ceramic, rice_bowl
- [ ] E: SVG ✗, ✓, tia lửa, bùm
