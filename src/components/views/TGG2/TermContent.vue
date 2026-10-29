<script setup>
defineProps({ term: { type: Object, required: true }, titleId: { type: String, default: undefined } })
</script>
<template>
  <div class="term-content">
    <p class="eyebrow">{{ term.learning ? 'UNSER LERNWEG · EINFACH ERKLÄRT' : 'WISSENSINPUT' }}</p>
    <h2 :id="titleId">{{ term.title }}</h2>
    <p v-if="term.subtitle">{{ term.subtitle }}</p>
    <p v-if="term.text" class="term-definition">{{ term.text }}</p>
    <section v-for="section in term.sections || []" :key="section.title"><h3>{{ section.title }}</h3><p><template v-if="section.emphasis">{{ section.prefix }}<strong>{{ section.emphasis }}</strong></template>{{ section.text }}</p><p v-if="section.example"><strong>Beispiel:</strong> {{ section.example }}</p><p v-if="section.conclusion">{{ section.conclusion }}</p></section>
    <p v-if="term.learning">Wenn ihr noch mehr Details wissen wollt, schaut euch gerne <a href="https://www.youtube.com/watch?v=Q2oODeqnLLY" target="_blank" rel="noopener noreferrer">dieses Video an ↗</a>.</p>
    <div v-if="term.example" class="term-example"><strong>In unserem Projekt</strong><p>{{ term.example }}</p></div>
    <p v-if="term.note" class="source">{{ term.note }}</p>
    <a v-if="term.source" class="source" :href="term.source" target="_blank" rel="noopener noreferrer">{{ term.sourceLabel }} ↗</a>
  </div>
</template>
<style scoped>
@import './designThinking.css';
</style>
