import { ReactNode } from "react"
import layout from "./layout.module.css"

type LayoutProps = {
  children: ReactNode
}

function Layout({children}: LayoutProps) {
  return (
    <div className={layout.container}>{children}</div>
  )
}

export { Layout }
