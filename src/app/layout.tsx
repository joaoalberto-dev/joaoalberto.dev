import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ variable: "--font-paragraph", subsets: ["latin"] });

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
      <body className={cn(spaceGrotesk.className, inter.variable)}>
        {children}
      </body>
    </html>
  );
}
