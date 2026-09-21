<script setup>
import { ref, nextTick } from 'vue'
defineProps({ sections: { type: Array, required: true }, intro: { type: String, default: '' }, heading: { type: String, default: '' }, questionId: { type: String, required: true } })
const dialog = ref(null)
const selected = ref(null)
let trigger = null
async function explain(item, event) {
  trigger = event.currentTarget
  selected.value = item
  await nextTick()
  if (dialog.value && !dialog.value.open) dialog.value.showModal()
}
function restoreFocus() { trigger?.focus() }
</script>
<template>
  <div class="keyword-answer">
    <p v-if="intro">{{ intro }}</p>
    <h3 v-if="heading">{{ heading }}</h3>
    <section v-for="section in sections" :key="section.title">
      <component :is="heading ? 'h4' : 'h3'"><strong>{{ section.title }}</strong></component>
      <p v-if="section.description">{{ section.description }}</p>
      <ul><li v-for="item in section.items" :key="item.term"><button type="button" class="keyword" aria-haspopup="dialog" @click="explain(item, $event)">{{ item.term }}</button></li></ul>
    </section>
    <Teleport to="body">
      <dialog ref="dialog" class="keyword-dialog" :aria-labelledby="`keyword-title-${questionId}`" @close="restoreFocus" @click="event => { if (event.target === dialog) dialog.close() }">
        <template v-if="selected">
          <h2 :id="`keyword-title-${questionId}`">{{ selected.term }}</h2>
          <p>{{ selected.explanation }}</p>
          <template v-if="selected.lawText">
            <h3>Originalgesetzestext · {{ selected.lawLabel }}</h3>
            <blockquote>{{ selected.lawText }}</blockquote>
          </template>
          <a v-if="selected.sourceUrl" class="source" :href="selected.sourceUrl" target="_blank" rel="noopener">{{ selected.sourceLabel || 'Gesetze im Internet · vollständiger Artikel' }}</a>
          <a v-for="link in selected.lawLinks || []" :key="link.url" class="source" :href="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
          <button type="button" autofocus @click="dialog.close()">Schließen</button>
        </template>
      </dialog>
    </Teleport>
  </div>
</template>
<style scoped>
.keyword-dialog blockquote { margin: 16px 0; padding-left: 16px; border-left: 3px solid #315e4c; line-height: 1.6; user-select: text; }
h3, h4 { margin: 20px 0 8px; font-size: 17px; } ul { padding-left: 22px; } li { margin: 6px 0; }
.keyword { color: #245137; background: transparent; border: 0; text-decoration: underline; text-underline-offset: 3px; font: inherit; text-align: left; padding: 5px 0; cursor: pointer; }
.keyword:focus-visible { outline: 2px solid #315e4c; outline-offset: 3px; }
.keyword-dialog { position: fixed; inset: 0; margin: auto; box-sizing: border-box; width: min(560px, calc(100vw - 32px)); max-height: calc(100vh - 40px); max-height: calc(100dvh - 40px); overflow-y: auto; padding: 28px; border: 0; border-radius: 12px; color: #24382b; background: white; font-family: 'Jost', sans-serif; }
.keyword-dialog .source { display: block; margin-top: 16px; color: #245137; overflow-wrap: anywhere; }
.keyword-dialog::backdrop { background: #0008; } .keyword-dialog h2 { margin: 0 0 16px; font-size: 22px; } .keyword-dialog p { white-space: pre-line; line-height: 1.6; user-select: text; } .keyword-dialog button { margin-top: 20px; padding: 10px 18px; background: #315e4c; color: white; border: 0; border-radius: 6px; font: inherit; cursor: pointer; }
</style>
