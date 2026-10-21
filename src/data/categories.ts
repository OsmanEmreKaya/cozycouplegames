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
  /** The game we recommend most on this page, shown above the list with store badges. */
  spotlight?: { game: string; note: string }
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
      'disney-dreamlight-valley',
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
      'The best phone games for couples on iPhone and Android, whether you’re side by side on the sofa or in different places. Most are free.',
    cardLine: 'Games for two that fit in your pocket.',
    icon: 'phone',
    tint: 'peach',
    intro: [
      'You already have the console in your pocket. These are the phone games that work best for two: some you play side by side on the sofa, some you keep going in the background of your day, and a few you play live together.',
      'We only include games with real shared play. Many popular “couple games” on the App Store and Google Play are quizzes or single-player apps with a shared leaderboard.',
      'Before you install anything, check two things: whether you’re both on iPhone or one of you is on Android, and whether you want something calm or a bit competitive. The cards below show both.',
    ],
    games: ['our-flower-garden', 'sky-children-of-the-light', 'minecraft', 'gamepigeon', 'words-with-friends', 'uno-mobile', 'pokemon-go'],
    lookFor: [
      { title: 'Real multiplayer', text: 'A shared world or shared progress, not just a leaderboard.' },
      { title: 'iPhone + Android', text: 'If you’re on different phones, check cross-platform support first. iMessage games like GamePigeon only work between iPhones.' },
      { title: 'Kind monetisation', text: 'Free is great, as long as it doesn’t constantly nag you to pay. We note ads and purchases on every review.' },
    ],
    faq: [
      {
        q: 'Can we play Stardew Valley together on our phones?',
        a: 'Not right now. The mobile version of Stardew Valley is single-player. Our Flower Garden or Minecraft are good alternatives.',
      },
      {
        q: 'Are there couple games that work between iPhone and Android?',
        a: 'Yes: Our Flower Garden, Sky: Children of the Light, Minecraft (Bedrock), Words With Friends, UNO! and Pokémon GO all work across both.',
      },
      {
        q: 'What are the best free phone games for couples?',
        a: 'Our Flower Garden, Sky: Children of the Light, GamePigeon, Words With Friends, UNO! and Pokémon GO are all free to download. Minecraft is the only paid game on this page.',
      },
      {
        q: 'What can we play on our phones sitting next to each other?',
        a: 'Minecraft and Sky are great side by side. GamePigeon and UNO! are good for quick rounds, and Our Flower Garden for a few calm minutes before bed.',
      },
      {
        q: 'What about phone games for long-distance couples?',
        a: 'We have a separate guide to phone games for long-distance couples, with picks for different time zones and video-call dates.',
      },
    ],
    guides: ['best-iphone-games-for-couples', 'best-android-games-for-couples', 'best-free-games-for-couples', 'best-mobile-games-for-long-distance-couples'],
    spotlight: { game: 'our-flower-garden', note: 'our pick for two phones' },
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
      'split-fiction',
      'minecraft',
      'valheim',
      'portal-2',
      'sea-of-thieves',
      'moving-out-2',
      'gamepigeon',
      'overcooked-all-you-can-eat',
    ],
    lookFor: [
      { title: 'Asynchronous play', text: 'Games you can progress in separately help a lot across time zones.' },
      { title: 'Cross-platform', text: 'Different devices shouldn’t stop you. Several of these work almost anywhere.' },
      { title: 'One copy, two players', text: 'The Friend’s Pass in It Takes Two and Split Fiction means only one of you needs to buy the game.' },
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
    guides: ['best-mobile-games-for-long-distance-couples', 'date-night-games-for-couples'],
    spotlight: { game: 'our-flower-garden', note: 'our pick for different time zones' },
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
