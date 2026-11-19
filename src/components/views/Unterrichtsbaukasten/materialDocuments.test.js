import test from 'node:test'
import assert from 'node:assert/strict'
import { materialDocumentContext, restoreMaterialDocuments, readMaterialDocument } from './materialDocuments.js'
import { initialForm, lessonDesignContext, makePrompt } from './planning.js'

test('saved arrangement, text and social form enter the lesson prompt', () => {
  const form = { ...initialForm(), goal: 'Kontraste begründen', arrangement: 'Fallstudie', mediaMaterials: 'Beamer und Plakatbeispiele', socialForm: 'gruppenarbeit' }
  const prompt = makePrompt(form)
  for (const phrase of ['Lehr-Lern-Arrangement: Fallstudie', 'Medien/Material: Beamer und Plakatbeispiele', 'Sozialform: Gruppenarbeit']) assert(prompt.includes(phrase))
  assert.equal(lessonDesignContext(initialForm()), '')
})
test('document text is selected, restored and attributed without invalid saved files', async () => {
  const text = await readMaterialDocument({ name: 'Plakate.md', size: 50, text: async () => 'Zwei Plakatbeispiele vergleichen.' })
  const documents = restoreMaterialDocuments([{ id: 'one', name: 'Plakate.md', text }, { id: 'two', name: 'Nicht verwenden.txt', text: 'Nicht ausgewählt', selected: false }, { id: 'broken', name: 'leer.txt', text: '' }])
  assert.equal(documents.length, 2)
  const context = materialDocumentContext(documents)
  assert(context.includes('Plakate.md'))
  assert(context.includes(text))
  assert(!context.includes('Nicht ausgewählt'))
  assert.equal(materialDocumentContext([]), '')
  await assert.rejects(readMaterialDocument({ name: 'scan.txt', size: 10, text: async () => ' ' }), /Kein lesbarer Text/)
  await assert.rejects(readMaterialDocument({ name: 'datei.exe', size: 10 }), /Bitte PDF/)
})
