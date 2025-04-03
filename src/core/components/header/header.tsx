"use client";

import text from "@/core/styles/text.module.css";
import styles from "./header.module.css";
import { useRef } from "react";
import { cn } from "@/core/utils/cn";
import { CanvasBackground } from "../canvas-background/canvas-background";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

function Header({ title, subtitle }: HeaderProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <header className={cn(styles.container, "header", "bleed")} ref={parentRef}>
      <h1 className={text.title}>{title}</h1>
      {subtitle && <p className={text.paragraph}>{subtitle}</p>}
      <CanvasBackground parentRef={parentRef} />
    </header>
  );
}

export { Header };
