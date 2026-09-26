import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createAudioPlayer } from './audioPlayer.js'

function fixture(fetchAudio = async () => new ArrayBuffer(1)) {
  const sources = [], gains = []
  let contexts = 0, resumes = 0
  const context = {
    state: 'suspended', currentTime: 0, sampleRate: 44100, destination: {},
    resume() { resumes++; this.state = 'running'; return Promise.resolve() },
    createBuffer: () => ({}),
    decodeAudioData: async () => ({ duration: 10 }),
    createGain() { const gain = { gain: { value: 1 }, connect() {}, disconnect() {} }; gains.push(gain); return gain },
    createBufferSource() {
      const source = { started: false, stopped: false, connect() {}, disconnect() {}, start() { this.started = true }, stop() { this.stopped = true } }
      sources.push(source)
      return source
    }
  }
  const player = createAudioPlayer({ createContext: () => { contexts++; return context }, fetchAudio })
  return { player, context, sources, gains, contexts: () => contexts, resumes: () => resumes }
}
test('One unlocked context plays delayed speech and simultaneous door and happy effects', async () => {
  const f = fixture()
  await f.player.unlock()
  await f.player.sound('question.mp3').play()
  await Promise.all([f.player.sound('door.wav').play(), f.player.sound('happy.wav').play()])
  assert.equal(f.contexts(), 1)
  assert.equal(f.resumes(), 1)
  assert.equal(f.sources.filter(source => source.started).length, 4)
  f.player.setMuted(true)
  assert.equal(f.gains[0].gain.value, 0)
  f.player.setMuted(false)
  assert.equal(f.gains[0].gain.value, 1)
})
test('Leaving a station cancels playback even when its file has not finished loading', async () => {
  let resolve
  const f = fixture(() => new Promise(done => { resolve = done }))
  await f.player.unlock()
  let ended = 0
  const sound = f.player.sound('question.mp3', { onended: () => ended++ })
  const pending = sound.play()
  await Promise.resolve()
  sound.dispose()
  resolve(new ArrayBuffer(1))
  await pending
  assert.equal(f.sources.length, 1)
  assert.equal(ended, 0)
})
test('Stopping a question does not trigger its follow-up sound; natural completion does', async () => {
  const f = fixture()
  await f.player.unlock()
  let ended = 0
  const sound = f.player.sound('question.mp3', { onended: () => ended++ })
  await sound.play()
  const first = f.sources.at(-1)
  sound.pause()
  assert.equal(first.onended, null)
  assert.ok(first.stopped)
  assert.equal(ended, 0)
  await sound.play()
  f.sources.at(-1).onended()
  assert.equal(ended, 1)
})
