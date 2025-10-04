import type { ReactNode } from "react";

type GridBackgroundProps = {
  children: ReactNode;
};

export function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div className="min-w-full min-h-screen relative">
      <main className="relative z-10">{children}</main>
    </div>
  );
}
