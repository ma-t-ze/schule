import test from 'node:test'
import assert from 'node:assert/strict'
import { questions, answerCounts, questionPhase, ranking } from './questions.js'

test('20 valid questions, ten per lesson and four choices each', () => {
  assert.equal(questions.length, 20)
  for (const topic of ['Farbmischsysteme', 'Programme']) assert.equal(questions.filter(q => q.topic === topic).length, 10)
  for (const q of questions) {
    assert.equal(q.answers.length, 4)
    assert.equal(new Set(q.answers).size, 4)
    assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4)
    assert.ok(q.visual && q.explanation)
  }
})
test('question locks exactly at the 30-second deadline, including after host disconnect', () => {
  const game = { phase: 'question', startedAt: { toMillis: () => 100000 } }
  assert.equal(questionPhase(game, 129999), 'question')
  assert.equal(questionPhase(game, 130000), 'reveal')
  assert.equal(questionPhase(game, 140000), 'reveal')
  assert.equal(questionPhase({ phase: 'lobby' }, 140000), 'lobby')
})
test('statistics separate rounds and correct choices determine scores', () => {
  const answers = [{ uid: 'a', questionIndex: 0, choice: 0 }, { uid: 'b', questionIndex: 0, choice: 1 }, { uid: 'a', questionIndex: 1, choice: 1 }]
  assert.deepEqual(answerCounts(answers, 0), [1, 1, 0, 0])
  const results = ranking([{ id: 'a', name: 'Ada' }, { id: 'b', name: 'Ben' }, { id: 'c', name: 'Cem' }], answers)
  assert.deepEqual(results.map(p => p.score), [2000, 0, 0])
  assert.equal(ranking([{ id: 'a', name: 'Ada' }], [...answers, answers[0]])[0].score, 2000)
})

test('faster correct answers earn more points, wrong and late answers earn zero', async () => {
  const { answerPoints } = await import('./questions.js')
  const a = { uid: 'a', questionIndex: 0, choice: 0, questionStartedAt: 100000 }
  assert.equal(answerPoints({ ...a, answeredAt: 100000 }), 1000)
  assert.equal(answerPoints({ ...a, answeredAt: 115000 }), 750)
  assert.equal(answerPoints({ ...a, answeredAt: 129999 }), 500)
  assert.equal(answerPoints({ ...a, answeredAt: 130000 }), 0)
  assert.equal(answerPoints({ ...a, answeredAt: 99999 }), 0)
  assert.equal(answerPoints({ ...a, choice: 1, answeredAt: 100100 }), 0)
  const results = ranking([{ id: 'a', name: 'Ada' }, { id: 'b', name: 'Ben' }], [
    { ...a, answeredAt: 124000 }, { ...a, uid: 'b', answeredAt: 106000 }
  ])
  assert.deepEqual(results.map(p => [p.id, p.score]), [['b', 900], ['a', 600]])
})

test('answer key matches the supplied replacement questions in order', () => {
  assert.deepEqual(questions.map(q => 'ABCD'[q.correct]), ['A', 'B', 'C', 'B', 'B', 'B', 'A', 'C', 'C', 'B', 'B', 'C', 'D', 'D', 'B', 'A', 'B', 'C', 'B', 'A'])
})
