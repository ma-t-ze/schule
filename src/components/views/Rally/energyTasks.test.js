import { test } from 'node:test'
import assert from 'node:assert/strict'
import { energyTasks, isCorrectEnergyAnswer } from './energyTasks.js'

test('Twenty distinct addition tasks contain three integers from 50 through 100', () => {
  assert.equal(energyTasks.length, 20)
  assert.equal(new Set(energyTasks.map(task => [...task].sort().join(','))).size, 20)
  for (const task of energyTasks) {
    assert.equal(task.length, 3)
    assert.ok(task.every(value => Number.isInteger(value) && value >= 50 && value <= 100))
  }
})
test('Each task accepts its sum and rejects wrong or malformed answers', () => {
  for (const task of energyTasks) {
    const total = task.reduce((sum, value) => sum + value, 0)
    assert.ok(isCorrectEnergyAnswer(task, String(total)))
    assert.ok(isCorrectEnergyAnswer(task, ` ${total} `))
    for (const answer of ['', 'abc', `${total}x`, `${total}.0`, String(total - 1), String(total + 1)]) {
      assert.equal(isCorrectEnergyAnswer(task, answer), false)
    }
  }
})
