import "./globals.css";

import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";

const bodyFont = Instrument_Serif({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ['400']
})

export const metadata: Metadata = {
  title: "João Alberto",
  description: "I'm a software engineer interested in all aspects of human-computer interaction.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.className}`}>
      <body>{children}</body>
    </html>
  );
}
