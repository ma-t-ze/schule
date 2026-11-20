export const classes = [
  { id: 'met', label: '3BKGD1/1 MET', subject: 'Medientechnik' },
  { id: 'grd', label: '3BKGD1_1_GRD', subject: 'Grundlagen der Gestaltung' },
  { id: 'tgg12', label: '3TGG1/2', subject: 'Gestaltungs- und Medientechnik' },
  { id: 'tgg2', label: '3TGG2', subject: 'Gestaltungs- und Medientechnik' },
  { id: 'bpk', label: '1BFD1 BPK', subject: 'Berufspraktische Kompetenz' }
]
export const entries = [
  { value: 'informierend', label: 'Informierender Einstieg' },
  { value: 'problem', label: 'Problemorientierter Aufhänger' },
  { value: 'situation', label: 'Lernsituation' }
]
export const endings = [
  { value: 'return', label: 'Zum Einstieg zurückkehren' },
  { value: 'exit', label: 'Lernziel mit einem Exit-Ticket prüfen' },
  { value: 'transfer', label: 'Auf ein neues Beispiel übertragen' }
]
export const templates = [
  { value: 'auto', label: 'Passende vorhandene Vorlage' },
  { value: 'tgg', label: 'Designvorlage A4 · 3TGG1/2' },
  { value: 'bpk', label: 'Designvorlage A4 · 1BFD1 BPK' },
  { value: 'custom', label: 'Eigene Vorlagenhinweise' }
]
export function deriveSkills(goal, evidence) {
  if (!goal.trim()) return []
  const text = goal.toLowerCase()
  const skills = ['Die nötigen Fachbegriffe und Merkmale zum Lernziel erkennen und benennen.']
  if (/analys|vergleich|unterscheid|beurteil|bewert/.test(text)) {
    skills.push('Beispiele anhand passender Kriterien untersuchen und Unterschiede festhalten.')
    skills.push('Eine begründete Einschätzung mit Belegen aus den Beispielen formulieren.')
  } else if (/gestalt|erstell|entwerf|layout|zeichn|anwend|bearbeit|retusch|bedien/.test(text)) {
    skills.push('Das Vorgehen in sinnvolle Arbeitsschritte gliedern und die benötigten Werkzeuge auswählen.')
    skills.push('Die Arbeitsschritte selbstständig durchführen und das Ergebnis anhand der Kriterien überarbeiten.')
  } else {
    skills.push('Die Zusammenhänge an einem konkreten Beispiel mit eigenen Worten erklären.')
    skills.push('Das Erarbeitete selbstständig auf ein weiteres Beispiel anwenden.')
  }
  skills.push(evidence.trim()
    ? `Das eigene Ergebnis mit dem vereinbarten Lernnachweis prüfen: ${evidence.trim()}`
    : 'Das Ergebnis erläutern und prüfen, ob das Lernziel erreicht wurde.')
  return skills
}
export function suggestActivities(goal) {
  if (/analys|vergleich|unterscheid|beurteil|bewert/i.test(goal)) return [
    'Zwei Beispiele in Partnerarbeit anhand selbst formulierter Kriterien vergleichen. Unterschiede markieren, die Wirkung begründen und die Ergebnisse anschließend gemeinsam sichern.',
    'Eine Fallanalyse in Kleingruppen durchführen. Jede Gruppe begründet ihre Einschätzung mit konkreten Belegen und gleicht sie mit einer anderen Gruppe ab.',
    'Beispiele ordnen und die Zuordnung begründen. Anschließend die Kriterien an einem unbekannten Beispiel überprüfen.'
  ]
  if (/gestalt|erstell|entwerf|layout|zeichn|anwend|bearbeit|retusch|bedien/i.test(goal)) return [
    'Ein eigenes Produkt in Einzelarbeit schrittweise erstellen. Die Teilfähigkeiten gezielt üben, das Zwischenergebnis mit einer Partnerperson anhand der Kriterien prüfen und anschließend überarbeiten.',
    'Eine kurze Demonstration nachvollziehen und das Vorgehen anschließend selbstständig auf eine veränderte Aufgabe übertragen. Das Ergebnis anhand der Kriterien prüfen.',
    'Zwei Lösungsvarianten in Partnerarbeit erproben, ihre Wirkung vergleichen und die begründete Auswahl zu einem fertigen Ergebnis ausarbeiten.'
  ]
  return [
    'Ein konkretes Beispiel in Partnerarbeit untersuchen, den Zusammenhang mit eigenen Worten erklären und das Erarbeitete anschließend an einem neuen Beispiel selbstständig anwenden.',
    'In Kleingruppen eine verständliche Erklärung mit Beispiel erarbeiten. Die Erklärungen gegenseitig prüfen und offene Fragen klären.',
    'An Übungsstationen die Teilfähigkeiten erproben und zum Abschluss eine eigenständige Aufgabe als Lernnachweis bearbeiten.'
  ]
}
export function worksheetTemplate(form) {
  if (!form.worksheet) return null
  const selected = form.template === 'auto' ? ({ tgg12: 'tgg', bpk: 'bpk' }[form.classId] || 'custom') : form.template
  if (selected === 'tgg') return {
    title: 'Designvorlage A4 · 3TGG1/2', href: '/designvorlagen/a4',
    source: 'src/components/views/Designvorlagen/DesignvorlageA4.vue',
    instructions: 'DIN A4 Hochformat, Jost, CHS-Logo und vorhandene Kopf- und Fußzeile. Sozialform und Zeitvorgabe aufnehmen.'
  }
  if (selected === 'bpk') return {
    title: 'Designvorlage A4 · 1BFD1 BPK', href: '/designvorlagen/a4/1bfd1-bpk',
    source: 'src/components/views/Designvorlagen/DesignvorlageA4BPK.vue',
    instructions: 'DIN A4 Hochformat, Jost, CHS-Logo und vorhandene Kopf- und Fußzeile für Berufspraktische Kompetenz.'
  }
  return { title: 'Arbeitsblatt', instructions: form.templateNotes.trim() || 'DIN A4, gut lesbare Aufgaben und ausreichend Platz zum Bearbeiten.' }
}
export const basicPreparationFields = [
  { key: 'topic', label: 'Thema' },
  { key: 'priorKnowledge', label: 'Voraussetzungen (Vorwissen)' },
  { key: 'connections', label: 'Anknüpfungspunkte' },
  { key: 'topicScope', label: 'Thema eingrenzen' }
]
export function basicPreparationContext(form) {
  return basicPreparationFields.filter(field => typeof form[field.key] === 'string' && form[field.key].trim())
    .map(field => `${field.label}: ${form[field.key].trim()}`).join('\n')
}
export const learningArrangements = [
  'Direkte Instruktion', 'Lernen durch Lehren', 'Selbstorganisiertes Lernen',
  'Projektunterricht', 'Planspiel', 'Fallstudie', 'Lernen aus Lösungsbeispielen',
  'Angeleitetes Experimentieren'
]
export const socialForms = [
  { id: 'einzelarbeit', label: 'Einzelarbeit' },
  { id: 'gruppenarbeit', label: 'Gruppenarbeit' }
]
export function lessonDesignContext(form) {
  const parts = []
  if (form.arrangement?.trim()) parts.push(`Lehr-Lern-Arrangement: ${form.arrangement.trim()}`)
  if (form.mediaMaterials?.trim()) parts.push(`Medien/Material: ${form.mediaMaterials.trim()}`)
  const socialForm = socialForms.find(item => item.id === form.socialForm)
  if (socialForm) parts.push(`Sozialform: ${socialForm.label}`)
  return parts.join('\n')
}
export function makePrompt(form) {
  return `Entwirf einen Unterricht auf Deutsch mit folgenden Vorgaben.

${basicPreparationContext(form) ? basicPreparationContext(form) + '\n' : ''}Lernziel: ${form.goal.trim() || '[Lernziel ergänzen]'}
${form.zienern ? 'Zienern: Leite aus dem übergeordneten Lernziel ab, welche konkreten Teilfähigkeiten jemand dafür benötigt. Formuliere jeden Punkt als kurzen Satz nach dem Muster „Jemand, der … kann, muss …“. Zerlege unterschiedliche Anforderungen des Hauptziels getrennt. Beispiel: „Jemand, der vier Kontrasttypen nennen kann, muss ihre Bezeichnungen kennen und aus dem Gedächtnis abrufen können.“ Beispiel: „Jemand, der vier Kontrasttypen auf die Gestaltung von Mode anwenden kann, muss die Wirkung der einzelnen Kontraste erklären und passende Farben für eine beabsichtigte Wirkung auswählen können.“ Die Beispiele zeigen nur die Form; passe den Inhalt an das aktuelle Lernziel an. Füge direkt unterhalb der Storymapping-Tabelle zuerst die Überschrift „Was sollen die SuS am Ende können?“ und darunter das vollständige übergeordnete Lernziel aus dem Lernzielfeld ein. Erhalte alle Anforderungen dieses Hauptziels; ersetze es nicht durch Teilfähigkeiten. Danach folgen unter der Überschrift „Zienern: Erforderliche Teilfähigkeiten“ die Sätze. Beschreibe die benötigten Fähigkeiten, keine Aufgaben oder Lernnachweise.\n' : ''}${form.requirements?.trim() ? `Vorgaben: ${form.requirements.trim()}\n` : ''}${lessonDesignContext(form) ? lessonDesignContext(form) + '\n' : ''}Unterrichtsdauer: ${Number(form.entryMinutes) + Number(form.mainMinutes) + Number(form.endMinutes)} Minuten.`
}
export const initialForm = () => ({
  classId: '', topic: '', priorKnowledge: '', connections: '', topicScope: '', goal: '', evidence: '', requirements: '', entry: 'problem', impulse: '',
  entryMinutes: 10, mainMinutes: 30, endMinutes: 5, ending: 'return', worksheet: false,
  template: 'auto', templateNotes: '', zienern: false, arrangement: '', mediaMaterials: '', socialForm: ''
})

export const lessonDurations = [45, 90, 135, 180]
export function distributeDuration(total, current) {
  if (!lessonDurations.includes(total)) return null
  const weights = current.map(value => Number.isFinite(value) && value > 0 ? value : 1)
  const sum = weights.reduce((a, b) => a + b, 0)
  const parts = weights.map(value => Math.max(1, Math.floor(total * value / sum)))
  let difference = total - parts.reduce((a, b) => a + b, 0)
  const order = [1, 0, 2]
  while (difference !== 0) {
    for (const index of order) {
      if (!difference) break
      if (difference > 0) { parts[index]++; difference-- }
      else if (parts[index] > 1) { parts[index]--; difference++ }
    }
  }
  return parts
}
