import test from 'node:test'
import assert from 'node:assert/strict'
import { affectiveGoalColumns, affectiveGoalRows, affectiveGoals, selectedAffectiveGoals, affectiveGoalContext } from './affectiveGoals.js'

test('the supplied five-column table preserves all 66 terms and empty cells', () => {
  assert.deepEqual(affectiveGoalColumns.map(column => column.name), ['Aufmerksamkeit', 'Beantwortung', 'Werten', 'Wertzuordnung', 'Festlegung'])
  assert.equal(affectiveGoals.length, 66)
  assert.equal(affectiveGoalRows.length, 16)
  assert.equal(affectiveGoalRows[15][0], null)
  assert.equal(affectiveGoalRows[15][2].text, 'zulassen')
  assert.equal(new Set(affectiveGoals.map(goal => goal.id)).size, 66)
})
test('equal terms in different columns can be selected independently', () => {
  const duplicates = affectiveGoals.filter(goal => goal.text === 'befolgen')
  assert.equal(duplicates.length, 2)
  const selected = selectedAffectiveGoals([duplicates[1].id, 'unknown', duplicates[1].id])
  assert.equal(selected.length, 1)
  assert.equal(selected[0].category, 'Werten')
  assert(affectiveGoalContext([duplicates[1].id]).includes('Werten: befolgen'))
  assert(!affectiveGoalContext([duplicates[1].id]).includes('Beantwortung: befolgen'))
  assert.equal(affectiveGoalContext([]), '')
})
