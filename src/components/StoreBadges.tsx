import type { Game } from '../data/types'
import { campaignFor, storeLinks, trackedUrl } from '../lib/stores'

const badges = {
  'app-store': { src: '/images/badges/app-store.svg', width: 120, height: 40, verb: 'Download', where: 'on the App Store' },
  'google-play': { src: '/images/badges/google-play.png', width: 646, height: 250, verb: 'Get', where: 'on Google Play' },
}

/**
 * Official App Store and Google Play badges, used unmodified as Apple and Google require.
 * `path` is the page the badges sit on; it becomes the campaign name in both stores' reports.
 */
export function StoreBadges({ game, path, className }: { game: Game; path: string; className?: string }) {
  const links = storeLinks(game)
  if (!links.length) return null
  const campaign = campaignFor(path)
  return (
    <div className={`store-badges ${className ?? ''}`}>
      {links.map((l) => {
        const b = badges[l.store]
        return (
          <a key={l.store} href={trackedUrl(l, campaign)} rel="noopener" target="_blank" className={`store-badge store-badge--${l.store}`}>
            <img
              src={b.src}
              alt={`${b.verb} ${game.title} ${b.where} (opens in a new tab)`}
              width={b.width}
              height={b.height}
              loading="lazy"
              decoding="async"
            />
          </a>
        )
      })}
    </div>
  )
}
