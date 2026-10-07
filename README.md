# Murilo Luz — personal site

Static personal site for **[murilo.szero.io](https://murilo.szero.io)**, built with Astro and deployed to GitHub Pages.

## Requirements

- Node.js 22+
- npm 10+

## Local development

```bash
npm install
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321`.

## Production build

```bash
npm run build
```

The generated site is written to `dist/` as static files only. Key routes become physical files:

```text
dist/index.html
dist/card/index.html
dist/projects/index.html
dist/research/index.html
dist/404.html
```

## Project structure

```text
src/
  components/   Reusable Astro components
  data/         Profile, projects, publications and experience
  layouts/      Shared document layout and metadata
  pages/        Physical static routes
  styles/       Szero-aligned design tokens and global styles
public/
  fonts/        Self-hosted Source fonts
  icons/        Szero brand assets
  images/       Optimized static images
  CNAME         GitHub Pages custom domain
```

## Change personal data

Edit `src/data/profile.ts`. Contact links and the browser-generated vCard use the same data source.

## Add a project

Add an object to `src/data/projects.ts` with `title`, `description`, `tags` and `href`.

## Add a publication

Add an object to the `publications` array in `src/data/publications.ts`:

```ts
{
  title: 'Paper title',
  venue: 'Venue or journal',
  year: '2026',
  href: 'https://doi.org/...'
}
```

## GitHub Pages deployment

`.github/workflows/deploy.yml` uses the official Pages actions. Every push to `main`:

1. checks out the repository;
2. installs dependencies with `npm ci`;
3. builds the static site;
4. uploads `dist/`;
5. deploys to GitHub Pages.

In **Settings → Pages**, select **GitHub Actions** as the source if it is not already selected.

## Custom domain and DNS

`public/CNAME` contains exactly:

```text
murilo.szero.io
```

Create this DNS record at the provider that manages `szero.io`:

```text
Type:  CNAME
Name:  murilo
Value: szero-io.github.io
```

After DNS propagation, confirm `murilo.szero.io` under **Settings → Pages → Custom domain** and enable **Enforce HTTPS**.

## Routing

Astro uses directory-format static output and `/` as the public base. There is no SPA fallback, `HashRouter`, server runtime, database or API dependency.
