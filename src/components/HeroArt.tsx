import { Bean, Heart, Twinkle } from './GameArt'

const INK = '#3d322c'

/** Two little beans sharing a sofa and a game. The site's signature illustration. */
export function HeroArt() {
  return (
    <svg viewBox="0 0 420 340" className="hero-art" role="img" aria-label="Illustration of a couple sitting on a sofa, playing a game together">
      {/* soft backdrop */}
      <path
        d="M58 120c10-62 78-98 152-94 82 4 160 34 168 112 8 72-24 152-110 170-86 18-178 2-206-62-14-32-10-80-4-126z"
        fill="#f9e8db"
      />
      {/* round window with moon */}
      <g transform="translate(300 86)">
        <circle r="44" fill="#e6eef0" stroke="#eadfcf" strokeWidth="6" />
        <path d="M0-44v88M-44 0h88" stroke="#eadfcf" strokeWidth="4" />
        <circle cx="-14" cy="-16" r="11" fill="#f6ead0" />
        <circle cx="-9" cy="-20" r="10" fill="#e6eef0" />
        <Twinkle x={16} y={18} s={0.5} c="#f2e2ae" />
      </g>
      {/* rug */}
      <ellipse cx="210" cy="300" rx="160" ry="20" fill="#f6e3e0" />
      <path d="M72 300c40 8 236 8 276 0" stroke="#e8c1be" strokeWidth="2" strokeDasharray="3 8" fill="none" strokeLinecap="round" />

      {/* plant */}
      <g transform="translate(56 214)">
        <path d="M-16 40h32l-4 40h-24z" fill="#d9b48f" />
        <path d="M0 40c-2-24-14-40-30-44 4 18 14 32 30 44z" fill="#a6b896" />
        <path d="M0 40c2-28 12-46 26-52 0 22-10 40-26 52z" fill="#b9c8ae" />
        <path d="M0 40c-4-30 0-52 8-64 6 20 2 44-8 64z" fill="#8eab7e" />
      </g>

      {/* sofa */}
      <rect x="92" y="166" width="236" height="84" rx="30" fill="#b9c8ae" />
      <rect x="104" y="214" width="212" height="52" rx="16" fill="#a9bb9c" />
      <rect x="80" y="198" width="46" height="76" rx="22" fill="#c6d4bb" />
      <rect x="294" y="198" width="46" height="76" rx="22" fill="#c6d4bb" />
      <path d="M210 176v40" stroke="#a6b896" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="98" y="272" width="10" height="16" rx="3" fill="#a07a5f" />
      <rect x="312" y="272" width="10" height="16" rx="3" fill="#a07a5f" />
      {/* cushion */}
      <rect x="116" y="180" width="40" height="34" rx="12" fill="#f3d3bd" transform="rotate(-10 136 197)" />

      {/* the couple */}
      <Bean x={178} y={196} color="#f3d3bd" s={2.1} />
      <Bean x={244} y={198} color="#e8c1be" s={2.1} flip />
      {/* blanket over laps */}
      <path d="M134 226c20-12 46-4 76-8s56-6 80 6c6 14 4 30-2 44-46 8-104 8-150 0-8-14-8-28-4-42z" fill="#f6e3e0" />
      <path d="M146 244c18 4 34-2 50 2s38 2 58-2 26 0 30 2M150 258c40 4 90 4 132 0" stroke="#e8c1be" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="1 7" />
      {/* controllers */}
      <g transform="translate(176 214) rotate(-8)">
        <rect x="-15" y="-8" width="30" height="16" rx="8" fill={INK} />
        <circle cx="7" cy="-1" r="2" fill="#e8c1be" />
        <path d="M-9-1h6M-6-4v6" stroke="#fffaf3" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <g transform="translate(246 214) rotate(8)">
        <rect x="-15" y="-8" width="30" height="16" rx="8" fill={INK} />
        <circle cx="7" cy="-1" r="2" fill="#b9c8ae" />
        <path d="M-9-1h6M-6-4v6" stroke="#fffaf3" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      {/* little cable between them, in a heart loop */}
      <path d="M190 218c8 10 20 10 22-2 2-10-10-12-10-4 0 8 22 14 30 2" stroke={INK} strokeWidth="1.4" fill="none" opacity=".45" strokeLinecap="round" />

      {/* side table + mug */}
      <g transform="translate(366 236)">
        <rect x="-22" y="0" width="44" height="8" rx="4" fill="#c9a37f" />
        <path d="M-14 8l-4 50M14 8l4 50" stroke="#c9a37f" strokeWidth="5" strokeLinecap="round" />
        <rect x="-10" y="-20" width="20" height="20" rx="5" fill="#e8c1be" />
        <path d="M10-14q8 0 6 8-1 4-6 4" stroke="#e8c1be" strokeWidth="3" fill="none" />
        <path d="M-4-26q4-6 0-12M4-26q4-6 0-12" stroke="#dccdb9" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </g>

      {/* floating heart + sparkles */}
      <g className="hero-art__float">
        <Heart x={211} y={128} s={1.8} />
      </g>
      <Twinkle x={160} y={110} s={0.9} c="#e9cf86" />
      <Twinkle x={258} y={122} s={0.6} c="#e9cf86" />
      <path d="M118 96c4 6 4 10 0 16M102 104h4" stroke="#d99a94" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}
