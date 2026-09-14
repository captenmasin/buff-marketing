// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { origin } from "./src/lib/site.ts";

// https://astro.build/config
export default defineConfig({
  site: origin,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
  adapter: cloudflare(),
});