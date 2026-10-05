export type Platform =
  | 'iPhone'
  | 'Android'
  | 'Switch'
  | 'PC'
  | 'Mac'
  | 'PlayStation'
  | 'Xbox'

export type Tag =
  | 'Cozy'
  | 'Co-op'
  | 'Mobile'
  | 'Long Distance'
  | 'Free'
  | 'Farming'
  | 'Relaxing'
  | 'Puzzle'
  | 'Story'
  | 'Building'
  | 'Chaotic'
  | 'Couch Co-op'
  | 'Competitive'

export type MoodSlug =
  | 'build-together'
  | 'relax-together'
  | 'laugh-together'
  | 'compete-a-little'
  | 'long-distance-date-night'
  | 'couch-co-op'

/** Illustration themes used by <GameArt /> until real screenshots are added. */
export type ArtTheme =
  | 'garden'
  | 'farm'
  | 'split'
  | 'yarn'
  | 'clouds'
  | 'island'
  | 'blocks'
  | 'kitchen'
  | 'paper'
  | 'boat'
  | 'race'
  | 'bubbles'
  | 'meadow'

export interface Game {
  slug: string
  title: string
  /** One-line card description, written like a friend's recommendation. */
  blurb: string
  platforms: Platform[]
  tags: Tag[]
  moods: MoodSlug[]
  badge?: string
  /** Our overall score out of 5. */
  rating: number
  /** How well it works specifically as a couple's game, 1–5 hearts. */
  coupleScore: number
  price: string
  isFree: boolean
  players: string
  online: string
  local: string
  crossPlatform: string
  developer: string
  /** Illustration used when no official image is available (see src/data/images.json). */
  art: ArtTheme
  links?: { label: string; url: string }[]
  review: {
    lede: string
    why: string[]
    together: string[]
    bestFor: string[]
    knowBefore: string[]
    verdict: string
  }
  similar: string[]
  updated: string
}
