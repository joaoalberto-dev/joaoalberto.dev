"use client";

import { ReactNode } from "react";
import layout from "./layout.module.css";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { LeftIcon } from "../icons";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className={layout.container}>
      {!isHome && (
        <nav className={layout.nav}>
          <Link href="/">
            <LeftIcon />
          </Link>
        </nav>
      )}
      <main>{children}</main>
    </div>
  );
}
export { Layout };
