import type { Author } from '../data/authors'
import { primaryAuthor } from '../data/authors'
import { Link } from '../lib/router'
import { HeartDoodle } from './Doodles'
import { LogoMark } from './Logo'
import './author.css'

/** "Name" linked to their bio, or the site name when no author is set up yet. */
export function AuthorName() {
  if (!primaryAuthor) return <>Cozy Couple Games</>
  return <Link to={`/about#${primaryAuthor.slug}`}>{primaryAuthor.name}</Link>
}

function Avatar({ author }: { author: Author }) {
  if (author.photo === 'logo') {
    return (
      <span className="author__photo author__photo--logo" aria-hidden>
        <LogoMark size={36} />
      </span>
    )
  }
  if (author.photo) {
    return (
      <img
        className="author__photo"
        src={author.photo.src}
        alt={`Photo of ${author.name}`}
        width={author.photo.width}
        height={author.photo.height}
        loading="lazy"
        decoding="async"
      />
    )
  }
  return (
    <span className="author__photo author__photo--initial" aria-hidden>
      {author.name.charAt(0)}
    </span>
  )
}

export function AuthorCard({ author, headingLevel = 3 }: { author: Author; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as 'h2' | 'h3'
  return (
    <div className="author" id={author.slug}>
      <Avatar author={author} />
      <div>
        <H className="author__name">{author.name}</H>
        <p className="author__bio">{author.bio}</p>
        {author.links && author.links.length > 0 && (
          <ul className="author__links" role="list">
            {author.links.map((l) => (
              <li key={l.url}>
                <a href={l.url} rel="me noopener" target="_blank">
                  {l.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

/** Shown at the end of reviews and guides. Renders nothing until an author exists. */
export function AboutTheAuthor() {
  if (!primaryAuthor) return null
  return (
    <aside className="about-author" aria-label="About the author">
      <p className="about-author__label hand">
        <HeartDoodle /> written by
      </p>
      <AuthorCard author={primaryAuthor} />
    </aside>
  )
}
