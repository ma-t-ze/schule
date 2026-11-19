import test from 'node:test'
import assert from 'node:assert/strict'
import { exampleDrafts, draftTitle, restoreHistory } from './draftHistory.js'

test('two clearly marked examples are independent of edits to loaded copies', () => {
  const examples = exampleDrafts()
  assert.equal(examples.length, 2)
  assert(examples.every(item => item.isExample && item.text.includes('Platzhalter')))
  assert.notEqual(examples[0].id, examples[1].id)
  examples[0].text = 'Edited'
  assert.notEqual(exampleDrafts()[0].text, 'Edited')
})
test('restoring history preserves real drafts and edited examples without duplicates', () => {
  const edited = { ...exampleDrafts()[0], text: 'Meine Bearbeitung', isExample: false }
  const real = { id: 'real', title: 'Eigene Stunde', text: 'Mein gespeicherter Unterricht' }
  const history = restoreHistory([real, edited, real, null, { id: 'broken' }])
  assert.equal(history.filter(item => item.id === 'real').length, 1)
  assert.equal(history.find(item => item.id === edited.id).text, 'Meine Bearbeitung')
  assert(!history.some(item => item.id === 'example-retusche'))
  assert.equal(draftTitle('# Eigene Überschrift\nText', 'Lernziel'), 'Eigene Überschrift')
})

test('deleted drafts stay deleted when restoring history', () => {
  assert.deepEqual(restoreHistory([]), [])
  const remaining = exampleDrafts().slice(1)
  assert.deepEqual(restoreHistory(remaining), remaining)
  assert.equal(restoreHistory(undefined).length, 2)
})
