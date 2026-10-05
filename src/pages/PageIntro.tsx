import type { ReactNode } from 'react'
import { Breadcrumbs } from '../components/bits'
import { Squiggle } from '../components/Doodles'
import './pages.css'

export function PageIntro({
  crumbs,
  eyebrow,
  title,
  children,
  art,
  tint = 'peach',
}: {
  crumbs: { label: string; to?: string }[]
  eyebrow?: ReactNode
  title: ReactNode
  children?: ReactNode
  art?: ReactNode
  tint?: 'peach' | 'sage' | 'blush' | 'sky'
}) {
  return (
    <header className={`page-intro tint-${tint}`}>
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className={`page-intro__grid${art ? ' has-art' : ''}`}>
          <div>
            {eyebrow && <p className="page-intro__eyebrow hand">{eyebrow}</p>}
            <h1>{title}</h1>
            <Squiggle className="squiggle" />
            {children && <div className="page-intro__lede">{children}</div>}
          </div>
          {art && <div className="page-intro__art">{art}</div>}
        </div>
      </div>
    </header>
  )
}
