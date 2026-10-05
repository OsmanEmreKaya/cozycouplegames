import { games, getGame, gamesBySlugs } from '../data/games'
import { featuredCategories, moods } from '../data/categories'
import { guides } from '../data/guides'
import { Link } from '../lib/router'
import { HeroArt } from '../components/HeroArt'
import { GameCard, platformsLabel } from '../components/GameCard'
import { CategoryCard, GuideCard, MoodLink } from '../components/Cards'
import { Hearts, SectionHead, GameMedia } from '../components/bits'
import { ArrowRight, CheckDoodle, ControllerDoodle, FlowerDoodle, HeartDoodle, StarDoodle } from '../components/Doodles'
import './home.css'

const featured = gamesBySlugs([
  'stardew-valley',
  'our-flower-garden',
  'it-takes-two',
  'sky-children-of-the-light',
  'snipperclips',
])

export function Home() {
  const pick = getGame('our-flower-garden')!
  const [leadGuide, ...moreGuides] = guides

  return (
    <>
      {/* 1 · Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__note hand">
              <HeartDoodle /> for couch dates &amp; long-distance nights
            </p>
            <h1 id="hero-title">
              Find your next cozy game to play <span className="hero__together">together.</span>
            </h1>
            <p className="hero__lede">
              Cute, relaxing and genuinely fun games for couples — whether you’re on the same couch or miles apart.
            </p>
            <div className="hero__actions">
              <Link to="/games" className="btn btn--primary">
                Explore Games <ArrowRight />
              </Link>
              <Link to="/long-distance-games" className="btn btn--soft btn--small">
                Games for Long Distance Couples
              </Link>
            </div>
            <p className="hero__trust">
              <StarDoodle /> {games.length} games, each reviewed for how well it works for two.
            </p>
          </div>
          <div className="hero__art">
            <HeroArt />
            <ControllerDoodle className="hero__doodle hero__doodle--controller" />
            <FlowerDoodle className="hero__doodle hero__doodle--flower" />
          </div>
        </div>
      </section>

      {/* 2 · Featured categories */}
      <section className="section section--tight" aria-labelledby="cats-title">
        <div className="container">
          <SectionHead id="cats-title" eyebrow="start here" title="Where should we begin?" />
          <div className="grid cat-grid">
            {featuredCategories.map((c, i) => (
              <CategoryCard key={c.path} {...c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Featured games */}
      <section className="section" aria-labelledby="featured-title">
        <div className="container">
          <SectionHead
            id="featured-title"
            eyebrow={
              <>
                <HeartDoodle /> hand-picked
              </>
            }
            title="Games we think you’ll love"
            lede="The games we recommend most often, with a note on who each one suits."
            action={
              <Link to="/games" className="text-link">
                See all reviews <ArrowRight />
              </Link>
            }
          />
          <div className="grid featured-grid">
            {featured.map((g, i) => (
              <GameCard key={g.slug} game={g} tone={i} wide={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Editor's pick */}
      <section className="pick" aria-labelledby="pick-title">
        <div className="container">
          <div className="pick__inner">
            <figure className="pick__media">
              <div className="pick__polaroid">
                <span className="tape" aria-hidden />
                <div className="pick__shot">
                  <GameMedia game={pick} sizes="(min-width: 900px) 440px, 90vw" maxPhones={3} />
                </div>
                <figcaption className="hand">a little garden for two ♡</figcaption>
              </div>
              <StarDoodle className="pick__star" />
            </figure>

            <div className="pick__text">
              <p className="pick__eyebrow hand">
                <FlowerDoodle /> Our current favorite
              </p>
              <h2 id="pick-title">{pick.title}</h2>
              <p className="pick__lede">{pick.review.lede}</p>

              <h3 className="pick__subhead">Why couples may like it</h3>
              <ul role="list" className="checks">
                <li>
                  <CheckDoodle /> One shared garden, so you can see what your partner did.
                </li>
                <li>
                  <CheckDoodle /> No timers or pressure, so it fits around busy days.
                </li>
                <li>
                  <CheckDoodle /> Works across time zones.
                </li>
              </ul>

              <dl className="pick__facts">
                <div>
                  <dt>Platform</dt>
                  <dd>{platformsLabel(pick.platforms)}</dd>
                </div>
                <div>
                  <dt>Price</dt>
                  <dd>Free</dd>
                </div>
                <div>
                  <dt>Couple score</dt>
                  <dd>
                    <Hearts value={pick.coupleScore} />
                  </dd>
                </div>
              </dl>

              <Link to={`/games/${pick.slug}`} className="btn btn--primary">
                See the game <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Browse by mood */}
      <section className="section" aria-labelledby="mood-title">
        <div className="container">
          <SectionHead id="mood-title" eyebrow="tonight’s vibe" title="What are you in the mood for?" />
          <ul role="list" className="grid mood-grid">
            {moods.map((m) => (
              <li key={m.slug}>
                <MoodLink mood={m} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 · Latest guides */}
      <section className="section section--tight" aria-labelledby="guides-title">
        <div className="container">
          <SectionHead
            id="guides-title"
            eyebrow="from the notebook"
            title="Latest guides"
            action={
              <Link to="/guides" className="text-link">
                All guides <ArrowRight />
              </Link>
            }
          />
          <div className="guides-layout">
            <div className="guides-layout__lead">
              <GuideCard guide={leadGuide} />
            </div>
            <ul role="list" className="guides-layout__list">
              {moreGuides.map((g) => (
                <li key={g.slug}>
                  <GuideCard guide={g} layout="row" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
