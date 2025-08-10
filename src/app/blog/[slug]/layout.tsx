import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col gap-y-16 max-w-[420px] mx-auto">
      {children}
    </main>
  );
}
