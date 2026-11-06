import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import localGradesPlugin, { createLocalGradeStore } from './localGradesPlugin.js'
const entry = { id: 'grade-1', studentId: 'student-1', date: '2026-11-06', grade: '2+', type: 'oral', note: 'Test', updatedAt: 100, deleted: false }
const payload = (revision, entries = [entry]) => ({ format: 'school-oral-grades', version: 1, classId: 'test-class', entries, revision })
test('fixed local file, revisions and corrupt-file protection', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'school-grade-store-'))
  try {
    const roster = path.join(root, 'src/local-sitzplaene/klassen/test-class')
    await mkdir(roster, { recursive: true })
    await writeFile(path.join(roster, 'klasse.json'), JSON.stringify({ id: 'test-class', title: 'Testklasse', students: [{ id: 'student-1', name: 'Testperson' }] }))
    const store = createLocalGradeStore(root)
    assert.deepEqual(await store.read('test-class'), { entries: [], revision: null })
    const first = await store.save('test-class', payload(null))
    const filename = path.join(root, 'local-noten/Noten_test-class.json')
    const text = await readFile(filename, 'utf8')
    assert.equal(JSON.parse(text).entries[0].grade, '2+')
    await assert.rejects(store.save('test-class', payload(null)), error => error.status === 409)
    assert.equal(await readFile(filename, 'utf8'), text)
    const second = await store.save('test-class', payload(first.revision, [{ ...entry, grade: '1-', updatedAt: 200 }]))
    assert.notEqual(first.revision, second.revision)
    assert.equal((await store.read('test-class')).entries[0].grade, '1-')
    await assert.rejects(store.read('../test-class'))
    await assert.rejects(store.save('test-class', payload(second.revision, [{ ...entry, date: 'invalid' }])))
    await writeFile(filename, 'corrupt original')
    await assert.rejects(store.save('test-class', payload(second.revision)))
    assert.equal(await readFile(filename, 'utf8'), 'corrupt original')
  } finally { await rm(root, { recursive: true, force: true }) }
})
test('local API rejects remote clients and foreign origins', async () => {
  let handler
  localGradesPlugin('/unused').configureServer({ middlewares: { use(callback) { handler = callback } } })
  for (const [host, origin, address] of [
    ['example.com', 'http://example.com', '127.0.0.1'],
    ['localhost:5173', 'https://example.com', '127.0.0.1'],
    ['localhost:5173', 'http://localhost:5173', '192.168.1.2'],
    ['localhost:5173', undefined, '127.0.0.1']
  ]) {
    const req = { url: '/__local-noten/test-class', method: 'POST', headers: { host, origin, 'content-type': 'application/json' }, socket: { remoteAddress: address } }
    let result
    const res = { setHeader() {}, end(text) { result = JSON.parse(text) } }
    await handler(req, res, () => { throw new Error('Unexpected fallthrough') })
    assert.equal(res.statusCode, 403)
    assert(result.error)
  }
})
