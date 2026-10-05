import type { MoodSlug } from './types'

export type IconKind = 'hearts' | 'sprout' | 'phone' | 'moon'
export type Tint = 'blush' | 'sage' | 'peach' | 'sky'

export interface Category {
  slug: string
  path: string
  /** Short label for cards and navigation. */
  name: string
  h1: string
  seoTitle: string
  description: string
  cardLine: string
  icon: IconKind
  tint: Tint
  intro: string[]
  games: string[]
  lookFor: { title: string; text: string }[]
  faq: { q: string; a: string }[]
  guides: string[]
}

export const categories: Category[] = [
  {
    slug: 'cozy-games',
    path: '/cozy-games',
    name: 'Cozy Games',
    h1: 'Cozy games for couples',
    seoTitle: 'Cozy Games for Couples to Play Together',
    description:
      'Relaxing co-op games for couples: farming, gardening, decorating and slow adventures to share on the couch or online.',
    cardLine: 'Slow games for blanket-and-tea evenings.',
    icon: 'sprout',
    tint: 'sage',
    intro: [
      'Cozy games are the ones you can play with a cup of tea in one hand. Nothing chases you, failure costs very little, and the goal is usually to make a place a bit nicer than you found it.',
      'We picked these for how well they work with two people, not just how good they are alone.',
    ],
    games: [
      'our-flower-garden',
      'stardew-valley',
      'animal-crossing-new-horizons',
      'spiritfarer',
      'palia',
      'sky-children-of-the-light',
      'unravel-two',
    ],
    lookFor: [
      { title: 'Low pressure', text: 'No harsh fail states, so a newer player never feels like they’re “ruining it.”' },
      { title: 'Room for two styles', text: 'One of you can decorate while the other fishes. Both count as playing.' },
      { title: 'A shared place', text: 'The best cozy co-op games give you something to build and come back to.' },
    ],
    faq: [
      {
        q: 'What makes a game “cozy”?',
        a: 'Slow pacing, soft visuals, little or no violence, and a focus on making or caring for things: gardens, homes, animals, friendships.',
      },
      {
        q: 'What’s the best cozy game for a partner who doesn’t play games?',
        a: 'Our Flower Garden on your phones, or Stardew Valley if you have a console or PC. Both are forgiving and easy to learn.',
      },
    ],
    guides: ['best-cozy-games-for-couples', 'cozy-farming-games-for-two'],
  },
  {
    slug: 'mobile-games',
    path: '/mobile-games',
    name: 'Mobile Games',
    h1: 'Mobile games for couples',
    seoTitle: 'Best Mobile Games for Couples (iPhone & Android)',
    description:
      'Phone games couples can actually play together: shared gardens, cross-platform worlds and mini-games inside your chats. Most are free.',
    cardLine: 'Games for two that fit in your pocket.',
    icon: 'phone',
    tint: 'peach',
    intro: [
      'You already use your phones to stay in touch. These games turn a few spare minutes into something you do together.',
      'We only include games with real shared play. Many popular “couple games” are single-player apps with a leaderboard.',
    ],
    games: ['our-flower-garden', 'sky-children-of-the-light', 'gamepigeon', 'minecraft'],
    lookFor: [
      { title: 'Real multiplayer', text: 'A shared world or shared progress, not just a leaderboard.' },
      { title: 'iPhone + Android', text: 'If you’re on different phones, check cross-platform support first.' },
      { title: 'Kind monetisation', text: 'Free is great, as long as it doesn’t constantly nag you to pay.' },
    ],
    faq: [
      {
        q: 'Can we play Stardew Valley together on our phones?',
        a: 'Not right now. The mobile version of Stardew Valley is single-player. Our Flower Garden or Minecraft are good alternatives.',
      },
      {
        q: 'Are there couple games that work between iPhone and Android?',
        a: 'Yes: Our Flower Garden, Sky: Children of the Light and Minecraft (Bedrock) all work across both.',
      },
    ],
    guides: ['best-mobile-games-for-long-distance-couples', 'best-free-games-for-couples'],
  },
  {
    slug: 'long-distance-games',
    path: '/long-distance-games',
    name: 'Long Distance',
    h1: 'Games for long-distance couples',
    seoTitle: 'Games for Long-Distance Couples to Play Online',
    description:
      'The best games to play online with a long-distance partner: shared gardens, cozy worlds and co-op adventures for date nights across time zones.',
    cardLine: 'Ways to spend an evening together, miles apart.',
    icon: 'moon',
    tint: 'sky',
    intro: [
      'When you can’t share a couch, a shared game world is the next best thing. It gives you something to do on a call, and something to talk about besides logistics.',
      'Some of these suit long date nights. Others fit into the days when your schedules don’t line up.',
    ],
    games: [
      'our-flower-garden',
      'sky-children-of-the-light',
      'stardew-valley',
      'it-takes-two',
      'palia',
      'minecraft',
      'gamepigeon',
      'overcooked-all-you-can-eat',
    ],
    lookFor: [
      { title: 'Asynchronous play', text: 'Games you can progress in separately help a lot across time zones.' },
      { title: 'Cross-platform', text: 'Different devices shouldn’t stop you. Several of these work almost anywhere.' },
      { title: 'One copy, two players', text: 'It Takes Two’s Friend’s Pass means only one of you needs to buy it.' },
    ],
    faq: [
      {
        q: 'What’s the best game for long-distance couples in different time zones?',
        a: 'Something asynchronous, like Our Flower Garden, where you each look after the same garden whenever you’re awake.',
      },
      {
        q: 'What’s a good free game for a long-distance date night?',
        a: 'Sky: Children of the Light. It’s free and works on phones, consoles and PC.',
      },
    ],
    guides: ['best-mobile-games-for-long-distance-couples', 'relaxing-games-to-play-with-your-partner'],
  },
]

/** The four homepage entry points. "Games for Couples" is the full review index. */
export const featuredCategories: { name: string; path: string; line: string; icon: IconKind; tint: Tint }[] = [
  {
    name: 'Games for Couples',
    path: '/games',
    line: 'Every game we’ve played together and loved.',
    icon: 'hearts',
    tint: 'blush',
  },
  ...categories.map((c) => ({ name: c.name === 'Long Distance' ? 'Long Distance Games' : c.name, path: c.path, line: c.cardLine, icon: c.icon, tint: c.tint })),
]

export const getCategory = (path: string) => categories.find((c) => c.path === path)

export interface Mood {
  slug: MoodSlug
  emoji: string
  label: string
  line: string
}

export const moods: Mood[] = [
  { slug: 'build-together', emoji: '🌱', label: 'Build something together', line: 'Farms, gardens, tiny homes' },
  { slug: 'relax-together', emoji: '😌', label: 'Relax together', line: 'Soft, slow and low-pressure' },
  { slug: 'laugh-together', emoji: '😂', label: 'Laugh together', line: 'Silly, chaotic, very loud' },
  { slug: 'compete-a-little', emoji: '🏆', label: 'Compete a little', line: 'Friendly rivalry only' },
  { slug: 'long-distance-date-night', emoji: '💌', label: 'Long-distance date night', line: 'Play together, miles apart' },
  { slug: 'couch-co-op', emoji: '🎮', label: 'Couch co-op', line: 'Same sofa, shared blanket' },
]

export const getMood = (slug: string | null) => moods.find((m) => m.slug === slug)
