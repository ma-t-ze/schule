import {
  AlignmentType, BorderStyle, Document, ExternalHyperlink, Footer, HeadingLevel,
  LevelFormat, Packer, PageBreak, PageNumber, PageOrientation, Paragraph,
  Table, TableCell, TableLayoutType, TableOfContents, TableRow, TextRun,
  VerticalAlign, WidthType
} from 'docx'

// Build real editable Word paragraphs and tables from the displayed document,
// including browser-saved text. Never substitute screenshots for document text.
export async function exportPlanWord(root, mode, title, topic) {
  const source = root?.querySelector('.doc')
  if (!source) throw new Error('Dokument konnte nicht geladen werden.')
  const landscape = mode === 'verlauf'
  const font = landscape ? 'Arial' : 'Roboto'
  const size = landscape ? 18 : 22
  const mm = value => Math.round(value * 1440 / 25.4)
  const pageWidth = mm(landscape ? 297 : 210)
  const margins = { top: mm(landscape ? 12 : 20), bottom: mm(landscape ? 12 : 25), left: mm(landscape ? 15 : 20), right: mm(landscape ? 15 : 20) }
  const contentWidth = pageWidth - margins.left - margins.right
  const numbering = []
  function runs(node, format = {}) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.replace(/\s+/g, ' ')
      return text ? [new TextRun({ text, font, size, color: '000000', ...format })] : []
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return []
    if (node.tagName === 'BR') return [new TextRun({ break: 1 })]
    const next = { ...format }
    if (['STRONG', 'B', 'TH'].includes(node.tagName)) next.bold = true
    if (['EM', 'I'].includes(node.tagName)) next.italics = true
    if (node.classList.contains('label')) { next.size = 18; next.color = '555555' }
    if (node.tagName === 'A') {
      const url = new URL(node.getAttribute('href') || '', location.origin)
      if (['https:', 'http:', 'mailto:'].includes(url.protocol)) return [new ExternalHyperlink({ link: url.href, children: [...node.childNodes].flatMap(child => runs(child, { ...next, underline: {} })) })]
    }
    return [...node.childNodes].flatMap(child => runs(child, next))
  }
  function paragraph(element, context = {}) {
    const isHeading = /^H[1-4]$/.test(element.tagName)
    let heading
    if (!landscape && !element.closest('.cover-page')) {
      if (element.tagName === 'H2' && element.id) heading = HeadingLevel.HEADING_1
      else if (element.tagName === 'H3' && element.id) heading = HeadingLevel.HEADING_2
      else if (element.tagName === 'H4') heading = HeadingLevel.HEADING_3
    }
    const centered = element.classList.contains('seminar')
    return new Paragraph({
      children: runs(element, { ...(isHeading ? { bold: !element.classList.contains('unchecked'), size: element.tagName === 'H1' || element.classList.contains('section-title') ? 28 : element.tagName === 'H2' ? 26 : size } : {}), ...(context.bold ? { bold: true } : {}) }),
      heading,
      alignment: centered ? AlignmentType.CENTER : !landscape && !context.cell && !isHeading && element.tagName === 'P' ? AlignmentType.JUSTIFIED : AlignmentType.LEFT,
      spacing: { before: isHeading ? 180 : 0, after: context.cell ? 40 : isHeading ? 100 : 140, line: landscape ? 260 : 300 },
      keepNext: isHeading,
      widowControl: true,
      ...(context.list || {})
    })
  }
  function table(element) {
    if (element.classList.contains('toc')) return new TableOfContents('Inhaltsverzeichnis', { hyperlink: true, headingStyleRange: '1-3' })
    const rows = [...element.rows]
    const count = Math.max(...rows.map(row => [...row.cells].reduce((sum, cell) => sum + cell.colSpan, 0)))
    let ratios = Array(count).fill(1 / count)
    const complete = rows.find(row => row.cells.length === count && [...row.cells].every(cell => cell.colSpan === 1))
    if (complete) {
      const widths = [...complete.cells].map(cell => cell.getBoundingClientRect().width)
      const total = widths.reduce((a, b) => a + b, 0)
      if (total > 0) ratios = widths.map(value => value / total)
    }
    const widths = ratios.map(ratio => Math.round(contentWidth * ratio))
    widths[widths.length - 1] += contentWidth - widths.reduce((a, b) => a + b, 0)
    const border = { style: BorderStyle.SINGLE, size: 6, color: element.classList.contains('content-table') ? 'CCCCCC' : '000000' }
    return new Table({
      width: { size: contentWidth, type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED,
      borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border },
      rows: rows.map(row => {
        let column = 0
        return new TableRow({ tableHeader: row.parentElement.tagName === 'THEAD', cantSplit: true,
          children: [...row.cells].map(cell => {
            const width = widths.slice(column, column + cell.colSpan).reduce((a, b) => a + b, 0)
            column += cell.colSpan
            const children = blocks(cell, { cell: true, bold: cell.tagName === 'TH' })
            if (!children.length || children.at(-1) instanceof Table) children.push(new Paragraph(''))
            return new TableCell({ children, width: { size: width, type: WidthType.DXA }, columnSpan: cell.colSpan, rowSpan: cell.rowSpan,
              verticalAlign: VerticalAlign.TOP, shading: { fill: 'FFFFFF' }, margins: { top: landscape ? 65 : 100, bottom: landscape ? 65 : 100, left: 90, right: 90 } })
          })
        })
      })
    })
  }
  function blocks(element, context = {}) {
    const result = []
    let inline = []
    function flush() {
      if (inline.some(node => node.textContent.trim() || node.nodeName === 'BR')) {
        const holder = document.createElement('p')
        inline.forEach(node => holder.append(node.cloneNode(true)))
        result.push(paragraph(holder, context))
      }
      inline = []
    }
    for (const child of element.childNodes) {
      if (child.nodeType === Node.TEXT_NODE || !['TABLE', 'P', 'H1', 'H2', 'H3', 'H4', 'UL', 'OL', 'DIV'].includes(child.nodeName)) { inline.push(child); continue }
      flush()
      if (child.tagName === 'TABLE') {
        if (result.at(-1) instanceof Table) result.push(new Paragraph({ spacing: { line: 40, after: 80 } }))
        result.push(table(child))
      }
      else if (['UL', 'OL'].includes(child.tagName)) {
        const reference = `list-${numbering.length}`
        if (child.tagName === 'OL') numbering.push({ reference, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', start: Number(child.getAttribute('start')) || 1, alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }] })
        for (const item of child.children) result.push(paragraph(item, { ...context, list: child.tagName === 'OL' ? { numbering: { reference, level: 0 } } : { bullet: { level: 0 } } }))
      } else if (child.tagName === 'DIV') result.push(...blocks(child, context))
      else result.push(paragraph(child, context))
    }
    flush()
    return result
  }
  const children = []
  for (const page of source.children) {
    children.push(...blocks(page))
    if (page.classList.contains('cover-page')) children.push(new Paragraph({ children: [new PageBreak()] }))
    else if (landscape) children.push(new Paragraph({ spacing: { after: 60 } }))
  }
  const doc = new Document({
    creator: 'Matthias Heckel', title: `${mode === 'verlauf' ? 'Verlaufsplan' : 'Unterrichtsausarbeitung'} · ${title}`,
    features: { updateFields: true },
    styles: { default: { document: { run: { font, size, color: '000000' } }, heading1: { run: { font, size: 28, bold: true, color: '000000' } }, heading2: { run: { font, size: 22, bold: true, color: '000000' } }, heading3: { run: { font, size: 22, bold: true, color: '000000' } } } },
    numbering: { config: numbering },
    sections: [{ properties: { page: { size: { width: mm(210), height: mm(297), orientation: landscape ? PageOrientation.LANDSCAPE : PageOrientation.PORTRAIT }, margin: margins } },
      ...(landscape ? {} : { footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18 })] })] }) } }),
      children }]
  })
  const blob = await Packer.toBlob(doc)
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url; anchor.download = `${topic === 'kopierstempel' ? 'Kopierstempel' : topic}_${mode === 'verlauf' ? 'Verlaufsplan' : 'Unterrichtsausarbeitung'}.docx`
  anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
}
