import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { parseStoryMapping, storyInline, safeStoryLink, storyTableCells, storyMappingGrid, storyPhaseHeading, storyPhaseContent } from './storyMapping.js'

test('the actual supplied lesson becomes three activities, five tasks and their complete subtasks', async () => {
  const text = await readFile(new URL('./fixtures/storymapping-farbwirkungen.md', import.meta.url), 'utf8')
  const map = parseStoryMapping(text)
  assert(map.title.includes('Farbwirkungen'))
  assert.deepEqual(map.phases.map(phase => phase.tasks.length), [1, 3, 1])
  const tasks = map.phases.flatMap(phase => phase.tasks)
  assert(tasks.every(task => task.subtasks.length))
  assert(tasks[1].subtasks.join('\n').includes('Zeichne mit Bleistift viermal denselben einfachen Jackenumriss'))
  assert(tasks[4].subtasks.join('\n').includes('Exit-Ticket'))
  assert(map.extraRows.some(row => row.label === 'Methodische Begründung'))
  assert(map.extraRows.some(row => row.label === 'Teilfähigkeiten und beobachtbare Merkmale'))
})
test('links stay in the correct subtask and unsafe URLs cannot become links', () => {
  const source = '| Aktivität | Einleitung | Hauptteil | Schluss |\n|---|---|---|---|\n| Tasks | **1. Start** | **2. Arbeit** | **3. Ende** |\n| Subtasks zu Task 2 | | Nutze das [Arbeitsblatt](/material/blatt.pdf).<br><br>Begründe deine Lösung. | |'
  const map = parseStoryMapping(source)
  assert.equal(map.phases[1].tasks[0].subtasks.length, 2)
  const tokens = storyInline(map.phases[1].tasks[0].subtasks[0])
  assert(tokens.some(token => token.type === 'link' && token.href === '/material/blatt.pdf'))
  assert.equal(safeStoryLink('javascript:alert(1)'), null)
  assert.equal(safeStoryLink('//evil.example'), null)
  assert.equal(safeStoryLink('/\\evil.example'), null)
  assert(!storyInline('[X](javascript:alert)').some(token => token.type === 'link'))
  assert(storyInline('<img src=x onerror=alert(1)>')[0].type === 'text')
})
test('escaped table pipes and ordinary non-story drafts are handled without losing raw source', () => {
  assert.deepEqual(storyTableCells('| Name | A \\| B | |'), ['Name', 'A | B', ''])
  assert.equal(parseStoryMapping('# Ordinary draft\nText'), null)
})

test('all activities, tasks and subtask rows share one grid and get hierarchical numbers', () => {
  const text = '| Aktivität | Einleitung | Hauptteil | Schluss |\n|---|---|---|---|\n| Tasks | **1. Start** | **2. Arbeit**<br>**3. Vergleich** | **4. Ende** |\n| Subtasks zu Task 1 | Als Schüler will ich das Ziel kennenlernen.<br><br>Als Schüler will ich eine Frage stellen. | | |\n| Subtasks zu Task 2 | | **2.1** Als Schüler will ich ein Beispiel bearbeiten. | |'
  const grid = storyMappingGrid(parseStoryMapping(text))
  assert.equal(grid.columnCount, 4)
  assert.deepEqual(grid.phases.map(phase => [phase.start, phase.span]), [[1, 1], [2, 2], [4, 1]])
  const tasks = grid.phases.flatMap(phase => phase.tasks)
  assert.deepEqual(tasks.map(task => task.column), [1, 2, 3, 4])
  assert.deepEqual(tasks[0].subtasks.map(item => [item.number, item.row]), [['1.1', 5], ['1.2', 6]])
  assert.equal(tasks[1].subtasks[0].number, '2.1')
  assert.equal(tasks[1].subtasks[0].text, 'Als Schüler will ich ein Beispiel bearbeiten.')
  assert.equal(tasks[1].subtasks[0].row, tasks[0].subtasks[0].row)
})

test('phase headings show a short duration, converting time ranges when supplied', () => {
  assert.equal(storyPhaseHeading('Einleitung · 0–6 Min.'), 'Einleitung · 6 Min.')
  assert.equal(storyPhaseHeading('Hauptteil · 6–40 Min.'), 'Hauptteil · 34 Min.')
  assert.equal(storyPhaseHeading('Schluss · 5 Minuten · Als Schüler will ich mein Ergebnis prüfen.'), 'Schluss · 5 Min.')
  assert.equal(storyPhaseHeading('Hauptteil'), 'Hauptteil')
})

test('the activity card excludes the phase time even when attached directly to the sentence', () => {
  const sentence = 'Als Schüler will ich das Farbproblem einer Modelinie erkennen.'
  assert.equal(storyPhaseContent('Einleitung · 5 Min.' + sentence), sentence)
  assert.equal(storyPhaseContent('Einleitung · 5 Min. · ' + sentence), sentence)
  assert.equal(storyPhaseContent('Hauptteil · 5–40 Min. ' + sentence), sentence)
  assert.equal(storyPhaseContent('Schluss (5 Minuten) ' + sentence), sentence)
  assert.equal(storyPhaseContent('Einleitung · ' + sentence), sentence)
})
