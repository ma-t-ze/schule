import regularFont from '../../../assets/fonts/Jost-Regular.ttf?url'
import mediumFont from '../../../assets/fonts/Jost-Medium.ttf?url'

export const teachingSections = [
  { id: 'overview', title: 'Projektverlauf', filename: '00_Projektverlauf.pdf' },
  { id: 'briefing', title: 'Das Briefing – der Auftakt des Projekts', filename: '01_Briefing_Rebriefing.pdf' },
  { id: 'analysis', title: 'Analysieren', filename: '02_Analysieren.pdf' },
  { id: 'ideas', title: 'Ideen finden', filename: '03_Ideen_finden.pdf' },
  { id: 'requirements', title: 'Anforderungen festlegen', filename: '04_Anforderungen_festlegen.pdf' },
  { id: 'terms', title: 'Wichtige Begriffe', filename: '05_Wichtige_Begriffe.pdf', yellow: true }
]

const text = el => el.textContent.replace(/\s+/g, ' ').trim()
const skip = '.timer-block, .download-area, .mapping-actions, .save-note, .card-actions, .idea-ranking, [role="alert"], [role="status"], [data-html2canvas-ignore]'

// Read the actual lesson DOM. No duplicated lesson text and no form values or live posts.
export function collectTeachingBlocks(root) {
  const blocks = []
  function visit(el, card = false) {
    if (el.matches(skip)) return
    const tag = el.tagName
    if (['BUTTON', 'SUMMARY', 'SCRIPT', 'STYLE'].includes(tag)) return
    const inCard = card || el.classList.contains('assignment') || el.classList.contains('tasks')
    if (el.matches('.step-title')) {
      for (const child of el.children) {
        if (child.tagName === 'SPAN' && text(child)) blocks.push({ kind: 'paragraph', text: text(child).startsWith('Arbeitszeit') ? text(child) : `Arbeitszeit: ${text(child)}`, card: inCard })
        else visit(child, inCard)
      }
      return
    }
    if (el.matches('.idea-matrix')) {
      blocks.push({ kind: 'table', headers: ['Idee', 'Originalität (1–5)', 'Nutzen (1–5)', 'Umsetzbarkeit (1–5)'], rows: Array.from({ length: el.querySelectorAll('.matrix-row').length }, (_, i) => [`Idee ${i + 1}:\n\n________________`, '', '', '']), minHeight: 25 })
      return
    }
    if (el.matches('.mapping-workspace')) {
      blocks.push({ kind: 'heading', level: 3, text: 'Euer User Story Mapping' })
      blocks.push({ kind: 'paragraph', text: 'Namen eurer Gruppenmitglieder', card: true }, { kind: 'field', height: 12 })
      const columns = [...el.querySelectorAll('.mapping-column')]
      // Split horizontally for legible paper worksheets, even if more columns are added later.
      for (let i = 0; i < columns.length; i += 4) {
        const part = columns.slice(i, i + 4)
        blocks.push({ kind: 'table', headers: part.map((_, c) => `${i + c + 1}. Aktivität`), rows: Array.from({ length: Math.max(...part.map(c => c.querySelectorAll('.story-card').length)) }, () => part.map(() => 'User Story:\n\n________________')), minHeight: 32 })
      }
      return
    }
    if (el.matches('.example-grid')) {
      const columns = [...el.children]
      const stories = columns.map(c => [...c.querySelectorAll('p')].map(text))
      blocks.push({ kind: 'table', headers: columns.map(c => text(c.querySelector('strong'))), rows: Array.from({ length: Math.max(...stories.map(c => c.length)) }, (_, i) => stories.map(c => c[i] || '')), darkHead: true, minHeight: 20 })
      return
    }
    if (/^H[234]$/.test(tag)) {
      let value = text(el)
      const li = el.closest('.tasks > li')
      if (li && li.querySelector('h3') === el) value = `${[...li.parentElement.children].indexOf(li) + 1}. ${value}`
      if (value) blocks.push({ kind: 'heading', level: Number(tag[1]), text: value })
      return
    }
    if (el.matches('.term-definition')) {
      for (const line of el.textContent.split(/\n+/).map(value => value.trim()).filter(Boolean)) blocks.push({ kind: 'paragraph', text: line })
      return
    }
    if (tag === 'DD' && el.querySelector('ul, ol')) {
      for (const child of el.children) visit(child, inCard)
      return
    }
    if (tag === 'P' || tag === 'BLOCKQUOTE' || tag === 'DT' || tag === 'DD' || tag === 'LABEL') {
      const value = text(el)
      if (value) blocks.push({ kind: tag === 'DT' || tag === 'LABEL' ? 'label' : 'paragraph', text: value, card: inCard || tag === 'BLOCKQUOTE' })
      return
    }
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      if (tag === 'INPUT' && ['radio', 'checkbox'].includes(el.type)) return
      blocks.push({ kind: 'field', height: tag === 'TEXTAREA' ? Math.min(30, Math.max(14, el.rows * 5)) : 12 })
      return
    }
    if (tag === 'A') {
      const href = el.getAttribute('href')
      if (href && !href.startsWith('#')) blocks.push({ kind: 'link', text: text(el), href: new URL(href, location.origin).href })
      return
    }
    if (tag === 'LI' && !el.querySelector('p, h3, h4, ul, ol, div')) {
      const value = text(el)
      const index = [...el.parentElement.children].indexOf(el) + 1
      if (value) blocks.push({ kind: 'paragraph', text: `${el.parentElement.tagName === 'OL' ? `${index}.` : '•'} ${value}`, card: inCard })
      return
    }
    for (const child of el.children) visit(child, inCard)
  }
  const eyebrow = root.querySelector(':scope > summary .eyebrow')
  if (eyebrow) blocks.push({ kind: 'paragraph', text: text(eyebrow) })
  for (const child of root.children) visit(child)
  return blocks
}

