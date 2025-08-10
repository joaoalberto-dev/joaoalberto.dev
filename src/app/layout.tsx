import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Alice, Instrument_Sans } from "next/font/google";
import { cookies } from "next/headers";
import { Layout } from "@/core/components/layout/layout";
import { ThemePicker } from "@/core/components/theme-picker/theme-picker";
import type { Theme } from "@/core/components/theme-picker/themes";
import "./globals.css";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get("theme")?.value as Theme;
  const initialTheme = savedTheme || "neutral";

  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} theme-${initialTheme} antialiased text-base bg-[var(--background)] text-[var(--foreground)] py-32 px-8`}
      >
        <div className="fixed top-4 right-4 z-50">
          <ThemePicker initialTheme={initialTheme} />
        </div>
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
