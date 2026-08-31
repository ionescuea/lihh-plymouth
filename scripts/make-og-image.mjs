/**
 * Builds the 1200x630 social share image used for Facebook and other link previews.
 * Composed from the club logo and leaflet ornament rather than a photograph, so it
 * stays sharp and raises no questions about members appearing in shared previews.
 *
 * Usage: node scripts/make-og-image.mjs
 */
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const CREAM = { r: 0xf3, g: 0xec, b: 0xe4, alpha: 1 };
const STRAPLINE = 'CELEBRATE FRIENDSHIP  ·  INSPIRE EACH OTHER  ·  SHINE TOGETHER';

const logo = await sharp('public/images/logo.png')
  .resize({ width: 820 })
  .toBuffer({ resolveWithObject: true });

const ornament = await sharp('public/images/ornament-gold.png')
  .resize({ width: 200 })
  .toBuffer({ resolveWithObject: true });
const ornamentFlipped = await sharp(ornament.data).rotate(180).toBuffer();

const text = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="140">
     <text x="${WIDTH / 2}" y="54" text-anchor="middle"
           font-family="Georgia, 'Times New Roman', serif" font-size="21"
           letter-spacing="3" fill="#a67c1f">${STRAPLINE}</text>
   </svg>`
);

await sharp({ create: { width: WIDTH, height: HEIGHT, channels: 4, background: CREAM } })
  .composite([
    { input: ornament.data, left: 0, top: 0 },
    {
      input: ornamentFlipped,
      left: WIDTH - ornament.info.width,
      top: HEIGHT - ornament.info.height,
    },
    {
      input: logo.data,
      left: Math.round((WIDTH - logo.info.width) / 2),
      top: Math.round(HEIGHT / 2 - logo.info.height / 2 - 55),
    },
    { input: text, left: 0, top: HEIGHT - 190 },
  ])
  .jpeg({ quality: 90 })
  .toFile('public/images/og.jpg');

console.log(`wrote public/images/og.jpg (${WIDTH}x${HEIGHT})`);
