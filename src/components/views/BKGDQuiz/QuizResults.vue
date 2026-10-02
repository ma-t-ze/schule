<script setup>
import PlayerAnimal from './PlayerAnimal.vue'
import { computed } from 'vue'
const props = defineProps({ players: { type: Array, default: () => [] } })
const ranked = computed(() => props.players.map((player, index, all) => ({ ...player, place: all.findIndex(p => p.score === player.score) + 1 })))
const podium = computed(() => ranked.value.slice(0, 3))
</script>
<template>
  <section class="ceremony" aria-label="Siegerehrung">
    <p class="eyebrow">20 FRAGEN GESCHAFFT</p>
    <h1>Das Ergebnis</h1>
    <p>Applaus für eure Leistung!</p>
    <div class="podium">
      <article v-for="(player, index) in podium" :key="player.id" :class="`podium-${index}`">
        <span class="medal" aria-hidden="true">{{ ['🥇', '🥈', '🥉'][Math.min(player.place - 1, 2)] }}</span>
        <h2><PlayerAnimal :id="player.id" />{{ player.name }}</h2><p>{{ player.score.toLocaleString('de-DE') }} Punkte</p>
        <div class="step">Platz {{ player.place }}</div>
      </article>
    </div>
    <h2>Rangliste</h2>
    <ol class="ranking"><li v-for="player in ranked" :key="player.id" :value="player.place"><strong><PlayerAnimal :id="player.id" />{{ player.name }}</strong><span>{{ player.correct }} / 20 richtig · {{ player.score.toLocaleString('de-DE') }} Punkte</span></li></ol>
    <p v-if="!players.length">Noch keine Ergebnisse vorhanden.</p>
    <slot />
  </section>
</template>
<style scoped>
.ceremony { max-width: 1000px; margin: 40px auto; text-align: center; color: white; font-family: 'Jost', sans-serif; }
h1 { font-size: clamp(32px, 5vw, 58px); margin: 20px 0; }.eyebrow { letter-spacing: .14em; color: #d9cafa; }
.podium { display: flex; justify-content: center; align-items: end; gap: 16px; margin: 40px auto; }
.podium article { flex: 1; max-width: 270px; min-width: 0; animation: arrive .6s ease-out both; }.podium h2 { overflow-wrap: anywhere; font-size: clamp(20px, 3vw, 32px); margin: 12px 0; }.medal { font-size: 48px; }.step { padding: 24px 8px; border-radius: 14px 14px 0 0; font-size: 24px; color: #241443; font-weight: 600; }
.podium-0 { order: 2; }.podium-0 .step { background: #ffdc6b; min-height: 100px; }.podium-1 { order: 1; animation-delay: .15s !important; }.podium-1 .step { background: #d8dcee; min-height: 60px; }.podium-2 { order: 3; animation-delay: .3s !important; }.podium-2 .step { background: #e4ad84; min-height: 30px; }
.ranking { text-align: left; padding-left: 32px; }.ranking li { padding: 24px; margin-bottom: 12px; border-radius: 14px; background: #ffffff14; font-size: clamp(22px, 2.6vw, 30px); min-height: 92px; }.ranking strong { overflow-wrap: anywhere; }.ranking span { display: block; margin-top: 12px; font-size: .8em; }
@keyframes arrive { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@media (prefers-reduced-motion: reduce) { .podium article { animation: none; } }
@media (max-width: 600px) { .ranking span { display: block; float: none; }.podium { gap: 8px; }.podium p { font-size: 14px; }.step { font-size: 18px; }.medal { font-size: 36px; } }
</style>
