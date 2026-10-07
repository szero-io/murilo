import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/_astro/', import.meta.url));
const source = fileURLToPath(new URL('../src/styles/global.css', import.meta.url));
const legacyFiles = [
  'site.css',
  'MainLayout.C8IMkd8W.css',
  'MainLayout.BG30Vwi3.css'
];

const css = await readFile(source, 'utf8');
await mkdir(outputDirectory, { recursive: true });
await Promise.all(
  legacyFiles.map((filename) => writeFile(`${outputDirectory}${filename}`, css))
);
