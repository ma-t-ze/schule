<script setup>
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Textarea from 'primevue/textarea'
import { computed, ref, watch } from 'vue'
import { mergePlanRemark } from '../utils/planRemarks'
import PlanTabs from '../components/PlanTabs.vue'
import { isRedPlanRow, examRemark } from '../utils/examPeriods'
import GmtCoverage from '../components/GmtCoverage.vue'
import { curriculumCoverage } from '../utils/curriculumCoverage'
import pdfFontUrl from '../assets/fonts/Graphit-Regular.ttf?url'
import { plans, parseCsvLine } from '../utils/planData'

const props = defineProps({ planId: { type: String, default: '3tgg1-2' }, embedded: Boolean })
const plan = computed(() => plans[props.planId])


const lines = computed(() => plan.value.csv.trim().split(/\r?\n/))
const headers = computed(() => parseCsvLine(lines.value[0]))
const sourceRows = computed(() => lines.value.slice(1).map((line) => parseCsvLine(line)))
const edits = ref({})
const isEditing = ref(false)
const saveStatus = ref('')
const storageKey = computed(() => `stoffverteilungsplan:2026-27:${props.planId}`)
const cellKey = (row, column) => `${row[0] || row[3]}:${column}`
const rows = computed(() => sourceRows.value.map((row) => row.map((cell, column) => {
  const value = edits.value[cellKey(row, column)] ?? cell
  return column === row.length - 1 ? examRemark(props.planId, row, mergePlanRemark(cell, value)) : value
})))

watch(storageKey, () => {
  isEditing.value = false
  edits.value = {}
  saveStatus.value = ''
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey.value) || '{}')
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) throw new Error('Invalid data')
    for (const row of sourceRows.value) {
      for (let column = 0; column < row.length; column += 1) {
        const key = cellKey(row, column)
        if (typeof saved[key] === 'string') edits.value[key] = saved[key]
      }
    }
  } catch {
    saveStatus.value = 'Gespeicherte Änderungen konnten nicht geladen werden.'
  }
}, { immediate: true })

const updateCell = (rowIndex, column, value) => {
  if (!isEditing.value) return
  const original = sourceRows.value[rowIndex]
  const key = cellKey(original, column)
  if (value === original[column]) delete edits.value[key]
  else edits.value[key] = value
  saveStatus.value = 'Ungespeicherte Änderungen.'
}

const shiftDown = (rowIndex) => {
  if (!isEditing.value) return
  const currentRows = rows.value.map((row) => [...row])
  const columns = headers.value
    .map((_, column) => column)
    .filter((column) => column >= 2 && column !== plan.value.hoursColumn)

  for (let index = currentRows.length - 1; index >= rowIndex; index -= 1) {
    for (const column of columns) {
      updateCell(index, column, index === rowIndex ? '' : currentRows[index - 1][column])
    }
  }
}

const startEditing = () => {
  isEditing.value = true
  saveStatus.value = ''
}

const saveChanges = () => {
  if (!isEditing.value) return
  try {
    localStorage.setItem(storageKey.value, JSON.stringify(edits.value))
    isEditing.value = false
    saveStatus.value = 'Änderungen in diesem Browser gespeichert.'
  } catch {
    saveStatus.value = 'Speichern fehlgeschlagen. Bitte Änderungen als CSV herunterladen, bevor du die Seite verlässt.'
  }
}

