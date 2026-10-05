import type { Game } from '../data/types'
import { gamesBySlugs } from '../data/games'
import { categories } from '../data/categories'
import { moods } from '../data/categories'
import { Link } from '../lib/router'
import { GameCard } from '../components/GameCard'
import { Breadcrumbs, GameMedia, Hearts, Rating, TagList, formatDate } from '../components/bits'
import { ArrowRight, CheckDoodle, FlowerDoodle, HeartDoodle, InfoDoodle, SparkleDoodle, StarDoodle } from '../components/Doodles'
import { AboutTheAuthor, AuthorName } from '../components/Author'
import { gameImages } from '../data/images'
import './review.css'

export function GameReview({ game }: { game: Game }) {
  const similar = gamesBySlugs(game.similar)
  const inCategories = categories.filter((c) => c.games.includes(game.slug))
  const gameMoods = moods.filter((m) => game.moods.includes(m.slug))
  const heroImage = gameImages(game.slug)[0]

  return (
    <article className="review">
      <header className="review-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Reviews', to: '/games' }, { label: game.title }]} />

          <div className="review-hero__grid">
            <div className="review-hero__text">
              {game.badge && (
                <p className="badge">
                  <HeartDoodle /> {game.badge}
                </p>
              )}
              <h1>{game.title}</h1>
              <p className="review-hero__lede">{game.review.lede}</p>
              <ul className="platforms" aria-label="Platforms">
                {game.platforms.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="review-hero__byline">
                Reviewed by <AuthorName /> · Updated{' '}
                <time dateTime={game.updated}>{formatDate(game.updated)}</time>
              </p>
            </div>
            <figure className="review-hero__figure">
              <div
                className={`review-hero__media${heroImage && heroImage.height > heroImage.width ? ' is-phones' : ''}`}
              >
                <GameMedia
                  game={game}
                  className="review-hero__img"
                  eager
                  sizes="(min-width: 880px) 540px, calc(100vw - 52px)"
                  maxPhones={3}
                />
                <SparkleDoodle className="review-hero__sparkle" />
              </div>
              {heroImage && (
                <figcaption className="review-hero__credit">
                  Official image via{' '}
                  <a href={heroImage.page} rel="noopener" target="_blank">
                    {heroImage.store}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>{' '}
                  · © {heroImage.copyright}
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      </header>

      <div className="container review-layout">
        <aside className="facts" aria-labelledby="facts-title">
          <h2 id="facts-title" className="facts__title">
            At a glance
          </h2>
          <dl>
            <div className="facts__row facts__row--score">
              <dt>Couple compatibility</dt>
              <dd>
                <Hearts value={game.coupleScore} />
              </dd>
            </div>
            <div className="facts__row">
              <dt>Our rating</dt>
              <dd>
                <Rating value={game.rating} />
              </dd>
            </div>
            <div className="facts__row">
              <dt>Players</dt>
              <dd>{game.players}</dd>
            </div>
            <div className="facts__row">
              <dt>Online multiplayer</dt>
              <dd>{game.online}</dd>
            </div>
            <div className="facts__row">
              <dt>Local multiplayer</dt>
              <dd>{game.local}</dd>
            </div>
            <div className="facts__row">
              <dt>Price</dt>
              <dd>
                {game.isFree && <span className="tag tag--peach facts__free">Free</span>}
                {game.price}
              </dd>
            </div>
            <div className="facts__row">
              <dt>Cross-platform</dt>
              <dd>{game.crossPlatform}</dd>
            </div>
            <div className="facts__row">
              <dt>Made by</dt>
              <dd>{game.developer}</dd>
            </div>
          </dl>
          <TagList tags={game.tags} max={6} />
          {game.links && (
            <div className="facts__links">
              {game.links.map((l) => (
                <a key={l.url} href={l.url} className="btn btn--soft btn--small" rel="noopener" target="_blank">
                  {l.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          )}
        </aside>

        <div className="review-body prose">
          <section aria-labelledby="why">
            <h2 id="why">
              <HeartDoodle className="h-doodle" /> Why couples might love it
            </h2>
            {game.review.why.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section aria-labelledby="together">
            <h2 id="together">What you actually do together</h2>
            <ul role="list" className="checks">
              {game.review.together.map((t) => (
                <li key={t}>
                  <CheckDoodle /> {t}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="best-for" className="note-card note-card--sage">
            <h2 id="best-for">
              <FlowerDoodle className="h-doodle" /> Best for
            </h2>
            <ul role="list" className="pill-list">
              {game.review.bestFor.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {gameMoods.length > 0 && (
              <p className="mood-links">
                Good when you’re in the mood to{' '}
                {gameMoods.map((m, i) => (
                  <span key={m.slug}>
                    <Link to={`/games?mood=${m.slug}`}>{m.label.toLowerCase()}</Link>
                    {i < gameMoods.length - 2 ? ', ' : i === gameMoods.length - 2 ? ' or ' : '.'}
                  </span>
                ))}
              </p>
            )}
          </section>

          <section aria-labelledby="know">
            <h2 id="know">Things to know before playing</h2>
            <ul role="list" className="know-list">
              {game.review.knowBefore.map((k) => (
                <li key={k}>
                  <InfoDoodle /> {k}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="verdict" className="verdict">
            <h2 id="verdict">Our verdict</h2>
            <p>{game.review.verdict}</p>
            <div className="verdict__scores">
              <div>
                <span className="verdict__label">Couple compatibility</span>
                <Hearts value={game.coupleScore} />
              </div>
              <div>
                <span className="verdict__label">Overall</span>
                <span className="verdict__num">
                  <StarDoodle /> {game.rating.toFixed(1)}
                  <small>/5</small>
                </span>
              </div>
            </div>
            <p className="verdict__sign hand">from our couch to yours ♡</p>
          </section>

          <AboutTheAuthor />

          {inCategories.length > 0 && (
            <p className="also-in">
              Find {game.title} in{' '}
              {inCategories.map((c, i) => (
                <span key={c.slug}>
                  <Link to={c.path}>{c.h1.toLowerCase()}</Link>
                  {i < inCategories.length - 1 ? ' and ' : '.'}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>

      <section className="section similar" aria-labelledby="similar-title">
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <p className="section-head__eyebrow">if you liked this</p>
              <h2 id="similar-title">Similar games for couples</h2>
            </div>
            <Link to="/games" className="text-link">
              All reviews <ArrowRight />
            </Link>
          </div>
          <div className="grid similar-grid">
            {similar.map((g, i) => (
              <GameCard key={g.slug} game={g} tone={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
