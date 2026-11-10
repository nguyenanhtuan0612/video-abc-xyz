"""Mèo mascot "Dưa" - phong cách mochi: thân bánh tròn, mắt chấm, miệng ω, má hồng, viền nâu dày, đổ bóng đào.
Mèo cam trắng, đủ đầu/thân/2 tay/2 chân/đuôi.  Chạy:  python build.py
Xuất: cat_<biểu cảm>_<trang phục>[_wave].svg (đứng/ngồi)  và  cat_<biểu cảm>_lie.svg (nằm sấp)
- Thêm trang phục: thêm vào OUTFITS (torso = áo trên thân, sleeve/pants = màu tay áo/quần, front = đồ phủ đầu/cổ).
- Thêm biểu cảm: thêm vào FACES (eyes + mouth).
"""
import pathlib

OUT = "#6B3A1E"
WHITE = "#FFFFFF"
PEACH = "#FFE3D6"
ORANGE = "#FFB866"
BLUSH = "#FFB3B3"
EAR = "#FFA8A0"
RED = "#E8505B"
SW = 7

BODY_PATH = "M180 520 a120 105 0 1 0 240 0 a120 105 0 1 0 -240 0 Z"

DEFS = ('<defs><clipPath id="hc"><ellipse cx="300" cy="270" rx="200" ry="148"/></clipPath>'
        '<clipPath id="bc"><path d="' + BODY_PATH + '"/></clipPath></defs>')

def limb(d, color, w_in=36):
    return (f'<path d="{d}" fill="none" stroke="{OUT}" stroke-width="{w_in + 2 * SW}"/>'
            f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{w_in}"/>')

def tail():
    return limb("M405 565 C480 580 525 525 508 455", ORANGE, 26)

def legs(color):
    return (limb("M255 590 L255 603", color, 34) + limb("M345 590 L345 603", color, 34) +
            f'<ellipse cx="245" cy="618" rx="50" ry="27" fill="{WHITE}"/><ellipse cx="355" cy="618" rx="50" ry="27" fill="{WHITE}"/>')

def arms(color, pose):
    left = limb("M215 445 C195 465 188 485 190 505", color, 36)
    if pose == "wave":
        right = limb("M385 445 C450 455 520 430 532 365", color, 36)
    else:
        right = limb("M385 445 C405 465 412 485 410 505", color, 36)
    return left + right

BODY = (f'<path d="{BODY_PATH}" fill="{PEACH}"/>'
        f'<g clip-path="url(#bc)"><ellipse cx="288" cy="512" rx="108" ry="94" fill="{WHITE}" stroke="none"/>'
        f'<path d="M180 470 q40 -20 70 -5 l-8 40 q-35 -12 -62 -35 Z" fill="{ORANGE}" stroke="none"/></g>'
        f'<path d="{BODY_PATH}" fill="none"/>')

HEAD = (f'<path d="M128 205 L108 112 L222 152 Z" fill="{WHITE}"/><path d="M138 178 L128 138 L180 158 Z" fill="{EAR}" stroke="none"/>'
        f'<path d="M472 205 L492 112 L378 152 Z" fill="{WHITE}"/><path d="M462 178 L472 138 L420 158 Z" fill="{EAR}" stroke="none"/>'
        f'<ellipse cx="300" cy="270" rx="200" ry="148" fill="{PEACH}"/>'
        f'<g clip-path="url(#hc)"><ellipse cx="285" cy="258" rx="192" ry="140" fill="{WHITE}" stroke="none"/>'
        f'<ellipse cx="215" cy="168" rx="125" ry="72" fill="{ORANGE}" stroke="none"/>'
        f'<ellipse cx="205" cy="160" rx="100" ry="52" fill="#FFC885" stroke="none"/></g>'
        f'<ellipse cx="300" cy="270" rx="200" ry="148" fill="none"/>'
        f'<ellipse cx="188" cy="328" rx="24" ry="15" fill="{BLUSH}" stroke="none"/><ellipse cx="412" cy="328" rx="24" ry="15" fill="{BLUSH}" stroke="none"/>')

def dots(r=12):
    return "".join(f'<circle cx="{x}" cy="300" r="{r}" fill="{OUT}" stroke="none"/><circle cx="{x-4}" cy="295" r="4" fill="#fff" stroke="none"/>'
                   for x in (232, 368))

FACES = {
    "neutral": (dots(), '<path d="M275 305 q12 18 25 0 q12 18 25 0" fill="none" stroke-width="6"/>'),
    "happy": (f'<path d="M212 304 q20 -26 40 0 M348 304 q20 -26 40 0" fill="none" stroke-width="8"/>',
              f'<path d="M272 306 Q300 350 328 306 Z" fill="{RED}" stroke-width="6"/>'),
    "surprised": (dots(15), f'<ellipse cx="300" cy="326" rx="11" ry="15" fill="{RED}" stroke-width="6"/>'),
}

OUTFITS = {
    "none": dict(torso="", sleeve=WHITE, pants=WHITE, front=""),
    "collar": dict(torso="", sleeve=WHITE, pants=WHITE, front=(
        f'<path d="M222 410 Q300 452 378 410 L384 434 Q300 478 216 434 Z" fill="#FF9FB5"/>'
        f'<path d="M300 474 c-18 -14 -18 -30 0 -22 c18 -8 18 8 0 22 Z" fill="{RED}" stroke-width="5"/>')),
    "chef": dict(
        torso=f'<path d="{BODY_PATH}" fill="#fff"/><path d="M300 420 v205" fill="none"/>'
              f'<circle cx="278" cy="480" r="8" fill="{OUT}" stroke="none"/><circle cx="278" cy="530" r="8" fill="{OUT}" stroke="none"/><circle cx="278" cy="578" r="8" fill="{OUT}" stroke="none"/>',
        sleeve="#fff", pants="#6B7A99",
        front='<path d="M238 128 h124 v30 q-62 12 -124 0 Z" fill="#fff"/>'
              '<circle cx="258" cy="102" r="36" fill="#fff"/><circle cx="342" cy="102" r="36" fill="#fff"/><circle cx="300" cy="80" r="42" fill="#fff"/>'
              '<path d="M238 128 h124 v30 q-62 12 -124 0 Z" fill="#fff"/>'),
    "hoodie": dict(
        torso='<ellipse cx="300" cy="425" rx="150" ry="34" fill="#7BB3E0"/>'
              f'<path d="{BODY_PATH}" fill="#8EC5F0"/><path d="M230 545 h140 l14 42 h-168 Z" fill="#7BB3E0"/>',
        sleeve="#8EC5F0", pants="#5E7FA8",
        front='<path d="M272 432 v52 M328 432 v52" fill="none" stroke="#fff" stroke-width="7"/>'),
    "reader": dict(torso="", sleeve=WHITE, pants=WHITE, front=(
        f'<path d="M224 412 Q300 454 376 412 L376 438 Q300 478 224 438 Z" fill="{RED}"/>'
        f'<path d="M335 452 l12 62 l-30 4 l-10 -52 Z" fill="{RED}"/>'
        '<circle cx="232" cy="300" r="40" fill="#fff" fill-opacity="0.25" stroke-width="5"/><circle cx="368" cy="300" r="40" fill="#fff" fill-opacity="0.25" stroke-width="5"/>'
        '<path d="M272 298 h56" fill="none" stroke-width="5"/>')),
}

def build(face, outfit, pose="idle"):
    eyes, mouth = FACES[face]
    o = OUTFITS[outfit]
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">{DEFS}'
            f'<g stroke="{OUT}" stroke-width="{SW}" stroke-linecap="round" stroke-linejoin="round">'
            f'<ellipse id="shadow" cx="300" cy="655" rx="200" ry="16" fill="#C9B6E0" stroke="none" opacity="0.5"/>'
            f'<g id="tail">{tail()}</g><g id="body">{BODY}</g><g id="outfit-torso">{o["torso"]}</g>'
            f'<g id="legs">{legs(o["pants"])}</g><g id="arms">{arms(o["sleeve"], pose)}</g>'
            f'<g id="head">{HEAD}</g><g id="eyes">{eyes}</g><g id="mouth">{mouth}</g>'
            f'<g id="outfit-front">{o["front"]}</g></g></svg>\n')

