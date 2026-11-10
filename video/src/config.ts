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
  y: number; // đáy ảnh (anchor "bottom") hoặc tâm ảnh (anchor "center")
  w: number;
  anchor?: "bottom" | "center";
  flyAt?: number; // giây: bắt đầu bay vào lò
  flyDur?: number; // giây: thời gian bay
  flyTo?: { x: number; y: number; w: number }; // đích (tâm), thường là cửa kính lò
  shake?: [number, number][]; // các khoảng giây để rung (dùng cho lò)
  delay?: number; // giây (tính từ đầu cảnh)
  hideAt?: number; // giây, ẩn đi (dùng khi đổi ảnh: trước/sau)
  anim?: Anim;
  rot?: number;
};

export type Scene = {
  seconds: number;
  label?: string; // chữ to phía trên
  caption: string; // phụ đề = lời voice
  dim?: boolean; // true: nền tường phủ tối + khung đạo cụ ở giữa, không có Dưa
  dua?: string; // ảnh Dưa (chỉ cảnh đầu)
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

// ----- Cảnh "nền tối": khung đạo cụ ở giữa, lò ở dưới -----
export const CARD = { x: 540, y: 790, d: 460 };
const WIN = { x: 504, y: 1185, w: 90 }; // cửa kính lò (đích bay vào)
const WIN_OPEN = { x: 573, y: 1180, w: 110 }; // lòng lò khi mở cửa
const microwaveDim = (shake?: [number, number][], open = false): Item => ({
  src: open ? "props/microwave_open.png" : "props/microwave_closed.png",
  x: 540, y: 1290, w: open ? 420 : 360, anim: "none", shake,
});
// đạo cụ hiện to giữa khung
const hero = (src: string, w: number, delay: number, extra: Partial<Item> = {}): Item => ({
  src, x: CARD.x, y: CARD.y, w, anchor: "center", delay, anim: "pop", ...extra,
});
// dấu ✗/✓ ở góc khung (không che đạo cụ)
const corner = (src: string, delay: number, rot: number): Item => ({
  src, x: 700, y: 640, w: 180, anchor: "center", delay, anim: "stamp", rot,
});
// hiệu ứng bên trong cửa kính lò
const inWindow = (src: string, w: number, delay: number, hideAt: number, anim: "pop" | "flicker" = "flicker"): Item => ({
  src, x: WIN.x, y: WIN.y, w, anchor: "center", delay, hideAt, anim,
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
    dim: true,
    label: "1. KIM LOẠI",
    caption: "1: đồ kim loại. Giấy bạc, thìa, bát có mạ vàng. Sẽ phát tia lửa.",
    dua: "characters/dua_chef_surprised.png",
    duaX: 190,
    duaW: 300,
    items: [
      microwaveDim([[2.0, 2.8], [3.6, 4.4], [5.2, 5.9]]),
      hero("props/foil.png", 300, 0.4, { flyAt: 1.5, flyDur: 0.5, flyTo: WIN }),
      hero("props/spoon.png", 240, 2.0, { flyAt: 3.1, flyDur: 0.5, flyTo: WIN }),
      hero("props/bowl_goldrim.png", 280, 3.6, { flyAt: 4.7, flyDur: 0.5, flyTo: WIN }),
      inWindow("ui/ui_sparks.png", 230, 2.0, 2.8),
      inWindow("ui/ui_sparks.png", 230, 3.6, 4.4),
      inWindow("ui/ui_sparks.png", 230, 5.2, 5.9),
      { src: "ui/ui_x.png", x: CARD.x, y: CARD.y, w: 320, anchor: "center", delay: 5.5, anim: "stamp", rot: -8 },
    ],
  },
  {
    seconds: 7,
    dim: true,
    label: "2. TRỨNG NGUYÊN VỎ",
    caption: "2: trứng nguyên vỏ. Hơi nước dồn lại, nổ tung.",
    items: [
      microwaveDim([[2.7, 3.6]]),
      hero("props/egg_whole.png", 200, 0.4, { flyAt: 2.2, flyDur: 0.5, flyTo: WIN }),
      inWindow("ui/ui_boom.png", 250, 2.7, 3.6, "pop"),
      hero("props/egg_burst.png", 400, 3.0, { anim: "shake" }),
      corner("ui/ui_x.png", 4.6, 8),
    ],
  },
  {
    seconds: 7,
    dim: true,
    label: "3. ĐẬY KÍN NẮP",
    caption: "3: hộp, chai đậy kín. Hơi nóng không thoát được, bật nắp văng ra.",
    items: [
      microwaveDim([[2.9, 3.8]]),
      hero("props/box_sealed.png", 330, 0.4, { flyAt: 2.4, flyDur: 0.5, flyTo: WIN }),
      inWindow("ui/ui_steam.png", 170, 2.9, 4.0, "pop"),
      hero("props/box_popped.png", 400, 3.2, { anim: "shake" }),
      corner("ui/ui_x.png", 4.8, -8),
    ],
  },
  {
    seconds: 7,
    dim: true,
    label: "4. NHỰA KHÔNG\nCÓ KÝ HIỆU",
    caption: "4: hộp nhựa không ghi dùng được cho lò vi sóng. Nhựa có thể chảy, biến dạng.",
    dua: "characters/dua_chef_checkbox.png",
    duaX: 190,
    duaW: 340,
    items: [
      microwaveDim(),
      hero("props/box_melted.png", 370, 0.5),
      corner("ui/ui_x.png", 3.2, 8),
    ],
  },
  {
    seconds: 5,
    dim: true,
    label: "DÙNG BÁT SỨ /\nTHỦY TINH",
    caption: "Cứ dùng bát sứ, thủy tinh chịu nhiệt, đậy hờ là yên tâm.",
    dua: "characters/dua_chef_ceramic.png",
    duaX: 190,
    duaW: 330,
    items: [
      microwaveDim(undefined, true),
      hero("props/bowl_ceramic.png", 340, 0.4, { flyAt: 1.8, flyDur: 0.5, flyTo: WIN_OPEN }),
      { src: "ui/ui_steam.png", x: 573, y: 1040, w: 150, anchor: "center", delay: 2.3, anim: "pop" },
      { src: "ui/ui_check.png", x: CARD.x, y: CARD.y, w: 340, anchor: "center", delay: 2.5, anim: "stamp", rot: 6 },
    ],
  },
  {
    seconds: 3,
    dim: true,
    label: "LƯU LẠI KẺO QUÊN",
    caption: "Lưu lại kẻo quên nhé!",
    dua: "characters/dua_chef.png",
    duaX: 190,
    duaW: 300,
    items: [
      hero("ui/ui_heart.png", 280, 0.3),
      { src: "ui/ui_star.png", x: 700, y: 640, w: 130, anchor: "center", delay: 0.6, anim: "pop" },
    ],
  },
];

export const totalFrames = () =>
  SCENES.reduce((s, sc) => s + Math.round(sc.seconds * FPS), 0);
