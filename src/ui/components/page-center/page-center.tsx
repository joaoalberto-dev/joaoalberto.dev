import { ReactNode } from "react";
import styles from "./page-center.module.css";

type Props = Readonly<{
  children: ReactNode;
}>;

export const PageCenter = ({ children }: Props) => {
  return <div className={styles.pagecenter}>{children}</div>;
};
