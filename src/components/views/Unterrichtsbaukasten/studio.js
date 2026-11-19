import { classes } from './planning.js'

export const entryTemplates = [
  { id: 'informierend', label: 'Informierend', title: 'Informierender Einstieg', description: 'Thema, Ziel, Nutzen und Ablauf der Stunde erklären.', text: '„Heute lernen wir, … Das brauchen wir, um … Am Ende zeigt ihr das, indem ihr …“ Anschließend ein kurzes Beispiel zeigen und Vorwissen aktivieren.' },
  { id: 'problem', label: 'Problemorientiert', title: 'Problemorientierter Einstieg', description: 'Ein Problem vorstellen, das Interesse weckt und zu einer Leitfrage führt.', text: 'Zwei gegensätzliche Beispiele zeigen: „Warum funktioniert das eine besser als das andere?“ Die Lernenden äußern Vermutungen. Die Frage bleibt bis zum Schluss sichtbar.' },
  { id: 'situation', label: 'Lernsituation', title: 'Einstieg mit Lernsituation', description: 'Eine lebensnahe Situation mit einer konkreten Aufgabe vorstellen.', text: '„Ihr übernehmt die Rolle von … Euer Auftrag lautet … Für die Zielgruppe … soll ein Ergebnis entstehen, das … erfüllt.“ Vorwissen und offene Fragen zum Auftrag sammeln.' }
]
export const perspectives = [
  { id: 'students', label: 'Schülersicht', question: 'Was könnte aus Schülersicht problematisch sein?', criteria: 'Verständlichkeit der Aufträge, Vorwissen, Beteiligung, Über- oder Unterforderung und mögliche Hürden beim selbstständigen Arbeiten.' },
  { id: 'observer', label: 'Beobachtersicht', question: 'Was könnte aus Beobachtersicht problematisch sein?', criteria: 'Nachvollziehbarkeit des roten Fadens, Klarheit der Phasen und Übergänge sowie Sichtbarkeit der Lernaktivität für eine außenstehende Person.' },
  { id: 'teacher', label: 'Lehrersicht', question: 'Was könnte aus Lehrersicht problematisch sein?', criteria: 'Vorbereitungsaufwand, realistische Zeitplanung, Material und Technik, Klassenführung und Handlungsalternativen bei Schwierigkeiten.' },
  { id: 'didactics', label: 'Didaktische Sicht', question: 'Was könnte aus didaktischer Sicht problematisch sein?', criteria: 'Passung von Lernziel, Inhalt, Methode und Lernnachweis, fachliche Richtigkeit, didaktische Reduktion, Differenzierung und Transfer.' },
  { id: 'psychology', label: 'Lernpsychologische Sicht', question: 'Was könnte aus lernpsychologischer Sicht problematisch sein?', criteria: 'Aktivierung von Vorwissen, kognitive Belastung, Motivation, Übung, Feedback und nachhaltige Sicherung.' },
  { id: 'observation', label: 'Unterrichtsbeobachtung', question: 'Was könnte aus Sicht der Unterrichtsbeobachtung problematisch sein?', criteria: 'Welche konkreten beobachtbaren Handlungen belegen Lernen? Welche Beobachtungskriterien fehlen? Trenne Beschreibung, Interpretation und Bewertung.' }
]
export const phaseLabels = { entry: 'Einstieg', main: 'Hauptteil', end: 'Schluss' }

export function selectionContext(classIds, entryIds) {
  const chosenClasses = classes.filter(item => classIds.includes(item.id))
  const chosenEntries = entryTemplates.filter(item => entryIds.includes(item.id))
  return [
    chosenClasses.length ? `Klasse: ${chosenClasses.map(item => item.label).join(', ')}` : '',
    chosenEntries.length ? `Einstieg: ${chosenEntries.map(item => item.label).join(', ')}` : ''
  ].filter(Boolean).join('\n')
}
export function designPrompt(base, classIds, entryIds) {
  return [base, selectionContext(classIds, entryIds)].filter(Boolean).join('\n\n')
}
function parseObject(raw) {
  const clean = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')
  const start = clean.indexOf('{')
  const end = clean.lastIndexOf('}')
  if (start < 0 || end < start) throw new Error('Die Antwort enthält kein gültiges JSON-Objekt.')
  const data = JSON.parse(clean.slice(start, end + 1))
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Die Antwort hat ein unerwartetes Format.')
  return data
}
export function parseDesign(raw) {
  const data = parseObject(raw)
  for (const key of ['entry', 'main', 'end']) {
    if (typeof data[key] !== 'string' || !data[key].trim()) throw new Error(`Der Vorschlag für ${phaseLabels[key]} fehlt.`)
  }
  if (data.notes !== undefined && typeof data.notes !== 'string') throw new Error('Die ergänzenden Materialien haben ein unerwartetes Format.')
  return { entry: data.entry, main: data.main, end: data.end, notes: data.notes || '' }
}
export function lessonText(form, phaseTexts, notes = '') {
  return `# ${form.topic.trim() || 'Stundenentwurf'}\n\nLernziel: ${form.goal}\nLernnachweis: ${form.evidence}\nVorgaben: ${form.requirements?.trim() || 'Keine.'}\n\n${Object.entries(phaseLabels).map(([id, label]) => `## ${label}\n\n${phaseTexts[id] || ''}`).join('\n\n')}\n\n${notes}`
}
export function reviewPrompt(form, classIds, phaseTexts, notes, selectedPerspectives) {
  const chosen = perspectives.filter(item => selectedPerspectives.includes(item.id))
  return `Prüfe diesen konkreten Unterrichtsentwurf auf Deutsch aus den ausgewählten Sichtweisen. Ändere den Entwurf nicht. Beziehe dich auf die tatsächlichen Formulierungen und Tätigkeiten, statt allgemeine Checklisten wiederzugeben. Benenne je Sichtweise bis zu drei priorisierte mögliche Probleme mit konkretem Bezug zur Phase, ihrer möglichen Folge und einer umsetzbaren Verbesserung. Unterscheide belegbare Schwächen und Annahmen; erfinde keine Eigenschaften der Klasse. Wenn kein klares Problem erkennbar ist, sage das.\n\nKlassen: ${classes.filter(item => classIds.includes(item.id)).map(item => item.label).join(', ')}\nUnterrichtsdauer: ${Number(form.entryMinutes) + Number(form.mainMinutes) + Number(form.endMinutes)} Minuten.\n\n${typeof phaseTexts === 'string' ? phaseTexts : lessonText(form, phaseTexts, notes)}\n\nAusgewählte Sichtweisen:\n${chosen.map(item => `${item.id}: ${item.question} Prüfkriterien: ${item.criteria}`).join('\n')}\n\nAntworte ausschließlich als gültiges JSON-Objekt, ohne umgebenden Codeblock. Verwende genau diese Schlüssel: ${chosen.map(item => `"${item.id}"`).join(', ')}. Jeder Wert ist eine Zeichenkette mit der konkreten Prüfung aus dieser Sichtweise. Markdown innerhalb der Zeichenketten ist erlaubt. Keine Projektdateien verändern.`
}
export function parseReview(raw, selectedIds) {
  const data = parseObject(raw)
  const result = {}
  for (const id of selectedIds) {
    if (!perspectives.some(item => item.id === id)) continue
    if (typeof data[id] !== 'string' || !data[id].trim()) throw new Error('Die Prüfung enthält nicht alle ausgewählten Sichtweisen.')
    result[id] = data[id]
  }
  return result
}
