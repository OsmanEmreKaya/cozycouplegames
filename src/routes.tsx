import type { ReactNode } from 'react'
import { games, getGame, gamesBySlugs } from './data/games'
import { categories, getCategory } from './data/categories'
import { guides, getGuide, guideTitle } from './data/guides'
import { SITE, absoluteUrl, breadcrumbLd, type PageMeta } from './lib/seo'
import { authors, primaryAuthor } from './data/authors'
import { IMAGE_DIR, gameImages } from './data/images'
import { Home } from './pages/Home'
import { GamesIndex } from './pages/GamesIndex'
import { GameReview } from './pages/GameReview'
import { Category } from './pages/Category'
import { Guide } from './pages/Guide'
import { About, Contact, GuidesIndex, NotFound, Privacy } from './pages/StaticPages'

export interface ResolvedRoute {
  element: ReactNode
  meta: PageMeta
  status: 200 | 404
}

const organization = {
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl('/favicon.svg'),
}

const authorLd = (a: (typeof authors)[number]) => ({
  '@type': a.kind === 'team' ? 'Organization' : 'Person',
  name: a.name,
  url: absoluteUrl(`/about#${a.slug}`),
  description: a.bio,
  ...(a.kind === 'team' ? { parentOrganization: organization } : {}),
  ...(a.photo && a.photo !== 'logo' ? { image: absoluteUrl(a.photo.src) } : {}),
  ...(a.links?.length ? { sameAs: a.links.map((l) => l.url) } : {}),
})

/** Credited author for reviews and guides, falling back to the site itself. */
const author = primaryAuthor ? authorLd(primaryAuthor) : organization

const latest = (dates: string[]) => dates.reduce((a, b) => (a > b ? a : b))
const siteUpdated = latest([...games.map((g) => g.updated), ...guides.map((g) => g.updated)])

const itemList = (paths: { name: string; path: string }[]) => ({
  '@type': 'ItemList',
  itemListElement: paths.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: absoluteUrl(p.path),
  })),
})

