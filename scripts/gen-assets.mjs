// Regenerates static brand assets in /public.
// Run with: node scripts/gen-assets.mjs   (requires the `sharp` devDependency)
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");

const PAPER = "#fdfbf7";
const INK = "#1b1a17";
const MUTED = "#6b6862";
const ACCENT = "#2b4bf2";

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="0" y="0" width="1200" height="8" fill="${ACCENT}"/>
  <text x="80" y="130" font-family="'JetBrains Mono','Courier New',monospace" font-size="24" fill="${ACCENT}" letter-spacing="4">PORTFOLIO</text>
  <text x="76" y="320" font-family="Georgia,'Times New Roman',serif" font-size="112" font-weight="600" fill="${INK}">Luka Kilasonia</text>
  <text x="80" y="400" font-family="Georgia,'Times New Roman',serif" font-style="italic" font-size="52" fill="${MUTED}">React Developer</text>
  <text x="80" y="530" font-family="Arial,Helvetica,sans-serif" font-size="29" fill="${MUTED}">Fast, accessible web apps · React · TypeScript · Node · SAP Fiori</text>
</svg>`;

const iconSvg = `
<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="40" fill="${INK}"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
    font-family="Georgia,'Times New Roman',serif" font-style="italic" font-weight="600"
    font-size="92" fill="${PAPER}">lk</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile(join(pub, "og-image.png"));
await sharp(Buffer.from(iconSvg)).png().toFile(join(pub, "apple-touch-icon.png"));

console.log("Wrote public/og-image.png and public/apple-touch-icon.png");
