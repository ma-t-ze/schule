import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { outputDocuments, exactTemplateInstruction, outputDocumentContext, validOutputDocumentIds, storyMappingTemplate, storyMappingInstruction, ensureStoryMappingPrompt } from './outputDocuments.js'

test('the required template instruction is verbatim and always included', () => {
  assert.equal(exactTemplateInstruction, 'Bitte exakt an die Vorlage halten. Informationen die nicht existieren einfach aussparen.')
  assert(outputDocumentContext([]).includes(exactTemplateInstruction))
  assert(!outputDocumentContext([]).includes('Originalvorlage'))
})
test('only selected output templates enter the prompt', () => {
  assert.deepEqual(validOutputDocumentIds(['langform', 'unknown', 'langform']), ['langform'])
  const prompt = outputDocumentContext(['langform'])
  assert(prompt.includes('Langform'))
  assert(prompt.includes('public/material/unterrichtsbaukasten/ausgabedokumente/langform.pdf'))
  assert(prompt.includes('public/material/unterrichtsbaukasten/ausgabedokumente/langform.txt'))
  assert(!prompt.includes('verlaufsplan.pdf'))
  assert(!prompt.includes('arbeitsauftrag.pdf'))
  assert(prompt.includes('Angaben und Beispielinhalte daraus sind keine Fakten'))
})
test('all three linked PDF templates and readable source texts exist', async () => {
  const root = new URL('../../../../', import.meta.url)
  assert.deepEqual(outputDocuments.map(item => item.name), ['Verlaufsplan', 'Langform', 'Arbeitsauftrag'])
  for (const item of outputDocuments) {
    const pdf = await readFile(new URL(`public${item.href}`, root))
    assert.equal(pdf.subarray(0, 4).toString(), '%PDF')
    const text = await readFile(new URL(item.source, root), 'utf8')
    assert(text.length > 500, item.name)
    assert(text.includes('PDF-Seite 1'), item.name)
  }
})

test('storymapping and subtask links are mandatory even without additional output documents', async () => {
  const context = outputDocumentContext([])
  assert(context.includes(storyMappingInstruction))
  for (const phrase of ['Einleitung, Hauptteil und Schluss', 'Tasks', 'Subtasks', 'direkt in der jeweils passenden Subtask', 'Erfinde keine Dokumente oder URLs']) assert(context.includes(phrase), phrase)
  assert(ensureStoryMappingPrompt('Manueller Prompt').includes(storyMappingInstruction))
  assert.equal(ensureStoryMappingPrompt(context), context)
  const png = await readFile(new URL(`../../../../public${storyMappingTemplate.href}`, import.meta.url))
  assert.equal(png.subarray(1, 4).toString(), 'PNG')
  assert(outputDocumentContext(['arbeitsauftrag']).includes('[Arbeitsauftrag](/material/unterrichtsbaukasten/ausgabedokumente/arbeitsauftrag.pdf)'))
})

test('review checks the storymapping format without replacing the review response format', () => {
  const review = outputDocumentContext(['verlaufsplan'], { review: true })
  assert(review.includes('Prüfkriterium:'))
  assert(review.includes('Ändere den Entwurf nicht.'))
  assert(!review.includes('Verbindliches Ausgabeformat: Storymapping.'))
})

test('the first generation is explicitly a short student-story architecture rather than detailed lesson text', () => {
  for (const phrase of ['grober Entwurf der Unterrichtsarchitektur', 'genau einen kurzen Satz', 'Als Schüler will ich …', 'Feinplanung folgt erst auf ausdrückliche Anforderung', 'höchstens zwei Tasks pro Phase', 'keine zusätzlichen Begründungs- oder Detailzeilen']) assert(storyMappingInstruction.includes(phrase), phrase)
  const context = outputDocumentContext(['langform'])
  assert(context.includes('noch nicht vollständig aus'))
  assert(!context.includes('Zusätzliche Begründungen oder Merkmale dürfen'))
})
