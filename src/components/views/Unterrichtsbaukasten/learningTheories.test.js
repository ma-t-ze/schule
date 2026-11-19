import test from 'node:test'
import assert from 'node:assert/strict'
import { learningTheoryDocuments, theoryContext } from './learningTheories.js'

test('the removed planning document is no longer available as a selectable source', () => {
  assert(!learningTheoryDocuments.some(item => item.id === 'unterrichtsplanung'))
})
test('only checked method guidelines are included in the planning context', () => {
  assert.equal(theoryContext(learningTheoryDocuments.map(item => ({ ...item, selected: false }))), '')
  const context = theoryContext(learningTheoryDocuments.map(item => ({ ...item, selected: item.id === 'lehrervortrag' })))
  assert(context.includes('Lehrervortrag'))
  assert(context.includes('Vom Nutzer hinterlegte Methodenvorgaben'))
  assert(!context.includes('Dokument: Unterrichtsplanung'))
})

test('both teaching methods have source-based theory and are independently selectable', () => {
  for (const id of ['lehrervortrag', 'fragend-entwickelnd']) {
    const method = learningTheoryDocuments.find(item => item.id === id)
    assert(method.summary.length > 200)
    assert(method.pages)
    assert(method.href.includes('#page='))
    const context = theoryContext(learningTheoryDocuments.map(item => ({ ...item, selected: item.id === id })))
    assert(context.includes(method.summary))
    assert(context.includes(method.application))
    assert(context.includes('Vom Nutzer hinterlegte Methodenvorgaben'))
    assert(!context.includes('Zusammenfassung aus dem Skript'))
    const other = learningTheoryDocuments.find(item => ['lehrervortrag', 'fragend-entwickelnd'].includes(item.id) && item.id !== id)
    assert(!context.includes(other.summary))
  }
})

test('the supplied method notes preserve the examples, thought and nested questions', () => {
  const lecture = learningTheoryDocuments.find(item => item.id === 'lehrervortrag')
  const questioning = learningTheoryDocuments.find(item => item.id === 'fragend-entwickelnd')
  for (const phrase of ['Heute klären wir, wie Farbensehen funktioniert.', 'Stichwort: Roter Faden', 'Vertiefen mit Transfer', 'Kleine Fragen']) assert(lecture.summary.includes(phrase))
  for (const phrase of ['Offene, weite Einzelfragen stellen', 'Denkzeit geben', 'Immer enger hintereinander fragen', 'Schüler sollen Begriffe nicht erraten.', 'Qualifiziert rückmelden']) assert(questioning.summary.includes(phrase))
  assert.equal(questioning.sections[0].items[4].children.length, 2)
})
