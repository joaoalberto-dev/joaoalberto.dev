import type { ReactNode } from "react";

export type SectionProps = {
  children: ReactNode;
  title: string;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold leading-4 opacity-80">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
