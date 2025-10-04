import { type ReactNode, useRef } from "react";
import { useGridBackground } from "./hooks/use-grid-background";
import { useScreenSize } from "./hooks/use-screen-size";

type GridBackgroundProps = {
  children: ReactNode;
};

export function GridBackground({ children }: GridBackgroundProps) {
  const size = useScreenSize();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGridBackground(canvasRef, size);

  return (
    <div className="min-w-full min-h-screen relative">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" {...size} />
      <main className="relative z-10">{children}</main>
    </div>
  );
}
