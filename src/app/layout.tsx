import { Layout } from "@/core/components/layout/layout";
import "@/core/styles/globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Onest } from "next/font/google";

const onestSans = Onest({
  subsets: ["latin"],
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
      <body className={`${onestSans.className}`}>
        <Layout>
          {children}
        </Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
