import text from "@/core/styles/text.module.css";
import styles from "./header.module.css";
import { cn } from "@/core/utils/cn";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className={cn(styles.container, "bleed")}>
      <h1 className={text.title}>{title}</h1>
      {subtitle && <p className={text.paragraph}>{subtitle}</p>}
    </header>
  );
}

export { Header };
