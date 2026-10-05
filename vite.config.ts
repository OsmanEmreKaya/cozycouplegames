import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * `vite preview` falls back to the root index.html for every path. Our routes are
 * prerendered to /route.html, so serve those like a static host would — and serve
 * 404.html with a real 404 status for anything else.
 */
function prerenderedPreview(): Plugin {
  return {
    name: 'prerendered-preview',
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, res, next) => {
        const [pathname, query = ''] = (req.url ?? '/').split('?')
        if (pathname === '/' || path.extname(pathname)) return next()
        const clean = pathname.replace(/\/+$/, '')
        const candidate = path.join(outDir, `${clean}.html`)
        if (candidate.startsWith(outDir) && fs.existsSync(candidate)) {
          req.url = `${clean}.html${query ? `?${query}` : ''}`
          return next()
        }
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(fs.readFileSync(path.join(outDir, '404.html')))
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), prerenderedPreview()],
  build: {
    cssCodeSplit: false,
  },
})
