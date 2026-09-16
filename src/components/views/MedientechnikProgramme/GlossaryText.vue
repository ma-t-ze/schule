<script setup>
import { computed, inject } from 'vue'
import { splitTerms } from './glossary'
const props = defineProps({ text: { type: String, required: true } })
const explain = inject('explainMediaTerm')
const parts = computed(() => splitTerms(props.text))
</script>
<template>
  <span><template v-for="(part, index) in parts" :key="index"><button v-if="part.entry" type="button" class="term" aria-haspopup="dialog" :aria-label="`${part.text}: Erklärung öffnen`" @click="explain(part.entry, $event.currentTarget)">{{ part.text }}</button><template v-else>{{ part.text }}</template></template></span>
</template>
<style scoped>
.term { display: inline; font: inherit; color: inherit; background: transparent; padding: 2px 0; margin: 0; border: 0; border-bottom: 1px dotted currentColor; border-radius: 0; cursor: help; text-align: inherit; }
.term:hover { background: #829a7b30; }
.term:focus-visible { outline: 2px solid #3680b6; outline-offset: 2px; }
</style>
