import { test } from 'node:test'
import assert from 'node:assert/strict'
import { initialRallyState, isRallyId, mergeRescuedCreatures, readRallyState } from './rallyState.js'
import { stations } from './stations.js'

test('A game stores all eight creature digits without player names or media', () => {
  const state = initialRallyState()
  assert.equal(state.creatureNames.length, 8)
  assert.equal(state.digits.join(''), '47295183')
  assert.equal(state.energy, 100)
  assert.deepEqual(state.releasedIds, [])
  assert.deepEqual(state.homeIds, [])
  state.releasedIds.push(1)
  assert.deepEqual(initialRallyState().releasedIds, [])
})
test('Only full random game identifiers are accepted', () => {
  assert.ok(isRallyId('0123456789abcdef0123456789abcdef'))
  for (const id of ['current', '', '../another', '0123', 'X'.repeat(32), null, ['a'.repeat(32)]]) assert.equal(isRallyId(id), false)
})
test('Cloud progress ignores invalid IDs and cannot release the spaceship', () => {
  const state = readRallyState({ energy: 120, foundIds: [1, 1, 9, 10], releasedIds: [1, 2, 2, 9, '3', -1], homeIds: [2, 3, 9] })
  assert.deepEqual(state.releasedIds, [1, 2])
  assert.deepEqual(state.homeIds, [2])
  assert.deepEqual(state.foundIds, [1, 9])
  assert.equal(state.energy, 100)
})
test('The active remotely released creature waits for its door animation; others join the collection', () => {
  const state = readRallyState({ foundIds: [1, 2, 3], releasedIds: [1, 2, 3] })
  const collection = mergeRescuedCreatures([], state, 2)
  assert.deepEqual(collection.map(station => station.id), [1, 3])
  const afterAnimation = mergeRescuedCreatures([...collection, stations[1]], state, null)
  assert.deepEqual(afterAnimation.map(station => station.id), [1, 2, 3])
  assert.deepEqual(mergeRescuedCreatures(afterAnimation, state, null), afterAnimation)
})
test('Saved releases survive reopening; creatures that flew home stay removed', () => {
  const state = readRallyState({ foundIds: [1, 2, 3], releasedIds: [1, 2, 3], homeIds: [2] })
  assert.deepEqual(mergeRescuedCreatures([], state, null).map(station => station.id), [1, 3])
  assert.deepEqual(mergeRescuedCreatures([stations[0], stations[2]], state, null).map(station => station.id), [1, 3])
})
test('Old Firebase home records cannot erase creatures collected again locally', () => {
  const state = readRallyState({ foundIds: [1, 2, 3], releasedIds: [1, 2, 3], homeIds: [1, 2, 3] })
  let collection = []
  for (const station of stations.slice(0, 3)) {
    collection.push(station)
    collection = mergeRescuedCreatures(collection, state, null)
    assert.deepEqual(collection.map(item => item.id), Array.from({ length: station.id }, (_, index) => index + 1))
  }
})
test('Remote release alone does not load an unscanned creature', () => {
  const state = readRallyState({ foundIds: [1], releasedIds: [1, 2, 3] })
  assert.deepEqual(mergeRescuedCreatures([], state, null).map(station => station.id), [1])
})
