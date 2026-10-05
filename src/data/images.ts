import manifest from './images.json'

/** An official image, downloaded and converted by scripts/fetch-images.mjs. */
export interface GameImage {
  /** 'icon' marks an app icon, shown on cards for phone-only games instead of screenshots. */
  kind?: 'icon'
  file: string
  alt: string
  width: number
  height: number
  /** Original file on the official source. */
  source: string
  /** Official page the image appears on (store listing, press kit…). */
  page: string
  store: string
  copyright: string
  /** JPEG social preview, for landscape images only. */
  og?: string
  /** Every width available on disk, largest last (the largest is `file` itself). */
  widths: number[]
}

const images = manifest as Record<string, GameImage[]>

export const IMAGE_DIR = '/images/games/'

/** Screenshots and promo art, in display order (excludes app icons). */
export const gameImages = (slug: string): GameImage[] => (images[slug] ?? []).filter((i) => i.kind !== 'icon')

/** The official app icon, only set for phone-only games. */
export const gameIcon = (slug: string): GameImage | undefined => images[slug]?.find((i) => i.kind === 'icon')

export const imageSrc = (img: GameImage) => IMAGE_DIR + img.file
export const imageSrcSet = (img: GameImage) =>
  img.widths
    .map((w) => `${IMAGE_DIR}${w === img.width ? img.file : img.file.replace(/\.webp$/, `-${w}.webp`)} ${w}w`)
    .join(', ')
export const isPortrait = (img: GameImage) => img.height > img.width
