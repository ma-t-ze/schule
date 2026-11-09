import { createHash, randomUUID } from 'node:crypto'
import { mkdir, readFile, writeFile, rename, unlink, rmdir } from 'node:fs/promises'
import path from 'node:path'
import { createLocalAttendanceStore } from './localAttendanceStore.js'
import { parseGrades, serializeGrades } from '../src/components/views/MainApplication/localOralGrades.js'

const digest = text => createHash('sha256').update(text).digest('hex')
const missing = error => error.code === 'ENOENT'
export function createLocalGradeStore(root) {
  const directory = path.join(root, 'local-noten')
  async function roster(classId) {
    if (!/^[a-z0-9][a-z0-9-]{0,99}$/.test(classId)) throw new Error('Ungültige Klasse.')
    const data = JSON.parse(await readFile(path.join(root, 'src/local-sitzplaene/klassen', classId, 'klasse.json'), 'utf8'))
    if (data.id !== classId || !Array.isArray(data.students)) throw new Error('Die lokale Klasse ist nicht verfügbar.')
    return data
  }
  async function read(classId) {
    await roster(classId)
    try {
      const text = await readFile(path.join(directory, `Noten_${classId}.json`), 'utf8')
      return { entries: parseGrades(text, classId), revision: digest(text) }
    } catch (error) {
      if (missing(error)) return { entries: [], revision: null }
      throw error
    }
  }
  async function save(classId, payload) {
    const classroom = await roster(classId)
    const entries = parseGrades(JSON.stringify(payload), classId)
    await mkdir(directory, { recursive: true, mode: 0o700 })
    const lock = path.join(directory, `.lock-${classId}`)
    try { await mkdir(lock) } catch (error) {
      if (error.code === 'EEXIST') throw Object.assign(new Error('Eine Speicherung läuft bereits. Bitte erneut speichern.'), { status: 409 })
      throw error
    }
    let temporary
    try {
      const existing = await read(classId)
      if (payload.revision !== existing.revision) throw Object.assign(new Error('Die Datei wurde inzwischen geändert. Bitte „Dateistand laden“ anklicken und erneut speichern.'), { status: 409 })
      const text = serializeGrades(classId, classroom.title, classroom.students, entries)
      temporary = path.join(directory, `.tmp-${randomUUID()}`)
      await writeFile(temporary, text, { flag: 'wx', mode: 0o600 })
      await rename(temporary, path.join(directory, `Noten_${classId}.json`))
      temporary = null
      return { revision: digest(text), file: `local-noten/Noten_${classId}.json` }
    } finally {
      if (temporary) await unlink(temporary).catch(() => {})
      await rmdir(lock)
    }
  }
  return { read, save }
}

export default function localGradesPlugin(root) {
  const store = createLocalGradeStore(root)
  const attendance = createLocalAttendanceStore(root)
  return {
    name: 'local-grade-files',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = new URL(req.url, 'http://localhost').pathname
        const isAttendance = pathname.startsWith('/__local-anwesenheit/')
        if (!isAttendance && !pathname.startsWith('/__local-noten/')) return next()
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.setHeader('Cache-Control', 'no-store')
        res.setHeader('X-Content-Type-Options', 'nosniff')
        const respond = (status, body) => { res.statusCode = status; res.end(JSON.stringify(body)) }
        try {
          const host = new URL(`http://${req.headers.host}`)
          const remote = req.socket.remoteAddress
          if (!['localhost', '127.0.0.1', '[::1]'].includes(host.hostname) || !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(remote)) return respond(403, { error: 'Lokale Dateien sind nur auf diesem Rechner verfügbar.' })
          if ((req.headers.origin && req.headers.origin !== host.origin) || req.headers['sec-fetch-site'] === 'cross-site') return respond(403, { error: 'Zugriff nur aus derselben lokalen Ansicht erlaubt.' })
          const prefix = isAttendance ? '/__local-anwesenheit/' : '/__local-noten/'
          const classId = decodeURIComponent(pathname.slice(prefix.length))
          if (!isAttendance && req.method === 'GET') return respond(200, await store.read(classId))
          if (req.method !== 'POST') return respond(405, { error: 'Methode nicht erlaubt.' })
          if (req.headers.origin !== host.origin || !req.headers['content-type']?.startsWith(isAttendance ? 'application/pdf' : 'application/json')) return respond(403, { error: 'Lokale Anfrage mit passendem Dateiformat erforderlich.' })
          let size = 0
          const chunks = []
          for await (const chunk of req) {
            size += chunk.length
            if (size > 20 * 1024 * 1024) return respond(413, { error: 'Die lokale Datei ist zu groß.' })
            chunks.push(chunk)
          }
          const body = Buffer.concat(chunks)
          return respond(200, isAttendance ? await attendance.save(classId, body) : await store.save(classId, JSON.parse(body.toString('utf8'))))
        } catch (error) {
          // Never log grade contents or include filesystem paths in errors.
          return respond(error.status || 400, { error: error.status ? error.message : 'Die lokale Datei konnte nicht gelesen oder gespeichert werden. Bitte Klasse, Dateiformat und Schreibrechte prüfen.' })
        }
      })
    }
  }
}
