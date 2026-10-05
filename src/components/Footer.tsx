import { Link } from '../lib/router'
import { Logo } from './Logo'
import { FlowerDoodle, HeartDoodle, StarDoodle } from './Doodles'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Games', to: '/games' },
  { label: 'Guides', to: '/guides' },
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
          <nav aria-label="Footer">
            <ul role="list" className="site-footer__links">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="site-footer__small">
          © {new Date().getFullYear()} Cozy Couple Games · Made with care, played on the couch.
        </p>
      </div>
    </footer>
  )
}
