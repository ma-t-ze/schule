import { parseStoryMapping } from './storyMapping.js'
import { serializeStoryMapping } from './storyMappingEditor.js'

const destinations = [
  { key: 'exposition', phase: /^(einleitung|einstieg)\b/i, task: /exposition/i },
  { key: 'erarbeitung', phase: /^hauptteil\b/i, task: /steigende handlung/i },
  { key: 'hoehepunkt', phase: /^hauptteil\b/i, task: /höhepunkt/i },
  { key: 'katastrophe', phase: /^schluss\b/i, task: /katastrophe|lösung\s*:\s*abschluss/i }
]
export function addSuggestedSubtasks(source, raw) {
  const map = parseStoryMapping(source)
  if (!map) throw new Error('Das Storymapping konnte nicht gelesen werden.')
  const data = JSON.parse(raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, ''))
  if (!data || typeof data !== 'object' || Array.isArray(data) || Object.keys(data).length !== destinations.length + 1) throw new Error('Der Unterrichtsvorschlag hat ein unerwartetes Format.')
  if (typeof data.titel !== 'string' || !data.titel.trim() || data.titel.trim().length > 120 || /[\r\n]/.test(data.titel)) throw new Error('Der vorgeschlagene Unterrichtstitel ist ungültig.')
  map.title = data.titel.trim()
  for (const destination of destinations) {
    const values = data[destination.key]
    if (!Array.isArray(values) || !values.length || values.length > 2 || values.some(value => typeof value !== 'string' || !value.trim() || /[\r\n]/.test(value))) throw new Error(`Die Subtasks für ${destination.key} sind ungültig.`)
    const phases = map.phases.filter(phase => destination.phase.test(phase.title))
    const tasks = phases.flatMap(phase => phase.tasks.filter(task => destination.task.test(task.title)))
    if (phases.length !== 1 || tasks.length !== 1) throw new Error('Das Grundgerüst muss die vier Dramaturgie-Karten eindeutig enthalten.')
    const existing = tasks[0].subtasks
    for (const value of values) if (!existing.some(item => item.replace(/^\s*\d+\.\d+\s*/, '').trim() === value.trim())) existing.push(value.trim())
  }
  return serializeStoryMapping(map)
}

export function replaceTaskSubtasks(source, raw, key) {
  const map = parseStoryMapping(source)
  if (!map) throw new Error('Das Storymapping konnte nicht gelesen werden.')
  const data = JSON.parse(raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, ''))
  if (!data || !Array.isArray(data.subtasks) || !data.subtasks.length || data.subtasks.length > 6 || data.subtasks.some(value => typeof value !== 'string' || !value.trim() || /[\r\n]/.test(value))) throw new Error('Die vorgeschlagenen Subtasks sind ungültig.')
  const destination = destinations.find(item => item.key === key)
  if (!destination) throw new Error('Die gewählte Karte ist nicht bekannt.')
  const tasks = map.phases.filter(phase => destination.phase.test(phase.title)).flatMap(phase => phase.tasks.filter(task => destination.task.test(task.title)))
  if (tasks.length !== 1) throw new Error('Die gewählte Karte muss eindeutig vorhanden sein.')
  tasks[0].subtasks = data.subtasks.map(value => value.trim())
  return serializeStoryMapping(map)
}

export function replaceEntrySubtasks(source, raw) { return replaceTaskSubtasks(source, raw, 'exposition') }
