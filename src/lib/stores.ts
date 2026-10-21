import type { Game } from '../data/types'

/**
 * App Store Connect → Apps → App Analytics → Acquisition → Campaigns shows your provider
 * token (the `pt` value in a campaign link). Paste it here to see installs per page.
 * Until then, installs from the site still show up in App Analytics as a Web Referrer.
 */
export const APP_STORE_PROVIDER_TOKEN = '127517368'

type StoreLink = NonNullable<Game['links']>[number] & { store: 'app-store' | 'google-play' }

export const storeLinks = (game: Game) => (game.links ?? []).filter((l): l is StoreLink => Boolean(l.store))

/** The numeric App Store id, for the Smart App Banner. */
export const appStoreId = (game: Game) =>
  game.links?.find((l) => l.store === 'app-store')?.url.match(/\/id(\d+)/)?.[1]

/** A short, readable campaign name per page (Apple allows up to 40 characters). */
export function campaignFor(path: string) {
  if (path === '/') return 'home'
  const [section, slug] = path.split('/').filter(Boolean)
  const name = !slug ? section : section === 'games' ? `review-${slug}` : `guide-${slug}`
  return name.slice(0, 40)
}

/** Adds App Store campaign parameters or a Google Play UTM referrer, so installs can be traced back. */
export function trackedUrl(link: StoreLink, campaign: string) {
  const join = link.url.includes('?') ? '&' : '?'
  if (link.store === 'google-play') {
    const referrer = `utm_source=cozycouplegames&utm_medium=website&utm_campaign=${campaign}`
    return `${link.url}${join}referrer=${encodeURIComponent(referrer)}`
  }
  if (!APP_STORE_PROVIDER_TOKEN) return link.url
  return `${link.url}${join}pt=${APP_STORE_PROVIDER_TOKEN}&ct=${encodeURIComponent(campaign)}&mt=8`
}
