import type { ArtTheme } from './types'

export interface Guide {
  slug: string
  /**
   * Use {n} to insert the number of picks, so titles never drift from the list, and
   * {year} for the year of `updated`, so the year only moves when the content does.
   */
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
    title: '{n} Best Cozy Games for Couples ({year})',
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
    title: '{n} Best Phone Games for Long-Distance Couples ({year})',
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
      { game: 'words-with-friends', heading: 'Best turn-based game for any two phones', note: 'One word at a time, whenever you have a minute. Works between iPhone and Android.' },
      { game: 'gamepigeon', heading: 'Best if you both have iPhones', note: 'Mini golf, pool and word games right inside your iMessage chat.' },
      { game: 'uno-mobile', heading: 'Best for quick rounds on a call', note: 'Live rounds with your own house rules, and a game nobody needs to learn.' },
      { game: 'pokemon-go', heading: 'Best for daily gifts and visits', note: 'Send each other gifts from your walks, invite each other to raids and explore together when you visit.' },
      { game: 'minecraft', heading: 'Best for building something together', note: 'Start a shared world on your phones and keep adding to it. Bedrock works across iPhone, Android and consoles.' },
    ],
    faq: [
      {
        q: 'What games can long-distance couples play on the phone?',
        a: 'For different time zones, pick something you can play at different times: Our Flower Garden, Words With Friends or GamePigeon. For a live date on a call, try Sky: Children of the Light, UNO! or Minecraft.',
      },
      {
        q: 'Which phone games work if one of us has an iPhone and the other has Android?',
        a: 'Our Flower Garden, Sky: Children of the Light, Words With Friends, UNO!, Pokémon GO and Minecraft all work between iPhone and Android. GamePigeon is iPhone only because it runs inside iMessage.',
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
      'A good combination: one daily game (Our Flower Garden or Words With Friends) plus one date-night game (Sky). Small moments and big ones.',
  },
  {
    slug: 'best-iphone-games-for-couples',
    title: '{n} Best iPhone Games for Couples ({year})',
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
      { game: 'words-with-friends', heading: 'Best word game', note: 'A slow, turn-based word game that lasts for days. Free, and works with Android.' },
      { game: 'uno-mobile', heading: 'Best for quick rounds', note: 'Live rounds of UNO! with your own house rules. Free.' },
      { game: 'pokemon-go', heading: 'Best for going out together', note: 'Catch Pokémon on walks together and send each other gifts when you’re apart. Free.' },
    ],
    faq: [
      {
        q: 'What are the best free iPhone games for couples?',
        a: 'GamePigeon, Our Flower Garden, Sky: Children of the Light, Words With Friends, UNO! and Pokémon GO are all free to download. Minecraft is the only paid game on this list.',
      },
      {
        q: 'Can we play Stardew Valley together on iPhone?',
        a: 'Not right now. The iPhone version of Stardew Valley is single-player. For a shared farm or garden on your phones, try Our Flower Garden.',
      },
      {
        q: 'Which iPhone couple games also work with Android?',
        a: 'Our Flower Garden, Sky: Children of the Light, Minecraft, Words With Friends, UNO! and Pokémon GO. GamePigeon only works between two iPhones.',
      },
    ],
    outro:
      'If you both have iPhones, install GamePigeon for everyday rivalry and Our Flower Garden for something calmer. Add Sky when you want a proper date night.',
  },
  {
    slug: 'best-android-games-for-couples',
    title: '{n} Best Android Games for Couples ({year})',
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
      { game: 'words-with-friends', heading: 'Best GamePigeon alternative', note: 'Turn-based and works between Android and iPhone. Free.' },
      { game: 'uno-mobile', heading: 'Best for quick rounds', note: 'Live UNO! with your own house rules, and 2v2 if friends join. Free.' },
      { game: 'minecraft', heading: 'Best for building', note: 'Build a world together on your phones, or with one of you on a console. Paid.' },
      { game: 'pokemon-go', heading: 'Best for going out together', note: 'Explore together on walks, and send gifts and join raids when you’re apart. Free.' },
    ],
    faq: [
      {
        q: 'Is there a GamePigeon for Android?',
        a: 'No. GamePigeon runs inside iMessage, so it only works between two iPhones. Words With Friends and UNO! give you similar quick games and work between Android and iPhone.',
      },
      {
        q: 'What are good multiplayer Android games for couples?',
        a: 'Our Flower Garden for a shared daily routine, Sky: Children of the Light for exploring together, Minecraft for building, and Words With Friends or UNO! for a bit of competition.',
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
    title: 'Best Free Games for Couples ({year})',
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
  {
    slug: 'valentines-day-games-for-couples',
    title: '{n} Valentine’s Day Games for Couples',
    description:
      'Romantic video games to play together on Valentine’s Day, on the couch or long distance: co-op adventures, shared gardens and games literally about love.',
    excerpt: 'Romantic games for two, near or far.',
    kicker: 'Valentine’s Day',
    published: '2026-10-21',
    updated: '2026-10-21',
    art: 'clouds',
    intro: [
      'Dinner, flowers, and then what? A game you play together is a nice way to end Valentine’s Day: you’re side by side (or on a call), working toward the same thing, and you’ll probably laugh more than you expect.',
      'We picked games that feel a little romantic, either because they’re about a couple, because they let you do sweet things together, or because they’re simply beautiful to share. There’s something for the couch, for long distance and for partners who don’t usually play.',
    ],
    picks: [
      { game: 'sky-children-of-the-light', heading: 'Most romantic', note: 'Hold hands and fly through the clouds. Free, and it works across phones, consoles and PC, so it’s perfect for a long-distance Valentine’s date.' },
      { game: 'it-takes-two', heading: 'A game about your relationship', note: 'A co-op adventure about a couple rediscovering each other. Only one of you needs to buy it, thanks to the Friend’s Pass.' },
      { game: 'lovers-in-a-dangerous-spacetime', heading: 'Best for the couch', note: 'It’s in the name. Run a neon spaceship together and save space bunnies.' },
      { game: 'stardew-valley', heading: 'Start a life together', note: 'Share a farm, and yes, you can marry each other in the game.' },
      { game: 'our-flower-garden', heading: 'Flowers that last', note: 'Grow a garden together on your phones and keep it going long after the day itself.' },
      { game: 'unravel-two', heading: 'Most symbolic', note: 'Two little yarn creatures tied together by one thread. A short, pretty evening game.' },
      { game: 'split-fiction', heading: 'For a big Valentine’s weekend', note: 'The next game from the It Takes Two team, built for exactly two players.' },
    ],
    faq: [
      {
        q: 'What can long-distance couples play on Valentine’s Day?',
        a: 'Sky: Children of the Light is the most date-like: you explore together and can hold hands while you talk on a call. It Takes Two and Split Fiction work online too, and only one of you needs to buy them.',
      },
      {
        q: 'What’s a romantic game for a partner who doesn’t play games?',
        a: 'Our Flower Garden or Sky: Children of the Light. Both are gentle, free and easy to learn.',
      },
      {
        q: 'Are there free Valentine’s Day games for couples?',
        a: 'Yes. Sky: Children of the Light and Our Flower Garden are free to download.',
      },
    ],
    outro:
      'Our pick for the evening itself: Sky if you’re apart, Lovers in a Dangerous Spacetime if you’re on the same couch. Then start Our Flower Garden so the flowers last past February.',
  },
  {
    slug: 'date-night-games-for-couples',
    title: '{n} Date Night Games for Couples',
    description:
      'Video games for a date night at home or online: co-op games you can start and enjoy in one evening, from short puzzle games to silly party chaos.',
    excerpt: 'Games that fit into one good evening.',
    kicker: 'Date night',
    published: '2026-10-21',
    updated: '2026-10-21',
    art: 'kitchen',
    intro: [
      'A good date-night game is easy to start, fun from the first ten minutes and doesn’t need a 40-hour commitment. You should be able to play it after dinner and stop when you feel like it.',
      'These are all co-op or friendly competition, and we’ve marked which ones work online for long-distance date nights.',
    ],
    picks: [
      { game: 'it-takes-two', heading: 'Best overall', note: 'A chapter is about one evening, so it turns into a series of date nights. Online or on the couch.' },
      { game: 'snipperclips', heading: 'Best for laughing', note: 'Cut each other into new shapes to solve puzzles. Short, silly and easy for anyone.' },
      { game: 'portal-2', heading: 'Best for puzzle lovers', note: 'The co-op campaign is clever, cheap and best played talking it through. Online or split-screen.' },
      { game: 'overcooked-all-you-can-eat', heading: 'Best for chaos', note: 'Cook together and shout about plates. Online and on the couch.' },
      { game: 'moving-out-2', heading: 'Best for a gentler kind of chaos', note: 'Move furniture together, with assist options if things get heated. Online and crossplay.' },
      { game: 'pico-park', heading: 'Best for partners who don’t play', note: 'Left, right and jump is all you need. Costs about $5.' },
      { game: 'mario-kart-8-deluxe', heading: 'Best for friendly rivalry', note: 'A few races before bed. Assists keep it fair if one of you plays more.' },
      { game: 'sky-children-of-the-light', heading: 'Best calm date night', note: 'Explore, sit by a fire and talk. Free and works long distance.' },
    ],
    faq: [
      {
        q: 'What are good online date night games for long-distance couples?',
        a: 'It Takes Two, Portal 2, Overcooked! All You Can Eat, Moving Out 2 and Sky: Children of the Light all work online. With It Takes Two, only one of you needs to buy the game.',
      },
      {
        q: 'What should we play if one of us doesn’t play games?',
        a: 'PICO PARK or Snipperclips. Both are easy to pick up and built around helping each other.',
      },
      {
        q: 'Are there free date night games?',
        a: 'Sky: Children of the Light is free and works on almost every device.',
      },
    ],
    outro:
      'For a first game night, start with Snipperclips or PICO PARK. If that goes well, It Takes Two can turn into a weekly date.',
  },
  {
    slug: 'christmas-games-for-couples',
    title: '{n} Cozy Games to Play Together at Christmas',
    description:
      'Cozy and festive games for couples to play over the holidays: winter festivals, snowy chapters and long co-op games for the days between Christmas and New Year.',
    excerpt: 'Snowy, festive and good for long holiday evenings.',
    kicker: 'Christmas',
    published: '2026-10-21',
    updated: '2026-10-21',
    art: 'yarn',
    intro: [
      'The holidays are the one time of year when you might actually have a few free evenings in a row. That makes them perfect for starting a bigger game together, or for a cozy one with its own winter festival.',
      'Some of these have in-game winter events, some have snowy chapters, and some are just good for the quiet days between Christmas and New Year.',
    ],
    picks: [
      { game: 'stardew-valley', heading: 'Best winter festival', note: 'Winter has the Feast of the Winter Star, with a secret gift exchange in town. Start a new farm together over the break.' },
      { game: 'animal-crossing-new-horizons', heading: 'Most festive', note: 'Toy Day on December 24, snow on the island and plenty of winter furniture to decorate with.' },
      { game: 'it-takes-two', heading: 'Best snowy chapter', note: 'One chapter takes place inside a snow globe. The rest of the game is great too.' },
      { game: 'split-fiction', heading: 'Best for the holiday break', note: 'A big two-player adventure that fits nicely into the days between Christmas and New Year.' },
      { game: 'dont-starve-together', heading: 'Best for surviving winter', note: 'Literally. Prepare your camp for the cold together, and look out for the Winter’s Feast event Klei usually runs in December.' },
      { game: 'mario-kart-8-deluxe', heading: 'Best with family', note: 'Up to four on one Switch, and everyone already knows how to play.' },
      { game: 'our-flower-garden', heading: 'Best if you spend the holidays apart', note: 'If you’re each with your own family, a shared garden is an easy way to stay close.' },
    ],
    faq: [
      {
        q: 'What’s a good game to start together over Christmas?',
        a: 'Stardew Valley or Split Fiction. Both are long enough to fill the holiday break, and Stardew has its own winter festival.',
      },
      {
        q: 'What can we play if we spend Christmas with different families?',
        a: 'Our Flower Garden on your phones, or Sky: Children of the Light for an evening together online.',
      },
      {
        q: 'Which games have Christmas or winter events?',
        a: 'Stardew Valley has the Feast of the Winter Star, Animal Crossing: New Horizons has Toy Day on December 24, and Don’t Starve Together usually runs a Winter’s Feast event in December.',
      },
    ],
    outro:
      'Our favorite holiday combination: a new Stardew farm for the slow mornings and Mario Kart for when the family wants in.',
  },
]

export const guideTitle = (g: Guide, { year = true } = {}) =>
  g.title
    .replace('{n}', String(g.picks.length))
    .replace(/ ?\(\{year\}\)/, year ? ` (${g.updated.slice(0, 4)})` : '')

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug)
