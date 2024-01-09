import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://verdant-valkyrie-138203.netlify.app/",
  output: "hybrid",
  adapter: netlify()
});