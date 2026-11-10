# Clip 5 – Lò vi sóng: 4 thứ tuyệt đối không bỏ vào

Khung 1080x1920 (Reel 9:16), dài ~40-45s. Nhân vật: mèo Dưa đội mũ đầu bếp (theo `assets/style-bible.md`).

> Mọi ý trong kịch bản đánh dấu `[CẦN KIỂM CHỨNG]` phải đối chiếu với hướng dẫn nhà sản xuất hoặc nguồn an toàn thực phẩm trước khi đọc voice.

## 1. Kịch bản

| # | Giây | Hình | Voice | Chữ trên màn hình / SFX |
|---|---|---|---|---|
| 1 | 0-3 | Dưa (chef) ngạc nhiên, đứng cạnh lò vi sóng, dấu "!" bật lên | "Đừng bỏ 4 thứ này vào lò vi sóng!" | Chữ to: "4 THỨ CẤM BỎ LÒ VI SÓNG" · SFX: ting cảnh báo |
| 2 | 3-7 | Dưa cầm bát cơm nguội, mắt tròn hứng khởi, lò bên cạnh | "Hâm đồ cho nhanh, nhưng bỏ nhầm là nổ lò đấy." | SFX: tiếng "ting" lò |
| 3 | 7-14 | Cận: giấy bạc và cái thìa cạnh lò, tia lửa nhỏ, dấu ✗ | "Một: đồ kim loại. Giấy bạc, thìa, hộp có viền vàng. Sẽ phát tia lửa." | Chữ: "1. KIM LOẠI" · SFX: bzzt, ✗ stamp |
| 4 | 14-21 | Quả trứng nguyên vỏ trong lò, vết nứt, dấu ✗ | "Hai: trứng nguyên vỏ. Hơi nước dồn lại, nổ tung." | Chữ: "2. TRỨNG NGUYÊN VỎ" · SFX: pop |
| 5 | 21-28 | Hộp/chai đậy kín nắp, nắp bật tung, dấu ✗ | "Ba: hộp, chai đậy kín. Hơi nóng không thoát được, bật nắp văng ra." `[CẦN KIỂM CHỨNG]` | Chữ: "3. ĐẬY KÍN NẮP" · SFX: pop |
| 6 | 28-35 | Hộp nhựa méo biến dạng, Dưa soi đáy hộp tìm ký hiệu | "Bốn: hộp nhựa không ghi dùng được cho lò vi sóng. Nhựa có thể chảy, biến dạng." `[CẦN KIỂM CHỨNG]` | Chữ: "4. NHỰA KHÔNG CÓ KÝ HIỆU" · SFX: ✗ stamp |
| 7 | 35-40 | Dưa cười, bê bát sứ đậy hờ đĩa, dấu ✓ | "Cứ dùng bát sứ, thủy tinh chịu nhiệt, đậy hờ là yên tâm." | Chữ: "DÙNG BÁT SỨ / THỦY TINH" · SFX: ding |
| 8 | 40-43 | Dưa vẫy tay, hai tay giơ như "lưu lại" | "Lưu lại kẻo quên nhé!" | Chữ: "LƯU LẠI" |

**Voice ước tính:** ~100 từ ≈ 30-35s đọc, vừa đủ cho 43s kèm khoảng nghỉ giữa các cảnh.

**Tiêu đề đề xuất**
1. 4 thứ tuyệt đối không bỏ vào lò vi sóng
2. Lò vi sóng nổ chỉ vì thói quen này
3. Chị em hâm đồ ăn nhớ kỹ 4 điều này

**Hashtag:** #meovat #lovisong #giadung #mevat #bepnha

## 2. Danh sách ảnh cần có

Ưu tiên tái dùng từ `assets/` trước.

