import { sans, title } from "@/components/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

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
    <html className={cn(sans.variable, title.variable)} lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="font-sans bg-brand">
        <div className="min-w-dvw min-h-dvh">{children}</div>
      </body>
    </html>
  );
}
