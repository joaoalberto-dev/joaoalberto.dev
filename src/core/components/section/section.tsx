import { ReactNode } from "react"
import styles from "./section.module.css"

type SectionProps = {
  children: ReactNode
}

function Section({ children }: SectionProps) {
  return (
    <div className={styles.section}>{children}</div>
  )
}

export { Section }
