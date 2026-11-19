import { storyPhaseContent, storyPhaseHeading } from './storyMapping.js'
const clone = value => JSON.parse(JSON.stringify(value))
const stripTaskNumber = text => text.replace(/^(\*\*)?\d+[.)]\s*/, '$1')
const stripSubtaskNumber = text => text.replace(/^\s*(?:[-*]\s+)?(?:\*\*)?\d+\.\d+(?:\.\d+)*\.?(?:\*\*)?\s*[:·–-]?\s+(?=\S)/, '')
const cell = text => String(text || '').replace(/\\\|/g, '|').replace(/\|/g, '\\|').replace(/\r?\n/g, '<br>')
const cardText = text => String(text || '').replace(/\r?\n/g, '&#10;')
const row = values => `| ${values.map(cell).join(' | ')} |`
export function phaseDetails(phase) {
  const title = phase.title
  const storyIndex = title.search(/Als Schüler\b/i)
  const content = storyIndex >= 0 ? title.slice(storyIndex) : storyPhaseContent(title)
  const heading = storyIndex >= 0 ? title.slice(0, storyIndex).replace(/[\s·:–—-]+$/, '') : storyPhaseHeading(title)
  const duration = heading.match(/(?:\d+(?:[.,]\d+)?\s*[–—-]\s*)?(\d+(?:[.,]\d+)?)\s*Min(?:uten)?\.?/i)
  const shortHeading = storyPhaseHeading(title)
  const minutes = shortHeading.match(/·\s*(\d+(?:[.,]\d+)?)\s*Min/i)?.[1] || duration?.[1] || ''
  const name = heading.replace(/\(?\s*(?:\d+(?:[.,]\d+)?\s*[–—-]\s*)?\d+(?:[.,]\d+)?\s*Min(?:uten)?\.?\s*\)?/i, '').replace(/[\s·:–—-]+$/, '').trim()
  return { name: name || 'Aktivität', minutes, text: content }
}
export function serializeStoryMapping(map) {
  const phases = map.phases
  const result = [`# ${map.title}`, '', ...(map.summary || []), '', row(['Aktivität', ...phases.map(phase => phase.title)]), row(['---', ...phases.map(() => '---')])]
  let number = 1
  const taskNumbers = phases.map(phase => phase.tasks.map(() => number++))
  result.push(row(['Tasks', ...phases.map((phase, phaseIndex) => phase.tasks.map((task, taskIndex) => `**${taskNumbers[phaseIndex][taskIndex]}.** ${cardText(stripTaskNumber(task.title))}`).join('<br>'))]))
  for (const [phaseIndex, phase] of phases.entries()) for (const [taskIndex, task] of phase.tasks.entries()) {
    if (!task.subtasks.length) continue
    const values = phases.map(() => '')
    const taskNumber = taskNumbers[phaseIndex][taskIndex]
    values[phaseIndex] = task.subtasks.map((text, index) => `${taskNumber}.${index + 1} ${cardText(stripSubtaskNumber(text))}`).join('<br><br>')
    result.push(row([`Subtasks zu Task ${taskNumber}`, ...values]))
  }
  for (const extra of map.extraRows || []) result.push(row([extra.label, ...phases.map(phase => extra.values.find(value => value.phase === phase.title)?.text || '')]))
  if (map.remainder) result.push('', map.remainder)
  return result.join('\n')
}
export function changeStoryCard(map, address, values) {
  const next = clone(map)
  if (address.kind === 'phase') {
    const old = next.phases[address.phase].title
    const name = values.name.trim()
    if (!name) throw new Error('Bitte eine Bezeichnung für die Aktivität eingeben.')
    const minutes = String(values.minutes || '').trim()
    const title = `${name}${minutes ? ` · ${minutes} Min.` : ''}${values.text.trim() ? ` · ${values.text.trim()}` : ''}`
    next.phases[address.phase].title = title
    for (const row of next.extraRows || []) for (const value of row.values) if (value.phase === old) value.phase = title
  } else if (address.kind === 'task') next.phases[address.phase].tasks[address.task].title = values.text.trim()
  else next.phases[address.phase].tasks[address.task].subtasks[address.subtask] = values.text.trim()
  return next
}
export function addStoryCard(map, address, values) {
  const next = clone(map)
  if (address.kind === 'phase') {
    const name = values.name.trim()
    if (!name) throw new Error('Bitte eine Bezeichnung für die Aktivität eingeben.')
    const minutes = String(values.minutes || '').trim()
    next.phases.push({ id: 'new-phase', title: `${name}${minutes ? ` · ${minutes} Min.` : ''}${values.text.trim() ? ` · ${values.text.trim()}` : ''}`, tasks: [] })
  } else if (address.kind === 'task') next.phases[address.phase].tasks.push({ id: 'new-task', number: null, title: values.text.trim(), subtasks: [], annotations: [] })
  else next.phases[address.phase].tasks[address.task].subtasks.push(values.text.trim())
  return next
}
export function deleteStoryCard(map, address) {
  const next = clone(map)
  if (address.kind === 'phase') {
    const [phase] = next.phases.splice(address.phase, 1)
    for (const extra of next.extraRows || []) extra.values = extra.values.filter(value => value.phase !== phase.title)
  } else if (address.kind === 'task') next.phases[address.phase].tasks.splice(address.task, 1)
  else next.phases[address.phase].tasks[address.task].subtasks.splice(address.subtask, 1)
  return next
}
export function moveStoryCard(map, source, destination) {
  const next = clone(map)
  if (source.kind === 'phase') {
    const [phase] = next.phases.splice(source.phase, 1)
    next.phases.splice(destination.position, 0, phase)
  } else if (source.kind === 'task') {
    const [task] = next.phases[source.phase].tasks.splice(source.task, 1)
    next.phases[destination.phase].tasks.splice(destination.position, 0, task)
  } else {
    const [text] = next.phases[source.phase].tasks[source.task].subtasks.splice(source.subtask, 1)
    const task = next.phases[destination.phase]?.tasks[destination.task]
    if (!task) throw new Error('Bitte einen Ziel-Task auswählen.')
    task.subtasks.splice(destination.position, 0, text)
  }
  return next
}
