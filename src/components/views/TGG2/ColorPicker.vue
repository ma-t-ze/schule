<script setup>
import { postColors } from './postColors'
defineProps({ modelValue: { type: String, default: '' } })
defineEmits(['update:modelValue'])
</script>
<template>
  <fieldset class="color-picker"><legend>Wähle eine Farbe</legend>
    <p>Wähle eine der 32 Farben. Sie wird zusammen mit deinem Beitrag gesendet.</p>
    <div class="swatches"><button v-for="(color, i) in postColors" :key="color" type="button" :style="{ background: color }" :aria-label="`Farbe ${i + 1}: ${color}`" :aria-pressed="modelValue === color" @click="$emit('update:modelValue', color)"><span v-if="modelValue === color" aria-hidden="true">✓</span></button></div>
  </fieldset>
</template>
<style scoped>
.color-picker { border: 0; padding: 0; margin: 24px 0; min-width: 0; }.color-picker legend { font-weight: 600; }.color-picker p { font-size: 14px; }.swatches { display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 10px; }.swatches button { min-height: 44px; border: 2px solid #0003; border-radius: 8px; cursor: pointer; }.swatches button[aria-pressed=true] { outline: 3px solid #172b44; outline-offset: 2px; }.swatches span { background: white; color: #172b44; border-radius: 50%; padding: 1px 5px; font-size: 20px; }.swatches button:focus-visible { outline: 3px solid #172b44; outline-offset: 3px; }
@media(max-width: 450px) { .swatches { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
</style>
