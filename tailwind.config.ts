import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "rgba(244, 244, 244, 1)",
        dark: "rgba(11, 11, 11, 1)",
        accent: "#2dd4bf",
      },
    },
  },
  plugins: [],
};

export default config;
