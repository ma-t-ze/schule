<script setup>
import { onMounted, ref } from 'vue'
import NavigatorWheel from './NavigatorWheel.vue'
defineEmits(['close'])
const dialog = ref(null)
onMounted(() => dialog.value.showModal())
</script>

<template>
  <Teleport to="body">
    <dialog ref="dialog" class="wheel-drawer" aria-label="Glücksrad: Wer ist dran?" @close="$emit('close')">
      <button class="close-wheel" autofocus @click="dialog.close()">Glücksrad schließen</button>
      <NavigatorWheel title="Wer ist dran?" role-name="" continue-label="Zurück zum Spiel" @continue="dialog.close()" />
    </dialog>
  </Teleport>
</template>

<style scoped>
.wheel-drawer { position: fixed; inset: 0 0 0 auto; margin: 0; width: min(640px, 100vw); max-width: 100vw; height: 100dvh; max-height: 100dvh; box-sizing: border-box; padding: 24px; overflow-y: auto; border: 0; border-left: 1px solid #b6ff00; color: #fff; background: radial-gradient(ellipse at center, #182528, #030509); font-family: jost, sans-serif; animation: wheel-enter .4s ease-out; }
.wheel-drawer::backdrop { background: #0009; }
.close-wheel { display: block; margin: 0 0 24px auto; border: 1px solid #b6ff00; border-radius: 5px; padding: 12px 16px; color: #b6ff00; background: transparent; cursor: pointer; }
.wheel-drawer :deep(h1) { font-size: clamp(26px, 5vw, 42px); }
.wheel-drawer :deep(.wheel-frame) { width: min(100%, 48dvh, 480px); }
.wheel-drawer :deep(.name-arm span) { font-size: clamp(11px, 2.2dvh, 18px); }
@keyframes wheel-enter { from { transform: translateX(100%); } to { transform: translateX(0); } }
@media (prefers-reduced-motion: reduce) { .wheel-drawer { animation: none; } }
</style>
