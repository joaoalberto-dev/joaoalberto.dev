import { ReactNode } from "react";
import styles from "./section.module.css";

type SectionProps = {
  children: ReactNode;
};

function Section({ children }: SectionProps) {
  return <section className={styles.section}>{children}</section>;
}

export { Section };
