<script setup>
import { ref } from 'vue'
import { stations } from './stations'
import { useRallySync } from './useRallySync'
const { state, connected, failure, pending, message, retry, release, newRound } = useRallySync()
const busy = ref(new Set())
async function free(id) {
  if (busy.value.has(id)) return
  busy.value.add(id)
  await release(id)
  busy.value.delete(id)
}
</script>
<template>
  <main class="free-creatures">
    <nav><router-link to="/">Zur Schule</router-link><router-link to="/rally">Rally öffnen</router-link></nav>
    <h1>FreeCreatures</h1>
    <p>Lasst die Kreaturen dieser Rally frei. Die Freigabe wird live an das Spiel übertragen.</p>
    <p role="status" :class="{ error: failure }">{{ message }}</p>
    <button v-if="failure" @click="retry">Erneut verbinden</button>
    <button :disabled="!connected || pending > 0" @click="newRound">Neue Rally starten</button>
    <p>Startet die gemeinsame Rally neu: alle Kreaturen gefangen, Energie auf 100 %.</p>
    <section class="creature-grid" aria-label="Acht Kreaturen">
      <article v-for="station in stations.slice(0, 8)" :key="station.id">
        <small>{{ station.id === 2 ? 'Spiel 2' : `Rätsel ${station.id}` }}</small>
        <h2>{{ station.name }}</h2>
        <p>Ziffer: <strong>{{ station.codeDigit }}</strong></p>
        <p>{{ state?.homeIds.includes(station.id) ? 'Nach Hause geflogen' : state?.releasedIds.includes(station.id) ? 'Freigegeben' : 'Noch gefangen' }}</p>
        <button :disabled="!connected || !!failure || !state || pending > 0 || busy.has(station.id) || state.releasedIds.includes(station.id)" @click="free(station.id)">
          {{ busy.has(station.id) ? 'Wird freigelassen …' : 'Creature freilassen' }}
        </button>
      </article>
    </section>
  </main>
</template>
<style scoped>
.free-creatures { min-height: 100svh; padding: clamp(20px, 5vw, 64px); box-sizing: border-box; background: #070f0d; color: #fff; font-family: jost, sans-serif; }
nav { display: flex; gap: 24px; }
a, strong { color: #b6ff00; }
h1 { font-size: clamp(32px, 6vw, 56px); }
.creature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap: 20px; margin-top: 24px; }
article, .connection { border: 1px solid #b6ff0055; padding: 20px; border-radius: 12px; }
button { border: 1px solid #b6ff00; border-radius: 6px; background: transparent; color: #b6ff00; font: inherit; padding: 12px 16px; cursor: pointer; }
button:disabled { opacity: .45; cursor: default; }
button:focus-visible, input:focus-visible, a:focus-visible { outline: 2px solid #b6ff00; outline-offset: 3px; }
form { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 20px; }
input { min-width: 0; max-width: 100%; background: transparent; color: #fff; border: 1px solid #b6ff0080; padding: 12px; font: inherit; }
code { overflow-wrap: anywhere; }
.error { color: #ffb3a7; }
</style>
