import { spawn } from 'node:child_process'
import { constants } from 'node:fs'
import { access, readdir } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

const prefix = '/__local-unterricht/'
const loopbackHosts = ['localhost', '127.0.0.1', '[::1]']
const loopbackAddresses = ['127.0.0.1', '::1', '::ffff:127.0.0.1']
const failure = (message, status = 400) => Object.assign(new Error(message), { status })

export async function findCodex() {
  const candidates = []
  if (process.env.CODEX_BIN) candidates.push(process.env.CODEX_BIN)
  for (const directory of (process.env.PATH || '').split(path.delimiter)) {
    if (directory) candidates.push(path.join(directory, 'codex'))
  }
  const extensionRoot = path.join(homedir(), '.vscode/extensions')
  const extensions = await readdir(extensionRoot).catch(() => [])
  const platform = process.platform === 'darwin' ? 'macos' : process.platform
  const arch = process.arch === 'arm64' ? 'aarch64' : process.arch === 'x64' ? 'x86_64' : process.arch
  for (const extension of extensions.filter(name => name.startsWith('openai.chatgpt-')).sort().reverse()) {
    candidates.push(path.join(extensionRoot, extension, 'bin', `${platform}-${arch}`, 'codex'))
  }
  for (const candidate of candidates) {
    try { await access(candidate, constants.X_OK); return candidate } catch { /* Try next installed CLI. */ }
  }
  return null
}

export function createLessonService(root, { resolveBinary = findCodex, spawnProcess = spawn, timeoutMs = 5 * 60_000 } = {}) {
  const jobs = new Map()
  const children = new Set()
  let starting = false
  function prune() {
    for (const [id, job] of jobs) {
      if (job.status !== 'running' && Date.now() - job.updatedAt > 60 * 60_000) jobs.delete(id)
    }
    while (jobs.size >= 20) {
      const oldest = [...jobs].find(([, job]) => job.status !== 'running')
      if (!oldest) break
      jobs.delete(oldest[0])
    }
  }
  async function start(prompt) {
    if (typeof prompt !== 'string' || !prompt.trim() || Buffer.byteLength(prompt, 'utf8') > 60_000) {
      throw failure('Bitte einen Prompt mit höchstens 60.000 Bytes senden.')
    }
    if (starting || [...jobs.values()].some(job => job.status === 'running')) throw failure('Codex erstellt gerade einen Entwurf. Bitte warte auf das Ergebnis.', 409)
    starting = true
    try {
      const binary = await resolveBinary()
      if (!binary) throw failure('Codex wurde nicht gefunden. Installiere den Codex-CLI oder setze CODEX_BIN und starte den lokalen Server neu.', 503)
      prune()
      const job = { id: randomUUID(), status: 'running', createdAt: Date.now(), updatedAt: Date.now(), result: '', error: '' }
      const child = spawnProcess(binary, [
        'exec', '--sandbox', 'read-only', '--ephemeral', '--color', 'never',
        '-c', 'approval_policy="never"', '--cd', root, '-'
      ], { cwd: root, shell: false, stdio: ['pipe', 'pipe', 'pipe'] })
      jobs.set(job.id, job)
      children.add(child)
      let output = ''
      let diagnostic = ''
      let outputSize = 0
      const finishError = message => {
        if (job.status !== 'running') return
        job.status = 'failed'; job.error = message; job.updatedAt = Date.now()
      }
      const timer = setTimeout(() => {
        finishError('Codex hat innerhalb von fünf Minuten keinen Entwurf geliefert. Bitte erneut versuchen.')
        child.kill('SIGTERM')
      }, timeoutMs)
      timer.unref?.()
      child.stdout.setEncoding('utf8')
      child.stderr.setEncoding('utf8')
      child.stdout.on('data', chunk => {
        outputSize += Buffer.byteLength(chunk)
        if (outputSize > 1024 * 1024) {
          finishError('Die Codex-Antwort ist zu groß. Bitte den Auftrag eingrenzen.')
          child.kill('SIGTERM')
        } else output += chunk
      })
      child.stderr.on('data', chunk => { diagnostic = (diagnostic + chunk).slice(-16_000) })
      child.stdin.on('error', () => { /* The exit/error handler reports an unavailable CLI. */ })
      child.on('error', () => {
        clearTimeout(timer)
        children.delete(child)
        finishError('Codex konnte nicht gestartet werden. Prüfe die lokale Installation und CODEX_BIN.')
      })
      child.on('close', code => {
        clearTimeout(timer)
        children.delete(child)
        if (job.status !== 'running') return
        job.updatedAt = Date.now()
        if (code === 0 && output.trim()) {
          job.status = 'completed'; job.result = output.trim()
        } else if (/unauthorized|not logged|authentication|401|login required|sign in/i.test(diagnostic)) {
          finishError('Codex ist nicht angemeldet. Führe im Terminal „codex login“ aus und versuche es erneut.')
        } else if (/connect|network|dns|stream disconnected|reconnect/i.test(diagnostic)) {
          finishError('Codex konnte die Verbindung nicht herstellen. Prüfe die Internetverbindung und die lokale Codex-Anmeldung.')
        } else {
          finishError('Codex hat keinen Entwurf geliefert. Prüfe im Projektordner mit „codex login status“ die Anmeldung und versuche es erneut.')
        }
      })
      child.stdin.end(`Du unterstützt die Unterrichtsplanung mit einem Unterrichtsentwurf oder einer Prüfung des Entwurfs als Text. Arbeite im vorhandenen Schulprojekt. Du darfst die im Auftrag benannten Designvorlagen und fachlichen Quelldokumente lesen. Ausgewählte fachliche Quelldokumente musst du vor der Planung oder Prüfung lesen und berücksichtigen. Lies keine Noten, Anwesenheitslisten, Sitzpläne, Zugangsdaten oder sonstigen personenbezogenen Schülerdaten. Ändere keine Dateien und starte keine weiteren Agenten. Antworte ausschließlich mit dem angeforderten Ergebnis im gewünschten Ausgabeformat.\n\n${prompt.trim()}`)
      return { ...job }
    } finally { starting = false }
  }
  return {
    async health() { return { available: Boolean(await resolveBinary()) } },
    start,
    get(id) {
      const job = jobs.get(id)
      if (job && job.status !== 'running' && Date.now() - job.updatedAt > 60 * 60_000) jobs.delete(id)
      if (!jobs.has(id)) throw failure('Dieser Auftrag ist nicht mehr verfügbar. Der lokale Dienst wurde möglicherweise neu gestartet. Bitte erneut losschicken.', 404)
      return { ...job }
    },
    close() { for (const child of children) child.kill('SIGTERM') }
  }
}

