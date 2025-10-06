import { useDarkMode } from "@/hooks/use-dark-mode";
import { useScreenSize } from "@/hooks/use-screen-size";
import { Dithering } from "@paper-design/shaders-react";
import type { ReactNode } from "react";

type ShaderBackgroundProps = {
  children: ReactNode;
};

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const { width, height } = useScreenSize();
  const isDarkMode = useDarkMode();

  if (!width || !height) return;

  return (
    <div className="min-w-full min-h-[100dvh] relative">
      <Dithering
        colorBack="#00000000"
        colorFront={isDarkMode ? "#ECFDC6" : "#BAD375"}
        speed={1}
        shape="swirl"
        type="4x4"
        size={3}
        scale={2}
        className="absolute inset-0 z-0"
        style={{
          height,
          width,
        }}
      />
      <main className="relative z-10 w-full h-dvh flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
