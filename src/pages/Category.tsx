import type { Category as CategoryData } from '../data/categories'
import { categories } from '../data/categories'
import { gamesBySlugs, getGame } from '../data/games'
import { gameIcon, imageSrc, imageSrcSet } from '../data/images'
import { StoreBadges } from '../components/StoreBadges'
import { getGuide } from '../data/guides'
import type { Guide } from '../data/guides'
import { Link } from '../lib/router'
import { GameCard } from '../components/GameCard'
import { CategoryIcon, GuideCard } from '../components/Cards'
import { SectionHead } from '../components/bits'
import { ArrowRight, HeartDoodle, StarDoodle } from '../components/Doodles'
import { PageIntro } from './PageIntro'

export function Category({ category }: { category: CategoryData }) {
  const list = gamesBySlugs(category.games)
  const guides = category.guides.map(getGuide).filter((g): g is Guide => Boolean(g))
  const others = categories.filter((c) => c.slug !== category.slug)
  const spotlight = category.spotlight ? getGame(category.spotlight.game) : undefined
  const spotlightIcon = spotlight ? gameIcon(spotlight.slug) : undefined

  return (
    <>
      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: category.name }]}
        eyebrow={
          <>
            <HeartDoodle /> {list.length} games we’ve played together
          </>
        }
        title={category.h1}
        tint={category.tint}
        art={
          <div className={`intro-icon tint-${category.tint}`}>
            <CategoryIcon kind={category.icon} />
          </div>
        }
      >
        {category.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </PageIntro>

      {spotlight && (
        <section className="container app-spotlight-wrap" aria-labelledby="spotlight-title">
          <div className="app-spotlight">
            {spotlightIcon && (
              <img
                className="app-spotlight__icon"
                src={imageSrc(spotlightIcon)}
                srcSet={imageSrcSet(spotlightIcon)}
                sizes="96px"
                alt={spotlightIcon.alt}
                width={spotlightIcon.width}
                height={spotlightIcon.height}
              />
            )}
            <div className="app-spotlight__text">
              <p className="app-spotlight__note hand">
                <HeartDoodle /> {category.spotlight!.note}
              </p>
              <h2 id="spotlight-title">{spotlight.title}</h2>
              <p>{spotlight.review.lede}</p>
              <div className="app-spotlight__actions">
                <StoreBadges game={spotlight} path={category.path} />
                <Link to={`/games/${spotlight.slug}`} className="text-link">
                  Read our review <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section section--tight" aria-label={`${category.name} list`}>
        <div className="container">
          <ol role="list" className="grid listing-grid">
            {list.map((g, i) => (
              <li key={g.slug} className="listing-grid__item">
                <GameCard game={g} tone={i} headingLevel={2} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="look-for">
        <div className="container">
          <div className="look-for">
            <h2 id="look-for">
              <StarDoodle className="h-doodle" /> What we look for
            </h2>
            <ul role="list" className="look-for__list">
              {category.lookFor.map((l) => (
                <li key={l.title}>
                  <h3>{l.title}</h3>
                  <p>{l.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="faq-title">
        <div className="container container--narrow">
          <h2 id="faq-title" className="faq__title">
            Little questions
          </h2>
          <div className="faq">
            {category.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="section section--tight" aria-labelledby="related-guides">
          <div className="container">
            <SectionHead id="related-guides" eyebrow="keep reading" title="Related guides" />
            <div className="grid two-up">
              {guides.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        </section>
      )}

      <nav className="container other-cats" aria-label="Other categories">
        {others.map((c) => (
          <Link key={c.slug} to={c.path} className={`other-cat tint-${c.tint}`}>
            <CategoryIcon kind={c.icon} />
            <span>{c.h1}</span>
            <ArrowRight />
          </Link>
        ))}
      </nav>
    </>
  )
}
