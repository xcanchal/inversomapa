# Mapa de la inversió

Interactive graph of investment vehicles (CA/ES). Astro static site:
every node is a real page under `/{locale}/guia/{slug}/`, the graph is a
React island used for navigation.

## Develop

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

1. Push to GitHub:
   ```bash
   git init && git add -A && git commit -m "init"
   git remote add origin git@github.com:xcanchal/mapa-inversio.git
   git push -u origin main
   ```
2. Repo → Settings → Pages → Source: **GitHub Actions**. The included
   workflow builds and deploys on every push to `main`.
3. Custom domain: add it in the Pages settings and create the CNAME
   record in Namecheap (same flow as xilofono-online).

The default configuration deploys to
`https://xcanchal.github.io/inversomapa/`. If you later use a custom domain,
update `site`, `base`, and `public/robots.txt` together.

## Structure

- `src/data/taxonomy.js` — single source of truth: slugs, labels, copy per locale
- `src/components/Graph.jsx` — SVG tree island, static `<a>` navigation
- `src/pages/[locale]/guia/[slug].astro` — one indexable page per node,
  with canonical, hreflang pair, and BreadcrumbList JSON-LD
