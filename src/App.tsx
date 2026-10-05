import { useEffect, useRef } from 'react'
import { useRouter } from './lib/router'
import { applyHead } from './lib/seo'
import { resolveRoute } from './routes'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function App() {
  const { path, hash } = useRouter()
  const route = resolveRoute(path)
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    applyHead(route.meta)
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    // After client-side navigation: start at the top (or the anchor) and move focus to the new content.
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    mainRef.current?.focus({ preventScroll: true })
  }, [path])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        {route.element}
      </main>
      <Footer />
    </>
  )
}
