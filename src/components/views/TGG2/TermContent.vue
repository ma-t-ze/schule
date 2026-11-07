<script setup>
defineProps({ term: { type: Object, required: true }, titleId: { type: String, default: undefined } })
</script>
<template>
  <div class="term-content">
    <p class="eyebrow">{{ term.learning ? 'UNSER LERNWEG · EINFACH ERKLÄRT' : 'WISSENSINPUT' }}</p>
    <h2 :id="titleId">{{ term.title }}</h2>
    <p v-if="term.subtitle">{{ term.subtitle }}</p>
    <p v-if="term.text" class="term-definition">{{ term.text }}</p>
    <section v-for="section in term.sections || []" :key="section.title">
      <h3>{{ section.title }}</h3>
      <p v-if="section.text || section.emphasis"><template v-if="section.emphasis">{{ section.prefix }}<strong>{{ section.emphasis }}</strong></template>{{ section.text }}</p>
      <ul v-if="section.items?.length"><li v-for="item in section.items" :key="item.label || item.text"><strong v-if="item.label">{{ item.label }}:</strong> {{ item.text }}</li></ul>
      <p v-if="section.summary"><strong>Kurz:</strong> {{ section.summary }}</p>
      <p v-if="section.example"><strong>Beispiel:</strong> {{ section.example }}</p>
      <p v-if="section.conclusion">{{ section.conclusion }}</p>
    </section>
    <section v-if="term.examples?.length"><h3>{{ term.examplesTitle || 'Beispiel aus unserem Unterricht:' }}</h3><ul><li v-for="example in term.examples" :key="example.label"><strong>{{ example.label }}:</strong> {{ example.text }}</li></ul></section>
    <section v-if="term.objectives?.length">
      <h3>{{ term.objectivesTitle || 'Ich kann …' }}</h3>
      <ol class="learning-objectives">
        <li v-for="objective in term.objectives" :key="objective.title">
          <strong>{{ objective.title }}</strong>
          <p v-if="objective.text">{{ objective.text }}</p>
          <ul v-if="objective.tasks?.length"><li v-for="task in objective.tasks" :key="task.label"><strong>{{ task.label }}:</strong> {{ task.text }}</li></ul>
        </li>
      </ol>
    </section>
    <p v-if="term.learning">Wenn ihr noch mehr Details wissen wollt, schaut euch gerne <a href="https://www.youtube.com/watch?v=Q2oODeqnLLY" target="_blank" rel="noopener noreferrer">dieses Video an ↗</a>.</p>
    <div v-if="term.example" class="term-example"><strong>In unserem Projekt</strong><p>{{ term.example }}</p></div>
    <p v-if="term.note" class="source">{{ term.note }}</p>
    <a v-if="term.source" class="source" :href="term.source" target="_blank" rel="noopener noreferrer">{{ term.sourceLabel }} ↗</a>
  </div>
</template>
<style scoped>
@import './designThinking.css';
.learning-objectives > li { margin-bottom: 1rem; }
.learning-objectives > li::marker { font-weight: 700; }
.learning-objectives ul { margin-top: .75rem; }
</style>
