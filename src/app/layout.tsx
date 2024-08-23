import { cn } from "@/utils/cn";
import "./globals.css";

import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Navbar } from "@/components/navbar";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-title",
});

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
    <html lang="en">
      <body
        className={cn(
          "bg-light text-dark dark:bg-darker dark:text-light text-xl max-w-[64ch] mx-auto px-4 pt-4",
          inter.className,
          oswald.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
