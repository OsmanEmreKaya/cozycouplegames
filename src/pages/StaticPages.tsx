import { guides } from '../data/guides'
import { categories } from '../data/categories'
import { SITE } from '../lib/seo'
import { Link } from '../lib/router'
import { GuideCard, CategoryIcon } from '../components/Cards'
import { HeroArt } from '../components/HeroArt'
import { ArrowRight, FlowerDoodle, HeartDoodle } from '../components/Doodles'
import { PageIntro } from './PageIntro'
import { authors } from '../data/authors'
import { AuthorCard } from '../components/Author'

export function GuidesIndex() {
  return (
    <>
      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Guides' }]}
        eyebrow={
          <>
            <FlowerDoodle /> from the notebook
          </>
        }
        title="Guides"
        tint="sage"
      >
        <p>
          Short lists for specific situations: long distance, tight budgets, nights when you just want to relax.
          We keep them updated as we play new things.
        </p>
      </PageIntro>
      <section className="section section--tight">
        <div className="container">
          <div className="grid three-up">
            {guides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function About() {
  return (
    <>
      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow={
          <>
            <HeartDoodle /> hello there
          </>
        }
        title="A cozy little corner of the internet"
        tint="peach"
      >
        <p>Cozy Couple Games helps couples find games worth playing together.</p>
      </PageIntro>
      <section className="section section--tight">
        <div className="container container--narrow">
          <div className="about-art">
            <HeroArt />
          </div>
          <div className="prose">
            <p>
              Most “games for couples” lists read like summaries of store pages. We wanted a small site that answers the
              question those lists skip: does this game actually work for two people, and for which two people?
            </p>
            <h2>How we choose games</h2>
            <ul>
              <li>
                <strong>We play it together first.</strong> No game is listed because of a press release.
              </li>
              <li>
                <strong>Both players should matter.</strong> We look for games where the second player isn’t just a
                spectator.
              </li>
              <li>
                <strong>Kind to newcomers.</strong> Lots of couples have one “gamer” and one curious partner. We note
                which games work for both.
              </li>
              <li>
                <strong>Honest about the catch.</strong> Every review has a “things to know” section, because every game
                has one.
              </li>
            </ul>
            <h2>A small site, on purpose</h2>
            <p>
              We’d rather have a few really good pages than hundreds of thin ones. If a game isn’t here, it’s usually
              because we haven’t played it properly yet, not because it isn’t good.
            </p>
            {authors.length > 0 && (
              <>
                <h2 id="authors">Who we are</h2>
                <div className="authors-list">
                  {authors.map((a) => (
                    <AuthorCard key={a.slug} author={a} />
                  ))}
                </div>
              </>
            )}
            <p>
              Have a game you think we’d love? <Link to="/contact">Tell us about it</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export function Contact() {
  return (
    <>
      <PageIntro crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} eyebrow="say hi" title="Contact" tint="sky">
        <p>Send game suggestions, corrections, or a story about a game you played together. We read everything.</p>
      </PageIntro>
      <section className="section section--tight">
        <div className="container container--narrow">
          <div className="letter">
            <p className="hand letter__to">Dear Cozy Couple Games,</p>
            <p>The easiest way to reach us is by email:</p>
            <p>
              <a className="btn btn--primary" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p className="letter__small">
              We usually reply within a few days. Developers are welcome to tell us about their games, but we can’t
              promise coverage.
            </p>
            <HeartDoodle className="letter__heart" />
          </div>
        </div>
      </section>
    </>
  )
}

export function Privacy() {
  return (
    <>
      <PageIntro crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy' }]} title="Privacy" tint="sage">
        <p>The short version: we don’t track you, and we don’t sell anything about you.</p>
      </PageIntro>
      <section className="section section--tight">
        <div className="container container--narrow prose">
          <h2>What we collect</h2>
          <p>
            This site doesn’t use accounts, advertising trackers or analytics cookies. Our hosting provider may keep
            standard server logs (like IP address and pages requested) for security and reliability.
          </p>
          <h2>Fonts</h2>
          <p>Our fonts are hosted on this site, so loading a page doesn’t send requests to third-party font services.</p>
          <h2>External links</h2>
          <p>
            When you follow a link to an app store or a game’s website, that site’s own privacy policy applies.
          </p>
          <h2>Questions</h2>
          <p>
            Email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <section className="section not-found">
      <div className="container container--narrow">
        <p className="hand not-found__note">oh no, we got lost</p>
        <h1>This page wandered off</h1>
        <p>Maybe it went to water the garden. Here are some places to start instead:</p>
        <ul role="list" className="not-found__links">
          <li>
            <Link to="/games" className="other-cat tint-blush">
              <CategoryIcon kind="hearts" />
              <span>All game reviews</span>
              <ArrowRight />
            </Link>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <Link to={c.path} className={`other-cat tint-${c.tint}`}>
                <CategoryIcon kind={c.icon} />
                <span>{c.h1}</span>
                <ArrowRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
