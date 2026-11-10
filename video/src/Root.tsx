import { Composition } from "remotion";
import { Clip05 } from "./Clip05";
import { FPS, HEIGHT, WIDTH, totalFrames } from "./config";

export const Root: React.FC = () => (
  <Composition
    id="Clip05"
    component={Clip05}
    durationInFrames={totalFrames()}
    fps={FPS}
    width={WIDTH}
    height={HEIGHT}
  />
);
