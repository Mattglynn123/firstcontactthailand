import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const wpSchema = z.object({
  title: z.string(),
  slug: z.string(),
  wpId: z.number(),
  date: z.coerce.date(),
  modified: z.coerce.date(),
  originalUrl: z.string().url(),
  wpParent: z.number().default(0),
  menuOrder: z.number().default(0),
  sourceType: z.enum(['pages', 'posts']),
  draft: z.boolean().default(false),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: wpSchema,
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: wpSchema,
});

export const collections = { pages, posts };
