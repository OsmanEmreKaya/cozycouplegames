// Renders 1000×1500 Pinterest pins for the guides into marketing/pins/, using the site's
// own fonts, colours and official game images. Needs Google Chrome installed.
//
//   node scripts/make-pins.mjs
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'marketing/pins')
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const file = (p) => pathToFileURL(path.join(root, p)).href
const img = (name) => file(`public/images/games/${name}.webp`)

export const pins = [
  {
    slug: 'best-cozy-games-for-couples',
    note: 'our list ♡',
    title: 'The best cozy games for couples',
    line: 'Gentle co-op games for blanket-and-tea evenings.',
    images: ['stardew-valley', 'sky-children-of-the-light'],
  },
  {
    slug: 'best-mobile-games-for-long-distance-couples',
    note: 'miles apart, still together ♡',
    title: 'Phone games for long-distance couples',
    line: 'For different time zones and video-call dates. iPhone & Android.',
    phones: ['our-flower-garden-1', 'words-with-friends-1', 'gamepigeon-1'],
  },
  {
    slug: 'valentines-day-games-for-couples',
    note: 'for the 14th ♡',
    title: 'Valentine’s Day games for couples',
    line: 'Romantic games to play together, on the couch or long distance.',
    images: ['sky-children-of-the-light', 'it-takes-two'],
  },
  {
    slug: 'date-night-games-for-couples',
    note: 'tonight’s plan ♡',
    title: 'Date night games for two',
    line: 'Co-op games you can start and enjoy in one evening.',
    images: ['split-fiction', 'overcooked-all-you-can-eat'],
  },
  {
    slug: 'christmas-games-for-couples',
    note: 'for the holidays ♡',
    title: 'Cozy games to play together at Christmas',
    line: 'Winter festivals, snowy chapters and long holiday evenings.',
    images: ['animal-crossing-new-horizons', 'stardew-valley'],
  },
  {
    slug: 'best-iphone-games-for-couples',
    note: 'for two iPhones ♡',
    title: 'The best iPhone games for couples',
    line: 'iMessage games, shared gardens and cozy worlds. Most are free.',
    phones: ['gamepigeon-2', 'our-flower-garden-2', 'pokemon-go-2'],
  },
  {
    slug: 'best-android-games-for-couples',
    note: 'android + iphone ♡',
    title: 'The best Android games for couples',
    line: 'Multiplayer games for two that also work with iPhone.',
    phones: ['our-flower-garden-3', 'words-with-friends-2', 'pokemon-go-1'],
  },
  {
    slug: 'best-free-games-for-couples',
    note: 'costs nothing ♡',
    title: 'The best free games for couples',
    line: 'On phones, consoles and PC, without the nagging to pay.',
    images: ['sky-children-of-the-light', 'palia'],
  },
]

const css = `
@font-face{font-family:'Fraunces';font-weight:500 600;src:url('${file('src/assets/fonts/fraunces-soft-500-600-latin.woff2')}') format('woff2')}
@font-face{font-family:'Figtree';font-weight:300 900;src:url('${file('node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2')}') format('woff2')}
@font-face{font-family:'Caveat';font-weight:400 700;src:url('${file('src/assets/fonts/caveat-600-latin.woff2')}') format('woff2')}
html,body{margin:0;width:1000px;height:1500px;overflow:hidden;background:#fbf6ee;color:#3d322c;font-family:Figtree,sans-serif}
.frame{position:absolute;inset:22px;border:2px dashed #eadfcf;border-radius:36px}
.wrap{position:relative;height:100%;box-sizing:border-box;padding:84px 86px 0;display:flex;flex-direction:column}
.logo{display:flex;align-items:center;gap:14px;font-family:Fraunces,serif;font-weight:600;font-size:34px}
.note{font-family:Caveat,cursive;font-weight:600;font-size:52px;color:#9a564f;margin:58px 0 4px}
h1{font-family:Fraunces,serif;font-weight:600;font-size:96px;line-height:1.02;letter-spacing:-.02em;margin:0}
.line{font-size:36px;line-height:1.38;color:#6b5d54;margin:26px 0 0;max-width:800px}
.media{position:relative;flex:1;margin-top:40px}
.shot{position:absolute;background:#fffcf7;padding:14px;border-radius:26px;box-shadow:0 2px 4px rgba(61,50,44,.06),0 26px 50px -22px rgba(61,50,44,.35)}
.shot img{display:block;border-radius:16px;object-fit:cover}
.shot.a{left:-6px;top:6px;transform:rotate(-3.5deg)}
.shot.b{right:-6px;top:236px;transform:rotate(3deg)}
.shot.a img,.shot.b img{width:560px;height:315px}
.tape{position:absolute;top:-16px;left:50%;width:120px;height:34px;margin-left:-60px;background:rgba(242,226,174,.85);transform:rotate(-4deg);border-radius:4px}
.phones{position:absolute;inset:0;display:flex;justify-content:center;align-items:flex-start;gap:20px;padding-top:24px}
.phones .shot{position:relative}
.phones .shot img{width:246px;height:437px;object-fit:contain;background:#f5ecdf}
.phones .shot:nth-child(1){transform:rotate(-4deg);margin-top:30px}
.phones .shot:nth-child(3){transform:rotate(4deg);margin-top:30px}
.foot{position:absolute;left:0;right:0;bottom:70px;text-align:center}
.url{display:inline-block;padding:16px 34px;border-radius:999px;background:#4a3a32;color:#fffcf7;font-size:32px;font-weight:600;letter-spacing:.01em}
`

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

function html(pin) {
  const media = pin.phones
    ? `<div class="phones">${pin.phones.map((p) => `<div class="shot"><img src="${img(p)}"></div>`).join('')}</div>`
    : `<div class="shot a"><span class="tape"></span><img src="${img(pin.images[0])}"></div>
       <div class="shot b"><span class="tape"></span><img src="${img(pin.images[1])}"></div>`
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>
<div class="frame"></div>
<div class="wrap">
  <div class="logo"><img src="${file('public/favicon.svg')}" width="46" height="46">Cozy Couple Games</div>
  <p class="note">${esc(pin.note)}</p>
  <h1>${esc(pin.title)}</h1>
  <p class="line">${esc(pin.line)}</p>
  <div class="media">${media}</div>
</div>
<div class="foot"><span class="url">cozycouplegames.com</span></div>
</body></html>`
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  fs.mkdirSync(outDir, { recursive: true })
  const tmp = fs.mkdtempSync(path.join(outDir, '.tmp-'))
  for (const pin of pins) {
    const page = path.join(tmp, `${pin.slug}.html`)
    fs.writeFileSync(page, html(pin))
    const png = path.join(tmp, `${pin.slug}.png`)
    execFileSync(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--allow-file-access-from-files',
      '--virtual-time-budget=3000',
      '--window-size=1000,1500',
      `--screenshot=${png}`,
      pathToFileURL(page).href,
    ], { stdio: 'ignore' })
    // Pinterest accepts JPEG; it keeps the files small without visible loss.
    await sharp(png).jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(outDir, `${pin.slug}.jpg`))
    console.log(`✓ marketing/pins/${pin.slug}.jpg`)
  }
  fs.rmSync(tmp, { recursive: true, force: true })
}
