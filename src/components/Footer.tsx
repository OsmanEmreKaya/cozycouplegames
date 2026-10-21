import { Link } from '../lib/router'
import { games } from '../data/games'
import { categories } from '../data/categories'
import { guides, guideTitle } from '../data/guides'
import { Logo } from './Logo'
import { FlowerDoodle, HeartDoodle, StarDoodle } from './Doodles'

const siteLinks = [
  { label: 'All reviews', to: '/games' },
  ...categories.map((c) => ({ label: c.seoTitle.replace(/ \(.*\)$/, ''), to: c.path })),
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
]

/**
 * Every review and guide is linked from every page, so crawlers reach each one
 * in a single hop from wherever they land.
 */
const columns = [
  { title: 'Reviews', links: games.map((g) => ({ label: g.title, to: `/games/${g.slug}` })) },
  { title: 'Guides', links: [...guides.map((g) => ({ label: guideTitle(g, { year: false }), to: `/guides/${g.slug}` })), { label: 'All guides', to: '/guides' }] },
  { title: 'Cozy Couple Games', links: siteLinks },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__doodles" aria-hidden>
          <StarDoodle />
          <HeartDoodle />
          <FlowerDoodle />
        </div>
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <Logo tagline />
            <p>Helping couples find games worth playing together.</p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="site-footer__col">
              <h2 className="site-footer__heading">{col.title}</h2>
              <ul role="list" className="site-footer__links">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="site-footer__small">
          © {new Date().getFullYear()} Cozy Couple Games · Made with care, played on the couch.
        </p>
        <p className="site-footer__legal">
          App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.
        </p>
      </div>
    </footer>
  )
}
