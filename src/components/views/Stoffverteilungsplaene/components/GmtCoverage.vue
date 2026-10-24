<script setup>
import { formatHours, coverageNote } from '../utils/curriculumCoverage'
defineProps({ coverage: { type: Object, required: true } })
const years = ['Jahrgangsstufe 1']
</script>
<template>
  <section class="coverage">
    <h2>GMT · Jahrgangsstufe 1 · Übersicht für die Fachkollegen</h2>
    <p>Grün markiert die in meinem Stoffverteilungsplan vorgesehenen Bereiche. Die Themenüberschriften fassen die Unterpunkte des <a href="/stoffverteilungsplaene/LehrplanGMT.pdf" target="_blank" rel="noopener">GMT-Lehrplans</a> kurz zusammen.</p>
    <div class="table-wrap"><table>
      <thead><tr><th>BPE · Thema</th><th>Unterpunkte · grün = in meinem Plan</th></tr></thead>
      <tbody v-for="year in years" :key="year">
        <tr><th colspan="2" class="year">{{ year }}</th></tr>
        <tr v-for="unit in coverage.units.filter(u => u.year === year)" :key="unit.id">
          <td :class="{ covered: unit.used }">{{ unit.id }} · {{ unit.title }}</td>
          <td><span v-for="item in unit.items" :key="item.id" class="item" :class="{ covered: item.used }" :title="item.objective">{{ item.id }} · {{ item.title }}{{ item.used ? ' ✓' : '' }}</span></td>
        </tr>
      </tbody>
    </table></div>
    <h3>Mein Stundenanteil · Jahrgangsstufe 1 · ohne Informatik</h3>
    <div class="table-wrap"><table><thead><tr><th>Einheit</th><th>Meine UStd.</th><th>Lehrplan UStd.</th><th>Mein Anteil</th></tr></thead><tbody>
      <tr v-for="unit in coverage.units.filter(u => u.used)" :key="unit.id"><td>{{ unit.id }} · {{ unit.title }}</td><td>{{ formatHours(unit.planned) }}</td><td>{{ unit.hours }}</td><td>{{ formatHours(unit.planned / unit.hours * 100) }} %</td></tr>
      <tr><td>Puffer / ohne Zuordnung</td><td>{{ formatHours(coverage.unassigned) }}</td><td>—</td><td>—</td></tr>
      <tr><th>Gesamt GMT · Jahrgangsstufe 1</th><th>{{ formatHours(coverage.total) }}</th><th>{{ coverage.curriculumHours }}</th><th>{{ formatHours(coverage.percentage) }} %</th></tr>
    </tbody></table></div>
    <p class="note">240 UStd. GMT = 150 UStd. BPE + 60 UStd. Vertiefung (VIP) + 30 UStd. Leistungsfeststellung. Informatik ist nicht enthalten. {{ coverageNote }}</p>
    <p v-if="coverage.invalid" role="status">{{ coverage.invalid }} Stundenangaben konnten nicht ausgewertet werden.</p>
  </section>
</template>
<style scoped>
.coverage { margin-top: 32px; font-size: 14px; line-height: 1.4; } h2 { font-size: 20px; } h3 { margin-top: 24px; } .table-wrap { overflow-x: auto; } table { width: 100%; border-collapse: collapse; } th,td { padding: 5px 8px; text-align: left; border-bottom: 1px solid #ddd; } .year { background: #eee; } .item { display: block; padding: 2px 5px; margin: 2px; border-radius: 3px; background: #f2f2f2; } .covered { background: #dcefdc; color: #205c2b; } .note { font-size: 12px; color: #555; }
</style>
