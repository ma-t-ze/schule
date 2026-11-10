import { jsPDF } from 'jspdf'
import { checklists } from './checklists.js'

const filenames = {
  paedagogik: 'Ich_kann_Liste_Paedagogik_mit_Antworten.pdf',
  psychologie: 'Ich_kann_Liste_Paed_Psychologie_mit_Antworten.pdf'
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
  pdf.setProperties({ title: `${checklist.title} – Fragen und Antworten`, author: 'Matthias Heckel' })

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
  write(`${total} Ich-kann-Aussagen mit vollständigen Musterantworten`, { size: 12, gap: 7 })
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

  function itemDetails(item) {
    return [
      ...(item.basisLabel ? [{ text: item.basisLabel }] : []),
      ...(item.sourceNote ? [{ text: `Hinweis zur Quelle: ${item.sourceNote}` }] : []),
      ...(item.sources || []).map(source => ({ text: `Fundstelle: ${source.label}`, href: source.href }))
    ]
  }
  function itemHeight(item, number) {
    const questionHeight = lines(`${number}. ${item.statement}`, 11, 'bold').length * 11 * 0.3528 * 1.42
    const answerHeight = lines(item.answer).length * 10.5 * 0.3528 * 1.42
    const detailsHeight = itemDetails(item).reduce((sum, detail) => sum + lines(detail.text, 9).length * 9 * 0.3528 * 1.42 + 2, 0)
    return { questionHeight, blockHeight: questionHeight + answerHeight + detailsHeight + 23 }
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
      const details = itemDetails(item)
      // Keep a question and answer together whenever they fit on one page.
      const required = blockHeight <= bottom - top ? blockHeight : questionHeight + 22
      if (y + required > bottom) nextPage()
      write(statement, { size: 11, weight: 'bold', gap: 2 })
      write('Musterantwort', { size: 9, weight: 'bold', gap: 1, color: [83, 100, 90] })
      write(item.answer, { gap: 4 })
      for (const detail of details) write(detail.text, { size: 9, gap: 2, color: [83, 100, 90], href: detail.href })
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
    pdf.text('Ich-kann-Liste · Fragen und Antworten', left, 287)
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
