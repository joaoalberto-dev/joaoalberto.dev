import type { ReactNode } from "react";

import styles from "./layout.module.css";

type LayoutProps = Readonly<{ children: ReactNode }>;

export const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};
