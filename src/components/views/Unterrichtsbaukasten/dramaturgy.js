import { learningTheoryDocuments } from './learningTheories.js'

const tensionCurve = learningTheoryDocuments.find(item => item.id === 'spannungskurve')
const descriptions = [
  { pattern: /^einleitung$/i, title: 'Einleitung', headings: ['1. Exposition:'] },
  { pattern: /^hauptteil$/i, title: 'Hauptteil', headings: ['2. Steigende Handlung:', '3. Höhepunkt'] },
  { pattern: /^schluss$/i, title: 'Schluss', headings: ['5. Katastrophe'] },
  { pattern: /^exposition(?:\s*:\s*der einstieg(?:\s*\(ca\.\s*5[–-]10 minuten\))?)?$/i, title: 'Exposition', headings: ['1. Exposition:'] },
  { pattern: /^steigende handlung(?:\s*(?:\(erarbeitung\)|:\s*erarbeitung))?$/i, title: 'Steigende Handlung (Erarbeitung)', headings: ['2. Steigende Handlung:'] },
  { pattern: /^höhepunkt(?:\s*:\s*sicherung\s*&\s*erkenntnisgewinn)?$/i, title: 'Höhepunkt', headings: ['3. Höhepunkt'] },
  { pattern: /^(?:katastrophe(?:\s*\/\s*lösung)?|lösung\s*:\s*abschluss\s*&\s*ausblick)$/i, title: 'Katastrophe / Lösung', headings: ['5. Katastrophe'] }
]
export function dramaturgyInfo(value) {
  const label = String(value || '').replace(/\*\*/g, '').replace(/^\s*\d+[.)]\s*/, '').trim()
  const match = descriptions.find(item => item.pattern.test(label))
  if (!match) return null
  return { title: match.title, sections: match.headings.map(heading => tensionCurve.sections.find(section => section.heading?.startsWith(heading))).filter(Boolean) }
}

export function displayDramaturgyTask(value) {
  const text = String(value || '')
  const plain = text.replace(/\*\*/g, '').trim()
  if (/^exposition(?:\s*:\s*der einstieg(?:\s*\(ca\.\s*5[–-]10 minuten\))?)?$/i.test(plain)) return 'Exposition: Der Einstieg'
  if (/^steigende handlung(?:\s*(?:\(erarbeitung\)|:\s*erarbeitung))?$/i.test(plain)) return 'Steigende Handlung: Erarbeitung'
  if (/^(?:katastrophe(?:\s*\/\s*lösung)?|lösung\s*:\s*abschluss\s*&\s*ausblick)$/i.test(plain)) return 'Lösung: Abschluss & Ausblick'
  if (/^höhepunkt$/i.test(plain)) return 'Höhepunkt: Sicherung & Erkenntnisgewinn'
  return text
}

const storyExamples = {
  Exposition: 'Eine Katze entdeckt eine Maus im Garten und schleicht sich an.',
  'Steigende Handlung (Erarbeitung)': 'Die Maus flieht und gerät in ein Netz. Die Katze kommt näher.',
  'Höhepunkt': 'Die Katze zögert – dann befreit sie die Maus aus dem Netz.',
  'Katastrophe / Lösung': 'Die Maus läuft davon. Seitdem teilen sich beide den Garten.'
}
export function dramaturgyExample(value) {
  return storyExamples[dramaturgyInfo(value)?.title] || ''
}
