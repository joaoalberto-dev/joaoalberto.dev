"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "../navbar/navbar";

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <>
      {path !== "/" && <Navbar />}
      {children}
    </>
  );
}
