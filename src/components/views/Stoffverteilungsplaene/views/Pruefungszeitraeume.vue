<script setup>
defineProps({ embedded: Boolean })
defineOptions({ name: "PruefungszeitraeumeOverview" })
import { periods, examRemark } from '../utils/examPeriods'
import PlanTabs from '../components/PlanTabs.vue'
import { plans, parseCsvLine } from '../utils/planData'
import { mergePlanRemark } from '../utils/planRemarks'


const loadRows = (period) => {
  if (!period.source) return period.weeks.map(week => ({ week, cells: null }))
  const plan = plans[period.source]
  let edits = {}
  try {
    const saved = JSON.parse(localStorage.getItem(`stoffverteilungsplan:2026-27:${period.source}`) || '{}')
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) edits = saved
  } catch { /* The source plan is still available without browser storage. */ }
  return plan.csv.trim().split(/\r?\n/).slice(1).map(parseCsvLine)
    .filter(row => period.weeks.includes(Number(row[0])))
    .map(row => ({ week: row[0], cells: row.map((cell, column) => {
      const saved = edits[`${row[0] || row[3]}:${column}`]
      const value = typeof saved === 'string' ? saved : cell
      return column === row.length - 1 ? examRemark(period.source, row, mergePlanRemark(cell, value)) : value
    }), hoursColumn: plan.hoursColumn }))
}
const sections = periods.map(period => ({ ...period, rows: loadRows(period) }))
const weekDates = (week) => {
  const monday = new Date(Date.UTC(2027, 0, 4 + (Number(week) - 1) * 7))
  const friday = new Date(monday.getTime() + 4 * 86400000)
  const format = date => date.toLocaleDateString('de-DE', { timeZone: 'UTC', day: '2-digit', month: '2-digit' })
  return `${format(monday)}–${format(friday)}`
}
</script>

<template>
  <main class="page">
    <RouterLink v-if="!embedded" class="back" to="/stoffverteilungsplaene">Zur Übersicht</RouterLink>
    <PlanTabs v-if="!embedded" />
    <section class="annual-plan" aria-labelledby="plan-title">
      <header><h1 id="plan-title">Prüfungszeiträume</h1><span>Schuljahr 2026/27</span></header>
      <div class="table-wrap">
        <table>
          <thead><tr><th>LP / Zeitraum</th><th>Klasse / Fach</th><th>KW</th><th>Woche</th><th>UW / Unterrichtsdatum</th><th>BPE / Thema</th><th>Inhalt / Schwerpunkt</th><th>Std.</th><th>Bemerkungen / Änderungen</th></tr></thead>
          <tbody v-for="period in sections" :key="period.label">
            <tr v-for="(entry, index) in period.rows" :key="entry.week">
              <th v-if="index === 0" :rowspan="period.rows.length" scope="rowgroup"><strong>{{ period.label }}</strong><span>{{ period.dates }}</span></th>
              <td v-if="index === 0" :rowspan="period.rows.length"><strong>{{ period.className }}</strong><span>{{ period.subject }}</span><span v-if="period.examSubject">Prüfungsfach: {{ period.examSubject }}</span></td>
              <td>{{ entry.week }}</td><td class="date">{{ weekDates(entry.week) }}</td>
              <template v-if="entry.cells">
                <td>{{ entry.cells[1] }}</td><td>{{ entry.cells[2] }}</td><td class="content">{{ entry.cells[3] }}</td>
                <td>{{ entry.hoursColumn === undefined ? '—' : entry.cells[entry.hoursColumn] }}</td><td>{{ entry.cells.at(-1) }}</td>
              </template>
              <td v-else colspan="5" class="missing">Zuordnung zum Stoffverteilungsplan 3BKGD1/2 MET noch offen.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page { user-select: text; color: #111; }
.page, .page :deep(*) { box-sizing: border-box; }
.page { padding: 24px; }
.back { display: inline-block; margin-bottom: 12px; color: #888; font-size: 13px; text-decoration: none; }
.annual-plan { background: white; border: 1px solid #ddd; padding: 24px; }
header { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-bottom: 24px; }
h1 { font-size: 24px; }
header span { color: #666; }
.table-wrap { overflow-x: auto; }
table { border-collapse: collapse; width: 100%; min-width: 1050px; font-size: 14px; line-height: 1.5; }
th, td { text-align: left; vertical-align: top; padding: 12px; border: 1px solid #ddd; white-space: pre-wrap; }
thead { background: #374641; color: white; }
tbody:nth-of-type(even) { background: #f4f6f4; }
tbody + tbody { border-top: 3px solid #adb8b1; }
td span, th span { display: block; margin-top: 4px; }
.content { width: 30%; }
.date { white-space: nowrap; }
.missing { color: #765d2b; }
@media (max-width: 700px) { .page { padding: 16px 12px; } .annual-plan { padding: 12px; } }
</style>
