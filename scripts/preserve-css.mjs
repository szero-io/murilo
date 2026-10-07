import { copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/_astro/', import.meta.url));
const source = `${outputDirectory}site.css`;
const legacyFiles = [
  'MainLayout.C8IMkd8W.css',
  'MainLayout.BG30Vwi3.css'
];

await Promise.all(
  legacyFiles.map((filename) => copyFile(source, `${outputDirectory}${filename}`))
);
