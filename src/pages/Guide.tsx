import type { Guide as GuideData } from '../data/guides'
import { guides, guideTitle } from '../data/guides'
import { getGame } from '../data/games'
import { Link } from '../lib/router'
import { GameArt } from '../components/GameArt'
import { GuideCard } from '../components/Cards'
import { Breadcrumbs, GameMedia, Hearts, TagList, formatDate } from '../components/bits'
import { ArrowRight, FlowerDoodle, HeartDoodle } from '../components/Doodles'
import { platformsLabel } from '../components/GameCard'
import { AboutTheAuthor, AuthorName } from '../components/Author'
import './pages.css'

export function Guide({ guide }: { guide: GuideData }) {
  const title = guideTitle(guide)
  const more = guides.filter((g) => g.slug !== guide.slug).slice(0, 3)

  return (
    <article className="guide">
      <header className="guide__header container container--narrow">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Guides', to: '/guides' }, { label: title }]} />
        <p className="guide__kicker hand">
          <FlowerDoodle /> {guide.kicker}
        </p>
        <h1>{title}</h1>
        <p className="guide__dek">{guide.description}</p>
        <p className="guide__meta">
          By <AuthorName /> · Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
        </p>
      </header>

      <div className="container guide__cover">
        <GameArt theme={guide.art} />
      </div>

      <div className="container container--narrow guide__body">
        <div className="prose guide__intro">
          {guide.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <nav className="guide__toc" aria-labelledby="toc-title">
          <h2 id="toc-title">In this guide</h2>
          <ol>
            {guide.picks.map((p) => {
              const g = getGame(p.game)
              return g ? (
                <li key={p.game}>
                  <a href={`#${p.game}`}>{g.title}</a> <span>— {p.heading.toLowerCase()}</span>
                </li>
              ) : null
            })}
          </ol>
        </nav>

        <ol role="list" className="picks">
          {guide.picks.map((p, i) => {
            const g = getGame(p.game)
            if (!g) return null
            return (
              <li key={p.game} id={p.game} className={`pick-item tone-${i % 4}`}>
                <div className="pick-item__media">
                  <GameMedia game={g} sizes="(min-width: 700px) 240px, calc(100vw - 44px)" />
                </div>
                <div className="pick-item__body">
                  <p className="pick-item__heading">
                    <span className="pick-item__num">{i + 1}</span> {p.heading}
                  </p>
                  <h2>
                    <Link to={`/games/${g.slug}`}>{g.title}</Link>
                  </h2>
                  <p className="pick-item__platforms">
                    {platformsLabel(g.platforms, 4)} · {g.isFree ? 'Free' : 'Paid'}
                  </p>
                  <p>{p.note}</p>
                  <div className="pick-item__foot">
                    <TagList tags={g.tags} max={3} />
                    <Hearts value={g.coupleScore} />
                  </div>
                  <Link to={`/games/${g.slug}`} className="text-link">
                    Read our {g.title} review <ArrowRight />
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>

        <aside className="guide__outro">
          <HeartDoodle className="guide__outro-heart" />
          <p className="hand guide__outro-label">our two cents</p>
          <p>{guide.outro}</p>
        </aside>

        <AboutTheAuthor />
      </div>

      <section className="section section--tight" aria-labelledby="more-guides">
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <p className="section-head__eyebrow">keep reading</p>
              <h2 id="more-guides">More guides</h2>
            </div>
          </div>
          <div className="grid three-up">
            {more.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
