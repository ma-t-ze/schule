export const cognitiveGoalLevels = [
  { id: 'erinnern', level: 'I', name: 'Erinnern', description: 'Relevantes Wissen aus dem Gedächtnis abrufen.', goals: [
    { id: 'begriffe-nennen', text: 'Fachbegriffe nennen' },
    { id: 'merkmale-auflisten', text: 'Wesentliche Merkmale auflisten' },
    { id: 'wissen-wiedergeben', text: 'Gelerntes Wissen wiedergeben' }
  ] },
  { id: 'verstehen', level: 'II', name: 'Verstehen', description: 'Bedeutung und Zusammenhänge erkennen und erläutern.', goals: [
    { id: 'begriffe-erklaeren', text: 'Begriffe mit eigenen Worten erklären' },
    { id: 'zusammenhaenge-beschreiben', text: 'Zusammenhänge beschreiben' },
    { id: 'beispiele-vergleichen', text: 'Beispiele vergleichen' }
  ] },
  { id: 'anwenden', level: 'III', name: 'Anwenden', description: 'Gelerntes in neuen Situationen anwenden.', goals: [
    { id: 'verfahren-anwenden', text: 'Ein erlerntes Verfahren anwenden' },
    { id: 'aufgabe-loesen', text: 'Eine neue Aufgabe mithilfe des Gelernten lösen' },
    { id: 'vorgehen-demonstrieren', text: 'Ein Vorgehen demonstrieren' }
  ] },
  { id: 'analysieren', level: 'IV', name: 'Analysieren', description: 'Bestandteile, Beziehungen und Strukturen untersuchen.', goals: [
    { id: 'bestandteile-unterscheiden', text: 'Wesentliche Bestandteile unterscheiden' },
    { id: 'material-strukturieren', text: 'Material nach Kriterien strukturieren' },
    { id: 'beziehungen-ableiten', text: 'Beziehungen zwischen Bestandteilen ableiten' }
  ] },
  { id: 'bewerten', level: 'V', name: 'Bewerten', description: 'Urteile auf der Grundlage von Kriterien und Standards fällen.', goals: [
    { id: 'ergebnis-beurteilen', text: 'Ein Ergebnis anhand von Kriterien beurteilen' },
    { id: 'loesung-ueberpruefen', text: 'Eine Lösung auf ihre Eignung überprüfen' },
    { id: 'argumente-einschaetzen', text: 'Die Überzeugungskraft von Argumenten einschätzen' }
  ] },
  { id: 'erschaffen', level: 'VI', name: '(Er)Schaffen', description: 'Elemente zu einem neuen, zusammenhängenden Ganzen verbinden.', goals: [
    { id: 'loesung-entwerfen', text: 'Eine eigene Lösung entwerfen' },
    { id: 'vorgehen-planen', text: 'Ein Vorgehen selbstständig planen' },
    { id: 'produkt-konstruieren', text: 'Ein neues Produkt konstruieren' }
  ] }
]
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
