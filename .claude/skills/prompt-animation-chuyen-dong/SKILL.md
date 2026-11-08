---
name: prompt-animation-chuyen-dong
description: Lên kế hoạch chuyển động cho từng cảnh 2D - prompt image-to-video (Runway, Kling, Veo...), hoặc animation bằng code (Remotion, FFmpeg) và camera move trong CapCut/DaVinci. Dùng khi đã có ảnh cảnh và cần làm cho chúng chuyển động.
---

# Animation & chuyển động cho video 2D

Chọn hướng theo mục tiêu/ngân sách (hỏi nếu chưa rõ):

## A. AI image-to-video (nhanh, tốn credit)
Prompt mỗi cảnh theo mẫu, bằng tiếng Anh:
`[chủ thể + hành động nhỏ], [camera], [tốc độ], flat 2D animation style, keep character design and colors unchanged, no morphing, static background`
- Chỉ 1 hành động chính / clip 3-5s (vẫy tay, chớp mắt, đổ nước, gật đầu).
- Camera đơn giản: `slow push-in`, `slow pan left`, `static`. Tránh xoay 3D — làm hỏng phong cách 2D phẳng.
- Thêm negative: "morphing, extra limbs, style change, 3D, realistic".
- Tạo 2-3 bản, chọn bản giữ nhân vật tốt nhất. Cảnh nhân vật nói nhiều: dùng ảnh tĩnh + chuyển động nhẹ thay vì ép AI.

## B. Animation "cắt giấy" (rẻ, ổn định, phong cách rõ)
Tách lớp (nhân vật/tay/đạo cụ/nền) rồi di chuyển bằng keyframe trong CapCut/DaVinci: scale, position, rotation nhẹ, ease-in-out. Thêm bounce nhỏ khi vật xuất hiện, "wiggle" 1-2px cho cảm giác sống.

## C. Code (Remotion / FFmpeg)
- Remotion: mỗi cảnh một `<Sequence>`, dùng `spring()`/`interpolate()` cho pop-in, trượt, zoom; chữ và icon dựng bằng code để đổi nội dung hàng loạt.
- FFmpeg: `zoompan` cho Ken Burns, `xfade` cho chuyển cảnh, ghép cảnh hàng loạt.
Hỏi người dùng có muốn tôi viết sẵn template Remotion/script FFmpeg không.

## Nhịp & chuyển cảnh
- Mỗi cảnh 2-4s cho video ngắn; đổi nhịp mỗi ~3s để giữ người xem.
- Chuyển cảnh: cắt thẳng là chính; dùng whoosh/slide/zoom cho bước mới của mẹo. Không lạm dụng hiệu ứng.
- Nhấn mạnh: zoom nhanh vào đạo cụ, hiện mũi tên/vòng tròn, đóng khung "TRƯỚC / SAU".

## Đầu ra
Bảng theo cảnh: `# | Phương pháp (A/B/C) | Prompt hoặc keyframe | Thời lượng | Camera | Chuyển sang cảnh sau`.
Kèm danh sách credit/thời gian ước tính nếu dùng AI.
