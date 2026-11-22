<script setup>
import { computed, ref, reactive, watch } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import Panel from 'primevue/panel'
import Checkbox from 'primevue/checkbox'
import { entryTemplates } from './studio.js'
import { classes, learningArrangements } from './planning.js'
import StoryText from './StoryText.vue'
import StoryCard from './StoryCard.vue'
import { displayDramaturgyTask, dramaturgyInfo } from './dramaturgy.js'
import { applyStoryTiming, isTimingRow, timeForTask } from './storyTiming.js'
import { parseStoryMapping, storyMappingGrid, storyPhaseHeading, storyPhaseContent } from './storyMapping.js'
import { phaseDetails, serializeStoryMapping, changeStoryCard, addStoryCard, deleteStoryCard, moveStoryCard } from './storyMappingEditor.js'
const props = defineProps({ text: { type: String, default: '' }, expanded: Boolean, readonly: Boolean, history: { type: Array, default: null }, entryIds: { type: Array, default: () => [] }, entryGuidance: { type: String, default: '' }, taskGuidance: { type: Object, default: () => ({}) }, classIds: { type: Array, default: () => [] }, arrangement: { type: String, default: '' }, arrangementDescriptions: { type: Object, default: () => ({}) } })
const emit = defineEmits(['update:text', 'update:entryIds', 'update:entryGuidance', 'adjust-entry', 'update:taskGuidance', 'adjust-task', 'update:classIds', 'update:arrangement'])
const map = computed(() => parseStoryMapping(props.text))
const grid = computed(() => storyMappingGrid(map.value))
const activeEntry = ref(null)
const activeArrangement = ref(null)
const arrangementInfoOpen = ref(false)
function showArrangementInfo(name) { activeArrangement.value = name; arrangementInfoOpen.value = true }
const entryInfoOpen = ref(false)
const selectedClasses = computed({ get: () => props.classIds, set: value => emit('update:classIds', value) })
const selectedEntries = computed({ get: () => props.entryIds, set: value => emit('update:entryIds', value) })
function showEntryInfo(item) { activeEntry.value = item; entryInfoOpen.value = true }
const durationDialog = ref(false)
const durationMinutes = ref(null)
const durationError = ref('')
const visibleExtraRows = computed(() => (map.value?.extraRows || []).filter(row => !isTimingRow(row)))
watch(() => props.text, () => {
  const timingRows = (map.value?.extraRows || []).filter(isTimingRow)
  if (timingRows.length !== 4) { durationMinutes.value = null; return }
  const values = timingRows.map(row => Number(row.values[0]?.text))
  durationMinutes.value = values.every(value => Number.isInteger(value) && value > 0) ? values.reduce((sum, value) => sum + value, 0) : null
}, { immediate: true })
function applyDuration() {
  if (props.readonly) return
  try { commit(applyStoryTiming(map.value, durationMinutes.value)); durationError.value = '' }
  catch (error) { durationError.value = error.message }
}


