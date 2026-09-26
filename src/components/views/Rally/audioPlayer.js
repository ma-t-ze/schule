// One persistent context is unlocked by a user gesture, then shared by all stations.
export function createAudioPlayer({ createContext, fetchAudio }) {
  let context, master
  let muted = false
  const buffers = new Map()
  function initialize() {
    if (!context) {
      context = createContext()
      master = context.createGain()
      master.gain.value = muted ? 0 : 1
      master.connect(context.destination)
    }
    return context
  }
  function unlock() {
    const ctx = initialize()
    // resume() must be invoked synchronously in the touch/click handler.
    const resumed = ctx.state === 'running' ? Promise.resolve() : ctx.resume()
    const silent = ctx.createBufferSource()
    silent.buffer = ctx.createBuffer(1, 1, ctx.sampleRate)
    silent.connect(master)
    silent.onended = () => silent.disconnect()
    silent.start()
    return resumed
  }
  function load(url) {
    if (!buffers.has(url)) {
      const pending = Promise.resolve().then(() => fetchAudio(url))
        .then(bytes => initialize().decodeAudioData(bytes))
        .catch(error => { buffers.delete(url); throw error })
      buffers.set(url, pending)
    }
    return buffers.get(url)
  }
  function sound(url, { loop = false, onended = () => {} } = {}) {
    let source, gain, offset = 0, startedAt = 0, volume = 1, generation = 0, disposed = false
    function stopSource() {
      if (source) {
        source.onended = null
        source.stop()
        source.disconnect()
        source = null
      }
      gain?.disconnect()
      gain = null
    }
    const audio = {
      preload: () => load(url),
      get currentTime() { return source ? offset + context.currentTime - startedAt : offset },
      set currentTime(value) { audio.pause(); offset = Math.max(0, value) },
      get volume() { return volume },
      set volume(value) { volume = value; if (gain) gain.gain.value = volume },
      async play() {
        if (disposed || source) return
        const run = ++generation
        const ctx = initialize()
        const resume = ctx.state === 'running' ? Promise.resolve() : ctx.resume()
        const [buffer] = await Promise.all([load(url), resume])
        if (disposed || run !== generation) return
        if (ctx.state !== 'running') throw new Error('Audio needs a user gesture')
        if (offset >= buffer.duration) offset = loop ? offset % buffer.duration : 0
        source = ctx.createBufferSource()
        source.buffer = buffer
        source.loop = loop
        gain = ctx.createGain()
        gain.gain.value = volume
        source.connect(gain)
        gain.connect(master)
        startedAt = ctx.currentTime
        source.onended = () => {
          if (run !== generation) return
          source.disconnect()
          source = null
          gain.disconnect()
          gain = null
          offset = 0
          onended()
        }
        source.start(0, offset)
      },
      pause() {
        generation++
        offset = audio.currentTime
        stopSource()
      },
      dispose() { audio.pause(); disposed = true }
    }
    return audio
  }
  return {
    unlock,
    sound,
    setMuted(value) { muted = value; if (master) master.gain.value = muted ? 0 : 1 }
  }
}
