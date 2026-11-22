import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseStoryMapping } from './storyMapping.js'
import { serializeStoryMapping } from './storyMappingEditor.js'
import { applyStoryTiming, timeForTask } from './storyTiming.js'
const source = '# Entwurf\n\n| Aktivität | Einleitung | Hauptteil | Schluss |\n| --- | --- | --- | --- |\n| Tasks | 1. Exposition: Der Einstieg | 2. Steigende Handlung: Erarbeitung<br>3. Höhepunkt: Sicherung & Erkenntnisgewinn | 4. Lösung: Abschluss & Ausblick |'
test('timings sum to selected duration and survive serialization', () => {
  for (const minutes of [4, 45, 90, 135, 180]) {
    const map = parseStoryMapping(serializeStoryMapping(applyStoryTiming(parseStoryMapping(source), minutes)))
    const times = map.phases.flatMap(phase => phase.tasks.map(task => timeForTask(map, task.title)))
    assert.equal(times.reduce((sum, time) => sum + time, 0), minutes)
    assert(times.every(time => time > 0))
  }
})
test('requires valid duration and exactly four distinct dramaturgy cards', () => {
  assert.throws(() => applyStoryTiming(parseStoryMapping(source), 3))
  assert.throws(() => applyStoryTiming(parseStoryMapping(source.replace('4. Lösung: Abschluss & Ausblick', '4. Sonstiges')), 45))
})