def build_lie(face):
    eyes, mouth = FACES[face]
    body_p = "M245 330 a195 95 0 1 0 390 0 a195 95 0 1 0 -390 0 Z"
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 480" width="700" height="480">{DEFS}'
            f'<clipPath id="lb"><path d="{body_p}"/></clipPath>'
            f'<g stroke="{OUT}" stroke-width="{SW}" stroke-linecap="round" stroke-linejoin="round">'
            f'<ellipse cx="420" cy="430" rx="260" ry="22" fill="#C9B6E0" stroke="none" opacity="0.5"/>'
            + limb("M608 340 C660 335 668 285 652 240", ORANGE, 26) +
            f'<path d="{body_p}" fill="{PEACH}"/>'
            f'<g clip-path="url(#lb)"><ellipse cx="410" cy="318" rx="188" ry="84" fill="{WHITE}" stroke="none"/>'
            f'<ellipse cx="560" cy="300" rx="70" ry="50" fill="{ORANGE}" stroke="none"/></g>'
            f'<path d="{body_p}" fill="none"/>'
            f'<ellipse cx="560" cy="402" rx="58" ry="24" fill="{WHITE}"/>'
            f'<ellipse cx="335" cy="408" rx="78" ry="27" fill="{WHITE}"/>'
            f'<g transform="translate(-45 -60) rotate(-4 300 270)"><g id="head">{HEAD}</g><g id="eyes">{eyes}</g><g id="mouth">{mouth}</g></g>'
            f'</g></svg>\n')

if __name__ == "__main__":
    here = pathlib.Path(__file__).parent
    n = 0
    for old in here.glob("cat_*.svg"):
        old.unlink()
    for f in FACES:
        for o in OUTFITS:
            for pose in ("idle", "wave"):
                name = f"cat_{f}_{o}" + ("_wave" if pose == "wave" else "") + ".svg"
                (here / name).write_text(build(f, o, pose), encoding="utf-8")
                n += 1
        (here / f"cat_{f}_lie.svg").write_text(build_lie(f), encoding="utf-8")
        n += 1
    print(n, "files")
