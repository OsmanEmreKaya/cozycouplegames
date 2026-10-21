import type { Game } from './types'

const sentence = (s: string) => (/[.!?]$/.test(s) ? s : `${s}.`)

/**
 * The questions people search about a game ("is X multiplayer", "is X cross-platform"),
 * answered from the same facts as the review's "At a glance" table so the two never disagree.
 */
export function gameFaq(game: Game): { q: string; a: string }[] {
  return [
    { q: `Can you play ${game.title} online with your partner?`, a: sentence(game.online) },
    { q: `Can you play ${game.title} together on one couch?`, a: sentence(game.local) },
    { q: `Is ${game.title} cross-platform?`, a: sentence(game.crossPlatform) },
    { q: `How many players can play ${game.title}?`, a: sentence(game.players) },
    { q: `Is ${game.title} free?`, a: `${game.isFree ? 'Yes' : 'No'}. ${sentence(game.price)}` },
  ]
}
