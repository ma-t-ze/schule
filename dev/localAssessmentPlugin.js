import { readFile } from 'node:fs/promises'
import path from 'node:path'

// Individual correction drafts stay on the teacher's computer and are never bundled.
export default function localAssessmentPlugin(root) {
  return {
    name: 'local-assessment-drafts',
    configureServer(server) {
      server.middlewares.use('/__local-bewertungen/met-klassenarbeit-01', async (req, res) => {
        const host = (req.headers.host || '').toLowerCase()
        const remote = req.socket.remoteAddress
        const loopback = remote === '127.0.0.1' || remote === '::1' || remote === '::ffff:127.0.0.1'
        const localHost = /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host)
        const origin = req.headers.origin
        const localOrigin = !origin || /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(origin)
        if (!loopback || !localHost || !localOrigin || (req.headers['sec-fetch-site'] && !['same-origin', 'none'].includes(req.headers['sec-fetch-site']))) { res.statusCode = 403; res.end(); return }
        if (req.method !== 'GET') { res.statusCode = 405; res.end(); return }
        try {
          const json = await readFile(path.join(root, 'local-bewertungen', '3bkgd1-1-met-klassenarbeit-01.json'), 'utf8')
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(json)
        } catch { res.statusCode = 404; res.end() }
      })
    }
  }
}
