import { useEffect, useRef, useState } from 'react'
import { Link, useRouter } from '../lib/router'
import { Logo } from './Logo'
import { CloseIcon, FlowerDoodle, MenuIcon, SearchIcon } from './Doodles'
import { SearchDialog } from './SearchDialog'
import './layout.css'

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Cozy Games', to: '/cozy-games' },
  { label: 'Mobile Games', to: '/mobile-games' },
  { label: 'Long Distance', to: '/long-distance-games' },
  { label: 'Reviews', to: '/games' },
  { label: 'About', to: '/about' },
]

function isActive(current: string, to: string) {
  if (to === '/') return current === '/'
  return current === to || current.startsWith(to + '/')
}

export function Header() {
  const { path } = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  // Close the mobile menu whenever the page changes.
  useEffect(() => setMenuOpen(false), [path])

  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  // "/" opens search, like many reading sites.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (e.key === '/' && !/input|textarea/i.test(target.tagName) && !target.isContentEditable) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />

        <nav className="site-nav" aria-label="Main">
          <ul role="list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="site-nav__link"
                  aria-current={isActive(path, item.to) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button type="button" className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search games and guides">
            <SearchIcon />
          </button>
          <button
            ref={menuButton}
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-open={menuOpen} hidden={!menuOpen}>
        <nav aria-label="Mobile" className="container">
          <ul role="list" className="mobile-menu__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} aria-current={isActive(path, item.to) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/guides" aria-current={isActive(path, '/guides') ? 'page' : undefined}>
                Guides
              </Link>
            </li>
          </ul>
          <p className="mobile-menu__note">
            <FlowerDoodle /> <span className="hand">games are better together</span>
          </p>
        </nav>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
