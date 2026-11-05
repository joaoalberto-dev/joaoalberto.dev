import type { ReactNode } from "react";

import styles from "./title.module.css";

type TitleProps = Readonly<{ children: ReactNode }>;

export const Title = ({ children }: TitleProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};
