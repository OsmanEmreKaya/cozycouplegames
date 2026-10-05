export const SITE = {
  name: 'Cozy Couple Games',
  url: 'https://cozycouplegames.com',
  tagline: 'Games are better together.',
  description:
    'Cute, relaxing and genuinely fun games for couples — hand-picked and played together, whether you share a couch or live miles apart.',
  defaultImage: '/og-default.png',
  email: 'hello@cozycouplegames.com',
}

export interface PageMeta {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  noindex?: boolean
  /** ISO date the content last changed; used for the sitemap and article tags. */
  updated?: string
  jsonLd?: Record<string, unknown>[]
}

export const absoluteUrl = (path: string) => SITE.url + (path === '/' ? '/' : path)

/** Appends the brand when there's room; search results truncate around 60–65 characters. */
export function fullTitle(meta: PageMeta) {
  if (meta.path === '/') return meta.title
  const branded = `${meta.title} · ${SITE.name}`
  return branded.length <= 65 ? branded : meta.title
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Serialised <head> tags, used by the build-time prerender. */
export function renderHead(meta: PageMeta): string {
  const title = fullTitle(meta)
  const url = absoluteUrl(meta.path)
  const image = absoluteUrl(meta.image ?? SITE.defaultImage)
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : '',
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:type" content="${meta.type ?? 'website'}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:locale" content="en_US" />`,
    meta.type === 'article' && meta.updated
      ? `<meta property="article:modified_time" content="${meta.updated}" />`
      : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...(meta.jsonLd ?? []).map(
      (data) =>
        `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
    ),
  ]
  return tags.filter(Boolean).join('\n    ')
}

/** Keeps the document head in sync during client-side navigation. */
export function applyHead(meta: PageMeta) {
  const title = fullTitle(meta)
  const url = absoluteUrl(meta.path)
  document.title = title
  const set = (selector: string, attr: string, value: string) => {
    const el = document.head.querySelector(selector)
    if (el) el.setAttribute(attr, value)
  }
  set('meta[name="description"]', 'content', meta.description)
  set('link[rel="canonical"]', 'href', url)
  set('meta[property="og:title"]', 'content', title)
  set('meta[property="og:description"]', 'content', meta.description)
  set('meta[property="og:url"]', 'content', url)
  set('meta[property="og:type"]', 'content', meta.type ?? 'website')
  set('meta[name="twitter:title"]', 'content', title)
  set('meta[name="twitter:description"]', 'content', meta.description)
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
