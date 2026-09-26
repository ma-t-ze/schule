import { ref, watch } from 'vue'
import { createAudioPlayer } from './audioPlayer'

export const rallyMuted = ref(false)

const player = createAudioPlayer({
  createContext: () => {
    const Context = window.AudioContext || window.webkitAudioContext
    if (!Context) throw new Error('Web Audio wird nicht unterstützt.')
    return new Context()
  },
  fetchAudio: async url => {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Audio konnte nicht geladen werden: ${url}`)
    return response.arrayBuffer()
  }
})
watch(rallyMuted, muted => player.setMuted(muted), { flush: 'sync' })
export const createRallySound = (url, options) => player.sound(url, options)
export function installRallyAudioUnlock() {
  const unlock = () => {
    try { player.unlock().catch(() => {}) } catch { /* Playback buttons report errors. */ }
  }
  const events = ['pointerup', 'touchend', 'click', 'keydown']
  events.forEach(event => document.addEventListener(event, unlock, true))
  return () => events.forEach(event => document.removeEventListener(event, unlock, true))
}
