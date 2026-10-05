import type { IconKind, Mood, Tint } from '../data/categories'
import type { Guide } from '../data/guides'
import { guideTitle } from '../data/guides'
import { Link } from '../lib/router'
import { ArrowRight } from './Doodles'
import { GameArt } from './GameArt'
import { formatDate } from './bits'
import './cards.css'

const ink = '#3d322c'
const stroke = { stroke: ink, strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export function CategoryIcon({ kind }: { kind: IconKind }) {
  return (
    <svg viewBox="0 0 56 56" aria-hidden focusable={false} className="cat-icon">
      {kind === 'hearts' && (
        <>
          <path d="M20 40c-7-5-11-9-11-14 0-3.6 2.8-6 5.8-6 2.2 0 3.8 1.3 5 3 1-1.7 2.6-3 5-3 3 0 5.6 2.4 5.6 6 0 5-3.8 9-10.4 14z" fill="#e8c1be" {...stroke} />
          <path d="M36 44c-6-4-9.4-7.6-9.4-11.6 0-3 2.4-5 5-5 1.8 0 3.2 1 4.2 2.4.9-1.4 2.2-2.4 4.2-2.4 2.6 0 4.8 2 4.8 5 0 4-3.2 7.6-8.8 11.6z" fill="#f9e8db" {...stroke} />
          <path d="M40 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#f2e2ae" {...stroke} strokeWidth={1.4} />
        </>
      )}
      {kind === 'sprout' && (
        <>
          <path d="M16 38h24l-3 10H19z" fill="#e4cdae" {...stroke} />
          <path d="M28 38V24" {...stroke} />
          <path d="M28 27c-1-7-6-11-13-11 0 7 5 11 13 11z" fill="#b9c8ae" {...stroke} />
          <path d="M28 24c1-6 5-10 12-10 0 6-4 10-12 10z" fill="#d6e1cb" {...stroke} />
        </>
      )}
      {kind === 'phone' && (
        <>
          <rect x="17" y="8" width="22" height="40" rx="6" fill="#fffcf7" {...stroke} />
          <path d="M25 43h6" {...stroke} />
          <path d="M28 33c-4-2.6-6-4.8-6-7.4 0-2 1.5-3.3 3.1-3.3 1.2 0 2.1.7 2.9 1.7.7-1 1.6-1.7 2.9-1.7 1.6 0 3.1 1.3 3.1 3.3 0 2.6-2 4.8-6 7.4z" fill="#e8c1be" {...stroke} strokeWidth={1.8} />
        </>
      )}
      {kind === 'moon' && (
        <>
          <path d="M33 9c-10 1-17 9-17 19s8 18 18 18c6 0 11-3 14-8-12 2-21-7-19-19 1-4 2-7 4-10z" fill="#f2e2ae" {...stroke} />
          <path d="M42 14l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2z" fill="#fffcf7" {...stroke} strokeWidth={1.4} />
          <circle cx="12" cy="16" r="1.6" fill={ink} />
        </>
      )}
    </svg>
  )
}

export function CategoryCard({
  name,
  path,
  line,
  icon,
  tint,
  index,
}: {
  name: string
  path: string
  line: string
  icon: IconKind
  tint: Tint
  index: number
}) {
  return (
    <article className={`cat-card tint-${tint}`} style={{ ['--tilt' as string]: `${[-1.2, 0.8, -0.6, 1.1][index % 4]}deg` }}>
      <div className="cat-card__icon">
        <CategoryIcon kind={icon} />
      </div>
      <h3>
        <Link to={path} className="stretched">
          {name}
        </Link>
      </h3>
      <p>{line}</p>
      <span className="cat-card__arrow" aria-hidden>
        <ArrowRight />
      </span>
    </article>
  )
}

export function MoodLink({ mood, active = false, onSelect }: { mood: Mood; active?: boolean; onSelect?: () => void }) {
  return (
    <Link
      to={`/games?mood=${mood.slug}`}
      className="mood"
      aria-current={active ? 'true' : undefined}
      onClick={(e) => {
        if (onSelect) {
          e.preventDefault()
          onSelect()
        }
      }}
    >
      <span className="mood__emoji" aria-hidden>
        {mood.emoji}
      </span>
      <span className="mood__text">
        <span className="mood__label">{mood.label}</span>
        <span className="mood__line">{mood.line}</span>
      </span>
    </Link>
  )
}

export function GuideCard({ guide, layout = 'stack' }: { guide: Guide; layout?: 'stack' | 'row' }) {
  return (
    <article className={`guide-card guide-card--${layout}`}>
      <div className="guide-card__img">
        <GameArt theme={guide.art} />
      </div>
      <div className="guide-card__body">
        <p className="guide-card__kicker">{guide.kicker}</p>
        <h3>
          <Link to={`/guides/${guide.slug}`} className="stretched">
            {guideTitle(guide)}
          </Link>
        </h3>
        <p className="guide-card__excerpt">{guide.excerpt}</p>
        <p className="guide-card__date">
          Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
        </p>
      </div>
    </article>
  )
}
