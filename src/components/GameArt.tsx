import type { ReactNode } from 'react'
import type { ArtTheme } from '../data/types'

/**
 * Hand-made SVG scenes standing in for game screenshots.
 * Every scene hides our two little "cozy couple" beans somewhere.
 * Swap in real press images via `game.image` when you have permission to use them.
 */

const INK = '#3d322c'

export function Bean({ x, y, color, flip = false, s = 1 }: { x: number; y: number; color: string; flip?: boolean; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <path d="M-12 8c-1-14 3-24 12-24s13 10 12 24c-.4 4-5 6-12 6s-11.6-2-12-6z" fill={color} />
      <circle cx="-3.5" cy="-5" r="1.5" fill={INK} />
      <circle cx="4.5" cy="-5" r="1.5" fill={INK} />
      <ellipse cx="-6.5" cy="-1" rx="2.4" ry="1.5" fill="#e3a49d" opacity=".7" />
      <ellipse cx="7.5" cy="-1" rx="2.4" ry="1.5" fill="#e3a49d" opacity=".7" />
      <path d="M-.5-1.5q1 1 2 0" stroke={INK} strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </g>
  )
}

export function Flower({ x, y, c, s = 1, stem = true }: { x: number; y: number; c: string; s?: number; stem?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {stem && <path d="M0 4v18" stroke="#86a07a" strokeWidth="2.2" strokeLinecap="round" />}
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-6" rx="4.2" ry="6" fill={c} transform={`rotate(${a})`} />
      ))}
      <circle r="3.4" fill="#f2d48f" />
    </g>
  )
}

export function Cloud({ x, y, s = 1, fill = '#fffaf3' }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 20c-10 0-14-12-5-16 0-10 13-14 19-6 5-8 20-6 20 5 9 0 11 13 2 17z"
      fill={fill}
    />
  )
}

export function Heart({ x, y, s = 1, c = '#d99a94' }: { x: number; y: number; s?: number; c?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 8C-6 4-9 1-9-3c0-2.6 2-4.5 4.4-4.4 1.9 0 3.2 1.2 4.6 2.8 1.2-1.7 2.6-2.9 4.6-2.8C7.1-7.3 9-5.4 9-3c0 4-3.4 7-9 11z"
      fill={c}
    />
  )
}

export function Twinkle({ x, y, s = 1, c = '#f2e2ae' }: { x: number; y: number; s?: number; c?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0-8c.8 4.6 2.6 6.4 7 7.2-4.4.8-6.2 2.6-7 7.2-.8-4.6-2.6-6.4-7-7.2 4.4-.8 6.2-2.6 7-7.2z"
      fill={c}
    />
  )
}

