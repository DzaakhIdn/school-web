/**
 * Unduh file woff2 dari Google Fonts untuk self-hosting (latin + latin-ext).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";

const families = [
  { query: "Montserrat:ital,wght@0,100..900;1,100..900", slug: "montserrat" },
  { query: "Space+Grotesk:wght@300..700", slug: "space-grotesk" },
  { query: "Raleway:wght@400..800", slug: "raleway" },
  { query: "Poppins:wght@100;300;400;600;700;900", slug: "poppins" },
  { query: "Geist:wght@100..900", slug: "geist" },
  { query: "Geist+Mono:wght@100..900", slug: "geist-mono" },
];

const outDir = resolve(process.cwd(), "src/assets/fonts");
mkdirSync(outDir, { recursive: true });

const isLatin = (range) => range.includes("U+0000-00FF");
const isLatinExt = (range) => range.includes("U+0102-0103");

for (const { query, slug } of families) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${query}&display=swap`,
    { headers: { "User-Agent": UA } }
  ).then((res) => res.text());

  if (!css.includes("@font-face")) {
    console.log(`[skip] ${slug}: tidak ada @font-face`);
    continue;
  }

  const blocks = css.split("@font-face").slice(1);
  let saved = 0;

  for (const block of blocks) {
    const range = block.match(/unicode-range:\s*([^;]+);/)?.[1] ?? "";
    const url = block.match(/src:\s*url\(([^)]+)\)/)?.[1];
    const style = block.match(/font-style:\s*(\w+)/)?.[1] ?? "normal";
    const weight = block.match(/font-weight:\s*([^;]+);/)?.[1]?.trim() ?? "400";

    if (!url) continue;
    if (!isLatin(range) && !isLatinExt(range)) continue;

    const subset = isLatin(range) ? "latin" : "latin-ext";
    const weightSlug = weight.includes(" ") ? "variable" : weight;
    const name = `${slug}${style === "italic" ? "-italic" : ""}-${weightSlug}-${subset}.woff2`;

    const buffer = Buffer.from(await fetch(url).then((res) => res.arrayBuffer()));
    writeFileSync(resolve(outDir, name), buffer);
    console.log(`[ok] ${name} (${(buffer.length / 1024).toFixed(1)} kB)`);
    saved += 1;
  }

  if (saved === 0) console.log(`[warn] ${slug}: latin/latin-ext tidak ditemukan`);
}
