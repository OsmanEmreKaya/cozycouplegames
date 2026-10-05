import { useEffect, useState } from 'react'
import { games } from '../data/games'
import { getMood, moods } from '../data/categories'
import { useRouter } from '../lib/router'
import { GameCard } from '../components/GameCard'
import { HeartDoodle } from '../components/Doodles'
import { PageIntro } from './PageIntro'

export function GamesIndex() {
  const { search, navigate } = useRouter()
  // The page is prerendered without a filter; read the URL only after hydration.
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  const moodSlug = hydrated ? new URLSearchParams(search).get('mood') : null
  const mood = getMood(moodSlug)
  const list = mood ? games.filter((g) => g.moods.includes(mood.slug)) : games

  useEffect(() => {
    if (hydrated) document.documentElement.classList.remove('mood-pending')
  }, [hydrated])

  const select = (slug: string | null) =>
    navigate(slug ? `/games?mood=${slug}` : '/games', { replace: true })

  return (
    <>
      <PageIntro
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]}
        eyebrow={
          <>
            <HeartDoodle /> every game, played together
          </>
        }
        title="Games for couples"
        tint="blush"
      >
        <p>
          Every review here looks at one question: how well does this game work for two people? Pick a mood below or
          browse them all.
        </p>
      </PageIntro>

      <section className="section section--tight" aria-labelledby="filter-title">
        <div className="container">
          <h2 id="filter-title" className="visually-hidden">
            Filter by mood
          </h2>
          <div className="chips" role="group" aria-label="Filter by mood">
            <button type="button" className="chip" aria-pressed={!mood} onClick={() => select(null)}>
              All games
            </button>
            {moods.map((m) => (
              <button
                key={m.slug}
                type="button"
                className="chip"
                aria-pressed={mood?.slug === m.slug}
                onClick={() => select(m.slug)}
              >
                <span aria-hidden>{m.emoji}</span> {m.label}
              </button>
            ))}
          </div>

          <p className="results-line" aria-live="polite">
            {mood ? (
              <>
                {list.length} games to <strong>{mood.label.toLowerCase()}</strong>
              </>
            ) : (
              <>{list.length} games, newest reviews first</>
            )}
          </p>

          <div className="grid listing-grid listing-grid--plain">
            {list.map((g, i) => (
              <GameCard key={g.slug} game={g} tone={i} headingLevel={2} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
