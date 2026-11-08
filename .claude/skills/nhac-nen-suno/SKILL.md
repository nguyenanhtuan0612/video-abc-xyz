---
name: nhac-nen-suno
description: Viết prompt Suno để tạo nhạc nền không lời cho video Reel hoạt hình 2D dễ thương. Dùng khi cần nhạc nền cho clip, theo tâm trạng, độ dài và nhịp của kịch bản.
---

# Prompt nhạc nền Suno cho Reel

## Thông tin cần (suy ra từ kịch bản, hỏi nếu thiếu)
Tâm trạng, độ dài video, các điểm nhấn (hook, bước mẹo, twist), nhạc có lặp được không.

## Mẫu prompt (tiếng Anh, dán vào ô Style; bật Instrumental)
`[thể loại], [tâm trạng], [nhạc cụ 2-3 loại], [BPM], instrumental, no vocals, loopable, clean mix, low dynamic range, background music for short video`

## Các preset
- **Vui, dễ thương (mặc định)**: `cute playful ukulele pizzicato strings glockenspiel, upbeat, 110 BPM, light claps, warm and cheerful, instrumental, no vocals`
- **Nhẹ nhàng, tinh tế**: `lo-fi chill, soft piano, warm bass, gentle brush drums, 80 BPM, cozy, instrumental`
- **Hài hước, bất ngờ**: `quirky comedic pizzicato, bouncy marimba, 120 BPM, light sneaky bass, instrumental`
- **Sáng sủa, tích cực**: `bright acoustic guitar, whistling, soft percussion, 100 BPM, feel-good, instrumental`

## Mẹo sử dụng
- Reel ngắn: tạo bản 30-60s, intro ngắn (vào nhịp ngay trong 1-2s đầu), không drop lớn che giọng.
- Dùng cấu trúc trong Lyrics/Custom: `[Intro short] [Main groove] [Light break] [Outro]` để có điểm hạ nhẹ cho đoạn twist.
- Tránh: vocals, nhạc cụ dày tần giữa (cạnh tranh với giọng đọc), dynamic lớn.
- Tạo 2-4 bản, chọn bản có nhịp đều. Đặt tên `bgm_<mood>_<bpm>.mp3` và lưu `assets/audio/`.
- Giấy phép: kiểm tra gói Suno của bạn có cho phép dùng thương mại không (gói miễn phí thường không) trước khi đăng.
- Trong CapCut: hạ nhạc nền còn khoảng -20 đến -25 dB so với giọng; fade-out 1s cuối.

## Đầu ra
Cho người dùng: 2-3 prompt phù hợp video này (khác mood), kèm tiêu đề bài và lưu ý chỗ nào trong video khớp với phần nào của nhạc.
