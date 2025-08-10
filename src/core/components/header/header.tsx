import type { ReactNode } from "react";

export type HeaderProps = {
  title: string;
  description?: ReactNode;
};

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="font-sans leading-4 font-bold text-[var(--foreground)]">
        {title}
      </h1>
      {description && (
        <p className="opacity-50 font-serif leading-5">{description}</p>
      )}
    </header>
  );
}
