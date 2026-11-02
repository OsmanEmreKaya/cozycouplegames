import type { MoodSlug, Platform } from './types'
import { games } from './games'

export type IconKind = 'hearts' | 'sprout' | 'phone' | 'moon' | 'switch' | 'playstation' | 'desktop'
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
  /** Set on platform pages (Switch, PS5, PC), whose game lists are derived from each review's platforms. */
  platform?: Platform
}

/** Every reviewed game on a platform, best-for-couples first. */
const onPlatform = (platform: Platform) =>
  [...games]
    .filter((g) => g.platforms.includes(platform))
    .sort((a, b) => b.coupleScore - a.coupleScore || b.rating - a.rating)
    .map((g) => g.slug)

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
      'coral-island',
      'haven',
      'core-keeper',
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
    games: ['our-flower-garden', 'sky-children-of-the-light', 'minecraft', 'gamepigeon', 'words-with-friends', 'uno-mobile', 'pokemon-go', 'pokemon-tcg-pocket', 'wingspan'],
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
        a: 'Yes: Our Flower Garden, Sky: Children of the Light, Minecraft (Bedrock), Words With Friends, UNO!, Pokémon GO, Pokémon TCG Pocket and Wingspan all work across both.',
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
        q: 'What are some fun phone games to play with your partner?',
        a: 'For a laugh, UNO! and GamePigeon. For something you both build over time, Our Flower Garden or Minecraft. For a slow game that runs all week, Words With Friends. All of them are on this page, with notes on which phones they work on.',
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
      'we-were-here-together',
      'coral-island',
      'raft',
      'core-keeper',
      'plateup',
      'wingspan',
      'pokemon-tcg-pocket',
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
        q: 'What’s the best game for a long-distance couple who like puzzles?',
        a: 'We Were Here Together. You’re split up in a castle and solve puzzles by describing what you see over a walkie-talkie, and it works across PC, PlayStation, Xbox and Switch.',
      },
      {
        q: 'What’s a good free game for a long-distance date night?',
        a: 'Sky: Children of the Light. It’s free and works on phones, consoles and PC.',
      },
    ],
    guides: ['best-mobile-games-for-long-distance-couples', 'date-night-games-for-couples'],
    spotlight: { game: 'our-flower-garden', note: 'our pick for different time zones' },
  },
  {
    slug: 'switch-games',
    path: '/switch-games',
    name: 'Switch Games',
    h1: 'Switch games for couples',
    seoTitle: 'Best Nintendo Switch Games for Couples (2 Player)',
    description:
      'The best two-player Nintendo Switch games for couples: couch co-op on one console, online picks for long distance, and which ones need Switch Online.',
    cardLine: 'One console, a Joy-Con each.',
    icon: 'switch',
    tint: 'blush',
    platform: 'Switch',
    intro: [
      'The Switch is the easiest console to share. Slide off the Joy-Con and you have two controllers, prop up the kickstand and you have a screen anywhere in the house. A lot of the best couple games started here or found their audience here.',
      'Every game below is one we’ve reviewed for two people, sorted by how well it works as a couple’s game. Most play on one console. The ones that don’t, like Sky: Children of the Light and Palia, are online worlds where you each need your own Switch, or a phone or PC on the other end.',
      'Everything here also runs on Switch 2. A few games, including Super Mario Bros. Wonder, Valheim and Core Keeper, have Switch 2 editions or upgrades, and Split Fiction is Switch 2 only. We mention it in each review where it matters.',
    ],
    games: onPlatform('Switch'),
    lookFor: [
      { title: 'A single Joy-Con each', text: 'Snipperclips, Mario Kart, Mario Wonder, Overcooked and PICO PARK all work with one Joy-Con per player, so there’s nothing extra to buy.' },
      { title: 'Split-screen or shared screen', text: 'Stardew Valley and It Takes Two split the screen; Snipperclips and Mario Wonder share it. Both work, but shared-screen games keep you closer.' },
      { title: 'Switch Online only when you need it', text: 'Playing on one console never needs a subscription. Online play in paid games does, and Animal Crossing island visits do too.' },
    ],
    faq: [
      {
        q: 'What are the best 2-player Switch games for couples?',
        a: 'On one Switch: It Takes Two, Snipperclips, Super Mario Bros. Wonder, Overcooked! All You Can Eat and Mario Kart 8 Deluxe. For a calmer evening, Stardew Valley or Spiritfarer. Every game on this page is reviewed for how well it works for two.',
      },
      {
        q: 'Can we play together with just one Switch?',
        a: 'Yes. Most of these support two players on one console, and many only need one Joy-Con each: Snipperclips, Mario Kart 8 Deluxe, Super Mario Bros. Wonder, Overcooked and PICO PARK. Stardew Valley, It Takes Two and Portal 2 play split-screen on one Switch. Sky: Children of the Light and Palia are the exceptions, since they’re online worlds where you each need your own device.',
      },
      {
        q: 'Do we need Nintendo Switch Online to play together?',
        a: 'Not on one console. You need it for online play in paid games such as Mario Kart 8 Deluxe, Overcooked, Moving Out 2 and Stardew Valley, and for visiting each other’s islands in Animal Crossing. Free-to-start games like Sky: Children of the Light don’t require it.',
      },
      {
        q: 'Do these games work on Switch 2?',
        a: 'Yes. Switch 2 plays Switch games, and several of these have Switch 2 editions or upgrades: Super Mario Bros. Wonder, Valheim and Core Keeper. Split Fiction is a Switch 2 game and doesn’t run on the original Switch.',
      },
      {
        q: 'Which Switch games can we play with a long-distance partner?',
        a: 'Stardew Valley, Minecraft, Overcooked! All You Can Eat, Moving Out 2, Palia, Sky: Children of the Light, Core Keeper, PlateUp!, We Were Here Together and Wingspan all have online play on Switch. If your partner isn’t on a Switch, pick one with crossplay: Minecraft, Sky, Moving Out 2, Palia, Overcooked, Wingspan or We Were Here Together.',
      },
    ],
    guides: ['date-night-games-for-couples', 'christmas-games-for-couples'],
  },
  {
    slug: 'ps5-games',
    path: '/ps5-games',
    name: 'PS5 Games',
    h1: 'PS5 games for couples',
    seoTitle: 'Best PS5 Games for Couples (Couch Co-op & Online)',
    description:
      'The best PlayStation 5 games for couples: split-screen co-op on one PS5, online picks with PS Plus, and the games where one copy covers you both.',
    cardLine: 'Split-screen nights and one-copy co-op.',
    icon: 'playstation',
    tint: 'sky',
    platform: 'PlayStation',
    intro: [
      'The PlayStation 5 has the two best couple games of the last few years, It Takes Two and Split Fiction, and both come with a Friend’s Pass, so one copy is enough for two of you to play online. On one console, almost everything here runs split-screen with two controllers.',
      'This page lists every game we’ve reviewed that plays on PS5, including PS4 games that run on it, sorted by how well each works for a couple. Where a game is online only, or needs PlayStation Plus, the review says so.',
      'If your partner plays on something else, look for the crossplay games: Valheim, Sea of Thieves, Moving Out 2, Raft, Coral Island, Minecraft, Palia and Sky all connect a PS5 to a PC, Xbox or Switch.',
    ],
    games: onPlatform('PlayStation'),
    lookFor: [
      { title: 'Friend’s Pass', text: 'It Takes Two, Split Fiction and A Way Out let a second PlayStation join online with a free download. You buy one copy, not two.' },
      { title: 'Two controllers', text: 'Couch co-op on a PS5 means a second DualSense. It’s the one purchase that unlocks most of this page.' },
      { title: 'PS Plus for online', text: 'Online play in paid games needs PlayStation Plus. Couch co-op on one console never does, and neither do free-to-play games like Sky and Palia.' },
    ],
    faq: [
      {
        q: 'Is It Takes Two on PS5?',
        a: 'Yes. There’s a native PS5 version, and with the Friend’s Pass only one of you needs to buy it to play online with another PlayStation. On one PS5 it’s split-screen with two controllers.',
      },
      {
        q: 'What are the best couch co-op PS5 games for couples?',
        a: 'It Takes Two, Split Fiction, A Way Out, Unravel Two, Overcooked! All You Can Eat, Lovers in a Dangerous Spacetime, Moving Out 2 and Haven all play on one PS5 with two controllers. Stardew Valley and Portal-style puzzle games are split-screen too.',
      },
      {
        q: 'Do we need PlayStation Plus to play together?',
        a: 'Not for couch co-op on one console. You need it for online play in paid games, including Friend’s Pass games like It Takes Two. Free-to-play games such as Sky: Children of the Light and Palia don’t require PS Plus for online play.',
      },
      {
        q: 'Do PS4 co-op games work on PS5?',
        a: 'Yes. A Way Out, Unravel Two, Overcooked! All You Can Eat and Haven are PS4 titles that play on PS5, and several have free PS5 versions or upgrades. You still need two controllers for couch co-op.',
      },
      {
        q: 'Can we play PS5 games with a partner on PC, Xbox or Switch?',
        a: 'In some. Valheim, Sea of Thieves, Moving Out 2, Raft, Coral Island, Minecraft, Sky: Children of the Light, Palia, Disney Dreamlight Valley, Split Fiction, We Were Here Together and Wingspan support crossplay. Stardew Valley and Don’t Starve Together don’t, so you’d both need a PlayStation.',
      },
    ],
    guides: ['date-night-games-for-couples', 'valentines-day-games-for-couples'],
  },
  {
    slug: 'pc-games',
    path: '/pc-games',
    name: 'PC Games',
    h1: 'PC games for couples',
    seoTitle: 'Best PC Games for Couples (Steam Co-op & Remote Play)',
    description:
      'The best PC and Steam games for couples: co-op on two laptops, couch games played online with Remote Play Together, and the cheapest ways to get two copies.',
    cardLine: 'Two laptops, one world.',
    icon: 'desktop',
    tint: 'sage',
    platform: 'PC',
    intro: [
      'Most of the games on this site started on PC, and Steam is still the cheapest place to buy them, especially during sales. It’s also where two-person play is most flexible: two laptops in the same room, a desktop and a laptop in different cities, or one PC and one controller on the couch.',
      'Every game below is one we’ve reviewed for couples and that runs on Windows, sorted by how well it works for two. We note which ones also run on a Mac, and which need two copies.',
      'One PC trick worth knowing: Steam Remote Play Together streams a couch co-op game to your partner’s computer, so games with no online mode, like Unravel Two, Cuphead and Lovers in a Dangerous Spacetime, can still be played apart with a single copy.',
    ],
    games: onPlatform('PC'),
    lookFor: [
      { title: 'Remote Play Together', text: 'Turns any local co-op game into an online one, with one copy. It needs a decent connection on both ends and works best with a controller.' },
      { title: 'One copy or two', text: 'It Takes Two, Split Fiction and A Way Out include a Friend’s Pass. Most others need a copy each, so watch for Steam sales and two-packs.' },
      { title: 'Runs on a laptop', text: 'Stardew Valley, Core Keeper, PICO PARK, Wingspan and We Were Here Together run on almost anything. Valheim and Sea of Thieves want a proper graphics card.' },
    ],
    faq: [
      {
        q: 'What are the best Steam games for couples?',
        a: 'It Takes Two and Split Fiction for a story, Stardew Valley and Coral Island for a shared farm, Portal 2 and We Were Here Together for puzzles, Overcooked! All You Can Eat and PlateUp! for chaos, and Valheim, Raft or Core Keeper for building. All of them are on Steam.',
      },
      {
        q: 'Can we play couch co-op PC games online with one copy?',
        a: 'Often, yes. Steam Remote Play Together streams a local co-op game to your partner’s PC so they can join with their own controller, and only the host needs to own the game. It works well for Unravel Two, Lovers in a Dangerous Spacetime, Cuphead and Haven. It Takes Two, Split Fiction and A Way Out use their own Friend’s Pass instead.',
      },
      {
        q: 'Which of these run on a Mac?',
        a: 'Stardew Valley, Minecraft, Spiritfarer, Don’t Starve Together, Disney Dreamlight Valley, Lovers in a Dangerous Spacetime, Cuphead, Valheim, We Were Here Together and Wingspan have Mac versions. The rest are Windows only.',
      },
      {
        q: 'Which PC games for couples work with a partner on a console?',
        a: 'Minecraft, Sky: Children of the Light, Palia, Disney Dreamlight Valley, Overcooked! All You Can Eat, Moving Out 2, Valheim, Sea of Thieves, Raft, Coral Island, Split Fiction, We Were Here Together and Wingspan all have crossplay between PC and at least one console. Stardew Valley, Portal 2 and PICO PARK don’t.',
      },
      {
        q: 'What’s a good PC game for a partner who doesn’t play games?',
        a: 'PICO PARK, Overcooked! All You Can Eat or Stardew Valley. Keyboard and mouse is awkward for most co-op games, so a second controller is the best thing you can buy for playing together on a PC.',
      },
    ],
    guides: ['best-cozy-games-for-couples', 'best-free-games-for-couples'],
  },
]

/** The platform pages, shown as a second row on the homepage. */
export const platformCategories = categories.filter((c) => c.platform)

/** The four homepage entry points. "Games for Couples" is the full review index. */
export const featuredCategories: { name: string; path: string; line: string; icon: IconKind; tint: Tint }[] = [
  {
    name: 'Games for Couples',
    path: '/games',
    line: 'Every game we’ve played together and loved.',
    icon: 'hearts',
    tint: 'blush',
  },
  ...categories
    .filter((c) => !c.platform)
    .map((c) => ({ name: c.name === 'Long Distance' ? 'Long Distance Games' : c.name, path: c.path, line: c.cardLine, icon: c.icon, tint: c.tint })),
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
