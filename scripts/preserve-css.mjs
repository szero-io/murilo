import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/_astro/', import.meta.url));
const homePage = fileURLToPath(new URL('../dist/index.html', import.meta.url));
const legacyFiles = [
  'site.css',
  'MainLayout.C8IMkd8W.css',
  'MainLayout.BG30Vwi3.css'
];

const html = await readFile(homePage, 'utf8');
const css = html.match(/<style>([\s\S]*?)<\/style>/)?.[1];

if (!css) {
  throw new Error('Could not find the inline stylesheet in dist/index.html');
}

await mkdir(outputDirectory, { recursive: true });
await Promise.all(
  legacyFiles.map((filename) => writeFile(`${outputDirectory}${filename}`, css))
);
