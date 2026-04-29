import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robots from "@astrojs/robots";

export default defineConfig({
  site: "https://warudiko.github.io/FIB/",
  base: "/FIB/",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    robots({
      policy: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
  ],
});

