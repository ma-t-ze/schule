export function exampleDrafts() {
  return [
    {
      id: 'example-kontraste', title: 'Kontraste und Blickführung', isExample: true,
      classIds: ['tgg12'], entryIds: ['problem'], selectedTheoryIds: [],
      form: { goal: 'Die Wirkung von Kontrasten in zwei Plakaten vergleichen und begründen.', requirements: 'Zwei Plakatbeispiele, Arbeit zu zweit.', entryMinutes: 10, mainMinutes: 30, endMinutes: 5 },
      text: '# Kontraste und Blickführung\n\nBeispielentwurf als Platzhalter · 3TGG1/2 · 45 Minuten\n\nLernziel: Die Lernenden vergleichen zwei Plakate und begründen deren Blickführung anhand sichtbarer Kontraste.\n\nEinstieg: Zwei unterschiedlich gestaltete Plakate zeigen. Die Klasse beschreibt, wohin der Blick zuerst fällt.\n\nErarbeitung: In Partnerarbeit Kontraste markieren und ihre Wirkung mit konkreten Belegen erläutern. Anschließend eine kleine Layoutvariante überarbeiten.\n\nSicherung: Die Ergebnisse vergleichen und die Anfangsfrage mit den erarbeiteten Kriterien beantworten.'
    },
    {
      id: 'example-retusche', title: 'Bildretusche mit dem Kopierstempel', isExample: true,
      classIds: ['bpk'], entryIds: ['situation'], selectedTheoryIds: [],
      form: { goal: 'Eine kleine Bildstörung mit dem Kopierstempel entfernen und das Vorgehen erklären.', requirements: 'Photoshop, Bilddatei und kurze Demonstration.', entryMinutes: 20, mainMinutes: 60, endMinutes: 10 },
      text: '# Bildretusche mit dem Kopierstempel\n\nBeispielentwurf als Platzhalter · 1BFD1 BPK · 90 Minuten\n\nLernziel: Die Lernenden entfernen eine Bildstörung mit dem Kopierstempel und erklären die Wahl einer passenden Aufnahmequelle.\n\nEinstieg: Einen einfachen Retuscheauftrag mit Vorher-Bild vorstellen. Die Klasse benennt die störende Stelle und Merkmale einer unauffälligen Bearbeitung.\n\nErarbeitung: Das Werkzeug kurz demonstrieren, anschließend selbstständig an einer Bildkopie arbeiten. Zwischenergebnisse auf Wiederholungen und sichtbare Übergänge prüfen und verbessern.\n\nSicherung: Vorher und Nachher vergleichen und eine gelungene Werkzeugentscheidung erläutern.'
    }
  ]
}
export function draftTitle(text, goal = '') {
  const heading = text.match(/^#{1,2}\s+(.+)$/m)?.[1]
  return (heading || goal.trim() || 'Unterrichtsentwurf').slice(0, 100)
}
export function restoreHistory(value) {
  const examples = exampleDrafts()
  if (!Array.isArray(value)) return examples
  const valid = value.filter(item => item && typeof item.id === 'string' && typeof item.text === 'string' && item.text.trim() && typeof item.title === 'string')
  const seen = new Set()
  const unique = valid.filter(item => !seen.has(item.id) && seen.add(item.id))
  return unique
}
