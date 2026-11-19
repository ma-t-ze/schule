const columns = [
  { id: 'aufmerksamkeit', name: 'Aufmerksamkeit', terms: ['aufmerksam werden', 'auswählen', 'beachten', 'bedenken', 'beherzigen', 'bemerken', 'berücksichtigen', 'bewusst werden', 'entdecken', 'erfahren', 'feststellen', 'gewahr werden', 'in Rechnung stellen', 'innewerden', 'wahrnehmen'] },
  { id: 'beantwortung', name: 'Beantwortung', terms: ['angesprochen sein durch …', 'Anteil nehmen an …', 'befolgen', 'bereit sein', 'einwilligen', 'Freude haben', 'Gefallen finden an …', 'interessiert sein an …', 'sich beteiligen', 'sich richten nach …', 'teilnehmen'] },
  { id: 'werten', name: 'Werten', terms: ['akzeptieren', 'anerkennen', 'annehmen', 'befolgen', 'bevorzugen', 'billigen', 'einverstanden sein', 'gelten lassen', 'gutheißen', 'praktizieren', 'sich finden', 'sich einsetzen für', 'sich verpflichtet fühlen', 'tolerieren', 'überzeugt sein', 'zulassen'] },
  { id: 'wertzuordnung', name: 'Wertzuordnung', terms: ['abwägen', 'Beurteilungsmaßstäbe finden', 'Beziehungen herstellen', 'einstufen', 'Prioritäten entwickeln', 'prüfen', 'richtig einschätzen', 'strukturieren', 'vergleichen', 'Werte einordnen', 'Werte gegeneinander abwägen', 'Werte integrieren', 'Werthaltungen entwickeln', 'würdigen'] },
  { id: 'festlegung', name: 'Festlegung', terms: ['bestimmt sein durch …', 'eine Lebenseinstellung finden', 'eine Weltanschauung entwickeln', 'eine Werthierarchie ausbilden', 'Einstellungen ändern entsprechend …', 'Grundsätze haben', 'Konsequenzen ziehen aus …', 'sein Verhalten ausrichten nach …', 'überzeugt sein von …', 'Urteile fällen entsprechend …'] }
]
export const affectiveGoalColumns = columns.map(column => ({ ...column, goals: column.terms.map((text, index) => ({ id: `${column.id}-${index + 1}`, text, category: column.name })) }))
export const affectiveGoals = affectiveGoalColumns.flatMap(column => column.goals)
export const affectiveGoalRows = Array.from({ length: Math.max(...columns.map(column => column.terms.length)) }, (_, index) => affectiveGoalColumns.map(column => column.goals[index] || null))
export function validAffectiveGoalIds(ids) {
  return Array.isArray(ids) ? [...new Set(ids.filter(id => affectiveGoals.some(goal => goal.id === id)))] : []
}
export function selectedAffectiveGoals(ids) {
  const valid = validAffectiveGoalIds(ids)
  return affectiveGoals.filter(goal => valid.includes(goal.id))
}
export function affectiveGoalContext(ids) {
  const goals = selectedAffectiveGoals(ids)
  if (!goals.length) return ''
  return `\n\nAusgewählte affektive Lernziele:\n${goals.map(goal => `- ${goal.category}: ${goal.text}`).join('\n')}\nBeziehe diese ausgewählten Lernziele auf das Thema und plane passende Lerngelegenheiten sowie beobachtbare Hinweise auf ihre Entwicklung.`
}
