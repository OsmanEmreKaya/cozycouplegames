import type { ArtTheme } from './types'

export interface Guide {
  slug: string
  /** Use {n} to insert the number of picks, so titles never drift from the list. */
  title: string
  description: string
  excerpt: string
  kicker: string
  published: string
  updated: string
  art: ArtTheme
  intro: string[]
  picks: { game: string; heading: string; note: string }[]
  outro: string
}

export const guides: Guide[] = [
  {
    slug: 'best-cozy-games-for-couples',
    title: '{n} Best Cozy Games for Couples',
    description:
      'Our favorite cozy games to play as a couple: gentle co-op farming, gardening and adventure games, picked for how well each one works for two.',
    excerpt: 'The co-op games we keep coming back to, and what each one is best for.',
    kicker: 'Our list',
    published: '2026-03-12',
    updated: '2026-09-28',
    art: 'garden',
    intro: [
      'Our answer to “what should we play together?” Some of these have endings and some never stop, but all of them work well for two.',
      'We ranked them on how well they work as a pair: whether both players get something meaningful to do, how forgiving they are to a less experienced player, and whether a long session ends in a good mood.',
    ],
    picks: [
      { game: 'stardew-valley', heading: 'Best overall', note: 'One farm, two farmers. Split the chores, meet up at night, repeat for months.' },
      { game: 'our-flower-garden', heading: 'Best for every day', note: 'A shared garden on your phones. A few minutes a day, with no timers, so it works when life is busy or you’re apart.' },
      { game: 'animal-crossing-new-horizons', heading: 'Best for decorating', note: 'Better as a shared hobby than a true co-op game, but great for making a place feel like yours.' },
      { game: 'sky-children-of-the-light', heading: 'Most romantic', note: 'Hold hands and fly. It’s free and works on almost every device.' },
      { game: 'palia', heading: 'Best free farming', note: 'A cozy online world where you can visit and help with each other’s gardens.' },
      { game: 'spiritfarer', heading: 'Best story', note: 'Beautiful and emotional. Player two plays the cat, which is a better role than it sounds.' },
      { game: 'unravel-two', heading: 'Best weekend game', note: 'Short and pretty. Two yarn creatures, one thread.' },
      { game: 'snipperclips', heading: 'Best first game', note: 'Cute paper puzzles that need zero gaming experience.' },
    ],
    outro:
      'If you can only pick one: Stardew Valley for long weekends together, Our Flower Garden for every day in between.',
  },
  {
    slug: 'best-mobile-games-for-long-distance-couples',
    title: 'Best Mobile Games for Long-Distance Couples',
    description:
      'Phone games that make a long-distance relationship feel closer: shared gardens, cross-platform worlds and chat games for iPhone and Android.',
    excerpt: 'Shared worlds that fit into busy days and different time zones.',
    kicker: 'Long distance',
    published: '2026-04-02',
    updated: '2026-09-20',
    art: 'bubbles',
    intro: [
      'When you live apart, the hard part is often the in-between: the hours when you’re both busy and the days when calls are short. Phone games fit those gaps well.',
      'Everything here has real shared play, not just a shared leaderboard.',
    ],
    picks: [
      { game: 'our-flower-garden', heading: 'Best for different time zones', note: 'You each look after the same garden whenever you’re awake, so you wake up to flowers your partner watered.' },
      { game: 'sky-children-of-the-light', heading: 'Best for a call date', note: 'Meet up in the clouds, sit together and talk. Works across iPhone, Android and more.' },
      { game: 'gamepigeon', heading: 'Best for iPhone couples', note: 'Tiny games in your iMessage chat. A great running rivalry.' },
      { game: 'minecraft', heading: 'Best for building', note: 'Start a shared world on your phones and keep adding to it.' },
    ],
    outro:
      'A good combination: one daily game (Our Flower Garden) plus one date-night game (Sky). Small moments and big ones.',
  },
  {
    slug: 'relaxing-games-to-play-with-your-partner',
    title: 'Relaxing Games to Play With Your Partner',
    description:
      'Calm, low-stress games to play with your partner after a long day. No timers and no shouting.',
    excerpt: 'For evenings when you both want to unwind, not compete.',
    kicker: 'Unwind',
    published: '2026-05-10',
    updated: '2026-09-12',
    art: 'clouds',
    intro: [
      'Some evenings you want an adventure. Others you want to sit close and do something calm. This list is for those.',
      'None of these games have timers that stress you out or bosses that need serious skill.',
    ],
    picks: [
      { game: 'sky-children-of-the-light', heading: 'For quiet wonder', note: 'Wordless and calm. Best with headphones.' },
      { game: 'our-flower-garden', heading: 'For tiny rituals', note: 'Water, harvest, finish an order. Five minutes.' },
      { game: 'animal-crossing-new-horizons', heading: 'For slow evenings', note: 'Catch fish, decorate, and talk about nothing much.' },
      { game: 'unravel-two', heading: 'For a soft adventure', note: 'Easy puzzles and great scenery.' },
      { game: 'spiritfarer', heading: 'For deep conversations', note: 'Relaxing to play, emotional to experience.' },
    ],
    outro: 'Pick whichever matches your mood tonight.',
  },
  {
    slug: 'cozy-farming-games-for-two',
    title: 'Cozy Farming Games for Two',
    description:
      'The best farming and gardening games to play as a couple, from Stardew Valley to shared flower gardens on your phones.',
    excerpt: 'Plant, water, harvest and build a life together.',
    kicker: 'Farming',
    published: '2026-06-01',
    updated: '2026-09-05',
    art: 'farm',
    intro: [
      'Growing things together is oddly romantic, even when they’re pixel parsnips. Farming games give you shared goals, a daily routine and something to show for your evenings.',
    ],
    picks: [
      { game: 'stardew-valley', heading: 'The classic', note: 'One farm, two farmers. Still the best.' },
      { game: 'our-flower-garden', heading: 'The pocket garden', note: 'A shared flower garden on your phones. The easiest way to farm together every day.' },
      { game: 'palia', heading: 'The free online one', note: 'Separate gardens, shared world. Help each other out.' },
      { game: 'animal-crossing-new-horizons', heading: 'The gardening one', note: 'Not a farm exactly, but flower-breeding is a serious couple hobby.' },
    ],
    outro: 'If you’ve finished Stardew together and want something new, try Palia for a bigger world or Our Flower Garden for a daily habit.',
  },
  {
    slug: 'best-free-games-for-couples',
    title: 'Best Free Games for Couples',
    description:
      'Good free games for couples that are cozy, cross-platform and not pushy about payments.',
    excerpt: 'Great games for two that don’t cost a thing to start.',
    kicker: 'Free',
    published: '2026-06-20',
    updated: '2026-08-30',
    art: 'meadow',
    intro: [
      'Free games have a reputation for nagging you to pay. You can enjoy all of these without spending anything.',
    ],
    picks: [
      { game: 'our-flower-garden', heading: 'Best free cozy game', note: 'A shared garden on iPhone and Android. Optional purchases, zero pressure.' },
      { game: 'sky-children-of-the-light', heading: 'Best free adventure', note: 'Beautiful, cross-platform and full of small romantic gestures.' },
      { game: 'palia', heading: 'Best free farming', note: 'A big cozy online world, free on PC and consoles.' },
      { game: 'gamepigeon', heading: 'Best free chat game', note: 'Small games in your iMessage chat, ideal for busy days.' },
    ],
    outro: 'Start with one of these before buying anything. You’ll learn quickly what kind of games you like playing together.',
  },
]

export const guideTitle = (g: Guide) => g.title.replace('{n}', String(g.picks.length))

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug)
