---
name: storyboard-prompt-anh
description: Chuyển kịch bản thành storyboard và prompt tạo ảnh AI 2D nhất quán nhân vật/phong cách (Midjourney, Flux, Imagen, v.v.). Dùng khi cần chia cảnh, tạo character sheet, hoặc viết prompt ảnh cho từng cảnh video hoạt hình.
---

# Storyboard & prompt ảnh 2D

Đầu vào: kịch bản (từ `viet-kich-ban-tip` hoặc do người dùng đưa).

## Bước 1 — Khoá "Style Bible" (làm một lần cho cả series)
Hỏi/đề xuất rồi ghi lại thành khối cố định, **dán nguyên văn vào mọi prompt**:
- **STYLE**: ví dụ "flat 2D vector illustration, clean thick outlines, soft pastel palette, minimal shading, subtle paper texture"
- **PALETTE**: 4-6 mã màu hex chủ đạo
- **CHARACTER**: mô tả cố định từng nhân vật (tuổi, tóc, trang phục, màu, phụ kiện đặc trưng, tỉ lệ cơ thể)
- **BACKGROUND RULE**: ví dụ "simple background, 2-3 props only, plenty of empty space"
- **NEGATIVE**: "3D, photorealistic, gradients heavy, text, watermark, extra fingers"

## Bước 2 — Character sheet
Prompt tạo 1 ảnh: nhân vật chính diện/nghiêng/lưng + 3-4 biểu cảm, nền trơn. Dùng ảnh này làm tham chiếu (`--cref`/image reference/ảnh tham chiếu của công cụ) cho mọi cảnh sau.

## Bước 3 — Storyboard theo cảnh
Mỗi cảnh một dòng:

| # | Khung hình (cận/trung/toàn) | Hành động | Biểu cảm | Prompt ảnh (Style Bible + cảnh) | Tỉ lệ |
|---|---|---|---|---|---|

## Quy tắc
- Tỉ lệ khung: 9:16 cho Shorts/Reels/TikTok, 16:9 cho YouTube. Chừa **vùng an toàn** phía dưới ~20% và trên ~10% cho phụ đề/UI nền tảng.
- Mỗi ảnh chỉ một ý chính; tránh đông nhân vật. Đạo cụ quan trọng của mẹo phải to, rõ.
- Nếu sẽ làm animation: yêu cầu tách lớp (nhân vật riêng, nền riêng) hoặc nền trơn để dễ cắt/ghép.
- Viết prompt bằng tiếng Anh (công cụ ảnh hiểu tốt hơn), phần giải thích cho người dùng bằng tiếng Việt.
- Chữ trong ảnh: không nhờ AI vẽ chữ; thêm chữ ở bước dựng (CapCut/Remotion).

## Công cụ ảnh của dự án: Gemini (Nano Banana)
Mọi prompt ảnh viết theo mẫu trong `assets/gemini-prompts.md`: một cuộc trò chuyện duy nhất, luôn dán "Style khoá", tham chiếu `assets/characters/bong_sheet.png`, nền trơn để xoá nền ở CapCut, cảnh 9:16 có chừa chỗ cho phụ đề. Bản SVG trong `assets/characters/cat/` chỉ là phương án dự phòng.

## Thư viện ảnh tái sử dụng (Facebook Reel 9:16, 2D đơn giản đáng yêu)
Lưu tại `assets/` trong thư mục dự án:
```
assets/
  style-bible.md        # STYLE, PALETTE, mô tả nhân vật
  characters/           # mascot_<biểu cảm>.svg
  props/                # đạo cụ dùng lại: chai, cốc, khăn, áo...
  backgrounds/          # bg_<nơi>.svg (phòng bếp, phòng khách, nhà tắm...)
  ui/                   # mũi tên, vòng tròn, dấu ✓/✗, khung trước/sau
  audio/                # voice, bgm, sfx
```
- Tự vẽ ảnh bằng **SVG** (nhẹ, sắc nét, tách lớp, CapCut/DaVinci/Remotion đều dùng được; xuất PNG nền trong suốt khi cần). Hình khối đơn giản: hình tròn/bo góc, viền dày đều, 4-6 màu pastel, mắt chấm tròn, má hồng.
- Nhân vật làm sẵn các biểu cảm: neutral, vui, ngạc nhiên, bối rối, đắc ý. Đặt tên nhất quán.
- Trước khi tạo ảnh mới, kiểm tra `assets/` xem có tái dùng được không; cảnh mới ưu tiên ghép nhân vật + đạo cụ + nền có sẵn.
- Khung 1080x1920; giữ vùng an toàn: trống ~15% trên, ~25% dưới (UI Facebook Reels + phụ đề).

Xong thì gợi ý sang `prompt-animation-chuyen-dong`.
