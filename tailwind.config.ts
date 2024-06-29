import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "text-title": "var(--text-title)",
      },
      colors: {
        "brand-dark": "#131313",
        "brand-light": "#f1f5f9",
      },
    },
  },
  plugins: [],
};
export default config;
