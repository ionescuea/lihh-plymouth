# Ladies in High Heels Plymouth

Static website for the Plymouth social club, built with Astro and Tailwind CSS and
deployed to Netlify.

## Running it

```bash
npm install
npm run dev      # local site at http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
npm run check    # type-check .astro files and content schemas
```

Requires Node 20 or newer.

## Adding content

| Task | What to do |
| --- | --- |
| Add an event | Create `src/content/events/YYYY-MM-slug.md` with `title`, `date`, `venue` |
| Add a photo album | Create `src/content/gallery/slug.md` and list photos under `photos` |
| Add photos | Drop the full-size files into `public/images/<album-slug>/` |
| Change club details | Edit `src/data/site.ts` |

Frontmatter is validated by the schemas in `src/content.config.ts`, so a typo in a
date or a missing venue fails the build rather than quietly breaking a page.

Set `draft: true` on an event to keep it out of the published site.

## Before going live

- Replace `facebookGroupUrl` and `contactEmail` in `src/data/site.ts`.
- Confirm photo consent with members before publishing group photos.
- Point `site` in `astro.config.mjs` at the final domain.