export function resolveRoute(path: string): ResolvedRoute {
  if (path === '/') {
    return {
      status: 200,
      element: <Home />,
      meta: {
        path,
        title: 'Cozy Couple Games — Cozy Games to Play Together',
        description: SITE.description,
        updated: siteUpdated,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE.name,
            url: SITE.url,
            description: SITE.description,
            publisher: organization,
          },
          { '@context': 'https://schema.org', ...organization },
        ],
      },
    }
  }

  if (path === '/games') {
    return {
      status: 200,
      element: <GamesIndex />,
      meta: {
        path,
        title: 'Game Reviews for Couples',
        updated: latest(games.map((g) => g.updated)),
        description:
          'Every cozy and co-op game we’ve played together as a couple, with honest notes on online and local multiplayer, price and who each one suits.',
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Game reviews for couples',
            url: absoluteUrl(path),
            mainEntity: itemList(games.map((g) => ({ name: g.title, path: `/games/${g.slug}` }))),
          },
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Reviews', path },
          ]),
        ],
      },
    }
  }

  const gameMatch = path.match(/^\/games\/([a-z0-9-]+)$/)
  if (gameMatch) {
    const game = getGame(gameMatch[1])
    if (game) {
      const images = gameImages(game.slug)
      const og = images[0]?.og
      return {
        status: 200,
        element: <GameReview game={game} />,
        meta: {
          path,
          type: 'article',
          title: `${game.title} Review for Couples`,
          updated: game.updated,
          image: og ? IMAGE_DIR + og : undefined,
          description: `${game.blurb} Co-op details, price and our honest verdict for couples.`,
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'Review',
              name: `${game.title} review for couples`,
              url: absoluteUrl(path),
              datePublished: game.updated,
              dateModified: game.updated,
              author,
              publisher: organization,
              reviewBody: game.review.verdict,
              reviewRating: { '@type': 'Rating', ratingValue: game.rating, bestRating: 5, worstRating: 1 },
              itemReviewed: {
                '@type': 'VideoGame',
                name: game.title,
                gamePlatform: game.platforms,
                applicationCategory: 'Game',
                operatingSystem: game.platforms.join(', '),
                ...(images.length ? { image: images.map((i) => absoluteUrl(IMAGE_DIR + i.file)) } : {}),
                author: { '@type': 'Organization', name: game.developer },
                offers: game.isFree
                  ? { '@type': 'Offer', price: 0, priceCurrency: 'USD' }
                  : undefined,
              },
            },
            breadcrumbLd([
              { name: 'Home', path: '/' },
              { name: 'Reviews', path: '/games' },
              { name: game.title, path },
            ]),
          ],
        },
      }
    }
  }

  const category = getCategory(path)
  if (category) {
    const list = gamesBySlugs(category.games)
    return {
      status: 200,
      element: <Category category={category} />,
      meta: {
        path,
        title: category.seoTitle,
        updated: latest(list.map((g) => g.updated)),
        description: category.description,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: category.h1,
            url: absoluteUrl(path),
            description: category.description,
            mainEntity: itemList(list.map((g) => ({ name: g.title, path: `/games/${g.slug}` }))),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: category.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: category.name, path },
          ]),
        ],
      },
    }
  }

  if (path === '/guides') {
    return {
      status: 200,
      element: <GuidesIndex />,
      meta: {
        path,
        title: 'Guides for Couples Who Play Games',
        updated: latest(guides.map((g) => g.updated)),
        description:
          'Short, honest guides to the best games for couples: cozy picks, long-distance favorites, free games and relaxing games to play together.',
        jsonLd: [
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Guides', path },
          ]),
        ],
      },
    }
  }

  const guideMatch = path.match(/^\/guides\/([a-z0-9-]+)$/)
  if (guideMatch) {
    const guide = getGuide(guideMatch[1])
    if (guide) {
      const title = guideTitle(guide)
      return {
        status: 200,
        element: <Guide guide={guide} />,
        meta: {
          path,
          type: 'article',
          title,
          updated: guide.updated,
          description: guide.description,
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              description: guide.description,
              url: absoluteUrl(path),
              datePublished: guide.published,
              dateModified: guide.updated,
              author,
              publisher: organization,
              mainEntity: itemList(
                gamesBySlugs(guide.picks.map((p) => p.game)).map((g) => ({ name: g.title, path: `/games/${g.slug}` })),
              ),
            },
            breadcrumbLd([
              { name: 'Home', path: '/' },
              { name: 'Guides', path: '/guides' },
              { name: title, path },
            ]),
          ],
        },
      }
    }
  }

  if (path === '/about') {
    return {
      status: 200,
      element: <About />,
      meta: {
        path,
        title: 'About Us',
        description: 'Why Cozy Couple Games exists, and how we choose the games we recommend to couples.',
        jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'About', path }])],
      },
    }
  }
  if (path === '/contact') {
    return {
      status: 200,
      element: <Contact />,
      meta: {
        path,
        title: 'Contact',
        description: 'Suggest a game for couples, send us a correction or just say hello to the Cozy Couple Games team.',
        jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Contact', path }])],
      },
    }
  }
  if (path === '/privacy') {
    return {
      status: 200,
      element: <Privacy />,
      meta: {
        path,
        title: 'Privacy',
        description: 'How Cozy Couple Games handles your data: no accounts, no ad trackers and no analytics cookies.',
        jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Privacy', path }])],
      },
    }
  }

  return {
    status: 404,
    element: <NotFound />,
    meta: { path, title: 'Page not found', description: 'This page wandered off.', noindex: true },
  }
}

/** Every indexable URL — used by the prerender step and the sitemap. */
export const allPaths: string[] = [
  '/',
  '/games',
  ...categories.map((c) => c.path),
  ...games.map((g) => `/games/${g.slug}`),
  '/guides',
  ...guides.map((g) => `/guides/${g.slug}`),
  '/about',
  '/contact',
  '/privacy',
]
