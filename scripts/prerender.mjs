// Build-time prerender: writes a static HTML file per route, plus sitemap.xml and 404.html.
//
// Routes are written as flat files (/games/stardew-valley → games/stardew-valley.html)
// so static hosts serve the extensionless URL directly instead of redirecting it to
// a trailing-slash version. Canonical URLs and internal links never use a trailing slash.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const SITE_URL = 'https://cozycouplegames.com'

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, allPaths } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)

// Preload the heading font (the hero <h1> is the Largest Contentful Paint element)
// and the body font, so both are ready by first paint.
const assets = fs.readdirSync(path.join(dist, 'assets'))
const preloads = [/^fraunces-soft-500-600-latin-.+\.woff2$/, /^figtree-latin-wght-normal-.+\.woff2$/]
  .map((re) => assets.find((f) => re.test(f)))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ')
if (!preloads) throw new Error('Font files not found in dist/assets — check the font preload patterns.')

const page = (url) => {
  const result = render(url)
  const html = template
    .replace('<!--app-head-->', `${preloads}\n    ${result.head}`)
    .replace('<div id="root"><!--app-html--></div>', `<div id="root" data-path="${url}">${result.html}</div>`)
  return { html, updated: result.updated }
}

const fileFor = (url) => (url === '/' ? 'index.html' : `${url.slice(1)}.html`)

const entries = []
for (const url of allPaths) {
  const { html, updated } = page(url)
  const file = path.join(dist, fileFor(url))
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  entries.push({ url, updated })
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404').html)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ({ url, updated }) =>
      `  <url><loc>${SITE_URL}${url === '/' ? '/' : url}</loc>${updated ? `<lastmod>${updated}</lastmod>` : ''}</url>`,
  )
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered ${allPaths.length} pages + 404, wrote sitemap.xml`)
