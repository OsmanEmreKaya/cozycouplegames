import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Router } from './lib/router'
import { App } from './App'
import { resolveRoute } from './routes'
import './styles/fonts.css'
import './styles/global.css'

const container = document.getElementById('root')!
const tree = (
  <StrictMode>
    <Router url={window.location.href}>
      <App />
    </Router>
  </StrictMode>
)

// Production pages are prerendered at build time, so hydrate them. If a host served
// HTML for a different route (e.g. an SPA fallback), render fresh instead.
const path = window.location.pathname.replace(/(.)\/+$/, '$1')
const prerendered = container.dataset.path
const matches = prerendered === path || (prerendered === '/404' && resolveRoute(path).status === 404)
if (container.firstElementChild && matches) {
  hydrateRoot(container, tree)
} else {
  container.textContent = ''
  createRoot(container).render(tree)
}