const fullscreen = ref(false)
const titleDialog = ref(false)
const editedTitle = ref('')
const titleSource = ref('')
const titleError = ref('')
function editTitle() {
  editedTitle.value = map.value.title
  titleSource.value = props.text
  titleError.value = ''
  titleDialog.value = true
}
function saveTitle() {
  if (props.text !== titleSource.value) { titleError.value = 'Der Entwurf wurde inzwischen geändert. Bitte öffne den Titel erneut.'; return }
  const title = editedTitle.value.trim().replace(/[\r\n]+/g, ' ')
  if (!title) { titleError.value = 'Bitte einen Titel eingeben.'; return }
  commit({ ...map.value, title })
  titleDialog.value = false
}
const localHistory = ref([])
const historyStack = computed(() => props.history || localHistory.value)
let expectedText = props.text
watch(() => props.text, text => { if (!props.history && text !== expectedText) localHistory.value = []; expectedText = text })
function forwardText(text) { expectedText = text; emit('update:text', text) }
function commit(next) {
  if (props.readonly) return
  const text = serializeStoryMapping(next)
  if (text === props.text) return
  historyStack.value.push(props.text)
  if (historyStack.value.length > 30) historyStack.value.shift()
  forwardText(text)
}
function undo() { if (!props.readonly && historyStack.value.length) forwardText(historyStack.value.pop()) }
const editor = reactive({ open: false, mode: 'edit', kind: 'task', address: null, phase: 0, task: 0, position: 0, name: '', minutes: null, text: '', source: '', error: '' })
const kindOptions = computed(() => [
  { id: 'phase', label: 'Aktivität', disabled: false },
  { id: 'task', label: 'Task', disabled: !map.value?.phases.length },
  { id: 'subtask', label: 'Subtask', disabled: !map.value?.phases.some(phase => phase.tasks.length) }
])
const phaseOptions = computed(() => (map.value?.phases || []).map((phase, index) => ({ id: index, label: storyPhaseHeading(phase.title), disabled: editor.kind === 'subtask' && !phase.tasks.length })))
const taskOptions = computed(() => (grid.value.phases[editor.phase]?.tasks || []).map((task, index) => ({ id: index, label: `${task.displayNumber}. ${task.title.replace(/\*\*/g, '').slice(0, 75)}` })))
const positionOptions = computed(() => {
  if (!map.value) return []
  let count
  if (editor.kind === 'phase') count = map.value.phases.length - 1
  else if (editor.kind === 'task') count = (map.value.phases[editor.phase]?.tasks.length || 0) - (editor.address?.phase === editor.phase ? 1 : 0)
  else count = (map.value.phases[editor.phase]?.tasks[editor.task]?.subtasks.length || 0) - (editor.address?.phase === editor.phase && editor.address?.task === editor.task ? 1 : 0)
  return Array.from({ length: Math.max(0, count) + 1 }, (_, index) => ({ id: index, label: `Position ${index + 1}` }))
})
const editorTitle = computed(() => `${kindOptions.value.find(item => item.id === editor.kind)?.label || 'Karte'} ${editor.mode === 'add' ? 'hinzufügen' : editor.mode === 'move' ? 'verschieben' : 'bearbeiten'}`)
watch(() => editor.phase, () => { editor.task = 0; editor.position = 0 }, { flush: 'sync' })
watch(() => editor.task, () => { editor.position = 0 }, { flush: 'sync' })
watch(() => editor.kind, kind => {
  if (kind === 'subtask' && !map.value?.phases[editor.phase]?.tasks.length) editor.phase = map.value?.phases.findIndex(phase => phase.tasks.length) || 0
})
function openEditor(mode, address = { kind: map.value?.phases.length ? 'task' : 'phase', phase: 0 }) {
  if (props.readonly || !map.value) return
  const values = { open: true, mode, kind: address.kind, address: { ...address }, phase: address.phase || 0, task: address.task || 0, position: 0, name: '', minutes: null, text: '', source: props.text, error: '' }
  if (mode === 'add') values.name = 'Weitere Phase'
  else if (address.kind === 'phase') {
    const details = phaseDetails(map.value.phases[address.phase])
    Object.assign(values, details, { minutes: details.minutes ? Number(details.minutes.replace(',', '.')) : null })
  } else if (address.kind === 'task') values.text = grid.value.phases[address.phase].tasks[address.task].title
  else values.text = grid.value.phases[address.phase].tasks[address.task].subtasks[address.subtask].text
  Object.assign(editor, values)
}
function saveEditor() {
  if (props.text !== editor.source) { editor.error = 'Der Entwurf wurde inzwischen geändert. Bitte schließe dieses Fenster und öffne die Karte erneut.'; return }
  try {
    const address = { ...editor.address, kind: editor.kind, phase: editor.phase, task: editor.task }
    if (editor.mode === 'move') commit(moveStoryCard(map.value, editor.address, { phase: editor.phase, task: editor.task, position: editor.position }))
    else {
      if (editor.kind !== 'phase' && !editor.text.trim()) { editor.error = 'Bitte einen Kartentext eingeben.'; return }
      if (editor.kind === 'subtask' && !map.value.phases[editor.phase]?.tasks[editor.task]) { editor.error = 'Bitte zuerst einen Ziel-Task auswählen.'; return }
      const values = { text: editor.text, name: editor.name, minutes: editor.minutes }
      commit(editor.mode === 'add' ? addStoryCard(map.value, address, values) : changeStoryCard(map.value, editor.address, values))
    }
    editor.open = false
  } catch (cause) { editor.error = cause.message }
}
function remove(address) { if (!props.readonly) commit(deleteStoryCard(map.value, address)) }
const dragging = ref(null)
function startDrag(event, address) {
  if (props.readonly) return
  dragging.value = { ...address, source: props.text }
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('application/x-school-story-card', JSON.stringify(address))
  event.dataTransfer.setData('text/plain', 'Storymapping-Karte')
}
function dropCard(target) {
  const source = dragging.value
  dragging.value = null
  if (!source || props.readonly || source.source !== props.text) return
  let destination
  if (source.kind === 'phase') {
    destination = { position: target.phase - (source.phase < target.phase ? 1 : 0) }
  } else if (source.kind === 'task') {
    const targetIndex = target.kind === 'phase' ? map.value.phases[target.phase].tasks.length : target.task
    destination = { phase: target.phase, position: targetIndex - (source.phase === target.phase && source.task < targetIndex ? 1 : 0) }
  } else {
    if (target.kind === 'phase') return
    const targetIndex = target.kind === 'task' ? map.value.phases[target.phase].tasks[target.task].subtasks.length : target.subtask
    destination = { phase: target.phase, task: target.task, position: targetIndex - (source.phase === target.phase && source.task === target.task && source.subtask < targetIndex ? 1 : 0) }
  }
  commit(moveStoryCard(map.value, source, destination))
}
</script>
<template>
  <section v-if="map" class="story-mapping" aria-label="Unterricht als Storymapping">
    <header class="story-header"><div class="story-title-area"><div class="story-title-row"><h3><StoryText :text="map.title" /></h3><div class="class-selection"><Panel :header="classes.filter(item => selectedClasses.includes(item.id)).map(item => item.label).join(', ') || 'Klasse'" toggleable collapsed><div v-for="item in classes" :key="item.id" class="entry-option"><Checkbox v-model="selectedClasses" :input-id="`story-class-${item.id}`" :value="item.id" :disabled="readonly" /><label :for="`story-class-${item.id}`">{{ item.label }}</label></div></Panel></div></div><p v-for="(line, index) in map.summary" :key="index"><StoryText :text="line" /></p></div><div class="board-actions"><Button v-if="!readonly" label="Titel bearbeiten" text size="small" @click="editTitle" /></div></header>
    <div class="legend"><span class="legend-activity">Aktivität · Unterrichtsphase</span><span class="legend-task">Task · Aufgabe</span><span class="legend-subtask">Subtask · Handlungsschritt</span></div>
    <div class="duration-actions"><Button :label="durationMinutes ? `Unterrichtsdauer · ${durationMinutes} Min.` : 'Unterrichtsdauer'" outlined size="small" aria-haspopup="dialog" :disabled="readonly" @click="durationDialog = true" /><Button label="Auf Storymapping anwenden" size="small" :disabled="readonly || !durationMinutes" @click="applyDuration" /></div>
    <p v-if="durationError" class="editor-error" role="alert">{{ durationError }}</p>
    <Dialog v-model:visible="durationDialog" header="Unterrichtsdauer" modal dismissable-mask :style="{ width: 'min(460px, calc(100vw - 32px))' }"><fieldset class="duration-choices"><legend>Dauer in Minuten</legend><div v-for="minutes in [45, 90, 135, 180]" :key="minutes" class="duration-choice"><RadioButton v-model="durationMinutes" :input-id="`story-duration-${minutes}`" name="story-duration" :value="minutes" /><label :for="`story-duration-${minutes}`">{{ minutes }} Minuten</label></div></fieldset><template #footer><Button label="Fertig" @click="durationDialog = false" /></template></Dialog>
    <div v-if="grid.columnCount" class="board-scroll" tabindex="0" role="region" aria-label="Storymapping von links nach rechts">
      <div class="phase-track" :style="{ gridTemplateColumns: `repeat(${grid.columnCount}, minmax(240px, 1fr))`, minWidth: `${grid.columnCount * 240 + (grid.columnCount - 1) * 16}px` }">
        <section v-for="phase in grid.phases" :key="phase.id" class="story-phase">
          <div class="phase-heading-cell" :style="{ gridColumn: `${phase.start} / span ${phase.span}`, gridRow: 1 }"><h4 class="phase-label">{{ storyPhaseHeading(phase.title) }}</h4></div>
          <StoryCard kind="activity" :text="storyPhaseContent(phase.title) || storyPhaseHeading(phase.title)" :label="`Aktivität ${phase.phaseIndex + 1}`" :readonly="readonly" :style="{ gridColumn: `${phase.start} / span ${phase.span}`, gridRow: 2 }" @edit="openEditor('edit', { kind: 'phase', phase: phase.phaseIndex })" @move="openEditor('move', { kind: 'phase', phase: phase.phaseIndex })" @delete="remove({ kind: 'phase', phase: phase.phaseIndex })" @drag-start="startDrag($event, { kind: 'phase', phase: phase.phaseIndex })" @drag-end="dragging = null" @drop="dropCard({ kind: 'phase', phase: phase.phaseIndex })" />
          <div v-if="!phase.tasks.length" class="empty-task" :style="{ gridColumn: phase.start, gridRow: 3 }"><Button v-if="!readonly" label="Task hinzufügen" text @click="openEditor('add', { kind: 'task', phase: phase.phaseIndex })" /></div>
          <div class="task-track"><section v-for="task in phase.tasks" :key="task.id" class="story-task">
            <StoryCard kind="task" :text="displayDramaturgyTask(task.title)" :number="task.displayNumber" :minutes="timeForTask(map, task.title)" :label="`Task ${task.displayNumber}`" :readonly="readonly" :style="{ gridColumn: task.column, gridRow: 3 }" @edit="openEditor('edit', { kind: 'task', phase: phase.phaseIndex, task: task.taskIndex })" @move="openEditor('move', { kind: 'task', phase: phase.phaseIndex, task: task.taskIndex })" @delete="remove({ kind: 'task', phase: phase.phaseIndex, task: task.taskIndex })" @drag-start="startDrag($event, { kind: 'task', phase: phase.phaseIndex, task: task.taskIndex })" @drag-end="dragging = null" @drop="dropCard({ kind: 'task', phase: phase.phaseIndex, task: task.taskIndex })" />
            <div v-if="dramaturgyInfo(task.title)?.title === 'Exposition'" class="entry-selection" :style="{ gridColumn: task.column, gridRow: 4 }">
              <Panel header="Einstieg" toggleable collapsed>
                <div v-for="item in entryTemplates" :key="item.id" class="entry-option"><Checkbox v-model="selectedEntries" :input-id="`story-entry-${item.id}`" :value="item.id" :disabled="readonly" /><Button :label="item.label" text class="entry-info" aria-haspopup="dialog" @click="showEntryInfo(item)" /></div>
              </Panel>
              <p class="entry-caption">{{ entryTemplates.filter(item => selectedEntries.includes(item.id)).map(item => item.label).join(', ') || 'Einstieg frei vorschlagen lassen' }}</p>

            </div>
            <div v-if="dramaturgyInfo(task.title)?.title === 'Steigende Handlung (Erarbeitung)'" class="entry-selection" :style="{ gridColumn: task.column, gridRow: 4 }">
              <Panel header="Lehr-Lern-Arrangement" toggleable collapsed>
                <div v-for="(name, index) in learningArrangements" :key="name" class="entry-option"><Checkbox :input-id="`story-arrangement-${index}`" :model-value="arrangement === name" binary :disabled="readonly" :aria-label="`${name} auswählen`" @update:model-value="selected => emit('update:arrangement', selected ? name : '')" /><Button :label="name" text class="entry-info" aria-haspopup="dialog" @click="showArrangementInfo(name)" /></div>
              </Panel>
              <p class="entry-caption">{{ arrangement || 'Noch kein Arrangement ausgewählt' }}</p>

            </div>
            <div v-if="dramaturgyInfo(task.title)?.title === 'Exposition'" class="entry-selection" :style="{ gridColumn: task.column, gridRow: 5 }">
              <label class="entry-guidance-label" for="entry-guidance">Weitere Informationen zum Einstieg</label>
              <Textarea id="entry-guidance" :model-value="entryGuidance" :disabled="readonly" rows="3" auto-resize @update:model-value="emit('update:entryGuidance', $event)" />
              <Button label="Subtasks anpassen" size="small" class="entry-adjust" :disabled="readonly || !entryGuidance.trim()" @click="emit('adjust-entry')" />
            </div>
            <div v-if="dramaturgyInfo(task.title)?.title === 'Steigende Handlung (Erarbeitung)'" class="entry-selection" :style="{ gridColumn: task.column, gridRow: 5 }">
              <label class="entry-guidance-label" for="guidance-erarbeitung">Weitere Informationen zur Erarbeitung</label>
              <Textarea id="guidance-erarbeitung" :model-value="taskGuidance.erarbeitung || ''" :disabled="readonly" rows="3" auto-resize @update:model-value="emit('update:taskGuidance', { ...taskGuidance, erarbeitung: $event })" />
              <Button label="Subtasks anpassen" size="small" class="entry-adjust" :disabled="readonly || !(taskGuidance.erarbeitung || '').trim()" @click="emit('adjust-task', 'erarbeitung')" />

            </div>
            <div v-if="['Höhepunkt', 'Katastrophe / Lösung'].includes(dramaturgyInfo(task.title)?.title)" class="entry-selection" :style="{ gridColumn: task.column, gridRow: 5 }">
              <label class="entry-guidance-label" :for="`guidance-${dramaturgyInfo(task.title).title === 'Höhepunkt' ? 'hoehepunkt' : 'katastrophe'}`">Weitere Informationen zu {{ dramaturgyInfo(task.title).title === 'Höhepunkt' ? 'Erkenntnisgewinn' : 'Lösung' }}</label>
              <Textarea v-if="dramaturgyInfo(task.title).title === 'Höhepunkt'" id="guidance-hoehepunkt" :model-value="taskGuidance.hoehepunkt || ''" :disabled="readonly" rows="3" auto-resize @update:model-value="emit('update:taskGuidance', { ...taskGuidance, hoehepunkt: $event })" />
              <Textarea v-else id="guidance-katastrophe" :model-value="taskGuidance.katastrophe || ''" :disabled="readonly" rows="3" auto-resize @update:model-value="emit('update:taskGuidance', { ...taskGuidance, katastrophe: $event })" />
              <Button v-if="dramaturgyInfo(task.title).title === 'Höhepunkt'" label="Subtasks anpassen" size="small" class="entry-adjust" :disabled="readonly || !(taskGuidance.hoehepunkt || '').trim()" @click="emit('adjust-task', 'hoehepunkt')" />
              <Button v-else label="Subtasks anpassen" size="small" class="entry-adjust" :disabled="readonly || !(taskGuidance.katastrophe || '').trim()" @click="emit('adjust-task', 'katastrophe')" />
            </div>
            <div class="subtask-stack"><StoryCard v-for="subtask in task.subtasks" :key="subtask.number" kind="subtask" :text="subtask.text" :number="subtask.number" :label="`Subtask ${subtask.number}`" :readonly="readonly" :style="{ gridColumn: task.column, gridRow: subtask.row + 2 }" @edit="openEditor('edit', { kind: 'subtask', phase: phase.phaseIndex, task: task.taskIndex, subtask: subtask.subtaskIndex })" @move="openEditor('move', { kind: 'subtask', phase: phase.phaseIndex, task: task.taskIndex, subtask: subtask.subtaskIndex })" @delete="remove({ kind: 'subtask', phase: phase.phaseIndex, task: task.taskIndex, subtask: subtask.subtaskIndex })" @drag-start="startDrag($event, { kind: 'subtask', phase: phase.phaseIndex, task: task.taskIndex, subtask: subtask.subtaskIndex })" @drag-end="dragging = null" @drop="dropCard({ kind: 'subtask', phase: phase.phaseIndex, task: task.taskIndex, subtask: subtask.subtaskIndex })" /></div>
            <button v-if="!readonly" type="button" class="add-subtask" :style="{ gridColumn: task.column, gridRow: task.subtasks.length + 7 }" :aria-label="`Subtask zu Task ${task.displayNumber} hinzufügen`" @click="openEditor('add', { kind: 'subtask', phase: phase.phaseIndex, task: task.taskIndex })">+ Subtask hinzufügen</button>
          </section></div>
        </section>
        <div class="timeline-divider" aria-hidden="true"></div>
      </div>
    </div>
    <p v-else class="empty-board">Noch keine Aktivitäten vorhanden. Füge über „Neue Karte“ eine Aktivität hinzu.</p>
    <details v-if="visibleExtraRows.length" class="story-notes"><summary>Ergänzende Angaben</summary><section v-for="row in visibleExtraRows" :key="row.label"><h4>{{ row.label }}</h4><p v-for="value in row.values" :key="value.phase"><strong>{{ value.phase }}: </strong><StoryText :text="value.text" /></p></section></details>
    <section v-if="map.remainder" class="story-notes" aria-label="Ergänzungen zum Storymapping"><template v-for="(line, index) in map.remainder.split('\n').filter(line => line.trim())" :key="index"><h4 v-if="/^#{1,6}\s/.test(line)"><StoryText :text="line.replace(/^#{1,6}\s+/, '')" /></h4><p v-else><StoryText :text="line" /></p></template></section>
    <div class="output-placeholder" aria-label="Ausgabedokumente">
      <Button label="Ausgabedokumente" outlined disabled />
      <Button label="Ausgabedokument erstellen" disabled />
    </div>
    <Dialog v-model:visible="arrangementInfoOpen" :header="activeArrangement || 'Lehr-Lern-Arrangement'" modal dismissable-mask :style="{ width: 'min(560px, calc(100vw - 32px))' }"><p>{{ arrangementDescriptions[activeArrangement] }}</p></Dialog>
    <Dialog v-model:visible="entryInfoOpen" :header="activeEntry?.title || 'Einstieg'" modal dismissable-mask :style="{ width: 'min(560px, calc(100vw - 32px))' }"><p>{{ activeEntry?.description }}</p></Dialog>
    <Dialog v-model:visible="titleDialog" header="Unterrichtstitel bearbeiten" modal :style="{ width: 'min(560px, calc(100vw - 32px))' }">
      <label for="story-title">Titel</label>
      <InputText id="story-title" v-model="editedTitle" fluid autofocus @keydown.enter.prevent="saveTitle" />
      <p v-if="titleError" role="alert">{{ titleError }}</p>
      <template #footer><Button label="Abbrechen" outlined @click="titleDialog = false" /><Button label="Speichern" :disabled="readonly || !editedTitle.trim()" @click="saveTitle" /></template>
    </Dialog>
    <Dialog v-if="!expanded" v-model:visible="fullscreen" header="Storymapping · Großansicht" modal dismissable-mask :style="{ width: 'calc(100vw - 32px)', maxWidth: '1900px' }"><StoryMappingBoard v-if="fullscreen" :text="text" :readonly="readonly" :history="historyStack" :entry-ids="entryIds" :class-ids="classIds" :arrangement="arrangement" :arrangement-descriptions="arrangementDescriptions" expanded @update:text="forwardText" @update:entry-ids="emit('update:entryIds', $event)" @update:class-ids="emit('update:classIds', $event)" @update:arrangement="emit('update:arrangement', $event)" /></Dialog>
    <Dialog v-model:visible="editor.open" :header="editorTitle" modal dismissable-mask :style="{ width: 'min(640px, calc(100vw - 32px))' }">
      <form id="story-card-editor" class="editor-form" @submit.prevent="saveEditor">
        <template v-if="editor.mode === 'add'"><label for="story-card-kind">Kartentyp</label><Select v-model="editor.kind" input-id="story-card-kind" :options="kindOptions" option-label="label" option-value="id" option-disabled="disabled" /></template>
        <template v-if="(editor.mode === 'add' || editor.mode === 'move') && editor.kind !== 'phase'"><label for="story-target-phase">Aktivität</label><Select v-model="editor.phase" input-id="story-target-phase" :options="phaseOptions" option-label="label" option-value="id" option-disabled="disabled" /></template>
        <template v-if="(editor.mode === 'add' || editor.mode === 'move') && editor.kind === 'subtask'"><label for="story-target-task">Task</label><Select v-model="editor.task" input-id="story-target-task" :options="taskOptions" option-label="label" option-value="id" /></template>
        <template v-if="editor.mode === 'move'"><label for="story-target-position">Position</label><Select v-model="editor.position" input-id="story-target-position" :options="positionOptions" option-label="label" option-value="id" /></template>
        <template v-else><template v-if="editor.kind === 'phase'"><label for="story-phase-name">Phasenüberschrift</label><InputText id="story-phase-name" v-model="editor.name" required /><label for="story-phase-minutes">Dauer in Minuten</label><InputNumber v-model="editor.minutes" input-id="story-phase-minutes" :min="1" :max="720" :use-grouping="false" /></template><label for="story-card-text">Kartentext</label><Textarea id="story-card-text" v-model="editor.text" rows="5" auto-resize :required="editor.kind !== 'phase'" placeholder="Als Schüler will ich …" /></template>
        <p v-if="editor.mode === 'move' && editor.kind !== 'subtask'" class="editor-help">Zugehörige Karten werden mitverschoben.</p>
        <p v-if="editor.error" class="editor-error" role="alert">{{ editor.error }}</p>
      </form>
      <template #footer><Button label="Abbrechen" text @click="editor.open = false" /><Button :label="editor.mode === 'move' ? 'Verschieben' : 'Speichern'" type="submit" form="story-card-editor" /></template>
    </Dialog>
  </section>
  <p v-else class="story-fallback">Dieser Entwurf lässt sich noch nicht als Storymapping darstellen. Du kannst den vollständigen Text darunter bearbeiten oder ihn mit der aktuellen Storymapping-Vorgabe neu entwerfen.</p>
