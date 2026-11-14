import test from 'node:test'
import assert from 'node:assert/strict'
import { days, variants, criteria, meals, parseBudget, emptyPlan, assignMeal, totalCost, restorePrototype, shoppingItems, createFeedback, restoreFeedback, feedbackProblems } from './model.js'

test('Budget accepts German decimals and rejects invalid or out-of-range values', () => {
  assert.equal(parseBudget('25'), 2500)
  assert.equal(parseBudget('25,50'), 2550)
  for (const value of ['', '-5', '0', '501', '25,005', 'NaN', '1e2', '25 Euro']) assert.equal(parseBudget(value), null)
})
test('Five meals fit the common test task; replacing a meal subtracts the old cost', () => {
  let plan = emptyPlan()
  for (const day of days) plan = assignMeal(plan, day, 'essen-2', 2500).plan
  assert.equal(totalCost(plan), 2000)
  plan = assignMeal(plan, days[0], 'essen-1', 2500).plan
  assert.equal(totalCost(plan), 1950)
})
test('Over-budget assignments fail without changing the previous plan', () => {
  let plan = emptyPlan()
  for (const day of days) plan = assignMeal(plan, day, 'essen-4', 2500).plan
  const result = assignMeal(plan, 'Montag', 'essen-7', 2500)
  assert.match(result.error, /überschritten/)
  assert.equal(plan.Montag, 'essen-4')
  assert.equal(totalCost(plan), 2500)
  assert.ok(assignMeal(plan, 'Sonntag', 'essen-2', 2500).error)
})
test('Shopping list reflects replacements and counts repeated placeholder meals', () => {
  const plan = { ...emptyPlan(), Montag: 'essen-2', Dienstag: 'essen-2' }
  const list = shoppingItems(plan)
  assert.equal(list.length, 1)
  assert.equal(list[0].label, '2 × Essen 2')
  assert.equal(list[0].cents, 800)
  assert.equal(shoppingItems(emptyPlan()).length, 0)
})
test('Restored prototype data cannot introduce invalid dishes or exceed budget', () => {
  const restored = restorePrototype({ budget: 100, plan: { Montag: 'essen-7', Dienstag: 'unknown' }, likes: ['unknown', 'essen-2'] })
  assert.equal(totalCost(restored.plan), 0)
  assert.deepEqual(restored.likes, ['essen-2'])
  assert.equal(restorePrototype({ budget: -1 }).budget, 2500)
})
test('Feedback requires all nine criteria, a team, favorite, and explanation', () => {
  const value = createFeedback()
  assert.equal(feedbackProblems(value).length, 12)
  value.team = 'Testteam'
  for (const version of variants) for (const criterion of criteria) value.reviews[version.id][criterion.id] = 'Beobachtung und konkrete Verbesserung.'
  assert.equal(feedbackProblems(value).length, 2)
  value.favorite = 'b'; value.reason = 'Die Bedienung und die Budgetübersicht helfen uns.'
  assert.deepEqual(feedbackProblems(value), [])
  value.reviews.c.clarity = '   '
  assert.deepEqual(feedbackProblems(value), ['Version C: Übersichtlichkeit'])
})
test('Draft restoration preserves only valid bounded feedback fields', () => {
  const restored = restoreFeedback({ team: 'Team', favorite: 'd', reason: 'x'.repeat(2000), reviews: { a: { usability: 'Unser Test' } } })
  assert.equal(restored.favorite, '')
  assert.equal(restored.reason.length, 1500)
  assert.equal(restored.reviews.a.usability, 'Unser Test')
  assert.equal(restored.reviews.b.usability, '')
})

test('Only neutral numbered meals are offered at prices between 3.50 and 10 euros', () => {
  assert.equal(meals.length, 7)
  meals.forEach((meal, i) => {
    assert.equal(meal.title, `Essen ${i + 1}`)
    assert.ok(meal.cents >= 350 && meal.cents <= 1000)
    assert.deepEqual(Object.keys(meal).sort(), ['cents', 'id', 'title'])
  })
  const fiveDifferent = Object.fromEntries(days.map((day, i) => [day, meals[i].id]))
  assert.equal(totalCost(fiveDifferent), 2300)
})

test('Shortlist restoration accepts only existing meals, removes duplicates, and leaves assignments intact', () => {
  const result = restorePrototype({ collection: ['essen-1', 'unknown', 'essen-1', 'essen-3'], plan: { Montag: 'essen-2' } })
  assert.deepEqual(result.collection, ['essen-1', 'essen-3'])
  assert.equal(result.plan.Montag, 'essen-2')
})
