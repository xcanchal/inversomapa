import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://xcanchal.github.io",
  base: "/inversomapa",
  integrations: [react(), sitemap()],
  trailingSlash: "always",
});
