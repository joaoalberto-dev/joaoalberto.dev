import type { ReactNode } from "react";

type PageSectionProps = {
  title: string;
  children: ReactNode;
};

export function PageSection({ children, title }: PageSectionProps) {
  return (
    <div className="relative">
      <p className="md:absolute right-[105%] opacity-40">{title}</p>
      {children}
    </div>
  );
}
