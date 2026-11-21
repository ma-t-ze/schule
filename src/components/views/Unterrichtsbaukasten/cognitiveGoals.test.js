import test from 'node:test'
import assert from 'node:assert/strict'
import { cognitiveGoalLevels, cognitiveGoals, validCognitiveGoalIds, selectedCognitiveGoals, cognitiveGoalContext } from './cognitiveGoals.js'

test('six taxonomy levels offer unique selectable goals', () => {
  assert.equal(cognitiveGoalLevels.length, 6)
  assert.equal(new Set(cognitiveGoals.map(item => item.id)).size, cognitiveGoals.length)
  assert(cognitiveGoalLevels.every(level => level.goals.length > 0))
})
test('only valid selected goals enter the overview and AI context', () => {
  const ids = ['anderson-verstehen-1', 'anderson-bewerten-1', 'unknown', 'anderson-verstehen-1']
  assert.deepEqual(validCognitiveGoalIds(ids), ['anderson-verstehen-1', 'anderson-bewerten-1'])
  assert.equal(selectedCognitiveGoals(ids).length, 2)
  const context = cognitiveGoalContext(ids)
  assert(context.includes('Verstehen: erklären'))
  assert(context.includes('Bewerten: beurteilen'))
  assert(!context.includes('Erinnern: nennen'))
  assert.equal(cognitiveGoalContext([]), '')
})
