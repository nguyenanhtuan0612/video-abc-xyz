# Dựng clip bằng Remotion

Cần Node.js 18+ (đã có). Chạy trong thư mục `video/`:

```bash
npm install
npm run studio   # mở trình xem trước, kéo thanh thời gian, sửa code là thấy ngay
npm run render   # xuất out/clip05.mp4 (1080x1920, 30fps)
```

- Ảnh lấy từ `../assets/` (cờ `--public-dir=../assets`), nên trong code chỉ cần ghi `props/foil.png`, `ui/ui_x.png`...
- Chỉnh nội dung/toạ độ/thời gian từng cảnh trong `src/config.ts`. Bố cục và animation nằm trong `src/Clip05.tsx`.
- Có voice/nhạc: đặt file vào `assets/audio/`, rồi điền tên file vào `VOICE_FILE`, `MUSIC_FILE` ở `src/config.ts`.
