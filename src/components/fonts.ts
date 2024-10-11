import { Inter, Bebas_Neue } from "next/font/google";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const title = Bebas_Neue({
  weight: ["400"],
  variable: "--font-title",
  subsets: ["latin"],
});

export { sans, title };