export function lessonMiddleware(service) {
  return async (req, res, next) => {
    const pathname = new URL(req.url, 'http://localhost').pathname
    if (!pathname.startsWith(prefix)) return next()
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.setHeader('Cache-Control', 'no-store')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    const respond = (status, body) => { res.statusCode = status; res.end(JSON.stringify(body)) }
    try {
      const host = new URL(`http://${req.headers.host}`)
      if (!loopbackHosts.includes(host.hostname) || !loopbackAddresses.includes(req.socket.remoteAddress)) return respond(403, { error: 'Der Unterrichtsdienst ist nur auf diesem Rechner verfügbar.' })
      if ((req.headers.origin && req.headers.origin !== host.origin) || req.headers['sec-fetch-site'] === 'cross-site') return respond(403, { error: 'Bitte den Baukasten auf demselben lokalen Server öffnen.' })
      const route = pathname.slice(prefix.length)
      if (req.method === 'GET' && route === 'status') return respond(200, await service.health())
      if (req.method === 'GET' && /^jobs\/[a-f0-9-]{36}$/.test(route)) return respond(200, service.get(route.slice(5)))
      if (req.method !== 'POST') return respond(405, { error: 'Methode nicht erlaubt.' })
      if (route !== 'jobs') return respond(404, { error: 'Unbekannter Auftrag.' })
      if (req.headers.origin !== host.origin || !req.headers['content-type']?.startsWith('application/json')) return respond(403, { error: 'Eine lokale JSON-Anfrage ist erforderlich.' })
      let size = 0
      const chunks = []
      for await (const chunk of req) {
        size += chunk.length
        if (size > 70_000) return respond(413, { error: 'Der Prompt ist zu groß.' })
        chunks.push(chunk)
      }
      let data
      try { data = JSON.parse(Buffer.concat(chunks).toString('utf8')) } catch { throw failure('Die Anfrage enthält kein gültiges JSON.') }
      return respond(202, await service.start(data?.prompt))
    } catch (error) {
      return respond(error.status || 500, { error: error.status ? error.message : 'Der lokale Unterrichtsdienst konnte die Anfrage nicht verarbeiten.' })
    }
  }
}
export default function localLessonPlugin(root) {
  return {
    name: 'local-lesson-codex',
    apply: 'serve',
    configureServer(server) {
      const service = createLessonService(root)
      server.middlewares.use(lessonMiddleware(service))
      server.httpServer?.once('close', () => service.close())
      return undefined
    }
  }
}