</template>
<style scoped>
.story-mapping { margin-top: 24px; background: white; border: 1px solid #d6dfd3; border-radius: 14px; padding: 20px; }
.story-header { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.story-title-area { min-width: 0; flex: 1; }
.story-title-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 24px; }
.class-selection { width: min(180px, 100%); }
.class-selection :deep(.p-panel-header) { padding: 9px 12px; }
.class-selection :deep(.p-panel-content) { padding: 0 12px 10px; }
.story-header h3 { margin: 0; font-size: 22px; font-weight: 500; }
.story-header p { font-size: 16px; line-height: 1.6; margin: 6px 0; }
.story-header :deep(.p-button) { flex-shrink: 0; }
.legend { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; font-size: 14px; }
.legend span { padding: 7px 10px; border-radius: 5px; }
.legend-activity { background: #d9edc4; }
.legend-task { background: #c8e5f5; }
.legend-subtask { background: #fff3b0; }
.entry-selection { align-self: start; min-width: 0; }
.entry-guidance-label { display: flex; align-items: end; min-height: 2.8em; font-size: 13px; font-weight: 500; margin: 0 0 6px; }
.entry-selection :deep(.p-textarea) { width: 100%; box-sizing: border-box; }
.entry-adjust { margin-top: 8px; }
.entry-option { display: flex; align-items: center; gap: 9px; margin: 10px 0; }
.entry-info { padding: 0; text-decoration: underline; text-align: left; }
.entry-caption { font-size: 13px; color: #526166; margin: 8px 0 0; }
.duration-choices { border: 0; padding: 0; margin: 0; }
.duration-choices legend { font-weight: 500; margin-bottom: 14px; }
.duration-choice { display: flex; align-items: center; gap: 10px; margin: 12px 0; }
.duration-choice label { cursor: pointer; }
.duration-actions { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 14px; }
.board-scroll { overflow-x: auto; padding: 4px 2px 14px; }
.phase-track { display: grid; column-gap: 16px; row-gap: 16px; align-items: stretch; }
.story-phase, .task-track, .story-task, .subtask-stack { display: contents; }
.phase-label { margin: 0; text-align: center; font-size: 18px; font-weight: 600; line-height: 1.5; text-transform: capitalize; }
.timeline-divider { grid-column: 1 / -1; grid-row: 6; height: 2px; background: #a4aaa4; margin: 4px 0; }
.phase-heading-cell { display: flex; flex-direction: column; justify-content: space-between; align-items: center; gap: 10px; }
.phase-heading-cell :deep(.p-button) { font-size: 13px; }
.empty-task { padding: 18px; border: 1px dashed #aab9a2; border-radius: 6px; display: grid; place-items: center; }
.add-subtask { align-self: start; width: 100%; min-height: 48px; padding: 12px 14px; border: 1px dashed #b3a654; border-radius: 6px; background: #fff4b4; color: #4f4821; font: inherit; font-size: 14px; text-align: left; cursor: pointer; }
.add-subtask:hover { background: #f9e994; }
.add-subtask:focus-visible { outline: 3px solid #347449; outline-offset: 2px; }
.board-actions { display: flex; flex-wrap: wrap; gap: 8px; flex-shrink: 0; }
.editor-form { display: grid; gap: 12px; }
.editor-form label { font-size: 14px; font-weight: 500; }
.editor-form :deep(.p-select), .editor-form :deep(.p-inputnumber), .editor-form :deep(.p-inputtext), .editor-form :deep(.p-textarea) { width: 100%; }
.editor-error { color: #a92121; font-size: 14px; }
.editor-help { color: #526166; font-size: 14px; line-height: 1.6; }
.empty-board { padding: 20px 0; color: #526166; }
.output-placeholder { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
.story-notes { margin-top: 18px; border-top: 1px solid #dce3d9; padding-top: 16px; font-size: 16px; line-height: 1.7; }
.story-notes summary { cursor: pointer; font-size: 14px; font-weight: 500; }
.story-notes h4 { margin-bottom: 8px; }
.story-fallback { margin-top: 24px; font-size: 14px; line-height: 1.6; color: #526166; }
@media (max-width: 600px) { .story-mapping { padding: 14px; } .story-header { flex-direction: column; } }
</style>
