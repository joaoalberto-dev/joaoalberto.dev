import { cn } from "@/utils/cn";
import "./globals.css";

import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import { Navbar } from "@/components/navbar";

const crimsonPro = Crimson_Pro({
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
          "bg-default text-default text-xl max-w-[64ch] mx-auto px-4 pt-4",
          crimsonPro.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
