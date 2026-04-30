import { defineCollection, z } from "astro:content";

const divisions = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    short: z.string().optional(),
    heroTagline: z.string().optional(),
  }),
});

const protocols = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    short: z.string().optional(),
    heroTagline: z.string().optional(),
  }),
});

const actions = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    short: z.string().optional(),
    heroTagline: z.string().optional(),
  }),
});

export const collections = {
  divisions,
  protocols,
  actions,
};

