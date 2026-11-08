---
name: am-thanh-phu-de-xuat-file
description: Xử lý giọng đọc, nhạc nền, SFX, phụ đề tiếng Việt và xuất file đúng chuẩn nền tảng cho video 2D. Dùng khi cần tạo voice AI, canh phụ đề, cân âm lượng, hoặc render (CapCut/DaVinci/FFmpeg/Remotion).
---

# Âm thanh, phụ đề & xuất file

## 1. Giọng đọc (voice)
- Công cụ gợi ý: ElevenLabs, các TTS tiếng Việt (FPT.AI, Vbee, CapCut TTS). Hỏi người dùng đang dùng gì.
- Tách kịch bản thành từng câu/cảnh để tạo audio riêng → dễ canh với hình. Đặt tên `01_hook.mp3`, `02_van-de.mp3`…
- Tiếng Việt: thêm dấu câu đúng để ngắt nghỉ; viết số/viết tắt thành chữ khi đọc sai (vd "50%" → "năm mươi phần trăm"); kiểm tra từ mượn tiếng Anh.
- Dùng đúng một giọng cho cả series.

## 2. Nhạc nền & SFX
- Chỉ dùng nhạc có bản quyền rõ ràng (thư viện của CapCut/YouTube Audio Library/nhạc đã mua). Nhắc người dùng kiểm tra giấy phép thương mại.
- Nhạc nền nhẹ, không lời; hạ **-20 đến -25 dB** dưới giọng (ducking khi có voice).
- SFX tại điểm nhấn: whoosh chuyển cảnh, pop khi vật xuất hiện, "ting" khi ra kết quả. Tiết chế.

## 3. Phụ đề tiếng Việt
- Tạo từ chính kịch bản (chính xác hơn auto-caption); canh theo audio. Xuất `.srt` khi cần.
- Mỗi dòng ≤ 2 dòng, ≤ ~35 ký tự/dòng với video dọc; hiện theo cụm ý, không cắt giữa từ ghép.
- Font có hỗ trợ dấu tiếng Việt (Be Vietnam Pro, Montserrat, Roboto), chữ trắng viền/đổ bóng, nhấn màu từ khoá.
- Đặt trong vùng an toàn: tránh ~20% dưới và ~10% trên (UI nền tảng).

## 3b. Facebook Reels (nền tảng chính)
- Dọc 9:16, 1080x1920, 30fps, MP4 H.264 + AAC; độ dài lý tưởng 15-45s (tối đa theo quy định hiện hành của Facebook, nên kiểm tra).
- Hook trong 1-2s đầu, có chữ lớn trên màn hình vì nhiều người xem tắt tiếng.
- Phụ đề bắt buộc; đặt ở vùng giữa-dưới nhưng chừa ~25% đáy cho nút/mô tả của Reels.
- Giọng ElevenLabs: chọn model đa ngôn ngữ, đặt `stability` trung bình để giọng tự nhiên, xuất từng câu. Hoặc CapCut TTS cho nhanh.
- Nhạc nền lấy từ Suno (xem skill `nhac-nen-suno`), kiểm tra bản quyền dùng thương mại.

## 4. Xuất file
| Nền tảng | Tỉ lệ | Độ phân giải | FPS | Ghi chú |
|---|---|---|---|---|
| TikTok/Reels/Shorts | 9:16 | 1080x1920 | 30 | H.264, MP4 |
| YouTube | 16:9 | 1920x1080 | 30 | H.264/AAC, 12-16 Mbps |

- Âm lượng tổng ≈ **-14 LUFS**, đỉnh ≤ -1 dBTP.
- FFmpeg tham khảo:
```
ffmpeg -i in.mp4 -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart out.mp4
ffmpeg -i in.mp4 -af loudnorm=I=-14:TP=-1:LRA=11 -c:v copy out_norm.mp4
```
- Burn phụ đề: `-vf "subtitles=sub.srt:force_style='FontName=Be Vietnam Pro,FontSize=18,Outline=2'"`.

## 5. Checklist trước khi đăng
- [ ] Hook trong 3s đầu · [ ] Voice rõ, khớp hình · [ ] Phụ đề đúng chính tả
- [ ] Nhạc/ảnh/font có bản quyền hợp lệ · [ ] Mẹo đã kiểm chứng · [ ] Thumbnail & tiêu đề
