import "./globals.css";
import { Layout } from "@/core/components/layout/layout";
import type { Metadata } from "next";
import { Instrument_Sans, Alice } from "next/font/google";

const fontSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Alice({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "João Alberto",
  description: "Software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} antialiased text-base bg-amber-50 text-amber-950 py-32 px-8`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
