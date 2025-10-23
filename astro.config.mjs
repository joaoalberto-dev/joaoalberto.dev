// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "EB Garamond",
        cssVariable: "--font-body",
      },
    ],
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
