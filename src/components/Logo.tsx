import { Link } from '../lib/router'

export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden focusable={false} className="logo__mark">
      <path
        d="M22 47c-9-6-14-12-14-18 0-5 4-8 8-8 3 0 5 2 6 4 1-2 3-4 6-4 4 0 8 3 8 8 0 6-5 12-14 18z"
        fill="#e8c1be"
        stroke="#3d322c"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M42 49c-8-5-12-10-12-15 0-4 3-7 7-7 2.5 0 4.2 1.6 5 3.4.8-1.8 2.5-3.4 5-3.4 4 0 7 3 7 7 0 5-4 10-12 15z"
        fill="#b9c8ae"
        stroke="#3d322c"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({ tagline = false }: { tagline?: boolean }) {
  return (
    <Link to="/" className="logo">
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">Cozy Couple Games</span>
        {tagline && <span className="logo__tagline">Games are better together.</span>}
      </span>
    </Link>
  )
}
