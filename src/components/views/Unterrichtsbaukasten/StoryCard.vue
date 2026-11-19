<script setup>
import Button from 'primevue/button'
import { PhPencilSimple, PhTrash, PhDotsSixVertical, PhHandGrabbing } from '@phosphor-icons/vue'
import StoryText from './StoryText.vue'
defineProps({ kind: String, text: String, number: String, label: String, readonly: Boolean, dropActive: Boolean })
defineEmits(['edit', 'move', 'delete', 'drag-start', 'drag-end', 'drop'])
</script>
<template>
  <article :class="[`${kind}-card`, 'story-card', { 'drop-active': dropActive }]" @dragover.prevent @drop.stop.prevent="$emit('drop', $event)">
    <div class="card-toolbar" v-if="!readonly">
      <Button text rounded size="small" class="drag-handle" draggable="true" :aria-label="`${label} ziehen`" :title="`${label} ziehen`" @dragstart.stop="$emit('drag-start', $event)" @dragend="$emit('drag-end')"><PhDotsSixVertical :size="17" /></Button>
      <span class="card-number" v-if="number">{{ number }}</span><span v-else class="card-toolbar-spacer"></span>
      <Button text rounded size="small" :aria-label="`${label} bearbeiten`" title="Text bearbeiten" @click="$emit('edit')"><PhPencilSimple :size="16" /></Button>
      <Button text rounded size="small" :aria-label="`${label} verschieben`" title="Verschieben" @click="$emit('move')"><PhHandGrabbing :size="16" /></Button>
      <Button text rounded size="small" :aria-label="`${label} löschen`" title="Löschen" @click="$emit('delete')"><PhTrash :size="16" /></Button>
    </div>
    <span class="card-number" v-else-if="number">{{ number }}</span>
    <div class="card-text"><StoryText :text="text" /></div>
    <slot></slot>
  </article>
</template>
<style scoped>
.story-card { box-sizing: border-box; padding: 12px 14px 14px; margin: 0; font-size: 16px; line-height: 1.6; border-radius: 6px; border: 1px solid; min-width: 0; }
.activity-card { background: #a6cd7c; border-color: #739951; }
.task-card { background: #8cc9e8; border-color: #5d9bbd; }
.subtask-card { background: #fff4b4; border-color: #d5c873; box-shadow: 1px 3px 0 #e6e6df; }
.card-toolbar { display: flex; align-items: center; gap: 1px; margin: -4px -6px 8px; color: #344438; }
.card-toolbar :deep(.p-button) { width: 28px; height: 28px; padding: 4px; color: inherit; flex-shrink: 0; }
.card-toolbar .drag-handle { cursor: grab; }
.card-toolbar .drag-handle:active { cursor: grabbing; }
.card-number { font-size: 14px; font-weight: 600; margin-right: auto; }
.card-toolbar-spacer { flex: 1; }
.drop-active { outline: 3px solid #347449; outline-offset: 2px; }
.card-text { min-height: 28px; }
</style>
