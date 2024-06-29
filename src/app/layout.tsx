import "@/ui/globals.css";

import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--text-title",
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
    <html
      lang="en"
      className="bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light"
    >
      <body className={`${inter.className} ${bricolage.variable}`}>
        <div className="max-w-[64ch] mx-auto">{children}</div>
      </body>
    </html>
  );
}