async function fontData(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('PDF-Schrift konnte nicht geladen werden.')
  let binary = ''
  for (const byte of new Uint8Array(await response.arrayBuffer())) binary += String.fromCharCode(byte)
  return btoa(binary)
}

export async function downloadTeachingSection(root, section) {
  if (!root) throw new Error('Unterrichtsabschnitt fehlt.')
  const blocks = collectTeachingBlocks(root)
  const [{ jsPDF }, { default: autoTable }, regular, medium] = await Promise.all([
    import('jspdf'), import('jspdf-autotable'), fontData(regularFont), fontData(mediumFont)
  ])
  const pdf = new jsPDF({ unit: 'mm', format: 'a4' })
  pdf.addFileToVFS('Jost-Regular.ttf', regular); pdf.addFont('Jost-Regular.ttf', 'Jost', 'normal')
  pdf.addFileToVFS('Jost-Medium.ttf', medium); pdf.addFont('Jost-Medium.ttf', 'Jost', 'bold')
  pdf.setProperties({ title: `Wir entwickeln eine App · ${section.title}` })
  const ink = [23, 43, 68], blue = [33, 86, 160], pale = section.yellow ? [255, 246, 210] : [229, 239, 252]
  let y = 40
  function header() {
    pdf.setFillColor(...pale); pdf.roundedRect(10, 9, 190, 24, 3, 3, 'F')
    pdf.setFillColor(...(section.yellow ? [216, 178, 61] : [54, 116, 183])); pdf.rect(10, 9, 190, 1.2, 'F')
    pdf.setFont('Jost', 'normal'); pdf.setFontSize(9); pdf.setTextColor(...ink)
    pdf.text('3TGG2 · GMT · Wir entwickeln eine App', 15, 16)
    pdf.setFont('Jost', 'bold'); pdf.setFontSize(14)
    pdf.text(pdf.splitTextToSize(section.title, 180), 15, 24)
  }
  header()
  function pageIfNeeded(height) {
    if (y + height > 278) { pdf.addPage(); header(); y = 40 }
  }
  for (const block of blocks) {
    if (block.kind === 'table') {
      pageIfNeeded(Math.min(230, 15 + block.rows.length * block.minHeight))
      autoTable(pdf, {
        startY: y, rowPageBreak: 'avoid', tableWidth: 186, columnStyles: Object.fromEntries(block.headers.map((_, i) => [i, { cellWidth: 186 / block.headers.length }])), margin: { left: 12, right: 12, top: 40, bottom: 19 }, theme: 'grid',
        styles: { font: 'Jost', fontSize: 10, textColor: ink, cellPadding: 3, lineColor: [141, 174, 214], overflow: 'linebreak', minCellHeight: block.minHeight },
        headStyles: { fillColor: block.darkHead ? ink : [54, 116, 183], textColor: [255, 255, 255], fontStyle: 'bold', minCellHeight: 12 },
        bodyStyles: { fillColor: [255, 246, 210] },
        head: [block.headers], body: block.rows,
        didDrawPage: header
      })
      y = pdf.lastAutoTable.finalY + 7
      continue
    }
    if (block.kind === 'field') {
      pageIfNeeded(block.height + 3)
      pdf.setFillColor(255, 255, 255); pdf.setDrawColor(141, 170, 203)
      pdf.roundedRect(14, y, 182, block.height, 2, 2, 'FD')
      y += block.height + 5
      continue
    }
    const heading = block.kind === 'heading'
    const size = heading ? (block.level === 2 ? 16 : block.level === 3 ? 13 : 11.5) : 11
    pdf.setFont('Jost', heading || block.kind === 'label' ? 'bold' : 'normal')
    pdf.setFontSize(size)
    const lines = pdf.splitTextToSize(block.text, block.card ? 176 : 182)
    const lineHeight = heading ? 6 : 5.3
    pageIfNeeded(heading ? Math.max(23, lines.length * lineHeight + 12) : block.kind === 'label' ? 38 : lineHeight + 5)
    if (heading) y += 3
    for (const line of lines) {
      pageIfNeeded(lineHeight + 2)
      if (block.card) {
        pdf.setFillColor(255, 255, 255); pdf.rect(12, y - 1, 186, lineHeight + .5, 'F')
        pdf.setDrawColor(...blue); pdf.setLineWidth(.6); pdf.line(12, y - 1, 12, y + lineHeight - .5)
      }
      // A page header changes the active font; restore body style before each line.
      pdf.setFont('Jost', heading || block.kind === 'label' ? 'bold' : 'normal')
      pdf.setFontSize(size)
      pdf.setTextColor(...(section.yellow ? [63, 49, 9] : heading || block.kind === 'link' ? blue : ink))
      pdf.text(line, block.card ? 17 : 14, y + 3.5)
      if (block.kind === 'link') pdf.link(14, y, 182, lineHeight, { url: block.href })
      y += lineHeight
    }
    y += heading ? 3 : 4
  }
  const total = pdf.getNumberOfPages()
  for (let i = 1; i <= total; i++) {
    pdf.setPage(i); pdf.setFont('Jost', 'normal'); pdf.setFontSize(9); pdf.setTextColor(90, 106, 123)
    pdf.text(`3TGG2 · ${section.title}`, 12, 289)
    pdf.text(`${i} / ${total}`, 198, 289, { align: 'right' })
  }
  pdf.save(section.filename)
}
