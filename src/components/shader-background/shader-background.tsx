import { type ReactNode } from "react";

type ShaderBackgroundProps = {
  children: ReactNode;
};

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className="min-w-full min-h-[100dvh] relative">
      <main className="relative z-10 w-full min-h-dvh flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
