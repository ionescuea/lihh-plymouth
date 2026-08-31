/**
 * Lifts the gold brush-stroke ornament out of the club leaflet as a transparent PNG.
 *
 * The artwork is opaque gold sitting on flat cream paper, so it can be treated as
 * ink over a known background: work out how much of each pixel is ink (alpha), then
 * un-composite the paper colour back out so the result stays gold rather than
 * washed-out cream when placed on a different background.
 *
 * Usage: node scripts/extract-ornament.mjs <leaflet.png> <destination.png>
 */
import sharp from 'sharp';

// Just the corner brush stroke and splatter — clear of the shoe and the title text.
const REGION = { left: 0, top: 0, width: 72, height: 140 };

const [source, destination] = process.argv.slice(2);
if (!source || !destination) {
  console.error('Usage: node scripts/extract-ornament.mjs <leaflet.png> <destination.png>');
  process.exit(1);
}

const { data, info } = await sharp(source)
  .extract(REGION)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// The paper colour: the 90th-percentile value of each channel. Most of the region
// is blank paper, so this lands on the paper tone while ignoring stray bright specks.
const paper = [0, 1, 2].map((ch) => {
  const values = [];
  for (let p = ch; p < data.length; p += info.channels) values.push(data[p]);
  values.sort((a, b) => a - b);
  return values[Math.floor(values.length * 0.9)];
});

const out = Buffer.alloc(info.width * info.height * 4);

for (let p = 0, q = 0; p < data.length; p += info.channels, q += 4) {
  const pixel = [data[p], data[p + 1], data[p + 2]];

  // Ink coverage: the channel that has darkened most, relative to the paper.
  let alpha = 0;
  for (let ch = 0; ch < 3; ch++) {
    alpha = Math.max(alpha, 1 - pixel[ch] / paper[ch]);
  }
  // Ignore scanner noise in the empty paper areas.
  if (alpha < 0.06) alpha = 0;
  alpha = Math.min(1, alpha * 1.15);

  if (alpha === 0) {
    out[q] = out[q + 1] = out[q + 2] = out[q + 3] = 0;
    continue;
  }

  for (let ch = 0; ch < 3; ch++) {
    const unmixed = (pixel[ch] - paper[ch] * (1 - alpha)) / alpha;
    out[q + ch] = Math.max(0, Math.min(255, Math.round(unmixed)));
  }
  out[q + 3] = Math.round(alpha * 255);
}

await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(destination);

const opaque = out.filter((_, i) => i % 4 === 3 && out[i] > 0).length;
console.log(
  `paper #${paper.map((v) => v.toString(16).padStart(2, '0')).join('')} — ` +
    `${info.width}x${info.height}, ${((opaque / (info.width * info.height)) * 100).toFixed(1)}% inked`
);
