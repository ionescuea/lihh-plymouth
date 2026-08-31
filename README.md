# Ladies in High Heels Plymouth

Website for the Plymouth social club. Built with React, Vite and Tailwind CSS,
deployed to Netlify.

## Running it

```bash
npm install
npm run dev      # local site, address is printed in the terminal
npm run build    # production files land in dist/
npm run preview  # serve the built files to check them
```

Requires Node 20 or newer. Leave `npm run dev` running while you work — it
refreshes the browser as you save.

## Where things live

```
index.html            page shell, tab title, Facebook share tags
src/main.jsx          starts the app
src/App.jsx           list of pages and their addresses
src/components/       reusable pieces (header/footer, buttons, cards)
src/pages/            one file per page
src/data/             the content you will edit most often
src/styles/global.css colours, fonts and animations
public/images/        photos and artwork
scripts/              one-off image preparation tools
```

## Editing content

Everything routine lives in `src/data/`, in plain JavaScript:

| Task | File |
| --- | --- |
| Club name, Facebook link, contact email, menu | `site.js` |
| Add or edit a meetup | `events.js` |
| Add a photo album | `gallery.js` |

To add photos, drop the files into `public/images/<album-id>/` and list them in
`gallery.js`. Set `draft: true` on an event to hide it from the site.

## Image tools

These regenerate artwork from a source image; run them only when the source changes.

```bash
node scripts/flatten-logo.mjs <source.png> public/images/logo.png
node scripts/extract-ornament.mjs <leaflet.png> public/images/ornament-gold.png
node scripts/make-og-image.mjs
```

## Before going live

- Replace `facebookGroupUrl` and `contactEmail` in `src/data/site.js`.
- Update the `og:url` and `og:image` addresses in `index.html` to the real domain,
  otherwise Facebook link previews will not show the image.
- Confirm photo consent with members before publishing group photos.
- Replace `public/images/hero.jpg` with a higher-resolution photograph.
