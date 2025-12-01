import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.string(),
    slug: z.string(),
  }),
});

const bookmarks = defineCollection({
  type: "data",
  schema: z.object({
    bookmarks: z.array(
      z.object({
        title: z.string(),
        link: z.string(),
        category: z.string(),
      })
    ),
  }),
});

export const collections = { blog, bookmarks };
