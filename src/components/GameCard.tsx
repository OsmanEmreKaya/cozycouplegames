import type { Game } from '../data/types'
import { Link } from '../lib/router'
import { ArrowRight, HeartFilled } from './Doodles'
import { GameMedia, Rating, TagList } from './bits'
import './cards.css'

export function platformsLabel(platforms: string[], max = 3) {
  if (platforms.length <= max + 1) return platforms.join(' · ')
  return `${platforms.slice(0, max).join(' · ')} +${platforms.length - max}`
}

/**
 * The tone (0–3) gently changes the frame colour, tilt and accent of each card
 * so a grid of them feels arranged by hand rather than stamped out.
 */
export function GameCard({
  game,
  tone = 0,
  wide = false,
  headingLevel = 3,
}: {
  game: Game
  tone?: number
  wide?: boolean
  headingLevel?: 2 | 3
}) {
  const H = `h${headingLevel}` as 'h2' | 'h3'
  return (
    <article className={`game-card tone-${tone % 4}${wide ? ' game-card--wide' : ''}`}>
      <div className="game-card__frame">
        <div className="game-card__pic">
          <GameMedia
            game={game}
            className="game-card__img"
            phoneSizes="(min-width: 1040px) 70px, (min-width: 680px) 9vw, 18vw"
            sizes={
              wide
                ? '(min-width: 1040px) 600px, (min-width: 760px) 55vw, calc(100vw - 72px)'
                : '(min-width: 1040px) 340px, (min-width: 680px) calc(50vw - 72px), calc(100vw - 72px)'
            }
          />
        </div>
        {tone % 4 === 1 && <span className="tape" aria-hidden />}
      </div>
      {game.badge && (
        <p className="game-card__badge">
          <HeartFilled />
          {game.badge}
        </p>
      )}
      <div className="game-card__body">
        <div className="game-card__meta">
          <p className="game-card__platforms">{platformsLabel(game.platforms)}</p>
          <Rating value={game.rating} />
        </div>
        <H className="game-card__title">
          <Link to={`/games/${game.slug}`} className="stretched">
            {game.title}
          </Link>
        </H>
        <p className="game-card__blurb">{game.blurb}</p>
        <TagList tags={game.tags} max={3} />
        <span className="game-card__more" aria-hidden>
          Read more <ArrowRight />
        </span>
      </div>
    </article>
  )
}
