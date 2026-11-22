import { dramaturgyInfo } from './dramaturgy.js'

const weights = [0.2, 0.4, 0.25, 0.15]
const labels = ['Exposition', 'Steigende Handlung (Erarbeitung)', 'Höhepunkt', 'Katastrophe / Lösung']
const rowPrefix = 'Unterrichtsdauer · '
export function isTimingRow(row) { return row.label.startsWith(rowPrefix) }
export function timeForTask(map, title) {
  const name = dramaturgyInfo(title)?.title
  if (!name) return null
  const row = map?.extraRows.find(item => item.label === rowPrefix + name)
  const value = Number(row?.values?.[0]?.text)
  return Number.isInteger(value) && value > 0 ? value : null
}
export function applyStoryTiming(map, minutes) {
  if (!Number.isInteger(minutes) || minutes < 4 || minutes > 720) throw new Error('Bitte eine Unterrichtsdauer zwischen 4 und 720 Minuten wählen.')
  const positions = labels.map(label => {
    const matches = map.phases.flatMap(phase => phase.tasks.filter(task => dramaturgyInfo(task.title)?.title === label).map(() => phase.title))
    if (matches.length !== 1) throw new Error('Die vier Dramaturgie-Karten müssen jeweils genau einmal vorhanden sein.')
    return matches[0]
  })
  // Give every step one minute, then distribute the remaining minutes proportionally.
  const raw = weights.map(weight => (minutes - 4) * weight)
  const durations = raw.map(value => 1 + Math.floor(value))
  let remaining = minutes - durations.reduce((sum, value) => sum + value, 0)
  const order = raw.map((value, index) => ({ index, remainder: value - Math.floor(value) })).sort((a, b) => b.remainder - a.remainder || a.index - b.index)
  for (let index = 0; index < remaining; index++) durations[order[index].index]++
  const next = structuredClone(map)
  next.extraRows = next.extraRows.filter(row => !isTimingRow(row))
  labels.forEach((label, index) => next.extraRows.push({ label: rowPrefix + label, values: [{ phase: positions[index], text: String(durations[index]) }] }))
  return next
}
