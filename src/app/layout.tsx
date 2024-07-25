import "@/ui/globals.css";

import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--text-title",
});

export const metadata: Metadata = {
  title: {
    template: "%s | João Alberto",
    default: "Home | João Alberto",
  },
  description: "Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-brand-light text-brand-dark dark:bg-brand-dark dark:text-brand-light"
    >
      <body className={`${inter.className} ${bricolage.variable}`}>
        <div className="p-8 mx-auto md:p-16 max-w-[64ch]">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
