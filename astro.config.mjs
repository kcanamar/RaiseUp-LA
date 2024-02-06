import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import { whyframe } from '@whyframe/core';
import { whyframeAstro } from '@whyframe/astro';

// https://astro.build/config
export default defineConfig({
  site: "https://verdant-valkyrie-138203.netlify.app/",
  output: "hybrid",
  adapter: netlify(),
  integrations: [react(), tailwind()],
  vite: {
    plugins: [
      whyframe({
        defaultSrc: '/frames/default'
      }),
      whyframeAstro({
        defaultFramework: 'react'
      })
    ]
  }
});