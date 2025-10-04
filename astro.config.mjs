// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Google Sans Code",
        cssVariable: "--font-body",
      },
    ],
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
