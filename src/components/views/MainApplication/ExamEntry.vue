<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import { checklistFields } from './examChecklistFields'
import ExamChecklist from './ExamChecklist.vue'
import AppointmentMarker from './AppointmentMarker.vue'
import { appointmentStyle } from './appointmentAppearance'

defineProps({
  examKey: { type: String, required: true },
  label: { type: String, required: true },
  editLabel: { type: String, required: true },
  appointment: { type: Object, default: null },
  disabled: Boolean
})
defineEmits(['edit'])
const expanded = ref(false)
const checklist = ref(null)
</script>

<template>
  <div class="exam-entry">
    <div class="exam-row">
      <Button class="exam-date-button" :class="{ 'marked-appointment': appointment?.event_color || appointment?.is_important }" :style="appointmentStyle(appointment)" text size="small" :disabled="disabled" :aria-label="editLabel" @click="$emit('edit')"><AppointmentMarker :important="appointment?.is_important === true" /><span>{{ label }}</span></Button>
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
.exam-date-button.marked-appointment { background: var(--appointment-bg); color: var(--appointment-ink); border-left: 4px solid var(--appointment-border); padding: 6px 8px; gap: 8px; }
.exam-date-button > span { min-width: 0; overflow-wrap: anywhere; }
.checklist-preview { display: flex; align-items: center; gap: 3px; flex-shrink: 0; }
.checklist-preview > span { display: flex; align-items: center; gap: 3px; }
.checklist-preview :deep(.p-checkbox) { width: 16px; height: 16px; opacity: 1; }
.checklist-preview :deep(.p-checkbox-box) { width: 16px; height: 16px; }
.checklist-preview :deep(.p-checkbox.p-disabled .p-checkbox-box) { border: 1.5px solid #64748b; background: #fff; }
.checklist-preview :deep(.p-checkbox.p-checkbox-checked .p-checkbox-box) { border-color: #176746; background: #176746; }
.checklist-preview :deep(.p-checkbox-checked .p-checkbox-icon) { color: #fff; }
.checklist-preview :deep(.p-checkbox-icon) { width: 10px; height: 10px; }
.exam-toggle { flex-shrink: 0; width: 2rem; height: 2rem; }
.chevron { transition: transform .15s ease; }
.chevron.expanded { transform: rotate(180deg); }
.exam-checklist { margin-top: 8px; }
@media (prefers-reduced-motion: reduce) { .chevron { transition: none; } }
</style>
