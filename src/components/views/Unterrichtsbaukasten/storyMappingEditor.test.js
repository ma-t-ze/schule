import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { parseStoryMapping, storyMappingGrid } from './storyMapping.js'
import { serializeStoryMapping, changeStoryCard, addStoryCard, deleteStoryCard, moveStoryCard, phaseDetails } from './storyMappingEditor.js'
const source = '| Aktivität | Einleitung · 5 Min. · Als Schüler will ich eine Frage verstehen. | Hauptteil · 35 Min. · Als Schüler will ich eine Lösung finden. | Schluss · 5 Min. · Als Schüler will ich Ergebnisse sichern. |\n|---|---|---|---|\n| Tasks | 1. Als Schüler will ich starten. | 2. Als Schüler will ich arbeiten.<br>3. Als Schüler will ich vergleichen. | 4. Als Schüler will ich sichern. |\n| Subtasks zu Task 2 | | 2.1 Als Schüler will ich das [Arbeitsblatt](/blatt.pdf) lesen.<br><br>2.2 Als Schüler will ich markieren. | |'
const fresh = () => parseStoryMapping(source)
const roundTrip = map => parseStoryMapping(serializeStoryMapping(map))
test('editing and round trips retain links, pipes, line breaks and supplementary source information', async () => {
  const original = await readFile(new URL('./fixtures/storymapping-farbwirkungen.md', import.meta.url), 'utf8')
  const map = parseStoryMapping(original)
  const edited = changeStoryCard(map, { kind: 'subtask', phase: 1, task: 0, subtask: 0 }, { text: 'Als Schüler will ich [Material](/blatt.pdf) A | B lesen.\nUnd eine Notiz machen.' })
  const result = roundTrip(edited)
  assert.equal(result.phases[1].tasks[0].subtasks.length, edited.phases[1].tasks[0].subtasks.length)
  assert(result.phases[1].tasks[0].subtasks[0].includes('A | B'))
  assert(result.phases[1].tasks[0].subtasks[0].includes('\nUnd eine Notiz'))
  assert(result.phases[1].tasks[0].subtasks[0].includes('[Material](/blatt.pdf)'))
  assert.equal(result.extraRows.length, map.extraRows.length)
  assert.equal(map.phases[1].tasks[0].subtasks[0], parseStoryMapping(original).phases[1].tasks[0].subtasks[0])
})
test('tasks move across phases with all children and are numbered afresh', () => {
  const result = roundTrip(moveStoryCard(fresh(), { kind: 'task', phase: 1, task: 0 }, { phase: 0, position: 1 }))
  assert.deepEqual(result.phases.map(phase => phase.tasks.length), [2, 1, 1])
  assert.equal(result.phases[0].tasks[1].subtasks.length, 2)
  assert(result.phases[0].tasks[1].subtasks[0].includes('/blatt.pdf'))
  assert.deepEqual(storyMappingGrid(result).phases.flatMap(phase => phase.tasks).map(task => task.displayNumber), ['1', '2', '3', '4'])
})
test('subtasks move between tasks, phases can be renamed and reordered', () => {
  let map = moveStoryCard(fresh(), { kind: 'subtask', phase: 1, task: 0, subtask: 0 }, { phase: 2, task: 0, position: 0 })
  map = changeStoryCard(map, { kind: 'phase', phase: 2 }, { name: 'Transfer', minutes: 10, text: 'Als Schüler will ich übertragen.' })
  map = moveStoryCard(map, { kind: 'phase', phase: 2 }, { position: 0 })
  const result = roundTrip(map)
  assert.equal(phaseDetails(result.phases[0]).name, 'Transfer')
  assert.equal(phaseDetails(result.phases[0]).minutes, '10')
  assert(result.phases[0].tasks[0].subtasks[0].includes('/blatt.pdf'))
})
test('all three card types can be added and deleted, including the last card of each level', () => {
  let map = fresh()
  map = deleteStoryCard(map, { kind: 'task', phase: 0, task: 0 })
  assert.equal(roundTrip(map).phases[0].tasks.length, 0)
  map = addStoryCard(map, { kind: 'task', phase: 0 }, { text: 'Als Schüler will ich neu starten.' })
  map = addStoryCard(map, { kind: 'subtask', phase: 0, task: 0 }, { text: 'Als Schüler will ich ein Beispiel lesen.' })
  assert.equal(roundTrip(map).phases[0].tasks[0].subtasks.length, 1)
  map = deleteStoryCard(map, { kind: 'subtask', phase: 0, task: 0, subtask: 0 })
  assert.equal(roundTrip(map).phases[0].tasks[0].subtasks.length, 0)
  while (map.phases.length) map = deleteStoryCard(map, { kind: 'phase', phase: 0 })
  assert.equal(roundTrip(map).phases.length, 0)
  map = addStoryCard(map, { kind: 'phase' }, { name: 'Neue Phase', minutes: 5, text: 'Als Schüler will ich beginnen.' })
  assert.equal(roundTrip(map).phases.length, 1)
})
