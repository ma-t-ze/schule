import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'

function setup() {
  const events = {}, messages = [], timers = new Map()
  let timerId = 0
  const painter = new Proxy({}, { get: (target, key) => target[key] ?? (() => {}) })
  const canvas = { getContext: () => painter, addEventListener() {}, focus() {} }
  const parent = { postMessage: data => messages.push(data) }
  const window = { location: { origin: 'http://localhost:5173' }, parent, addEventListener: (name, handler) => { events[name] = handler } }
  const document = { hidden: false, getElementById: () => canvas, addEventListener: (name, handler) => { events[name] = handler } }
  const context = vm.createContext({ window, document, performance: { now: () => 1000 },
    Image: class { complete = true; naturalWidth = 100 },
    setInterval: fn => { timers.set(++timerId, fn); return timerId }, clearInterval: id => timers.delete(id) })
  for (const file of ['Const', 'SpaceShip', 'CDetection', 'Game', 'Rally']) {
    vm.runInContext(readFileSync(new URL(`../../../../public/rally/space-invaders/javascripts/${file}.js`, import.meta.url), 'utf8'), context)
  }
  let game
  const OriginalGame = context.SI.Game
  context.SI.Game = new Proxy(OriginalGame, { construct(Target, args) { game = new Target(...args); return game } })
  events.load()
  const activate = active => events.message({ origin: window.location.origin, source: parent, data: { source: 'rally-host', active } })
  return { game, context, events, messages, timers, activate, document }
}

test('Game starts paused, accepts only host messages and pauses when hidden', () => {
  const state = setup()
  assert.equal(state.game.enemies.ships.flat().length, 15)
  assert.equal(state.timers.size, 0)
  state.events.message({ origin: 'https://other.example', source: {}, data: { source: 'rally-host', active: true } })
  assert.equal(state.timers.size, 0)
  state.activate(true)
  assert.equal(state.timers.size, 1)
  state.activate(false)
  assert.equal(state.timers.size, 0)
  state.activate(true)
  state.document.hidden = true
  state.events.visibilitychange()
  assert.equal(state.timers.size, 0)
  state.document.hidden = false
  state.events.visibilitychange()
  assert.equal(state.timers.size, 1)
  state.events.pagehide()
  assert.equal(state.timers.size, 0)
})

test('Destroying the final enemy reports one win without firing from an empty wave', () => {
  const { game, messages, activate, timers } = setup()
  activate(true)
  game.enemies.ships = [[game.enemies.ships[0][0]]]
  game.detector.detectHitEnemies = () => [{ row: 0, col: 0 }]
  game.turnToFire = 25
  game.tick()
  assert.equal(messages.filter(message => message.type === 'won').length, 1)
  assert.equal(timers.size, 0)
  game.checkEndGame()
  assert.equal(messages.filter(message => message.type === 'won').length, 1)
})

test('Losing a round reports one loss, and reactivation cannot restart a finished game', () => {
  const { game, messages, activate, timers } = setup()
  activate(true)
  game.lives = 0
  game.checkEndGame()
  game.checkEndGame()
  activate(true)
  assert.equal(messages.filter(message => message.type === 'lost').length, 1)
  assert.equal(timers.size, 0)
})

test('Simultaneous duplicate hits remove only intended enemies and preserve row directions', () => {
  const { game } = setup()
  const survivor = game.enemies.ships[0][2]
  game.detector.detectHitEnemies = () => [{ row: 0, col: 0 }, { row: 0, col: 0 }, { row: 0, col: 1 }]
  game.deleteExplodedEnemyShips()
  assert.equal(game.enemies.ships[0].length, 3)
  assert.equal(game.enemies.ships[0][0], survivor)
  assert.equal(game.points, 10)
  game.detector.detectHitEnemies = () => [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }]
  game.deleteExplodedEnemyShips()
  assert.equal(game.enemies.ships.length, 2)
  assert.equal(game.enemies.directions.length, 2)
})
