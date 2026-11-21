import { jsPDF } from 'jspdf'
import { checklists } from './checklists.js'
import { checklistKeyPoints } from './checklistKeyPoints.js'
import { checklistCustomExport } from './checklistCustomExport.js'
import { cognitiveGoalLevels } from '../Unterrichtsbaukasten/cognitiveGoals.js'

const filenames = {
  paedagogik: 'Ich_kann_Liste_Paedagogik_mit_Stichwortschemata.pdf',
  psychologie: 'Ich_kann_Liste_Paed_Psychologie_mit_Stichwortschemata.pdf'
}

// Export the complete data, independently of search results and collapsed panels.
export function createChecklistPdf(subject, fonts) {
  const checklist = checklists[subject]
  if (!checklist) throw new Error('Unbekannte Ich-kann-Liste.')
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
  pdf.addFileToVFS('Jost-Regular.ttf', fonts.regular)
  pdf.addFont('Jost-Regular.ttf', 'Jost', 'normal')
  pdf.addFileToVFS('Jost-Medium.ttf', fonts.bold)
  pdf.addFont('Jost-Medium.ttf', 'Jost', 'bold')
  pdf.setProperties({ title: `${checklist.title} – Stichwortschemata`, author: 'Matthias Heckel' })

  const left = 18, width = 174, top = 26, bottom = 276
  let y = top
  function nextPage() { pdf.addPage(); y = top }
  function lines(text, size = 10.5, weight = 'normal') {
    pdf.setFont('Jost', weight)
    pdf.setFontSize(size)
    return pdf.splitTextToSize(text, width)
  }
  function write(text, { size = 10.5, weight = 'normal', gap = 4, color = [30, 43, 36], href } = {}) {
    const wrapped = lines(text, size, weight)
    const leading = size * 0.3528 * 1.42
    for (const line of wrapped) {
      if (y + leading > bottom) nextPage()
      pdf.setFont('Jost', weight)
      pdf.setFontSize(size)
      pdf.setTextColor(...color)
      pdf.text(line, left, y)
      if (href) pdf.link(left, y - size * 0.3528, Math.min(width, pdf.getTextWidth(line)), leading, {
        url: new URL(href, 'https://visualizer.matthiasheckel.com').href
      })
      y += leading
    }
    y += gap
  }

  write(checklist.title, { size: 22, weight: 'bold', gap: 3, color: [0, 108, 65] })
  const total = checklist.groups.reduce((sum, group) => sum + group.items.length, 0)
  write(`${total} Ich-kann-Aussagen mit verfügbaren Stichwortschemata`, { size: 12, gap: 7 })
  write(checklist.intro, { size: 10 })
  write(checklist.notice || 'Die Aussagen stammen aus der Vorlage. Die Antworten sind eigene Lernhilfen. Ergänze deine tatsächlichen Unterrichtserfahrungen und Beispiele.', { size: 10 })
  if (checklist.reviewNote) write(checklist.reviewNote, { size: 9 })
  pdf.setFont('Jost', 'normal')
  pdf.setFontSize(10)
  if (y + 8 > bottom) nextPage()
  pdf.setTextColor(0, 108, 65)
  pdf.textWithLink('Originalquelle öffnen', left, y, {
    url: new URL(checklist.original, 'https://visualizer.matthiasheckel.com').href
  })
  y += 10
  if (checklist.scopeNotes?.length) {
    write('Eingrenzung laut Prüfungshinweisen', { size: 12, weight: 'bold' })
    for (const note of checklist.scopeNotes) write(`• ${note}`, { size: 10, gap: 2 })
  }

  function schema(item) {
    if (item.id === 'paed-methoden-4') return `Fragend-entwickelnder Unterricht
• Gesprächsziel transparent machen
• Offene, weite Einzelfragen stellen
• Denkzeit geben
• Viele beteiligen
• Suggestiv- und Kettenfragen vermeiden
  – Immer enger hintereinander fragen, um auf eine bestimmte Antwort zu kommen
  – Besser: weite Fragen stellen und verschiedene Antworten zulassen
Gedanke: Schüler denken nach und beschreiben ihre Erkenntnisse in Alltagssprache. Ich ordne diese ein und gebe anschließend die Fachbegriffe. Schüler sollen Begriffe nicht erraten.
• Qualifiziert rückmelden
• Ergebnisse am Ende sichern
Zusätzlich: Leitfrage formulieren. Das Gespräch soll lebendig bleiben.
Grundgedanke: Schüler denken nach und beschreiben ihre Erkenntnisse allgemein. Ich lenke das Gespräch und gebe die Fachbegriffe. Schüler sollen Begriffe nicht erraten.`
    if (item.id === 'paed-methoden-5') {
      const points = checklistKeyPoints[item.id]
      return ['Lehrervortrag', ...points.slice(0, 4).map(([key, text]) => `• ${key}: ${text}`), 'Lehrergespräch', ...points.slice(4).map(([key, text]) => `• ${key}: ${text}`)].join('\n')
    }
    const custom = checklistCustomExport[item.id]
    const points = custom || checklistKeyPoints[item.id]?.map(([key, text]) => `• ${key}: ${text}`).join('\n')
    if (!points) return 'Für diese Aussage ist noch kein Stichwortschema vorhanden.'
    if (item.id !== 'paed-planung-4') return points
    return `${points}\n\nTaxonomiestufen nach Anderson und Krathwohl:\n${cognitiveGoalLevels.map(level => `${level.level}. ${level.name}: ${level.goals.map(goal => goal.text).join(', ')}`).join('\n')}\nMerksatz: Die kognitiven Anforderungen steigen vom einfachen Wiedergeben von Wissen bis zum eigenständigen Entwickeln neuer Lösungen.\n\nEPA-Anforderungsbereiche:\n• AFB I – Reproduktion: Gelerntes Wissen wiedergeben; drei Gestaltungsprinzipien nennen.\n• AFB II – Reorganisation und Transfer: Wissen anwenden und Zusammenhänge untersuchen; ein Plakat hinsichtlich seiner Gestaltungsprinzipien analysieren.\n• AFB III – Reflexion und Problemlösung: Eigenständig Lösungen entwickeln und begründet beurteilen; ein Plakat anhand definierter Anforderungen bewerten und Verbesserungen entwickeln.`
  }
  function itemHeight(item, number) {
    const questionHeight = lines(`${number}. ${item.statement}`, 11, 'bold').length * 11 * 0.3528 * 1.42
    const schemaHeight = schema(item).split('\n').reduce((sum, line) => sum + lines(line || ' ', 10.5).length * 10.5 * 0.3528 * 1.42, 0)
    return { questionHeight, blockHeight: questionHeight + schemaHeight + 18 }
  }

  let number = 0
  for (const group of checklist.groups) {
    const headingHeight = lines(group.title, 15, 'bold').length * 7.6
    const firstHeight = itemHeight(group.items[0], number + 1).blockHeight
    if (y + headingHeight + firstHeight + 25 > bottom) nextPage()
    else y += 5
    write(group.title, { size: 15, weight: 'bold', gap: 4, color: [0, 108, 65] })
    if (group.sourcePage) write(`Prüfungshinweise D25, S. ${group.sourcePage}${group.topicId === 'inklusion' ? '–5' : ''}`, { size: 9, gap: 4 })
    if (subject === 'psychologie') write('Ich kann …', { size: 10, gap: 3 })
    for (const item of group.items) {
      const statement = `${++number}. ${item.statement}`
      const { questionHeight, blockHeight } = itemHeight(item, number)
      // Keep a question and answer together whenever they fit on one page.
      const required = blockHeight <= bottom - top ? blockHeight : questionHeight + 22
      if (y + required > bottom) nextPage()
      write(statement, { size: 11, weight: 'bold', gap: 2 })
      write('Stichwortschema', { size: 9, weight: 'bold', gap: 1, color: [83, 100, 90] })
      for (const line of schema(item).split('\n')) write(line || ' ', { gap: 1 })
      y += 5
    }
  }

  const pages = pdf.getNumberOfPages()
  for (let page = 1; page <= pages; page++) {
    pdf.setPage(page)
    pdf.setFont('Jost', 'normal')
    pdf.setFontSize(9)
    pdf.setTextColor(83, 100, 90)
    pdf.text(checklist.title, left, 14)
    pdf.setDrawColor(205, 216, 208)
    pdf.line(left, 18, left + width, 18)
    pdf.text('Ich-kann-Liste · Stichwortschemata', left, 287)
    pdf.text(`${page} / ${pages}`, left + width, 287, { align: 'right' })
  }
  return pdf
}

let fontPromise
async function loadFonts() {
  const [{ default: regular }, { default: bold }] = await Promise.all([
    import('../../../assets/fonts/Jost-Regular.ttf?url'),
    import('../../../assets/fonts/Jost-Medium.ttf?url')
  ])
  async function base64(url) {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Die PDF-Schrift konnte nicht geladen werden.')
    let binary = ''
    for (const byte of new Uint8Array(await response.arrayBuffer())) binary += String.fromCharCode(byte)
    return btoa(binary)
  }
  const [regularData, boldData] = await Promise.all([base64(regular), base64(bold)])
  return { regular: regularData, bold: boldData }
}

export async function downloadChecklistPdf(subject) {
  if (!fontPromise) fontPromise = loadFonts().catch(error => { fontPromise = undefined; throw error })
  const pdf = createChecklistPdf(subject, await fontPromise)
  pdf.save(filenames[subject])
}
