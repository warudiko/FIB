import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import robots from "astro-robots";

export default defineConfig({
  site: "https://warudiko.github.io/FIB/",
  base: "/FIB/",
  integrations: [
    tailwind(),
    mdx(),
    robots({
      // `astro-robots` expects a bare hostname (no scheme).
      host: "warudiko.github.io",
      policy: [
        {
          userAgent: "*",
          allow: ["/"],
        },
      ],
    }),
  ],
});