const scenes: Record<ArtTheme, () => ReactNode> = {
  garden: () => (
    <>
      <rect width="400" height="300" fill="#f9e8db" />
      <circle cx="318" cy="70" r="30" fill="#f2e2ae" />
      <Cloud x={70} y={52} s={1.4} />
      <path d="M0 190c70-30 140-26 210-8s130 14 190-6v124H0z" fill="#cbd8bf" />
      <path d="M0 220c90-22 170-14 240 0s110 8 160-4v84H0z" fill="#b9c8ae" />
      {[40, 78, 116, 262, 300, 338, 376].map((x, i) => (
        <Flower key={x} x={x} y={232 + (i % 2) * 14} c={['#e8c1be', '#f3c5a8', '#d9c6dd', '#f2e2ae'][i % 4]} s={1.1} />
      ))}
      <path d="M150 268h100" stroke="#a6b896" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 10" />
      <Bean x={180} y={222} color="#f3d3bd" />
      <Bean x={216} y={222} color="#e8c1be" flip />
      <Heart x={198} y={180} s={1.1} />
      {/* watering can */}
      <g transform="translate(236 226)">
        <rect x="0" y="0" width="22" height="16" rx="4" fill="#9fb6c0" />
        <path d="M22 4l10-8" stroke="#9fb6c0" strokeWidth="4" strokeLinecap="round" />
        <path d="M5 0q6-8 12 0" stroke="#9fb6c0" strokeWidth="3" fill="none" />
      </g>
    </>
  ),
  farm: () => (
    <>
      <rect width="400" height="300" fill="#e6eef0" />
      <circle cx="80" cy="66" r="26" fill="#f2e2ae" />
      <Cloud x={250} y={44} s={1.2} />
      <path d="M0 160c80-24 150-20 220-6s120 10 180-8v154H0z" fill="#cfdcc4" />
      <path d="M0 190h400v110H0z" fill="#d9c0a0" />
      {[0, 1, 2, 3, 4].map((r) => (
        <path key={r} d={`M-10 ${205 + r * 20}h420`} stroke="#c9ad88" strokeWidth="6" strokeLinecap="round" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i} transform={`translate(${30 + i * 42} ${200 + (i % 3) * 20})`}>
          <path d="M0 0c-6-4-8-9-6-12 4 1 6 5 6 12zM0 0c6-4 8-9 6-12-4 1-6 5-6 12z" fill="#8eab7e" />
        </g>
      ))}
      <g transform="translate(270 108)">
        <rect x="0" y="22" width="76" height="60" rx="4" fill="#c98b7f" />
        <path d="M-6 26L38-6l44 32z" fill="#9d6a5f" />
        <rect x="26" y="48" width="24" height="34" rx="3" fill="#f5ecdf" />
        <path d="M26 48l24 34M50 48L26 82" stroke="#c98b7f" strokeWidth="2.5" />
      </g>
      <Bean x={180} y={180} color="#f3d3bd" />
      <Bean x={212} y={180} color="#b9c8ae" flip />
      <Heart x={196} y={140} s={0.9} />
    </>
  ),
  split: () => (
    <>
      <rect width="400" height="300" fill="#f6e3e0" />
      <path d="M200 0c-14 50 14 100 0 150s14 100 0 150h200V0z" fill="#e5ecdc" />
      <Cloud x={50} y={50} s={1} />
      <Cloud x={290} y={70} s={1.1} />
      <path d="M0 236h400v64H0z" fill="#eadfcf" />
      <Bean x={130} y={220} color="#e8c1be" s={1.5} />
      <Bean x={270} y={220} color="#b9c8ae" flip s={1.5} />
      <Heart x={200} y={150} s={2.4} c="#d99a94" />
      <Twinkle x={160} y={110} s={1.2} c="#e9cf86" />
      <Twinkle x={250} y={100} s={0.9} c="#e9cf86" />
      <g transform="translate(92 196) rotate(-30)">
        <rect x="-2" y="-20" width="4" height="22" rx="2" fill="#9d6a5f" />
        <rect x="-9" y="-26" width="18" height="9" rx="2" fill="#6b5d54" />
      </g>
    </>
  ),
  yarn: () => (
    <>
      <rect width="400" height="300" fill="#e5ecdc" />
      {[30, 90, 300, 360].map((x, i) => (
        <path key={x} d={`M${x} ${150 - (i % 2) * 20}l-34 80h68z`} fill={i % 2 ? '#a9bb9c' : '#b9c8ae'} />
      ))}
      <path d="M0 220c60-14 120-10 200 2s150 8 200-6v84H0z" fill="#cbd8bf" />
      <path
        d="M150 212c30-60 70-60 100 0"
        stroke="#c98b7f"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1 0"
      />
      <g transform="translate(140 214)">
        <circle r="26" fill="#d48f86" />
        <path d="M-20-12c14 4 26 16 30 32M-24 4c14-2 28 4 36 18M-8-24c14 6 26 22 28 40" stroke="#bd766d" strokeWidth="2.5" fill="none" />
        <circle cx="-8" cy="-4" r="2" fill={INK} />
        <circle cx="6" cy="-4" r="2" fill={INK} />
      </g>
      <g transform="translate(262 214)">
        <circle r="26" fill="#9fb6c0" />
        <path d="M20-12c-14 4-26 16-30 32M24 4c-14-2-28 4-36 18M8-24c-14 6-26 22-28 40" stroke="#86a0ab" strokeWidth="2.5" fill="none" />
        <circle cx="-6" cy="-4" r="2" fill={INK} />
        <circle cx="8" cy="-4" r="2" fill={INK} />
      </g>
      <Heart x={201} y={140} s={0.9} />
    </>
  ),
  clouds: () => (
    <>
      <rect width="400" height="300" fill="#ddd6e4" />
      <rect y="150" width="400" height="150" fill="#ecdfe3" />
      {[
        [40, 40],
        [120, 70],
        [330, 30],
        [260, 80],
        [370, 110],
      ].map(([x, y]) => (
        <Twinkle key={`${x}-${y}`} x={x} y={y} s={0.8} c="#fbf3d6" />
      ))}
      <Cloud x={20} y={150} s={2.2} />
      <Cloud x={250} y={170} s={2.6} />
      <Cloud x={130} y={210} s={2} fill="#fdf4ee" />
      <path d="M0 250c80-16 160-16 240 0s120 10 160 4v46H0z" fill="#fffaf3" />
      <g transform="translate(170 196)">
        <path d="M0-24l-16 40h32z" fill="#e8c1be" />
        <circle cy="-28" r="9" fill="#f9e8db" />
        <path d="M-6-30h4M3-30h4" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <g transform="translate(222 196)">
        <path d="M0-24l-16 40h32z" fill="#f3d3bd" />
        <circle cy="-28" r="9" fill="#f9e8db" />
        <path d="M-6-30h4M3-30h4" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <path d="M182 192q14 8 28 0" stroke="#f9e8db" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="196" cy="140" r="14" fill="#fbf3d6" opacity=".7" />
      <circle cx="196" cy="140" r="5" fill="#f2d48f" />
    </>
  ),
  island: () => (
    <>
      <rect width="400" height="300" fill="#e6eef0" />
      <circle cx="320" cy="64" r="24" fill="#f2e2ae" />
      <Cloud x={60} y={50} s={1.2} />
      <rect y="170" width="400" height="130" fill="#c6d7dc" />
      {[200, 230, 262].map((y, i) => (
        <path key={y} d={`M${20 + i * 30} ${y}q10-6 20 0t20 0M${300 - i * 20} ${y + 10}q10-6 20 0t20 0`} stroke="#e6eef0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ))}
      <ellipse cx="200" cy="214" rx="140" ry="34" fill="#f2e2ae" />
      <ellipse cx="200" cy="206" rx="118" ry="24" fill="#cbd8bf" />
      <path d="M118 200c4-40 10-70 24-92" stroke="#c9a37f" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M142 108c-24-6-42 4-46 16 16-10 32-12 46-16zM142 108c22-12 42-8 50 4-18-6-32-6-50-4zM142 108c-6-18 2-34 14-38-4 14-8 24-14 38zM142 108c16 6 26 20 24 34-6-14-14-24-24-34z" fill="#8eab7e" />
      <path d="M246 200l24-40 24 40z" fill="#f3d3bd" />
      <path d="M270 160v40" stroke="#d9a586" strokeWidth="2" />
      <Bean x={190} y={194} color="#f3d3bd" />
      <Bean x={222} y={194} color="#e8c1be" flip />
      <Flower x={96} y={204} c="#e8c1be" s={0.8} />
      <Flower x={300} y={206} c="#d9c6dd" s={0.8} />
    </>
  ),
  blocks: () => (
    <>
      <rect width="400" height="300" fill="#e6eef0" />
      <rect x="300" y="40" width="40" height="40" fill="#f2e2ae" />
      <rect x="60" y="56" width="60" height="16" fill="#fffaf3" />
      <rect x="76" y="44" width="30" height="14" fill="#fffaf3" />
      {Array.from({ length: 10 }).map((_, i) => {
        const h = [5, 5, 4, 4, 4, 5, 5, 6, 6, 5][i]
        return (
          <g key={i}>
            {Array.from({ length: h }).map((__, j) => (
              <rect
                key={j}
                x={i * 40}
                y={300 - (j + 1) * 22}
                width="40"
                height="22"
                fill={j === h - 1 ? '#b9c8ae' : j % 2 ? '#d6b994' : '#cfb08a'}
                stroke="#c4a37d"
                strokeWidth=".6"
              />
            ))}
          </g>
        )
      })}
      <g transform="translate(150 118)">
        <rect x="0" y="34" width="80" height="60" fill="#f6e3e0" />
        <path d="M-8 36h96L40 2z" fill="#c98b7f" />
        <rect x="30" y="58" width="20" height="36" fill="#a07a5f" />
        <rect x="8" y="48" width="14" height="14" fill="#cddbe0" />
        <rect x="58" y="48" width="14" height="14" fill="#cddbe0" />
      </g>
      <Bean x={112} y={192} color="#f3d3bd" />
      <Bean x={272} y={192} color="#b9c8ae" flip />
      <Heart x={190} y={100} s={0.9} />
    </>
  ),
  kitchen: () => (
    <>
      <rect width="400" height="300" fill="#f9e8db" />
      {Array.from({ length: 10 }).map((_, i) =>
        Array.from({ length: 3 }).map((__, j) => (
          <rect key={`${i}-${j}`} x={i * 40} y={230 + j * 24} width="40" height="24" fill={(i + j) % 2 ? '#eadfcf' : '#f5ecdf'} />
        )),
      )}
      <rect x="40" y="150" width="320" height="60" rx="8" fill="#d6b994" />
      <rect x="40" y="150" width="320" height="10" rx="5" fill="#e4cdae" />
      <g transform="translate(150 122)">
        <path d="M-26 0h52l-4 30h-44z" fill="#6b5d54" />
        <rect x="-30" y="-4" width="60" height="8" rx="4" fill="#8f8075" />
        <path d="M-10-14q4-8 0-16M4-14q4-8 0-16" stroke="#dccdb9" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <circle cx="250" cy="138" r="12" fill="#e09a8a" />
      <path d="M246 126q4-4 8 0" stroke="#8eab7e" strokeWidth="3" fill="none" />
      <circle cx="282" cy="140" r="10" fill="#f2e2ae" />
      <rect x="300" y="128" width="40" height="20" rx="10" fill="#fffcf7" />
      <Bean x={110} y={234} color="#f3d3bd" s={1.2} />
      <Bean x={300} y={234} color="#e8c1be" flip s={1.2} />
      <Cloud x={88} y={180} s={0.7} fill="#fffcf7" />
      <Cloud x={278} y={180} s={0.7} fill="#fffcf7" />
    </>
  ),
  paper: () => (
    <>
      <rect width="400" height="300" fill="#f5ecdf" />
      {Array.from({ length: 9 }).map((_, i) =>
        Array.from({ length: 6 }).map((__, j) => <circle key={`${i}-${j}`} cx={24 + i * 44} cy={24 + j * 50} r="1.6" fill="#dccdb9" />),
      )}
      <path d="M248 74h70v56h-70z" fill="none" stroke="#b8a48f" strokeWidth="2.5" strokeDasharray="6 6" strokeLinejoin="round" />
      <g transform="translate(150 170) rotate(-6)">
        <rect x="-50" y="-50" width="100" height="100" rx="22" fill="#e8c1be" />
        <circle cx="-14" cy="-6" r="4" fill={INK} />
        <circle cx="14" cy="-6" r="4" fill={INK} />
        <path d="M-8 12q8 8 16 0" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(260 196) rotate(8)">
        <path d="M-50-28q0-22 22-22h56q22 0 22 22v56q0 22-22 22h-56q-22 0-22-22v-6l20-20-20-20z" fill="#b9c8ae" />
        <circle cx="-6" cy="-8" r="4" fill={INK} />
        <circle cx="20" cy="-8" r="4" fill={INK} />
        <path d="M0 10q8 8 16 0" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <Twinkle x={82} y={70} s={1.2} c="#e9cf86" />
    </>
  ),
  boat: () => (
    <>
      <rect width="400" height="300" fill="#56627a" />
      <circle cx="310" cy="70" r="26" fill="#f6ead0" />
      <circle cx="320" cy="62" r="24" fill="#56627a" />
      {[
        [50, 40],
        [110, 90],
        [180, 36],
        [240, 100],
        [370, 140],
        [30, 130],
      ].map(([x, y]) => (
        <Twinkle key={`${x}-${y}`} x={x} y={y} s={0.6} c="#f2e2ae" />
      ))}
      <rect y="210" width="400" height="90" fill="#6f7f96" />
      {[232, 256, 280].map((y, i) => (
        <path key={y} d={`M${40 + i * 50} ${y}q12-6 24 0M${260 - i * 30} ${y + 6}q12-6 24 0`} stroke="#8796ab" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ))}
      <path d="M80 200h240l-26 34H106z" fill="#c98b7f" />
      <rect x="120" y="150" width="54" height="50" rx="4" fill="#f3d3bd" />
      <path d="M114 154l33-26 33 26z" fill="#9d6a5f" />
      <rect x="136" y="166" width="20" height="16" rx="2" fill="#f2e2ae" />
      <rect x="196" y="134" width="64" height="66" rx="4" fill="#e8c1be" />
      <path d="M190 138l38-30 38 30z" fill="#9d6a5f" />
      <rect x="214" y="152" width="26" height="20" rx="2" fill="#f2e2ae" />
      <path d="M282 200V120" stroke="#dccdb9" strokeWidth="3" />
      <path d="M284 124l30 10-30 10z" fill="#f6e3e0" />
      <Bean x={100} y={188} color="#f9e8db" s={0.8} />
      <g transform="translate(290 192)">
        <ellipse rx="10" ry="7" fill="#f2e2ae" />
        <path d="M-8-4l2-8 4 5M8-4l-2-8-4 5" fill="#f2e2ae" />
      </g>
    </>
  ),
  race: () => (
    <>
      <rect width="400" height="300" fill="#e6eef0" />
      <Cloud x={40} y={40} s={1.1} />
      <Cloud x={280} y={60} s={1.3} />
      <path d="M0 150c80-20 150-16 220-4s130 8 180-6v160H0z" fill="#cbd8bf" />
      <path d="M-10 300c40-60 120-80 200-90s160-30 220-70" stroke="#dccdb9" strokeWidth="64" fill="none" />
      <path d="M-10 300c40-60 120-80 200-90s160-30 220-70" stroke="#fffaf3" strokeWidth="3" fill="none" strokeDasharray="12 14" />
      <g transform="translate(330 70)">
        <path d="M0 0v70" stroke="#6b5d54" strokeWidth="3" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2, 3].map((c) => <rect key={`${r}-${c}`} x={c * 8} y={r * 8} width="8" height="8" fill={(r + c) % 2 ? '#fffaf3' : '#6b5d54'} />),
        )}
      </g>
      <g transform="translate(150 214)">
        <rect x="-26" y="-6" width="52" height="20" rx="10" fill="#e8c1be" />
        <circle cx="-16" cy="16" r="7" fill="#6b5d54" />
        <circle cx="16" cy="16" r="7" fill="#6b5d54" />
        <Bean x={0} y={-12} color="#f3d3bd" s={0.8} />
      </g>
      <g transform="translate(240 186)">
        <rect x="-26" y="-6" width="52" height="20" rx="10" fill="#b9c8ae" />
        <circle cx="-16" cy="16" r="7" fill="#6b5d54" />
        <circle cx="16" cy="16" r="7" fill="#6b5d54" />
        <Bean x={0} y={-12} color="#f6e3e0" flip s={0.8} />
      </g>
      <Twinkle x={196} y={160} c="#e9cf86" />
    </>
  ),
  bubbles: () => (
    <>
      <rect width="400" height="300" fill="#f6e3e0" />
      <g transform="translate(40 40)">
        <rect width="190" height="80" rx="24" fill="#fffcf7" />
        <path d="M24 80l-10 18 26-18z" fill="#fffcf7" />
        <circle cx="50" cy="44" r="18" fill="#6b5d54" />
        <circle cx="50" cy="44" r="8" fill="#fffcf7" />
        <text x="46" y="48" fontSize="11" fontWeight="700" fill={INK} fontFamily="system-ui, sans-serif">8</text>
        <path d="M90 34h76M90 54h52" stroke="#eadfcf" strokeWidth="8" strokeLinecap="round" />
      </g>
      <g transform="translate(170 140)">
        <rect width="190" height="80" rx="24" fill="#b9c8ae" />
        <path d="M166 80l10 18-26-18z" fill="#b9c8ae" />
        <path d="M40 60V22" stroke="#6b5d54" strokeWidth="3" />
        <path d="M42 22l20 8-20 8z" fill="#e8c1be" />
        <ellipse cx="40" cy="62" rx="14" ry="4" fill="#a6b896" />
        <circle cx="70" cy="58" r="5" fill="#fffcf7" />
        <path d="M100 34h60M100 54h40" stroke="#cfdcc4" strokeWidth="8" strokeLinecap="round" />
      </g>
      <Bean x={70} y={250} color="#f3d3bd" s={1.3} />
      <Bean x={330} y={110} color="#f9e8db" flip s={1.1} />
      <g transform="translate(90 186)">
        <rect width="64" height="30" rx="15" fill="#fffcf7" />
        <circle cx="18" cy="15" r="3.5" fill="#cfb8a6" />
        <circle cx="32" cy="15" r="3.5" fill="#cfb8a6" />
        <circle cx="46" cy="15" r="3.5" fill="#cfb8a6" />
      </g>
      <Heart x={318} y={260} s={1.2} />
    </>
  ),
  meadow: () => (
    <>
      <rect width="400" height="300" fill="#f9e8db" />
      <Cloud x={250} y={40} s={1.4} />
      <circle cx="80" cy="62" r="22" fill="#f2e2ae" />
      <path d="M0 160c60-30 130-30 200-10s140 10 200-12v162H0z" fill="#d6e1cb" />
      <path d="M0 200c80-20 160-14 230 0s120 4 170-6v106H0z" fill="#b9c8ae" />
      <circle cx="60" cy="160" r="22" fill="#a6b896" />
      <rect x="57" y="170" width="6" height="22" fill="#a07a5f" />
      <circle cx="350" cy="168" r="18" fill="#a6b896" />
      <rect x="347" y="176" width="6" height="18" fill="#a07a5f" />
      <g transform="translate(210 132)">
        <rect x="0" y="30" width="80" height="54" rx="6" fill="#fffcf7" />
        <path d="M-8 34q48-50 96 0z" fill="#c98b7f" />
        <rect x="32" y="52" width="18" height="32" rx="8" fill="#a07a5f" />
        <circle cx="16" cy="56" r="7" fill="#cddbe0" />
        <circle cx="66" cy="56" r="7" fill="#cddbe0" />
      </g>
      {[110, 140, 330].map((x, i) => (
        <Flower key={x} x={x} y={238 + i * 4} c={['#e8c1be', '#d9c6dd', '#f3c5a8'][i]} s={0.9} />
      ))}
      <path d="M20 250h70M20 238v24M44 238v24M68 238v24" stroke="#c9a37f" strokeWidth="3" strokeLinecap="round" />
      <Bean x={170} y={224} color="#f3d3bd" />
      <Bean x={200} y={226} color="#e8c1be" flip />
    </>
  ),
}

export function GameArt({ theme, className, label }: { theme: ArtTheme; className?: string; label?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable={false}
    >
      {scenes[theme]()}
    </svg>
  )
}
