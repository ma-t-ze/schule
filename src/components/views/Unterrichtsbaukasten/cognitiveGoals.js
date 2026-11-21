const levels = [
  { id: 'erinnern', name: 'Erinnern', terms: ['nennen', 'aufzählen', 'wiedergeben'] },
  { id: 'verstehen', name: 'Verstehen', terms: ['erklären', 'beschreiben', 'zusammenfassen'] },
  { id: 'anwenden', name: 'Anwenden', terms: ['anwenden', 'durchführen', 'berechnen'] },
  { id: 'analysieren', name: 'Analysieren', terms: ['untersuchen', 'unterscheiden', 'vergleichen'] },
  { id: 'bewerten', name: 'Bewerten', terms: ['beurteilen', 'bewerten', 'begründen'] },
  { id: 'erschaffen', name: 'Erschaffen', terms: ['entwickeln', 'entwerfen', 'gestalten'] }
]
export const cognitiveGoalLevels = levels.map((item, index) => ({ id: item.id, level: index + 1, name: item.name, goals: item.terms.map((text, termIndex) => ({ id: `anderson-${item.id}-${termIndex + 1}`, text })) }))
export const cognitiveGoals = cognitiveGoalLevels.flatMap(level => level.goals.map(goal => ({ ...goal, level: level.name, stage: level.level })))
export function validCognitiveGoalIds(ids) {
  return Array.isArray(ids) ? [...new Set(ids.filter(id => cognitiveGoals.some(goal => goal.id === id)))] : []
}
export function selectedCognitiveGoals(ids) {
  const valid = validCognitiveGoalIds(ids)
  return cognitiveGoals.filter(goal => valid.includes(goal.id))
}
export function cognitiveGoalContext(ids) {
  const goals = selectedCognitiveGoals(ids)
  if (!goals.length) return ''
  return `\n\nAusgewählte kognitive Lernziele:\n${goals.map(goal => `- ${goal.level}: ${goal.text}`).join('\n')}\nBeziehe diese ausgewählten Lernhandlungen konkret auf das eingegebene Hauptlernziel und plane passende Aufgaben, an denen ihre Erreichung beobachtbar wird.`
}
