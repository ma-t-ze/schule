import { test } from 'node:test'
import assert from 'node:assert/strict'
import { addSuggestedSubtasks, replaceEntrySubtasks, replaceTaskSubtasks } from './lessonSubtasks.js'
import { parseStoryMapping } from './storyMapping.js'
const source = '# Mein Unterricht\n\n| Aktivität | Einleitung | Hauptteil | Schluss |\n| --- | --- | --- | --- |\n| Tasks | 1. Exposition | 2. Steigende Handlung (Erarbeitung)<br>3. Höhepunkt | 4. Katastrophe |\n| Subtasks zu Task 1 | 1.1 Vorhandene Idee | | |'
const suggestion = { titel: 'Zeichen verstehen', exposition: ['Als Schüler will ich beobachten.'], erarbeitung: ['Als Schüler will ich vergleichen.'], hoehepunkt: ['Als Schüler will ich Ergebnisse sichern.'], katastrophe: ['Als Schüler will ich reflektieren.'] }
test('adds subtasks to the existing four tasks without losing existing content', () => {
  const before = parseStoryMapping(source)
  const after = parseStoryMapping(addSuggestedSubtasks(source, JSON.stringify(suggestion)))
  assert.equal(after.title, 'Zeichen verstehen')
  assert.deepEqual(after.phases.map(p => p.title), before.phases.map(p => p.title))
  assert.deepEqual(after.phases.map(p => p.tasks.map(t => t.title.replace(/\*\*/g, ''))), before.phases.map(p => p.tasks.map(t => t.title)))
  assert(after.phases[0].tasks[0].subtasks.some(item => item.includes('Vorhandene Idee')))
  assert(after.phases[0].tasks[0].subtasks.some(item => item.includes('beobachten')))
  assert(after.phases[1].tasks[1].subtasks.some(item => item.includes('sichern')))
})
test('rejects missing or ambiguous structure and invalid responses', () => {
  assert.throws(() => addSuggestedSubtasks(source, JSON.stringify({ exposition: [] })))
  assert.throws(() => addSuggestedSubtasks(source, JSON.stringify({ ...suggestion, titel: '' })))
  assert.throws(() => addSuggestedSubtasks(source.replace('4. Katastrophe', '4. Abschluss'), JSON.stringify(suggestion)))
  assert.throws(() => addSuggestedSubtasks(source, JSON.stringify({ ...suggestion, katastrophe: [''] })))
})

test('suggestions also target the renamed conclusion', () => {
  const updated = source.replace('4. Katastrophe', '4. Lösung: Abschluss & Ausblick')
  const result = parseStoryMapping(addSuggestedSubtasks(updated, JSON.stringify(suggestion)))
  assert(result.phases[2].tasks[0].subtasks.some(item => item.includes('reflektieren')))
})

test('entry adjustment replaces only exposition subtasks and preserves other content', () => {
  const first = addSuggestedSubtasks(source, JSON.stringify(suggestion))
  const before = parseStoryMapping(first)
  const after = parseStoryMapping(replaceEntrySubtasks(first, JSON.stringify({ subtasks: ['Als Schüler will ich ein Bild betrachten.'] })))
  assert.equal(after.title, before.title)
  assert.deepEqual(after.phases.slice(1), before.phases.slice(1))
  assert.equal(after.phases[0].tasks[0].subtasks.length, 1)
  assert(after.phases[0].tasks[0].subtasks[0].includes('Bild betrachten'))
  assert.throws(() => replaceEntrySubtasks(first, JSON.stringify({ subtasks: [] })))
})

test('each requested adjustment replaces only its target task', () => {
  const initial = addSuggestedSubtasks(source, JSON.stringify(suggestion))
  for (const [key, phaseIndex, taskIndex] of [['erarbeitung', 1, 0], ['hoehepunkt', 1, 1], ['katastrophe', 2, 0]]) {
    const before = parseStoryMapping(initial)
    const after = parseStoryMapping(replaceTaskSubtasks(initial, JSON.stringify({ subtasks: ['Als Schüler will ich gezielt arbeiten.'] }), key))
    for (let p = 0; p < before.phases.length; p++) for (let t = 0; t < before.phases[p].tasks.length; t++) {
      if (p === phaseIndex && t === taskIndex) assert(after.phases[p].tasks[t].subtasks[0].includes('gezielt arbeiten'))
      else assert.deepEqual(after.phases[p].tasks[t].subtasks, before.phases[p].tasks[t].subtasks)
    }
  }
  assert.throws(() => replaceTaskSubtasks(initial, JSON.stringify({ subtasks: ['Text'] }), 'unbekannt'))
})
