import text from "@/core/styles/text.module.css";
import { cn } from "@/core/utils/cn";
import { ReactNode } from "react";
import styles from "./project.module.css";

type ProjectProps = {
  children: ReactNode;
  href: string;
}

function Project({ children, href }: ProjectProps) {
  return (
    <a href={href} className={cn(text.small, styles.project)} target="_blank">{children}</a>
  )
}

export { Project };
