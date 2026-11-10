// ===== Cấu hình clip 5: Lò vi sóng - 4 thứ cấm bỏ vào =====
// Mọi toạ độ tính theo khung 1080x1920. x = tâm ngang, y = đáy ảnh (tính từ trên xuống).
// Vùng an toàn: chừa ~15% trên (y < 290) và ~25% dưới (y > 1440) cho UI nền tảng.

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

// Đặt tên file vào đây khi đã có voice/nhạc (file nằm trong assets/audio/). null = chưa có.
export const VOICE_FILE: string | null = null; // ví dụ "audio/clip05_voice.mp3"
export const MUSIC_FILE: string | null = null; // ví dụ "audio/clip05_music.mp3"
export const MUSIC_VOLUME = 0.15;

export const COLORS = {
  brown: "#5A4032",
  butter: "#FFD966",
  cream: "#FFF4E0",
  pink: "#FFB8A8",
};

export type Anim = "pop" | "stamp" | "shake" | "flicker" | "none";

export type Item = {
  src: string; // đường dẫn trong assets/
  x: number;
  y: number;
  w: number;
  delay?: number; // giây (tính từ đầu cảnh)
  hideAt?: number; // giây, ẩn đi (dùng khi đổi ảnh: trước/sau)
  anim?: Anim;
  rot?: number;
};

export type Scene = {
  seconds: number;
  label?: string; // chữ to phía trên
  caption: string; // phụ đề = lời voice
  dua: string; // ảnh Dưa
  duaX?: number;
  duaW?: number;
  items: Item[];
};

const MW_X = 760;
const MW_Y = 1300;
const MW_W = 560;
const microwave = (open = false): Item => ({
  src: open ? "props/microwave_open.png" : "props/microwave_closed.png",
  x: MW_X, y: MW_Y, w: open ? 640 : MW_W, anim: "none",
});

export const SCENES: Scene[] = [
  {
    seconds: 3,
    label: "4 THỨ CẤM BỎ\nLÒ VI SÓNG",
    caption: "Đừng bỏ 4 thứ này vào lò vi sóng!",
    dua: "characters/dua_chef_surprised.png",
    items: [
      microwave(),
      { src: "ui/ui_alert.png", x: 330, y: 600, w: 230, delay: 0.3, anim: "pop" },
    ],
  },
  {
    seconds: 4,
    caption: "Hâm đồ cho nhanh, nhưng bỏ nhầm là nổ lò đấy.",
    dua: "characters/dua_chef_holdbowl.png",
    items: [microwave()],
  },
  {
    seconds: 7,
    label: "1. KIM LOẠI",
    caption: "Một: đồ kim loại. Giấy bạc, thìa, hộp có viền vàng. Sẽ phát tia lửa.",
    dua: "characters/dua_chef_surprised.png",
    duaX: 260,
    duaW: 440,
    items: [
      microwave(),
      { src: "props/foil.png", x: 520, y: 1345, w: 250, delay: 0.6, anim: "pop" },
      { src: "props/spoon.png", x: 740, y: 1345, w: 170, delay: 1.4, anim: "pop" },
      { src: "props/bowl_goldrim.png", x: 930, y: 1345, w: 210, delay: 2.2, anim: "pop" },
      { src: "ui/ui_sparks.png", x: 780, y: 1060, w: 300, delay: 3.2, anim: "flicker" },
      { src: "ui/ui_x.png", x: 860, y: 1010, w: 250, delay: 4.6, anim: "stamp", rot: -8 },
    ],
  },
  {
    seconds: 7,
    label: "2. TRỨNG NGUYÊN VỎ",
    caption: "Hai: trứng nguyên vỏ. Hơi nước dồn lại, nổ tung.",
    dua: "characters/dua_chef_surprised.png",
    duaX: 260,
    duaW: 440,
    items: [
      microwave(),
      { src: "props/egg_whole.png", x: 760, y: 1345, w: 150, delay: 0.6, hideAt: 3.6, anim: "pop" },
      { src: "props/egg_burst.png", x: 760, y: 1400, w: 480, delay: 3.6, anim: "shake" },
      { src: "ui/ui_boom.png", x: 680, y: 1060, w: 320, delay: 3.6, anim: "pop" },
      { src: "ui/ui_x.png", x: 880, y: 1010, w: 250, delay: 4.8, anim: "stamp", rot: 8 },
    ],
  },
  {
    seconds: 7,
    label: "3. ĐẬY KÍN NẮP",
    caption: "Ba: hộp, chai đậy kín. Hơi nóng không thoát được, bật nắp văng ra.",
    dua: "characters/dua_chef_surprised.png",
    duaX: 260,
    duaW: 440,
    items: [
      microwave(),
      { src: "props/box_sealed.png", x: 760, y: 1345, w: 340, delay: 0.6, hideAt: 3.6, anim: "pop" },
      { src: "props/box_popped.png", x: 780, y: 1350, w: 430, delay: 3.6, anim: "shake" },
      { src: "ui/ui_steam.png", x: 820, y: 1080, w: 230, delay: 3.6, anim: "pop" },
      { src: "ui/ui_x.png", x: 880, y: 1010, w: 250, delay: 4.8, anim: "stamp", rot: -8 },
    ],
  },
  {
    seconds: 7,
    label: "4. NHỰA KHÔNG\nCÓ KÝ HIỆU",
    caption: "Bốn: hộp nhựa không ghi dùng được cho lò vi sóng. Nhựa có thể chảy, biến dạng.",
    dua: "characters/dua_chef_checkbox.png",
    duaX: 280,
    duaW: 500,
    items: [
      microwave(),
      { src: "props/box_melted.png", x: 790, y: 1350, w: 440, delay: 1.0, anim: "pop" },
      { src: "ui/ui_x.png", x: 880, y: 1010, w: 250, delay: 4.0, anim: "stamp", rot: 8 },
    ],
  },
  {
    seconds: 5,
    label: "DÙNG BÁT SỨ /\nTHỦY TINH",
    caption: "Cứ dùng bát sứ, thủy tinh chịu nhiệt, đậy hờ là yên tâm.",
    dua: "characters/dua_chef_ceramic.png",
    duaX: 300,
    duaW: 500,
    items: [
      microwave(true),
      { src: "ui/ui_check.png", x: 800, y: 1100, w: 300, delay: 1.0, anim: "stamp", rot: 6 },
      { src: "ui/ui_steam.png", x: 940, y: 980, w: 190, delay: 1.6, anim: "pop" },
    ],
  },
  {
    seconds: 3,
    label: "LƯU LẠI KẺO QUÊN",
    caption: "Lưu lại kẻo quên nhé!",
    dua: "characters/dua_chef.png",
    items: [
      microwave(),
      { src: "ui/ui_heart.png", x: 800, y: 900, w: 170, delay: 0.4, anim: "pop" },
      { src: "ui/ui_star.png", x: 930, y: 1010, w: 130, delay: 0.7, anim: "pop" },
    ],
  },
];

export const totalFrames = () =>
  SCENES.reduce((s, sc) => s + Math.round(sc.seconds * FPS), 0);
