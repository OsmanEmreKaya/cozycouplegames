import type { ReactNode } from 'react'
import type { Game, Tag } from '../data/types'
import { GameArt } from './GameArt'
import { gameImages, imageSrc, imageSrcSet, isPortrait } from '../data/images'
import { HeartDoodle, HeartFilled, Squiggle, StarDoodle } from './Doodles'
import { Link } from '../lib/router'

/** Small shared building blocks used across pages. */

const tagTone: Partial<Record<Tag, string>> = {
  Cozy: 'sage',
  Farming: 'sage',
  Relaxing: 'sage',
  Building: 'sage',
  'Long Distance': 'sky',
  Mobile: 'peach',
  Free: 'peach',
  'Co-op': 'blush',
  'Couch Co-op': 'blush',
  Chaotic: 'blush',
  Competitive: 'blush',
}

export function TagList({ tags, max = 3 }: { tags: Tag[]; max?: number }) {
  return (
    <ul className="tags" aria-label="Tags">
      {tags.slice(0, max).map((t) => (
        <li key={t} className={`tag ${tagTone[t] ? `tag--${tagTone[t]}` : ''}`}>
          {t}
        </li>
      ))}
    </ul>
  )
}

export function Hearts({ value, label = 'Couple compatibility' }: { value: number; label?: string }) {
  return (
    <span className="hearts" role="img" aria-label={`${label}: ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) =>
        i <= value ? <HeartFilled key={i} className="hearts__on" /> : <HeartDoodle key={i} className="hearts__off" />,
      )}
    </span>
  )
}

export function Rating({ value }: { value: number }) {
  return (
    <span className="rating" role="img" aria-label={`Our rating: ${value.toFixed(1)} out of 5`}>
      <StarDoodle aria-hidden />
      <span aria-hidden>{value.toFixed(1)}</span>
    </span>
  )
}

/**
 * The game's official image. Landscape screenshots fill a 16:9 frame (same ratio, so
 * nothing is cropped). Portrait phone screenshots are shown whole, side by side.
 * Falls back to the illustrated scene when a game has no image yet.
 */
export function GameMedia({
  game,
  className,
  eager = false,
  sizes = '(min-width: 1040px) 340px, (min-width: 680px) calc(50vw - 72px), calc(100vw - 72px)',
  maxPhones = 2,
  phoneSizes = '(min-width: 680px) 130px, 26vw',
}: {
  game: Game
  className?: string
  eager?: boolean
  /** The rendered width of the media, for srcset selection. */
  sizes?: string
  maxPhones?: number
  /** Rendered width of each phone screenshot when the image is portrait. */
  phoneSizes?: string
}) {
  const images = gameImages(game.slug)
  if (!images.length) return <GameArt theme={game.art} className={className} />

  const loading = eager ? 'eager' : 'lazy'
  const fetchPriority = eager ? 'high' : undefined

  if (!isPortrait(images[0])) {
    const img = images[0]
    return (
      <img
        className={`${className ?? ''} media-landscape`}
        src={imageSrc(img)}
        srcSet={imageSrcSet(img)}
        sizes={sizes}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
    )
  }

  const phones = images.slice(0, maxPhones)
  return (
    <div className={`${className ?? ''} media-phones`} data-count={phones.length}>
      {phones.map((img, i) => (
        <img
          key={img.file}
          className="media-phone"
          src={imageSrc(img)}
          srcSet={imageSrcSet(img)}
          sizes={phoneSizes}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading={loading}
          fetchPriority={i === 0 ? fetchPriority : undefined}
          decoding="async"
        />
      ))}
    </div>
  )
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  action,
  id,
  as: H = 'h2',
}: {
  eyebrow?: ReactNode
  title: ReactNode
  lede?: ReactNode
  action?: ReactNode
  id?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <div className="section-head">
      <div className="section-head__text">
        {eyebrow && <p className="section-head__eyebrow">{eyebrow}</p>}
        <H id={id}>{title}</H>
        <Squiggle className="squiggle" />
        {lede && <p className="section-head__lede">{lede}</p>}
      </div>
      {action}
    </div>
  )
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <ol>
        {items.map((item, i) => (
          <li key={item.label}>
            {item.to && i < items.length - 1 ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
