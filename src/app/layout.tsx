import "@/ui/styles/globals.css";

import type { Metadata } from "next";
import { bodyFont } from "@/ui/fonts/fonts";

export const metadata: Metadata = {
  title: "João Alberto",
  description: "Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}
