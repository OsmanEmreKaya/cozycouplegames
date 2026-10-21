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
  /** Short answers to the questions people search alongside this guide. */
  faq?: { q: string; a: string }[]
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
    published: '2026-10-05',
    updated: '2026-10-05',
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
    title: '{n} Best Phone Games for Long-Distance Couples',
    description:
      'The best mobile games for long-distance couples on iPhone and Android: shared gardens, turn-based games for different time zones and worlds to meet on a call.',
    excerpt: 'Shared worlds that fit into busy days and different time zones.',
    kicker: 'Long distance',
    published: '2026-10-05',
    updated: '2026-10-21',
    art: 'bubbles',
    intro: [
      'When you live apart, the hard part is often the in-between: the hours when you’re both busy and the days when calls are short. Phone games fit those gaps well, because your phone is already where your relationship lives.',
      'Long-distance couples need two kinds of game. Something you can play at different times, so the game keeps going when your time zones don’t line up. And something you can play live on a call, so a date night has something to do besides talking.',
      'Everything here has real shared play, not just a shared leaderboard, and we’ve noted which games work between iPhone and Android.',
    ],
    picks: [
      { game: 'our-flower-garden', heading: 'Best for different time zones', note: 'You each look after the same garden whenever you’re awake, so you wake up to flowers your partner watered. iPhone and Android.' },
      { game: 'sky-children-of-the-light', heading: 'Best for a call date', note: 'Meet up in the clouds, hold hands, sit by a fire and talk. Free, and works across iPhone, Android, Switch, PlayStation and PC.' },
      { game: 'words-with-friends-2', heading: 'Best turn-based game for any two phones', note: 'One word at a time, whenever you have a minute. Works between iPhone and Android.' },
      { game: 'gamepigeon', heading: 'Best if you both have iPhones', note: 'Mini golf, pool and word games right inside your iMessage chat.' },
      { game: 'uno-mobile', heading: 'Best for quick rounds on a call', note: 'A private room for two and a game nobody needs to learn.' },
      { game: 'pokemon-go', heading: 'Best for daily gifts and visits', note: 'Send each other gifts from your walks, raid together remotely and explore together when you visit.' },
      { game: 'minecraft', heading: 'Best for building something together', note: 'Start a shared world on your phones and keep adding to it. Bedrock works across iPhone, Android and consoles.' },
    ],
    faq: [
      {
        q: 'What games can long-distance couples play on the phone?',
        a: 'For different time zones, pick something you can play at different times: Our Flower Garden, Words With Friends 2 or GamePigeon. For a live date on a call, try Sky: Children of the Light, UNO! or Minecraft.',
      },
      {
        q: 'Which phone games work if one of us has an iPhone and the other has Android?',
        a: 'Our Flower Garden, Sky: Children of the Light, Words With Friends 2, UNO!, Pokémon GO and Minecraft all work between iPhone and Android. GamePigeon is iPhone only because it runs inside iMessage.',
      },
      {
        q: 'Are there free phone games for long-distance couples?',
        a: 'Yes. Every game on this list except Minecraft is free to download. Some have ads or optional purchases, but you can play together without paying.',
      },
      {
        q: 'What can we play on a video call?',
        a: 'Sky: Children of the Light is the most date-like: you explore together while you talk. UNO! is good for short rounds, and Minecraft for a longer building evening.',
      },
    ],
    outro:
      'A good combination: one daily game (Our Flower Garden or Words With Friends 2) plus one date-night game (Sky). Small moments and big ones.',
  },
  {
    slug: 'best-iphone-games-for-couples',
    title: '{n} Best iPhone Games for Couples',
    description:
      'The best iPhone games for couples to play together: iMessage games, shared gardens and cozy worlds. Most are free, and we note which ones work with Android.',
    excerpt: 'Games for two on iPhone, from iMessage games to shared worlds.',
    kicker: 'iPhone',
    published: '2026-10-21',
    updated: '2026-10-21',
    art: 'garden',
    intro: [
      'The App Store is full of “couple games” that turn out to be quizzes or single-player apps with a shared score. These are games where you actually play together, each on your own iPhone.',
      'If you both have iPhones you get one extra option: games inside iMessage. If one of you is on Android, stick to the games marked as working with Android.',
    ],
    picks: [
      { game: 'gamepigeon', heading: 'Best iMessage game', note: 'Mini golf, 8-ball, Word Hunt and more, played turn by turn inside your chat. Free, iPhone only.' },
      { game: 'our-flower-garden', heading: 'Best cozy game', note: 'One shared garden on your two phones. Plant, water and fill orders together, a few minutes a day. Also on Android.' },
      { game: 'sky-children-of-the-light', heading: 'Most romantic', note: 'Fly through the clouds holding hands. Free, beautiful and on almost every device.' },
      { game: 'minecraft', heading: 'Best for building', note: 'A shared world you keep adding to. Paid, and plays with Android and consoles too.' },
      { game: 'words-with-friends-2', heading: 'Best word game', note: 'A slow, turn-based word game that lasts for days. Free, and works with Android.' },
      { game: 'uno-mobile', heading: 'Best for quick rounds', note: 'Live rounds of UNO! in a private room for two. Free.' },
      { game: 'pokemon-go', heading: 'Best for going out together', note: 'Catch Pokémon on walks together and send each other gifts when you’re apart. Free.' },
    ],
    faq: [
      {
        q: 'What are the best free iPhone games for couples?',
        a: 'GamePigeon, Our Flower Garden, Sky: Children of the Light, Words With Friends 2, UNO! and Pokémon GO are all free to download. Minecraft is the only paid game on this list.',
      },
      {
        q: 'Can we play Stardew Valley together on iPhone?',
        a: 'Not right now. The iPhone version of Stardew Valley is single-player. For a shared farm or garden on your phones, try Our Flower Garden.',
      },
      {
        q: 'Which iPhone couple games also work with Android?',
        a: 'Our Flower Garden, Sky: Children of the Light, Minecraft, Words With Friends 2, UNO! and Pokémon GO. GamePigeon only works between two iPhones.',
      },
    ],
    outro:
      'If you both have iPhones, install GamePigeon for everyday rivalry and Our Flower Garden for something calmer. Add Sky when you want a proper date night.',
  },
  {
    slug: 'best-android-games-for-couples',
    title: '{n} Best Android Games for Couples',
    description:
      'The best Android games for couples, each on your own phone: shared gardens, turn-based games and cozy worlds. Every pick also works with iPhone.',
    excerpt: 'Multiplayer games for two on Android, and with iPhone too.',
    kicker: 'Android',
    published: '2026-10-21',
    updated: '2026-10-21',
    art: 'meadow',
    intro: [
      'Android couples miss out on iMessage games like GamePigeon, but there are good multiplayer games for two on Google Play, and every one of these also works if your partner has an iPhone.',
      'We only picked games with real shared play: a shared world, a shared garden or a game you play against each other, each on your own phone.',
    ],
    picks: [
      { game: 'our-flower-garden', heading: 'Best cozy game', note: 'A shared flower garden for two phones. Plant, water, harvest and fill orders together. Free.' },
      { game: 'sky-children-of-the-light', heading: 'Most romantic', note: 'Explore a world in the clouds together, holding hands. Free on Android, iPhone, consoles and PC.' },
      { game: 'words-with-friends-2', heading: 'Best GamePigeon alternative', note: 'Turn-based, chatty and works between Android and iPhone. Free.' },
      { game: 'uno-mobile', heading: 'Best for quick rounds', note: 'Live UNO! in a private room, with 2v2 if friends join. Free.' },
      { game: 'minecraft', heading: 'Best for building', note: 'Build a world together on your phones, or with one of you on a console. Paid.' },
      { game: 'pokemon-go', heading: 'Best for going out together', note: 'Explore together on walks, and send gifts and join raids when you’re apart. Free.' },
    ],
    faq: [
      {
        q: 'Is there a GamePigeon for Android?',
        a: 'No. GamePigeon runs inside iMessage, so it only works between two iPhones. Words With Friends 2 and UNO! give you similar quick games and work between Android and iPhone.',
      },
      {
        q: 'What are good multiplayer Android games for couples?',
        a: 'Our Flower Garden for a shared daily routine, Sky: Children of the Light for exploring together, Minecraft for building, and Words With Friends 2 or UNO! for a bit of competition.',
      },
      {
        q: 'Can we play together if I have Android and my partner has an iPhone?',
        a: 'Yes. Every game on this list works across Android and iPhone.',
      },
    ],
    outro:
      'Start with Our Flower Garden for something you both do every day, and Sky for evenings when you want to do something special together.',
  },
  {
    slug: 'relaxing-games-to-play-with-your-partner',
    title: 'Relaxing Games to Play With Your Partner',
    description:
      'Calm, low-stress games to play with your partner after a long day, from Sky and Animal Crossing to Spiritfarer. No timers, no failing and no shouting.',
    excerpt: 'For evenings when you both want to unwind, not compete.',
    kicker: 'Unwind',
    published: '2026-10-05',
    updated: '2026-10-05',
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
    published: '2026-10-05',
    updated: '2026-10-05',
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
      'The best free games for couples on iPhone, Android, PC and consoles: shared gardens, cozy online worlds and chat games that never push you to pay.',
    excerpt: 'Great games for two that don’t cost a thing to start.',
    kicker: 'Free',
    published: '2026-10-05',
    updated: '2026-10-05',
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
