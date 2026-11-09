import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { createLocalAttendanceStore } from './localAttendanceStore.js'

test('attendance PDF snapshots stay local and never overwrite previous snapshots', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'school-attendance-'))
  try {
    const roster = path.join(root, 'src/local-sitzplaene/klassen/test-class')
    await mkdir(roster, { recursive: true })
    await writeFile(path.join(roster, 'klasse.json'), JSON.stringify({ id: 'test-class', students: [] }))
    const store = createLocalAttendanceStore(root)
    const pdf = Buffer.from('%PDF-1.7\nTest snapshot\n%%EOF')
    const first = await store.save('test-class', pdf)
    const second = await store.save('test-class', pdf)
    assert.match(first.file, /^local-anwesenheit\/Anwesenheit_test-class_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}_[a-f0-9]{8}\.pdf$/)
    assert.notEqual(first.file, second.file)
    assert.deepEqual(await readFile(path.join(root, first.file)), pdf)
    await assert.rejects(store.save('../test-class', pdf))
    await assert.rejects(store.save('missing-class', pdf))
    await assert.rejects(store.save('test-class', Buffer.from('not a pdf')))
  } finally { await rm(root, { recursive: true, force: true }) }
})
