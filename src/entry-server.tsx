import { renderToString } from 'react-dom/server'
import { Router } from './lib/router'
import { App } from './App'
import { resolveRoute, allPaths } from './routes'
import { renderHead } from './lib/seo'

export { allPaths }

export function render(path: string) {
  const route = resolveRoute(path)
  const html = renderToString(
    <Router url={path}>
      <App />
    </Router>,
  )
  return { html, head: renderHead(route.meta), status: route.status, updated: route.meta.updated }
}
