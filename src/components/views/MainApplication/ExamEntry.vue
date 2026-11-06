<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import { checklistFields } from './examChecklistFields'
import ExamChecklist from './ExamChecklist.vue'

defineProps({
  examKey: { type: String, required: true },
  label: { type: String, required: true },
  editLabel: { type: String, required: true },
  disabled: Boolean
})
defineEmits(['edit'])
const expanded = ref(false)
const checklist = ref(null)
</script>

<template>
  <div class="exam-entry">
    <div class="exam-row">
      <Button class="exam-date-button" text size="small" :disabled="disabled" :label="label" :aria-label="editLabel" @click="$emit('edit')" />
      <div class="checklist-preview" role="group" aria-label="Checklisten-Vorschau" :aria-busy="!checklist">
        <span v-for="[key, name] in checklistFields" :key="key" :title="`${name}: ${checklist ? (checklist[key] ? 'erledigt' : 'offen') : 'noch nicht geladen'}`">
          <Checkbox :model-value="Boolean(checklist?.[key])" binary disabled :aria-label="name" />
        </span>
      </div>
      <Button
        class="exam-toggle"
        text rounded size="small"
        :aria-label="`${expanded ? 'Checkliste schließen' : 'Checkliste öffnen'}: ${label}`"
        :aria-expanded="expanded"
        :aria-controls="`${examKey}-checklist`"
        @click="expanded = !expanded"
      >
        <svg class="chevron" :class="{ expanded }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Button>
    </div>
    <div v-show="expanded" :id="`${examKey}-checklist`" class="exam-checklist">
      <ExamChecklist :exam-key="examKey" @change="checklist = $event" />
    </div>
  </div>
</template>

<style scoped>
.exam-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.exam-date-button { flex: 1; min-width: 0; text-align: left; justify-content: flex-start; padding: .25rem 0; font: inherit; }
.checklist-preview { display: flex; align-items: center; gap: 3px; flex-shrink: 0; }
.checklist-preview > span { display: flex; }
.checklist-preview :deep(.p-checkbox) { width: 14px; height: 14px; opacity: 1; }
.checklist-preview :deep(.p-checkbox-box) { width: 14px; height: 14px; }
.checklist-preview :deep(.p-checkbox-icon) { width: 10px; height: 10px; }
.checklist-preview[aria-busy="true"] { opacity: .4; }
.exam-toggle { flex-shrink: 0; width: 2rem; height: 2rem; }
.chevron { transition: transform .15s ease; }
.chevron.expanded { transform: rotate(180deg); }
.exam-checklist { margin-top: 8px; }
@media (prefers-reduced-motion: reduce) { .chevron { transition: none; } }
</style>
