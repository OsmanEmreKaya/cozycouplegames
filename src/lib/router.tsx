import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

/**
 * A tiny history-API router. The site only has a handful of route shapes,
 * so this keeps the bundle small instead of pulling in a routing library.
 */

interface Location {
  path: string
  search: string
  hash: string
}

interface RouterValue extends Location {
  navigate: (to: string, opts?: { replace?: boolean }) => void
}

const RouterContext = createContext<RouterValue | null>(null)

function parse(url: string): Location {
  const u = new URL(url, 'https://x.local')
  const path = u.pathname.length > 1 ? u.pathname.replace(/\/+$/, '') : '/'
  return { path, search: u.search, hash: u.hash }
}

export function Router({ url, children }: { url: string; children: ReactNode }) {
  const [location, setLocation] = useState(() => parse(url))

  useEffect(() => {
    const onPop = () => setLocation(parse(window.location.href))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to: string, opts?: { replace?: boolean }) => {
    if (opts?.replace) window.history.replaceState(null, '', to)
    else window.history.pushState(null, '', to)
    setLocation(parse(to))
  }, [])

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used inside <Router>')
  return ctx
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter()
  const isExternal = /^(https?:|mailto:|tel:)/.test(to)

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (
      e.defaultPrevented ||
      isExternal ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      rest.target
    ) {
      return
    }
    e.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
