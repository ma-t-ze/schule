<script setup>
defineProps({ kind: String })
</script>
<template>
  <svg viewBox="0 0 600 210" class="question-visual" role="img" aria-label="Illustration zum Thema der Frage">
    <rect width="600" height="210" rx="24" fill="#eeecfa" />
    <g v-if="['screen', 'screen-print', 'pixels'].includes(kind)">
      <rect x="150" y="25" width="300" height="140" rx="12" fill="#24223f" />
      <rect x="165" y="40" width="270" height="110" rx="4" fill="#7061d9" />
      <path d="M300 165 V190 M250 190 H350" stroke="#24223f" stroke-width="12" />
      <g v-if="kind === 'pixels'" fill="#ffc85c"><rect v-for="i in 6" :key="i" :x="185 + (i % 3) * 64" :y="50 + Math.floor((i - 1) / 3) * 46" width="30" height="30" /></g>
      <path v-else d="M190 124 L250 65 L302 117 L358 62 L410 124" fill="none" stroke="#fff" stroke-width="9" />
    </g>
    <g v-else-if="['lights', 'red-green'].includes(kind)">
      <rect x="90" y="20" width="420" height="170" rx="18" fill="#24223f" />
      <path d="M195 105 L270 50 V160 Z" fill="#ff5e75" opacity=".65" /><circle cx="183" cy="105" r="24" fill="#ff3859" />
      <text x="302" y="121" text-anchor="middle" font-size="52" fill="white">+</text>
      <path d="M413 105 L338 50 V160 Z" fill="#62e796" opacity=".65" /><circle cx="425" cy="105" r="24" fill="#41bf72" />
    </g>
    <g v-else-if="['printer', 'paper', 'book', 'text'].includes(kind)" stroke="#514877" stroke-width="5">
      <rect x="185" y="25" width="230" height="165" rx="8" fill="white" />
      <path d="M212 61 H383 M212 83 H358 M212 137 H383 M212 159 H352" />
      <rect x="212" y="97" width="70" height="22" fill="#b9adeb" stroke="none" />
      <path v-if="kind === 'book'" d="M300 30 V185" stroke="#ccc" />
    </g>
    <g v-else-if="kind === 'prism'">
      <path d="M50 109 H249" stroke="white" stroke-width="18" /><path d="M300 27 L230 175 H370 Z" fill="#d4ecff" stroke="#625c8f" stroke-width="4" />
      <path v-for="(color,i) in ['#e9506c','#ef9d4b','#e7c64a','#50b98d','#5696dd','#935aca']" :key="color" :d="`M334 103 L535 ${60+i*22}`" :stroke="color" stroke-width="8" />
    </g>
    <g v-else-if="['photo', 'mask', 'object'].includes(kind)">
      <rect x="170" y="22" width="260" height="170" rx="12" fill="#c7d8ed" stroke="#514877" stroke-width="5" />
      <circle cx="300" cy="84" r="32" fill="#7765b0" /><path d="M224 178 Q230 115 300 121 Q370 115 376 178" fill="#7765b0" />
      <path v-if="kind === 'mask'" d="M300 25 V190" stroke="white" stroke-width="6" stroke-dasharray="9" />
    </g>
    <g v-else-if="['vector', 'path'].includes(kind)" fill="none" stroke="#6450b5" stroke-width="6">
      <path d="M145 160 C210 -20 370 230 455 52" /><path d="M145 160 L190 45 M455 52 L392 177" stroke-width="2" />
      <rect x="135" y="150" width="20" height="20" fill="white" /><rect x="445" y="42" width="20" height="20" fill="white" />
      <circle cx="190" cy="45" r="7" fill="#6450b5" /><circle cx="392" cy="177" r="7" fill="#6450b5" />
    </g>
    <g v-else>
      <rect x="240" y="12" width="120" height="188" rx="20" fill="white" stroke="#514877" stroke-width="7" />
      <rect x="257" y="48" width="86" height="56" rx="6" fill="#c1b4ed" /><rect x="257" y="120" width="86" height="25" rx="8" fill="#7862c3" />
      <path d="M278 30 H322 M280 169 H320" stroke="#514877" stroke-width="6" stroke-linecap="round" />
    </g>
  </svg>
</template>
<style scoped>.question-visual { width: min(100%, 580px); max-height: 22vh; display: block; margin: 16px auto; }</style>
