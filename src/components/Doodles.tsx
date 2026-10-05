import type { SVGProps } from 'react'

/**
 * Small hand-drawn marks used sparingly across the site.
 * All decorative: hidden from assistive tech by default.
 */
type P = SVGProps<SVGSVGElement>

const base = (props: P): P => ({
  'aria-hidden': true,
  focusable: false,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...props,
})

export const HeartDoodle = (props: P) => (
  <svg viewBox="0 0 24 24" {...base(props)}>
    <path d="M12.2 19.6C7.4 16.4 4 13.3 4 9.6 4 7.3 5.8 5.5 8 5.6c1.8 0 3 1.1 4 2.6 1-1.6 2.4-2.7 4.2-2.6 2.1.1 3.8 1.9 3.7 4.1-.1 3.6-3.5 6.7-7.7 9.9z" />
  </svg>
)

export const HeartFilled = (props: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
    <path
      d="M12.2 19.6C7.4 16.4 4 13.3 4 9.6 4 7.3 5.8 5.5 8 5.6c1.8 0 3 1.1 4 2.6 1-1.6 2.4-2.7 4.2-2.6 2.1.1 3.8 1.9 3.7 4.1-.1 3.6-3.5 6.7-7.7 9.9z"
      fill="currentColor"
    />
  </svg>
)

export const StarDoodle = (props: P) => (
  <svg viewBox="0 0 24 24" {...base(props)}>
    <path d="M12 3.5c.6 3.3 1.6 5.6 5.6 6.6.5.1.5.6 0 .7-3.8.9-4.9 3.3-5.5 6.7-.1.5-.6.5-.7 0-.7-3.4-1.8-5.8-5.6-6.6-.5-.1-.5-.6 0-.7 3.9-1 4.9-3.3 5.5-6.7.1-.5.6-.5.7 0z" />
  </svg>
)

export const SparkleDoodle = (props: P) => (
  <svg viewBox="0 0 24 24" {...base(props)}>
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4M7 7l1.8 1.8M15.2 15.2 17 17M17 7l-1.8 1.8M8.8 15.2 7 17" />
  </svg>
)

export const FlowerDoodle = (props: P) => (
  <svg viewBox="0 0 32 32" {...base(props)}>
    <circle cx="16" cy="12" r="2.6" />
    <path d="M16 9.4c-1.4-3.2.2-5.4 0-5.4s1.6 2.2 0 5.4zM18.4 11c2.6-2.3 5.2-1.6 5.2-1.6s-1.3 2.4-5 2.8M18.3 13.6c3.3 1 3.7 3.6 3.7 3.6s-2.6.4-4.6-2.6M13.7 13.6c-3.3 1-3.7 3.6-3.7 3.6s2.6.4 4.6-2.6M13.6 11c-2.6-2.3-5.2-1.6-5.2-1.6s1.3 2.4 5 2.8" />
    <path d="M16 14.8c.2 4.8-.6 9.4-1.2 13.2M15.4 22c-2.4-1.8-4.8-1.6-5.6-1.2 1.4 1.8 3.4 2.2 5.4 1.6" />
  </svg>
)

export const ControllerDoodle = (props: P) => (
  <svg viewBox="0 0 32 24" {...base(props)}>
    <path d="M9 5.5h14c3.6 0 5.6 3.2 6.2 8 .5 4-1 6.4-3.2 6.4-2 0-3-1.8-4.4-3.4H10.4C9 18.1 8 19.9 6 19.9c-2.2 0-3.7-2.4-3.2-6.4.6-4.8 2.6-8 6.2-8z" />
    <path d="M9.5 10v4.4M7.3 12.2h4.4" />
    <circle cx="21.6" cy="10.6" r=".9" fill="currentColor" />
    <circle cx="24.2" cy="13.2" r=".9" fill="currentColor" />
  </svg>
)

export const Squiggle = (props: P) => (
  <svg viewBox="0 0 92 10" preserveAspectRatio="none" {...base({ strokeWidth: 2.4, ...props })}>
    <path d="M2 6c6-4 10-4 15 0s10 4 15 0 10-4 15 0 10 4 15 0 10-4 15 0 9 3 13 0" />
  </svg>
)

export const DashedLine = (props: P) => (
  <svg viewBox="0 0 200 8" preserveAspectRatio="none" {...base({ strokeWidth: 1.6, ...props })}>
    <path d="M2 4c30-2 60 2 98 0s70-2 98 0" strokeDasharray="2 7" />
  </svg>
)

export const ArrowRight = (props: P) => (
  <svg viewBox="0 0 20 20" {...base({ strokeWidth: 2, ...props })}>
    <path d="M4 10.2h11.5M11 5.5l4.6 4.7-4.6 4.4" />
  </svg>
)

export const SearchIcon = (props: P) => (
  <svg viewBox="0 0 24 24" {...base({ strokeWidth: 2, ...props })}>
    <circle cx="10.8" cy="10.8" r="6.3" />
    <path d="m15.6 15.7 4.4 4.3" />
  </svg>
)

export const MenuIcon = (props: P) => (
  <svg viewBox="0 0 24 24" {...base({ strokeWidth: 2, ...props })}>
    <path d="M4 7.5h16M4 12.2h11M4 16.8h16" />
  </svg>
)

export const CloseIcon = (props: P) => (
  <svg viewBox="0 0 24 24" {...base({ strokeWidth: 2, ...props })}>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </svg>
)

export const CheckDoodle = (props: P) => (
  <svg viewBox="0 0 24 24" {...base({ strokeWidth: 2.2, ...props })}>
    <path d="M5 12.8c1.6 1.4 2.8 2.8 4 4.6 2.6-5 5.6-8.4 10-11" />
  </svg>
)

export const InfoDoodle = (props: P) => (
  <svg viewBox="0 0 24 24" {...base(props)}>
    <path d="M12 3.8c4.8-.1 8.3 3.6 8.2 8.3-.1 4.6-3.8 8.1-8.4 8-4.5-.1-7.9-3.6-7.9-8.1.1-4.6 3.5-8.1 8.1-8.2z" />
    <path d="M12 11v5M12 7.8v.2" />
  </svg>
)
