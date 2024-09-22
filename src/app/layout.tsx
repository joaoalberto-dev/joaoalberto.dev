import "./globals.css";

import { cn } from "@/utils/cn";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

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
    <html className="overscroll-none" lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={cn(
          "bg-light text-dark dark:bg-dark dark:text-light",
          inter.className
        )}
      >
        <div className="max-w-[64ch] mx-auto pt-8 px-4">{children}</div>
      </body>
    </html>
  );
}
