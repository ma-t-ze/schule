import { test } from 'node:test'
import assert from 'node:assert/strict'
import { dramaturgyInfo, displayDramaturgyTask, dramaturgyExample } from './dramaturgy.js'
import { parseStoryMapping, storyMappingGrid } from './storyMapping.js'

test('the four dramatic tasks remain in the requested phases and have information', () => {
  const source = '# Storymapping\n\n| Aktivität | Einleitung | Hauptteil | Schluss |\n| --- | --- | --- | --- |\n| Tasks | 1. Exposition | 2. Steigende Handlung (Erarbeitung)<br>3. Höhepunkt | 4. Katastrophe |'
  const map = parseStoryMapping(source)
  assert.deepEqual(map.phases.map(phase => phase.tasks.length), [1, 2, 1])
  for (const phase of storyMappingGrid(map).phases) for (const task of phase.tasks) assert(dramaturgyInfo(task.title))
  assert.equal(dramaturgyInfo('1. Exposition').title, 'Exposition')
  assert.equal(dramaturgyInfo('eine andere Aufgabe'), null)
})

test('info overlays use the original tension curve sections unchanged', async () => {
  const { learningTheoryDocuments } = await import('./learningTheories.js')
  const source = learningTheoryDocuments.find(item => item.id === 'spannungskurve').sections
  for (const [label, indexes] of [['Exposition', [2]], ['Steigende Handlung (Erarbeitung)', [3]], ['Höhepunkt', [4]], ['Katastrophe', [6]], ['Hauptteil', [3, 4]]]) {
    assert.deepEqual(dramaturgyInfo(label).sections, indexes.map(index => source[index]))
  }
})

test('saved bold numbering still displays the full exposition label and its info', () => {
  const source = '# Test\n| Aktivität | Einleitung | Hauptteil | Schluss |\n| --- | --- | --- | --- |\n| Tasks | **1.** Exposition | 2. Höhepunkt | 3. Katastrophe |'
  const rendered = storyMappingGrid(parseStoryMapping(source)).phases[0].tasks[0].title
  const label = displayDramaturgyTask(rendered)
  assert.equal(label, 'Exposition: Der Einstieg')
  assert.equal(dramaturgyInfo(label).title, 'Exposition')
})

test('saved climax cards display their full heading and retain their info', () => {
  const label = displayDramaturgyTask('**** Höhepunkt')
  assert.equal(label, 'Höhepunkt: Sicherung & Erkenntnisgewinn')
  assert.equal(dramaturgyInfo(label).title, 'Höhepunkt')
})

test('old exposition labels drop the duration', () => { assert.equal(displayDramaturgyTask('Exposition: Der Einstieg (ca. 5–10 Minuten)'), 'Exposition: Der Einstieg') })

test('saved rising action cards use the updated label and retain their info', () => {
  const label = displayDramaturgyTask('**** Steigende Handlung (Erarbeitung)')
  assert.equal(label, 'Steigende Handlung: Erarbeitung')
  assert(dramaturgyInfo(label))
})

test('the conclusion uses the updated label and retains the original info', () => {
  const label = displayDramaturgyTask('**** Katastrophe')
  assert.equal(label, 'Lösung: Abschluss & Ausblick')
  assert.equal(dramaturgyInfo(label).title, 'Katastrophe / Lösung')
})

test('each dramatic task has a short example and unrelated cards have none', () => {
  for (const label of ['Exposition: Der Einstieg', 'Steigende Handlung: Erarbeitung', 'Höhepunkt: Sicherung & Erkenntnisgewinn', 'Lösung: Abschluss & Ausblick']) assert(dramaturgyExample(label))
  assert.equal(dramaturgyExample('Einleitung'), '')
})
