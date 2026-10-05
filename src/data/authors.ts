/**
 * The real people behind the site. Bylines, author bios and schema.org `Person`
 * markup appear automatically once this list has at least one entry; until then
 * pages fall back to "Cozy Couple Games" as the author.
 *
 * Example:
 * {
 *   slug: 'sam',
 *   name: 'Sam Rivera',
 *   bio: 'Plays co-op games with their partner most evenings, mostly on a Switch balanced on a blanket.',
 *   photo: { src: '/authors/sam.webp', width: 160, height: 160 },
 *   links: [{ label: 'Bluesky', url: 'https://bsky.app/profile/…' }],
 * }
 */
export interface Author {
  slug: string
  name: string
  /** A team is marked up as an Organization in schema.org, a person as a Person. */
  kind: 'person' | 'team'
  bio: string
  /** A photo, or 'logo' to use the brand mark. */
  photo?: { src: string; width: number; height: number } | 'logo'
  /** Profiles elsewhere (Instagram, TikTok…). Shown in the bio and used as schema `sameAs`. */
  links?: { label: string; url: string }[]
}

export const authors: Author[] = [
  {
    slug: 'editorial-team',
    name: 'Cozy Couple Games Editorial Team',
    kind: 'team',
    bio: 'We test and curate cozy, co-op and couple-friendly games to help couples find games they’ll actually enjoy together, on the same couch or miles apart. Our recommendations focus on real gameplay, multiplayer setup, accessibility and how much fun each game is for two people.',
    photo: 'logo',
    // Add Instagram and TikTok here once the accounts exist, e.g. { label: 'Instagram', url: 'https://instagram.com/…' }
    links: [],
  },
]

/** The author credited on reviews and guides. */
export const primaryAuthor: Author | undefined = authors[0]
