import manifest from './images.json'

/** An official image, downloaded and converted by scripts/fetch-images.mjs. */
export interface GameImage {
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

export const gameImages = (slug: string): GameImage[] => images[slug] ?? []

export const imageSrc = (img: GameImage) => IMAGE_DIR + img.file
export const imageSrcSet = (img: GameImage) =>
  img.widths
    .map((w) => `${IMAGE_DIR}${w === img.width ? img.file : img.file.replace(/\.webp$/, `-${w}.webp`)} ${w}w`)
    .join(', ')
export const isPortrait = (img: GameImage) => img.height > img.width
