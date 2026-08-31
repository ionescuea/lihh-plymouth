/**
 * Builds a cover image carrying the event title, in the club's cream and gold.
 *
 * With --photo it heavily blurs the photograph behind the title, so the colour and
 * mood of the night survive but nobody is identifiable. Without one it falls back
 * to a plain gold gradient.
 *
 * Usage:
 *   node scripts/make-cover.mjs --out public/images/x/cover.jpg --title "A Night Out"
 *   node scripts/make-cover.mjs --out ... --title "..." --photo public/images/x/01.jpg
 */
import sharp from 'sharp';

const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args[i + 1];
};

const out = arg('out');
const title = arg('title');
const photo = arg('photo');
const width = Number(arg('width') ?? 1200);
const height = Number(arg('height') ?? 900);

if (!out || !title) {
  console.error('Usage: node scripts/make-cover.mjs --out <file.jpg> --title "Title" [--photo <file>]');
  process.exit(1);
}

const CREAM = '#f3ece4';
const GOLD = '#a67c1f';
const GOLD_LIGHT = '#e6c383';
const INK = '#2f2a26';

/** Rough line wrap — the font is not measured, so keep titles reasonably short. */
function wrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Cards crop these images to fit, so keep the text well inside the middle:
// a lower --wrap splits onto more lines, a higher --font-scale makes it smaller.
const lines = wrap(title.toUpperCase(), Number(arg('wrap') ?? 16));
const fontSize = Math.round(width / Number(arg('font-scale') ?? 16));
const lineHeight = Math.round(fontSize * 1.35);
const blockHeight = lines.length * lineHeight;
const startY = Math.round(height / 2 - blockHeight / 2 + fontSize * 0.85);

const textColour = photo ? '#ffffff' : GOLD;
const ruleColour = photo ? GOLD_LIGHT : GOLD;

const overlay = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
     ${lines
       .map(
         (line, i) =>
           `<text x="${width / 2}" y="${startY + i * lineHeight}" text-anchor="middle"
                  font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}"
                  letter-spacing="${Math.round(fontSize * 0.12)}" fill="${textColour}">${line}</text>`
       )
       .join('')}
     <rect x="${width / 2 - fontSize * 1.6}" y="${startY + blockHeight - lineHeight + fontSize * 0.6}"
           width="${fontSize * 3.2}" height="2" fill="${ruleColour}" />
   </svg>`
);

let base;
if (photo) {
  base = sharp(photo)
    .resize({ width, height, fit: 'cover' })
    .blur(28)
    .modulate({ brightness: 0.82, saturation: 1.05 });
} else {
  base = sharp({
    create: { width, height, channels: 4, background: CREAM },
  }).composite([
    {
      input: Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
           <defs>
             <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
               <stop offset="0%" stop-color="${CREAM}" />
               <stop offset="55%" stop-color="${GOLD_LIGHT}" />
               <stop offset="100%" stop-color="${GOLD}" />
             </linearGradient>
           </defs>
           <rect width="${width}" height="${height}" fill="url(#g)" opacity="0.85" />
         </svg>`
      ),
      left: 0,
      top: 0,
    },
  ]);
}

const withOverlay = await base.jpeg().toBuffer();

await sharp(withOverlay)
  .composite([{ input: overlay, left: 0, top: 0 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out);

console.log(`wrote ${out} (${width}x${height}${photo ? ', blurred photo' : ', gradient'})`);
