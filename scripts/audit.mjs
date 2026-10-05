// Post-build SEO audit. Runs against dist/ after prerendering and fails the build on errors.
// Checks: one <h1>, title + meta description, canonical, noindex, JSON-LD validity,
// image alt text, broken internal links/anchors, orphan pages, robots.txt and sitemap.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const SITE_URL = 'https://cozycouplegames.com'

const errors = []
const warnings = []
const err = (page, msg) => errors.push(`${page}: ${msg}`)
const warn = (page, msg) => warnings.push(`${page}: ${msg}`)

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE_URL, '') || '/')
const fileFor = (url) => path.join(dist, url === '/' ? 'index.html' : `${url.slice(1)}.html`)
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')

const pages = new Map()
for (const url of urls) {
  const file = fileFor(url)
  if (!fs.existsSync(file)) {
    err(url, `listed in sitemap but ${path.relative(root, file)} is missing`)
    continue
  }
  pages.set(url, fs.readFileSync(file, 'utf8'))
}

const inbound = new Map(urls.map((u) => [u, 0]))

for (const [url, html] of pages) {
  const head = html.slice(0, html.indexOf('</head>'))
  const body = html.slice(html.indexOf('<body'))

  const h1s = body.match(/<h1[\s>]/g) ?? []
  if (h1s.length !== 1) err(url, `expected exactly one <h1>, found ${h1s.length}`)

  const title = decode(head.match(/<title>([^<]*)<\/title>/)?.[1] ?? '')
  if (!title) err(url, 'missing <title>')
  else if (title.length > 65) warn(url, `title is ${title.length} chars (aim for ≤ 65): "${title}"`)

  const desc = decode(head.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '')
  if (!desc) err(url, 'missing meta description')
  else if (desc.length < 70 || desc.length > 160) warn(url, `meta description is ${desc.length} chars (aim for 70–160)`)

  const canonical = head.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  const expected = SITE_URL + (url === '/' ? '/' : url)
  if (canonical !== expected) err(url, `canonical is ${canonical ?? 'missing'}, expected ${expected}`)

  if (/name="robots" content="[^"]*noindex/.test(head)) err(url, 'indexable page has noindex')

  for (const m of head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1])
    } catch {
      err(url, 'invalid JSON-LD block')
    }
  }

  for (const m of body.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="/.test(m[0])) err(url, `<img> without alt: ${m[0].slice(0, 80)}`)
  }

  const ids = new Set([...body.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
  const seen = new Set()
  for (const m of body.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const href = decode(m[1])
    if (href.startsWith('#')) {
      if (!ids.has(href.slice(1))) err(url, `anchor ${href} has no matching id`)
      continue
    }
    if (!href.startsWith('/') || href.startsWith('//')) continue
    const target = href.split(/[?#]/)[0].replace(/(.)\/+$/, '$1')
    if (href.split('?')[0].length > 1 && href.split('?')[0].endsWith('/')) warn(url, `link with trailing slash: ${href}`)
    if (!inbound.has(target)) {
      if (!fs.existsSync(path.join(dist, target))) err(url, `broken internal link: ${href}`)
      continue
    }
    if (target !== url && !seen.has(target)) {
      seen.add(target)
      inbound.set(target, inbound.get(target) + 1)
    }
  }

  const ogImage = head.match(/<meta property="og:image" content="([^"]+)"/)?.[1]
  if (!ogImage) err(url, 'missing og:image')
  else if (!fs.existsSync(path.join(dist, ogImage.replace(SITE_URL, '')))) err(url, `og:image file missing: ${ogImage}`)
}

for (const [url, count] of inbound) {
  if (url !== '/' && count === 0) err(url, 'orphan page: no internal links point to it')
}

const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8')
if (/^Disallow:\s*\/\s*$/m.test(robots)) errors.push('robots.txt: blocks the whole site')
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) errors.push('robots.txt: missing Sitemap line')

const notFound = fs.readFileSync(path.join(dist, '404.html'), 'utf8')
if (!notFound.includes('noindex')) errors.push('404.html: should be noindex')

const weakest = [...inbound].filter(([u]) => u !== '/').sort((a, b) => a[1] - b[1]).slice(0, 3)
console.log(`SEO audit: ${pages.size} pages checked · fewest inbound links: ${weakest.map(([u, c]) => `${u} (${c})`).join(', ')}`)
for (const w of warnings) console.warn(`  ⚠ ${w}`)
for (const e of errors) console.error(`  ✖ ${e}`)
if (errors.length) {
  console.error(`SEO audit failed with ${errors.length} error(s).`)
  process.exit(1)
}
console.log('SEO audit passed.')
