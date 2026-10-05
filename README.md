# Cozy Couple Games

A small, hand-made discovery site for couples looking for cozy games to play together.
React + Vite + TypeScript. The only runtime JavaScript is React; fonts are self-hosted. Every route is prerendered to static HTML at build time for SEO and fast first paint, then hydrated.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck → client build → SSR build → prerender + sitemap → SEO audit
npm run preview   # serve dist/ like a static host
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/games.ts` | All games and their reviews (the main content file) |
| `src/data/categories.ts` | Category pages (cozy / mobile / long distance), homepage cards, moods |
| `src/data/guides.ts` | Editorial guides |
| `src/routes.tsx` | URL → page, plus title, description and JSON-LD for each page |
| `src/components/` | Header, footer, search, cards, doodles, illustrations |
| `src/pages/` | Page templates |
| `src/styles/global.css` | Design tokens (colors, type, radii, shadows) and base styles |
| `src/data/authors.ts` | Author bios. Bylines, bio boxes and `Person` schema switch on once you add someone |
| `scripts/prerender.mjs` | Writes `dist/<route>.html`, `404.html` and `sitemap.xml` (with real `lastmod` dates) |
| `scripts/audit.mjs` | Fails the build on SEO problems: H1 count, titles, descriptions, canonicals, noindex, broken links, orphans, alt text, JSON-LD |
| `scripts/subset-fonts.py` | Rebuilds the trimmed heading and handwriting fonts in `src/assets/fonts/` |
| `scripts/fetch-images.mjs` | Downloads, converts and documents official game images (`npm run images`) |
| `scripts/og-image.html` | Source for `public/og-default.png` (screenshot it at 1200×630) |

## Adding a game

1. Add an entry to `src/data/games.ts` (newest first). Pick an `art` theme, or add a real `image`.
2. Optionally add its slug to a category's `games` list or a guide's `picks`.
3. `npm run build`. The route, sitemap entry, search entry and schema markup are generated for you.

## Images

Every game uses official images only: screenshots or promo art from Steam, the Nintendo eShop, the
App Store or Google Play (or the developer's own site or press kit). No fan art, Pinterest, Reddit or
watermarked uploads.

- `src/data/images.json` is the source of truth: file name, alt text, original source URL, the official
  page it came from, and the copyright holder.
- `npm run images` downloads anything missing, converts it to WebP **without cropping** (landscape capped
  at 1280 px wide, portrait at 1100 px tall), writes responsive widths for `srcset`, makes a JPEG social
  preview for landscape images, records dimensions back into the JSON and regenerates
  [IMAGE_CREDITS.md](IMAGE_CREDITS.md). Use `npm run images -- --force` to rebuild everything.
- Landscape screenshots sit in 16:9 frames (the same ratio, so nothing is cut off). Portrait phone
  screenshots are shown whole, side by side.
- Games without an image fall back to their illustrated scene (`GameArt.tsx`).

To add or swap an image: add an entry to `images.json` with `file`, `alt`, `source`, `page`, `store` and
`copyright`, then run `npm run images`. Write alt text that describes what's actually in the picture.

`public/og-default.png` (the site-wide share image) stays PNG on purpose: not every social platform
accepts WebP previews.

## Deploying

**Cloudflare (current setup):** build command `npm run build`, deploy command `npx wrangler deploy`.
`wrangler.jsonc` serves `dist/` as static assets: `games/stardew-valley.html` is served at
`/games/stardew-valley`, the `.html` and trailing-slash variants 307 to it, and unknown URLs get
`404.html` with a real 404 status. `.node-version` pins Node 22, which current Wrangler requires.

Other static hosts work too: upload `dist/`. On Vercel, add `{"cleanUrls": true, "trailingSlash": false}`
to `vercel.json`. Pick one canonical host (`https://cozycouplegames.com`, no `www`) with a single 301
from the others so there are no redirect chains.

After the first deploy: verify the domain in Google Search Console (DNS verification is simplest) and submit
`https://cozycouplegames.com/sitemap.xml`.
