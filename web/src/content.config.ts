import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pageSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.coerce.date(),
  modified: z.coerce.date(),
  menuOrder: z.number().default(0),
  draft: z.boolean().default(false),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: pageSchema,
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: pageSchema,
});

export const collections = { pages, posts };
