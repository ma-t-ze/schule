import test from 'node:test'
import assert from 'node:assert/strict'
import { EventEmitter } from 'node:events'
import { PassThrough } from 'node:stream'
import { createLessonService, lessonMiddleware } from './localLessonPlugin.js'

function fakeChild() {
  const child = new EventEmitter()
  child.stdin = new PassThrough()
  child.stdout = new PassThrough()
  child.stderr = new PassThrough()
  child.killed = false
  child.kill = () => { child.killed = true; child.emit('close', null) }
  return child
}
test('runs the exact prompt as stdin in the fixed project, returns the result, blocks overlapping jobs', async () => {
  const child = fakeChild()
  let invocation
  const service = createLessonService('/school', {
    resolveBinary: async () => '/bin/codex',
    spawnProcess: (...args) => { invocation = args; return child }
  })
  const prompt = 'Lernziel: Ein Layout beurteilen. $(do-not-execute) `literal`'
  const job = await service.start(prompt)
  assert.equal(invocation[0], '/bin/codex')
  assert.equal(invocation[2].cwd, '/school')
  assert.equal(invocation[2].shell, false)
  assert.equal(invocation[1][invocation[1].indexOf('--sandbox') + 1], 'read-only')
  assert.equal(invocation[1][invocation[1].indexOf('--cd') + 1], '/school')
  assert(!invocation[1].includes(prompt))
  assert(child.stdin.read().toString().endsWith(prompt))
  await assert.rejects(service.start('Second job'), error => error.status === 409)
  child.stdout.write('# Stundenentwurf\n\nEinstieg und Lernnachweis.')
  child.emit('close', 0)
  assert.equal(service.get(job.id).status, 'completed')
  assert.equal(service.get(job.id).result, '# Stundenentwurf\n\nEinstieg und Lernnachweis.')
  service.close()
})
test('validation, missing installation and expired jobs produce actionable errors', async () => {
  const service = createLessonService('/school', { resolveBinary: async () => null })
  await assert.rejects(service.start('  '), error => error.status === 400)
  await assert.rejects(service.start('ä'.repeat(31_000)), error => error.status === 400)
  await assert.rejects(service.start('Valid'), error => error.status === 503)
  assert.throws(() => service.get('unknown'), error => error.status === 404)
})
test('authentication failures and timeouts fail the job without exposing CLI logs', async () => {
  const child = fakeChild()
  const service = createLessonService('/school', { resolveBinary: async () => '/bin/codex', spawnProcess: () => child })
  const job = await service.start('Lesson')
  child.stderr.write('401 Unauthorized PRIVATE LOG')
  child.emit('close', 1)
  assert.match(service.get(job.id).error, /codex login/)
  assert(!JSON.stringify(service.get(job.id)).includes('PRIVATE LOG'))
  const stalled = fakeChild()
  const timed = createLessonService('/school', { resolveBinary: async () => '/bin/codex', spawnProcess: () => stalled, timeoutMs: 10 })
  const waiting = await timed.start('Lesson')
  await new Promise(resolve => setTimeout(resolve, 25))
  assert.equal(timed.get(waiting.id).status, 'failed')
  assert.equal(stalled.killed, true)
  timed.close(); service.close()
})
test('middleware rejects foreign origins, remote clients, missing origins and arbitrary working directories', async () => {
  let acceptedPrompt
  const handler = lessonMiddleware({ start: async prompt => { acceptedPrompt = prompt; return { id: 'test', status: 'running' } } })
  async function invoke({ host = 'localhost:5173', origin = 'http://localhost:5173', address = '127.0.0.1', body = '{"prompt":"Lesson","cwd":"/etc"}' } = {}) {
    const req = new PassThrough()
    Object.assign(req, { url: '/__local-unterricht/jobs', method: 'POST', headers: { host, origin, 'content-type': 'application/json' }, socket: { remoteAddress: address } })
    let payload
    const res = { setHeader() {}, end(value) { payload = JSON.parse(value) } }
    req.end(body)
    await handler(req, res, () => assert.fail('Unexpected fallthrough'))
    return { status: res.statusCode, payload }
  }
  assert.equal((await invoke({ origin: 'https://example.com' })).status, 403)
  assert.equal((await invoke({ origin: null })).status, 403)
  assert.equal((await invoke({ origin: '' })).status, 403)
  assert.equal((await invoke({ address: '192.168.1.20' })).status, 403)
  assert.equal((await invoke({ host: 'example.com' })).status, 403)
  assert.equal((await invoke({ body: '{broken' })).status, 400)
  assert.equal((await invoke()).status, 202)
  assert.equal(acceptedPrompt, 'Lesson')
})
