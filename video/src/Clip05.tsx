import React from "react";
import {
  AbsoluteFill, Audio, Easing, Img, Sequence, interpolate, spring,
  staticFile, useCurrentFrame, useVideoConfig,
} from "remotion";
import {
  CARD, COLORS, HEIGHT, Item, MUSIC_FILE, MUSIC_VOLUME, SCENES, Scene, VOICE_FILE, WIDTH,
} from "./config";

const FONT = `"Baloo 2", "Nunito", "Be Vietnam Pro", "Segoe UI", "Helvetica Neue", Arial, "DejaVu Sans", sans-serif`;

const inRange = (r: [number, number][] | undefined, sec: number) =>
  !!r && r.some(([a, b]) => sec >= a && sec < b);

const ItemView: React.FC<{ it: Item }> = ({ it }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const d = Math.round((it.delay ?? 0) * fps);
  const hide = it.hideAt === undefined ? Infinity : Math.round(it.hideAt * fps);
  if (frame < d || frame >= hide) return null;
  const t = frame - d;
  const anim = it.anim ?? "pop";
  const anchor = it.anchor ?? "bottom";

  let scale = 1, opacity = 1, rot = it.rot ?? 0, dx = 0;
  let cx = it.x, cy = it.y, w = it.w;
  if (anim === "pop" || anim === "shake" || anim === "flicker") {
    scale = spring({ frame: t, fps, config: { damping: 9, stiffness: 140 } });
  }
  if (anim === "shake" && t < 30) dx = Math.sin(t * 1.8) * 10;
  if (anim === "flicker") opacity = t % 8 < 5 ? 1 : 0.35;
  if (anim === "stamp") {
    const s = spring({ frame: t, fps, config: { damping: 12, stiffness: 220 } });
    scale = interpolate(s, [0, 1], [2.6, 1]);
    opacity = interpolate(t, [0, 4], [0, 1], { extrapolateRight: "clamp" });
  }
  if (inRange(it.shake, frame / fps)) dx += Math.sin(frame * 2.2) * 8;

  // bay vào lò
  if (it.flyAt !== undefined && it.flyTo) {
    const f0 = Math.round(it.flyAt * fps);
    const dur = Math.max(1, Math.round((it.flyDur ?? 0.5) * fps));
    if (frame >= f0) {
      const p = (frame - f0) / dur;
      if (p >= 1) return null;
      const e = Easing.inOut(Easing.cubic)(p);
      cx = it.x + (it.flyTo.x - it.x) * e;
      cy = it.y + (it.flyTo.y - it.y) * e - 140 * Math.sin(Math.PI * e);
      w = it.w + (it.flyTo.w - it.w) * e;
    }
  }
  return (
    <Img
      src={staticFile(it.src)}
      style={{
        position: "absolute",
        left: cx - w / 2 + dx,
        top: cy,
        width: w,
        transform: `translateY(${anchor === "bottom" ? "-100%" : "-50%"}) scale(${scale}) rotate(${rot}deg)`,
        transformOrigin: anchor === "bottom" && anim !== "stamp" ? "50% 100%" : "50% 50%",
        opacity,
      }}
    />
  );
};

const Card: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 11, stiffness: 130 } });
  return (
    <div
      style={{
        position: "absolute", left: CARD.x - CARD.d / 2, top: CARD.y - CARD.d / 2,
        width: CARD.d, height: CARD.d, borderRadius: "50%", background: COLORS.cream,
        border: `12px solid ${COLORS.brown}`, boxShadow: `0 14px 0 ${COLORS.brown}`,
        transform: `scale(${s})`, boxSizing: "border-box",
      }}
    />
  );
};

const Dua: React.FC<{ sc: Scene }> = ({ sc }) => {
  if (!sc.dua) return null;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const w = sc.duaW ?? 520;
  const x = sc.duaX ?? 330;
  const enter = spring({ frame, fps, config: { damping: 11, stiffness: 120 } });
  const bob = Math.sin(frame / 7) * 6;
  return (
    <Img
      src={staticFile(sc.dua as string)}
      style={{
        position: "absolute",
        left: x - w / 2,
        top: 1300,
        width: w,
        transform: `translateY(calc(-100% + ${bob}px)) scale(${interpolate(enter, [0, 1], [0.8, 1])})`,
        transformOrigin: "50% 100%",
      }}
    />
  );
};

const Label: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 10, stiffness: 150 } });
  return (
    <div
      style={{
        position: "absolute", top: 330, left: 0, width: WIDTH,
        display: "flex", justifyContent: "center",
        transform: `scale(${s})`,
      }}
    >
      <div
        style={{
          background: COLORS.butter, color: COLORS.brown, border: `8px solid ${COLORS.brown}`,
          borderRadius: 48, padding: "18px 44px", fontFamily: FONT, fontWeight: 800,
          fontSize: 74, lineHeight: 1.1, textAlign: "center", maxWidth: 940, whiteSpace: "pre-line",
          boxShadow: `0 10px 0 ${COLORS.brown}`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

const Caption: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      position: "absolute", left: 0, width: WIDTH, bottom: 380,
      display: "flex", justifyContent: "center",
    }}
  >
    <div
      style={{
        background: "rgba(255,251,242,0.94)", color: COLORS.brown, border: `6px solid ${COLORS.brown}`,
        borderRadius: 36, padding: "16px 36px", fontFamily: FONT, fontWeight: 700,
        fontSize: 54, lineHeight: 1.2, textAlign: "center", maxWidth: 940,
      }}
    >
      {text}
    </div>
  </div>
);

const SceneView: React.FC<{ sc: Scene }> = ({ sc }) => {
  const frame = useCurrentFrame();
  const fade = interpolate(frame, [0, 5], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ opacity: fade }}>
      {sc.dim ? (
        <>
          <AbsoluteFill style={{ background: COLORS.cream }} />
          <AbsoluteFill style={{ background: "rgba(0,0,0,0.5)" }} />
          <Card />
        </>
      ) : null}
      {sc.items.filter((i) => i.src.includes("microwave")).map((it, k) => <ItemView key={`m${k}`} it={it} />)}
      <Dua sc={sc} />
      {sc.items.filter((i) => !i.src.includes("microwave")).map((it, k) => <ItemView key={k} it={it} />)}
      {sc.label ? <Label text={sc.label} /> : null}
      <Caption text={sc.caption} />
    </AbsoluteFill>
  );
};

export const Clip05: React.FC = () => {
  const { fps } = useVideoConfig();
  let start = 0;
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <Img
        src={staticFile("backgrounds/bg_bep.png")}
        style={{ position: "absolute", width: WIDTH, height: HEIGHT, objectFit: "cover" }}
      />
      {SCENES.map((sc, i) => {
        const dur = Math.round(sc.seconds * fps);
        const from = start;
        start += dur;
        return (
          <Sequence key={i} from={from} durationInFrames={dur}>
            <SceneView sc={sc} />
          </Sequence>
        );
      })}
      {VOICE_FILE ? <Audio src={staticFile(VOICE_FILE)} /> : null}
      {MUSIC_FILE ? <Audio src={staticFile(MUSIC_FILE)} volume={MUSIC_VOLUME} loop /> : null}
    </AbsoluteFill>
  );
};