| Loại | Ảnh | Trạng thái | Dùng ở cảnh |
|---|---|---|---|
| Nhân vật | Dưa chef – ngạc nhiên | Có SVG `cat_surprised_chef.svg` | 1, 2 |
| Nhân vật | Dưa chef – vui, vẫy tay | Có SVG `cat_happy_chef_wave.svg` | 7, 8 |
| Nhân vật | Dưa chef – cầm bát, soi đáy hộp | **Cần tạo** (Gemini) | 2, 6 |
| Nền | Bếp đơn giản (kệ + tường kem) | **Cần tạo** | 1-8 |
| Đạo cụ | Lò vi sóng (đóng, mở) | **Cần tạo** | 1-8 |
| Đạo cụ | Giấy bạc, thìa, hộp viền vàng | **Cần tạo** | 3 |
| Đạo cụ | Trứng nguyên, trứng nứt | **Cần tạo** | 4 |
| Đạo cụ | Hộp/chai đậy kín, nắp bật | **Cần tạo** | 5 |
| Đạo cụ | Hộp nhựa méo | **Cần tạo** | 6 |
| Đạo cụ | Bát sứ + đĩa đậy hờ | **Cần tạo** | 7 |
| UI | Dấu ✗, dấu ✓, tia lửa, hiệu ứng "bùm" | **Cần tạo** (SVG tự vẽ) | 3-7 |

## 3. Quy trình làm (theo thứ tự)

1. **Khoá nhân vật.** Kiểm tra `assets/characters/`. Chưa có `dua_sheet.png` (skill tham chiếu file này), nên dùng `base_mascot.png` làm ảnh tham chiếu, hoặc tạo lại character sheet theo Bước 1 trong `assets/gemini-prompts.md`.
2. **Tạo nền bếp + lò vi sóng** (1 lần, dùng lại cho cả clip và series).
3. **Tạo đạo cụ** từng món trên nền trơn, tách nền bằng `assets/remove_bg.py`.
4. **Tạo UI** (✗, ✓, tia lửa) bằng SVG tự vẽ, không cần AI.
5. **Ghép cảnh** theo bảng trên: nền + Dưa + đạo cụ + UI. Chừa trống ~15% trên, ~25% dưới cho chữ.
6. **Làm voice**: dùng skill `am-thanh-phu-de-xuat-file`, giọng nữ ấm, tốc độ vừa.
7. **Animation đơn giản**: pop-in đạo cụ (scale 0 → 1.1 → 1), lò rung nhẹ ở cảnh 3-5, dấu ✗ đóng dấu, Dưa nhún nhẹ khi nói. Làm bằng CapCut hoặc Remotion.
8. **Nhạc nền**: nhẹ, vui, không lời (skill `nhac-nen-suno`), hạ nhỏ hơn voice.
9. **Dựng + xuất**: ghép voice, SFX, chữ; phụ đề theo voice; xuất 1080x1920 MP4.

## 4. Prompt Gemini mẫu (dán Style khoá từ `assets/gemini-prompts.md`)

Cảnh 1 (nhân vật + lò):
```
Vertical 9:16 illustration. Same cat, same style, wearing a white chef hat, surprised with paws on cheeks, standing next to a cute microwave oven on a kitchen counter. Setting: simple cream kitchen wall, one counter, microwave. Soft pastel flat background. Leave empty space at the top and the bottom for captions. No text.
```

Đạo cụ (làm riêng, nền trắng trơn):
```
A cute flat 2D illustration of [ĐẠO CỤ: a roll of aluminum foil and a metal spoon / a whole egg with a small crack / a sealed plastic food container with a lid popping open / a warped melted plastic container / a white ceramic bowl covered loosely with a plate]. Thick dark-brown outline, soft pastel colors, plain solid white background, no text, no watermark.
```

Lò vi sóng (đóng):
```
A cute flat 2D illustration of a retro-style microwave oven, front view, door closed, small dial, thick dark-brown outline, soft pastel blue-grey body, cream window. Plain solid white background, no text, no watermark.
```

## 5. Việc cần xác nhận trước khi làm voice

- Đối chiếu 4 mục với hướng dẫn nhà sản xuất lò vi sóng và nguồn an toàn thực phẩm (đặc biệt mục 3 và 4).
- Chốt giọng voice (nữ/nam, tốc độ) và có ghi tên kênh ở CTA không.
