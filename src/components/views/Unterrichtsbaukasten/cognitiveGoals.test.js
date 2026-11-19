import test from 'node:test'
import assert from 'node:assert/strict'
import { cognitiveGoalLevels, cognitiveGoals, validCognitiveGoalIds, selectedCognitiveGoals, cognitiveGoalContext } from './cognitiveGoals.js'

test('six taxonomy levels offer unique selectable goals', () => {
  assert.equal(cognitiveGoalLevels.length, 6)
  assert.equal(new Set(cognitiveGoals.map(item => item.id)).size, cognitiveGoals.length)
  assert(cognitiveGoalLevels.every(level => level.goals.length > 0))
})
test('only valid selected goals enter the overview and AI context', () => {
  const ids = ['begriffe-erklaeren', 'ergebnis-beurteilen', 'unknown', 'begriffe-erklaeren']
  assert.deepEqual(validCognitiveGoalIds(ids), ['begriffe-erklaeren', 'ergebnis-beurteilen'])
  assert.equal(selectedCognitiveGoals(ids).length, 2)
  const context = cognitiveGoalContext(ids)
  assert(context.includes('Verstehen: Begriffe mit eigenen Worten erklären'))
  assert(context.includes('Bewerten: Ein Ergebnis anhand von Kriterien beurteilen'))
  assert(!context.includes('Fachbegriffe nennen'))
  assert.equal(cognitiveGoalContext([]), '')
})
