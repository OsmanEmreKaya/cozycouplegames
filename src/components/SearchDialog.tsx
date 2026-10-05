import { useEffect, useMemo, useRef, useState } from 'react'
import { games } from '../data/games'
import { guides, guideTitle } from '../data/guides'
import { categories } from '../data/categories'
import { Link } from '../lib/router'
import { CloseIcon, SearchIcon } from './Doodles'

interface Entry {
  kind: 'Game' | 'Guide' | 'Category'
  title: string
  to: string
  meta: string
  haystack: string
}

const index: Entry[] = [
  ...games.map((g) => ({
    kind: 'Game' as const,
    title: g.title,
    to: `/games/${g.slug}`,
    meta: g.platforms.join(' · '),
    haystack: [g.title, g.blurb, ...g.tags, ...g.platforms, g.isFree ? 'free' : ''].join(' ').toLowerCase(),
  })),
  ...guides.map((g) => ({
    kind: 'Guide' as const,
    title: guideTitle(g),
    to: `/guides/${g.slug}`,
    meta: g.excerpt,
    haystack: [guideTitle(g), g.excerpt, g.kicker].join(' ').toLowerCase(),
  })),
  ...categories.map((c) => ({
    kind: 'Category' as const,
    title: c.h1,
    to: c.path,
    meta: c.cardLine,
    haystack: [c.h1, c.name, c.cardLine].join(' ').toLowerCase(),
  })),
]

const suggestions = ['long distance', 'free', 'farming', 'Switch', 'mobile']

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const results = useMemo(() => {
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
    if (!words.length) return []
    return index.filter((e) => words.every((w) => e.haystack.includes(w))).slice(0, 8)
  }, [query])

  return (
    <dialog
      ref={ref}
      className="search"
      aria-label="Search"
      onClose={() => {
        setQuery('')
        onClose()
      }}
      onClick={(e) => {
        // Clicking the backdrop closes the dialog.
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
    >
      <div className="search__panel">
        <div className="search__field">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search games, platforms, moods…"
            aria-label="Search games and guides"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button type="button" className="icon-btn" aria-label="Close search" onClick={() => ref.current?.close()}>
            <CloseIcon />
          </button>
        </div>

        {query.trim() === '' ? (
          <div className="search__empty">
            <p>Try something like:</p>
            <ul role="list" className="tags">
              {suggestions.map((s) => (
                <li key={s}>
                  <button type="button" className="tag search__chip" onClick={() => setQuery(s)}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : results.length ? (
          <ul role="list" className="search__results" aria-live="polite">
            {results.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="search__result" onClick={() => ref.current?.close()}>
                  <span className="search__kind">{r.kind}</span>
                  <span className="search__title">{r.title}</span>
                  <span className="search__meta">{r.meta}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="search__none" aria-live="polite">
            Nothing yet for “{query}”. Try a platform or a mood instead.
          </p>
        )}
      </div>
    </dialog>
  )
}
