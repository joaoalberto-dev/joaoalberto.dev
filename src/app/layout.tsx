// oxlint-disable-next-line import/no-unassigned-import
import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";

import { Layout } from "@/ui/components/layout/layout";

const bodyFont = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400"],
});

export const metadata: Metadata = {
  description:
    "I'm a software engineer interested in all aspects of human-computer interaction.",
  title: "João Alberto",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={bodyFont.className}
    >
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
