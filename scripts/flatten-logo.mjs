/**
 * The supplied logo PNG has a faintly uneven cream background (a subtle vignette),
 * which shows as a rectangular seam against the flat header colour. This rewrites
 * near-cream pixels to the exact header cream, leaving the gold and ink artwork
 * and its anti-aliased edges alone.
 *
 * Usage: node scripts/flatten-logo.mjs <source.png> <destination.png>
 */
import sharp from 'sharp';

const TARGET = { r: 0xf3, g: 0xec, b: 0xe4 };
// Generous on red/green (the vignette darkens those) but tight on blue, so the
// warm gold highlights (low blue) are never mistaken for background.
const TOLERANCE = { r: 16, g: 16, b: 12 };

const [source, destination] = process.argv.slice(2);
if (!source || !destination) {
  console.error('Usage: node scripts/flatten-logo.mjs <source.png> <destination.png>');
  process.exit(1);
}

const { data, info } = await sharp(source)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

let changed = 0;
for (let i = 0; i < data.length; i += info.channels) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const isBackground =
    Math.abs(r - TARGET.r) <= TOLERANCE.r &&
    Math.abs(g - TARGET.g) <= TOLERANCE.g &&
    Math.abs(b - TARGET.b) <= TOLERANCE.b;

  if (isBackground) {
    data[i] = TARGET.r;
    data[i + 1] = TARGET.g;
    data[i + 2] = TARGET.b;
    data[i + 3] = 255;
    changed++;
  }
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
  .png()
  .toFile(destination);

const total = info.width * info.height;
console.log(`flattened ${changed}/${total} pixels (${((changed / total) * 100).toFixed(1)}%)`);
