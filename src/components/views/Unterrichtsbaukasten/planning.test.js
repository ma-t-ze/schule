import test from 'node:test'
import assert from 'node:assert/strict'
import { initialForm, deriveSkills, suggestActivities, makePrompt, worksheetTemplate } from './planning.js'

test('goal determines practiced skills and a suitable main activity, evidence stays explicit', () => {
  const analysis = deriveSkills('Ich kann zwei Plakate vergleichen und ihre Wirkung beurteilen.', 'Begründung mit zwei sichtbaren Belegen')
  assert(analysis.some(skill => /Kriterien untersuchen/.test(skill)))
  assert(analysis.some(skill => /zwei sichtbaren Belegen/.test(skill)))
  assert.match(suggestActivities('Plakate vergleichen')[0], /vergleichen/)
  assert.match(suggestActivities('Ein Layout erstellen')[0], /Produkt.*erstellen/)
})
test('planning prompt contains only the learning goal, explicit requirements and total duration', () => {
  const form = { ...initialForm(), goal: 'Eine Blickführung gestalten.', requirements: 'Ohne Gruppenarbeit.', mainMinutes: 75, topic: '', evidence: 'Alter Lernnachweis', worksheet: true }
  const prompt = makePrompt(form)
  for (const fragment of ['Eine Blickführung gestalten.', 'Ohne Gruppenarbeit.', '90 Minuten']) assert(prompt.includes(fragment), fragment)
  for (const fragment of ['Teilfähigkeiten', 'Unterrichtsstruktur', 'Arbeitsblatt', 'Markdown', 'JSON', 'Alter Titel', 'Alter Lernnachweis', 'Partnerarbeit']) assert(!prompt.includes(fragment), fragment)
})

const { designPrompt, parseDesign, reviewPrompt, parseReview, perspectives } = await import('./studio.js')
test('checkbox selection adds only class names and entry categories without template instructions', () => {
  const prompt = designPrompt('Mein Lernziel', ['met', 'bpk'], ['informierend', 'problem'])
  for (const fragment of ['3BKGD1/1 MET', '1BFD1 BPK', 'Informierend', 'Problemorientiert']) assert(prompt.includes(fragment), fragment)
  for (const fragment of ['JSON', 'Schema:', 'Die Lernenden äußern Vermutungen', 'Ausgewählte Einstiegsvorlagen', 'Lernsituation']) assert(!prompt.includes(fragment), fragment)
  // Responses already in flight from the previous format can still be recovered.
  assert.deepEqual(parseDesign('```json\n{"entry":"Einstieg","main":"Hauptteil","end":"Schluss","notes":"Material"}\n```'), { entry: 'Einstieg', main: 'Hauptteil', end: 'Schluss', notes: 'Material' })
})
test('review uses the current edited lesson and only requested perspectives', () => {
  const form = { ...initialForm(), goal: 'Blickführung begründen', topic: 'Kontraste' }
  const prompt = reviewPrompt(form, ['tgg12'], { entry: 'Eigenen Impuls zeigen', main: 'Aktuell geänderte Tätigkeit', end: 'Eigenes Ergebnis erklären' }, 'Eigenes Material', ['students', 'psychology'])
  for (const fragment of ['Aktuell geänderte Tätigkeit', 'Eigenes Material', '3TGG1/2', 'Schülersicht', 'kognitive Belastung', 'Ändere den Entwurf nicht']) assert(prompt.includes(fragment), fragment)
  assert(reviewPrompt(form, ['tgg12'], 'Mein zusammenhängender bearbeiteter Entwurf', '', ['students']).includes('Mein zusammenhängender bearbeiteter Entwurf'))
  assert(!prompt.includes('Beobachtersicht'))
  assert(!perspectives.some(item => /Erzählmaus/.test(item.label)))
  assert.deepEqual(parseReview('{"students":"Problem mit Auftrag","psychology":"Zu viele neue Schritte","teacher":"Nicht angefordert"}', ['students', 'psychology']), { students: 'Problem mit Auftrag', psychology: 'Zu viele neue Schritte' })
  assert.throws(() => parseReview('{"students":"Problem mit Auftrag"}', ['students', 'psychology']))
})

const { distributeDuration, lessonDurations } = await import('./planning.js')
test('duration options preserve the exact total and leave positive phase times', () => {
  for (const total of lessonDurations) {
    const parts = distributeDuration(total, [10, 30, 5])
    assert.equal(parts.reduce((sum, value) => sum + value, 0), total)
    assert(parts.every(value => Number.isInteger(value) && value >= 1))
  }
  assert.deepEqual(distributeDuration(90, [10, 30, 5]), [20, 60, 10])
  assert.equal(distributeDuration(60, [10, 30, 5]), null)
  assert.equal(distributeDuration(45, [null, 0, 0]).reduce((a, b) => a + b, 0), 45)
})

test('Zienern is optional and decomposes the goal only when selected', () => {
  const form = { ...initialForm(), goal: 'Ein Layout gestalten.' }
  assert.equal(form.zienern, false)
  assert(!makePrompt(form).includes('Zienern:'))
  const selected = makePrompt({ ...form, zienern: true })
  assert(selected.includes('konkrete, beobachtbare Merkmale bzw. Teilfähigkeiten'))
  assert(selected.includes('woran ihr Erreichen erkennbar ist'))
})

const { basicPreparationFields, basicPreparationContext } = await import('./planning.js')
test('basic preparation supplies all four saved fields without adding empty entries', () => {
  assert.equal(basicPreparationFields.length, 4)
  assert.equal(basicPreparationContext(initialForm()), '')
  const form = { ...initialForm(), goal: 'Kontraste begründen', topic: 'Farbkontraste', priorKnowledge: 'Farbkreis', connections: 'Plakate aus dem Alltag', topicScope: 'Nur Hell-Dunkel-Kontrast' }
  const prompt = makePrompt(form)
  for (const field of basicPreparationFields) assert(prompt.includes(`${field.label}: ${form[field.key]}`))
})