const downloadCsv = () => {
  const csv = [headers.value, ...rows.value]
    .map((row) => row.map((cell) => `"${cell.replaceAll('"', '""')}"`).join(','))
    .join('\r\n')
  const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8;' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `Stoffverteilungsplan_${props.planId}_2026-27.csv`
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const tableRows = computed(() => rows.value.map((cells, index) => ({ cells, index })))
const rowClass = data => ({ 'holiday-row': isHolidayRow(data.cells), 'highlighted-row': isHighlightedRow(data.cells) })

const isHolidayRow = (row) => /ferien/i.test(row[3])
const isHighlightedRow = (row) => isRedPlanRow(props.planId, row)
const coverage = computed(() => props.planId === '3tgg2' ? curriculumCoverage(rows.value, plan.value.hoursColumn) : null)
const pdfBusy = ref(false)
const pdfStatus = ref('')
const downloadPdf = async () => {
  if (pdfBusy.value) return
  pdfBusy.value = true
  pdfStatus.value = ''
  const snapshot = { planId: props.planId, coverage: coverage.value, name: plan.value.name, hoursColumn: plan.value.hoursColumn, headers: [...headers.value], rows: rows.value.map(row => [...row]) }
  const filename = `Stoffverteilungsplan_${props.planId}_2026-27.pdf`
  try {
    const { createPlanPdf } = await import('../utils/planPdf')
    const response = await fetch(pdfFontUrl)
    if (!response.ok) throw new Error('Schrift konnte nicht geladen werden')
    const bytes = new Uint8Array(await response.arrayBuffer())
    let binary = ''
    for (const byte of bytes) binary += String.fromCharCode(byte)
    createPlanPdf({ ...snapshot, font: btoa(binary) }).save(filename)
  } catch {
    pdfStatus.value = 'PDF konnte nicht erstellt werden. Bitte erneut versuchen.'
  } finally {
    pdfBusy.value = false
  }
}
</script>
<template>
  <div class="plan-page" :class="{ embedded }">
    <template v-if="!embedded"><RouterLink to="/" class="back">← Zur Startseite</RouterLink><PlanTabs /></template>
    <header><h2>{{ plan.name }}</h2><p>Stoffverteilungsplan · Schuljahr 2026/27</p></header>
    <div class="plan-actions"><Button label="Editieren" size="small" :disabled="isEditing" @click="startEditing" /><Button label="Speichern" size="small" :disabled="!isEditing" @click="saveChanges" /><Button label="CSV herunterladen" size="small" outlined @click="downloadCsv" /><Button label="PDF herunterladen" size="small" outlined :loading="pdfBusy" @click="downloadPdf" /></div>
    <p v-if="isEditing" class="hint">Änderungen werden nur in diesem Browser gespeichert.</p><p role="status">{{ saveStatus }} {{ pdfStatus }}</p>
    <DataTable :value="tableRows" data-key="index" :row-class="rowClass" striped-rows show-gridlines scrollable scroll-height="70vh" size="small" class="plan-table" :table-style="{ minWidth: '100%', tableLayout: 'auto' }">
      <Column v-for="(heading, column) in headers" :key="column" :header="heading" :style="{ width: column < 2 || column === plan.hoursColumn ? '1%' : undefined }">
        <template #body="{ data }"><Textarea v-if="isEditing" :model-value="data.cells[column]" :aria-label="`${heading}, Zeile ${data.index + 1}`" rows="2" auto-resize @update:model-value="updateCell(data.index, column, $event)" /><span v-else class="cell-text" :class="{ compact: column < 2 || column === plan.hoursColumn }">{{ data.cells[column] || '–' }}</span></template>
      </Column>
      <Column v-if="isEditing" header="Verschieben"><template #body="{ data }"><Button label="↓" size="small" text :aria-label="`Inhalte ab Zeile ${data.index + 1} eine Zeile nach unten verschieben`" @click="shiftDown(data.index)" /></template></Column>
    </DataTable>
    <GmtCoverage v-if="coverage" :coverage="coverage" />
  </div>
</template>
<style scoped>
.plan-page { padding: 24px; max-width: 1000px; margin: auto; color: #202622; user-select: text; }
.plan-page.embedded { padding: 0; }
header h2 { font-size: 21px; margin: 0; } header p, .hint { font-size: 14px; color: #647168; }
.plan-actions { display: flex; flex-wrap: wrap; gap: 8px; }
.plan-table { min-width: 0; max-width: 100%; }
.plan-table :deep(td) { vertical-align: top; font-size: 14px; line-height: 1.45; }
.plan-table :deep(th) { font-size: 13px; }
.plan-table :deep(.holiday-row > td) { background: #fff3b7; }
.plan-table :deep(.highlighted-row > td) { background: #ffe0e0; color: #8b1717; }
.cell-text { display: block; white-space: pre-wrap; overflow-wrap: break-word; min-width: 5ch; max-width: 65ch; }
.cell-text.compact { white-space: nowrap; min-width: 0; max-width: none; }
.plan-table textarea { width: 100%; box-sizing: border-box; min-width: 100px; }
.back { display: inline-block; margin-bottom: 16px; color: #176746; }
</style>
