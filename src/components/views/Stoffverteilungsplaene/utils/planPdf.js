import { isRedPlanRow } from './examPeriods.js'
import { jsPDF } from 'jspdf'
import { autoTable } from 'jspdf-autotable'
import { formatHours, coverageNote } from './curriculumCoverage.js'

export function createPlanPdf({ planId, name, headers, rows, hoursColumn, font, coverage }) {
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  pdf.addFileToVFS('Graphit.ttf', font)
  pdf.addFont('Graphit.ttf', 'Graphit', 'normal')
  pdf.setFont('Graphit', 'normal')
  pdf.setProperties({ title: `Stoffverteilungsplan ${name} – 2026/27` })
  const widths = headers.length === 6 ? [14, 24, 31, 123, 12, 69] : [14, 14, 31, 135, 79]
  autoTable(pdf, {
    head: [headers], body: rows,
    margin: { top: 29, right: 12, bottom: 15, left: 12 },
    styles: { font: 'Graphit', fontStyle: 'normal', fontSize: 9, cellPadding: 2, overflow: 'linebreak', lineColor: [220, 220, 220], lineWidth: 0.1 },
    headStyles: { fontStyle: 'normal', fillColor: [55, 70, 65], textColor: 255 },
    columnStyles: Object.fromEntries(widths.map((width, index) => [index, { cellWidth: width, halign: index === hoursColumn ? 'center' : 'left' }])),
    rowPageBreak: 'avoid', showHead: 'everyPage',
    didParseCell: (data) => {
      if (data.section === 'body' && /ferien/i.test(rows[data.row.index]?.[3] || '')) data.cell.styles.fillColor = [255, 243, 163]
      const row = rows[data.row.index]
      const highlighted = isRedPlanRow(planId, row)
      if (data.section === 'body' && highlighted) {
        data.cell.styles.fillColor = [255, 214, 214]
        data.cell.styles.textColor = [139, 23, 23]
      }
    },
    willDrawPage: () => {
      pdf.setFontSize(16)
      pdf.setTextColor(35)
      pdf.text(`Stoffverteilungsplan · ${name}`, 12, 15)
      pdf.setFontSize(10)
      pdf.text('Schuljahr 2026/27', 12, 22)
    }
  })
  if (coverage) {
    const appendix = (title, head, body, greenRows = new Set()) => {
      pdf.addPage()
      autoTable(pdf, {
        head: [head], body, margin: { top: 32, right: 12, bottom: 15, left: 12 },
        styles: { font: 'Graphit', fontStyle: 'normal', fontSize: 8, cellPadding: 1.2, overflow: 'linebreak' },
        headStyles: { fontStyle: 'normal', fillColor: [55, 70, 65] },
        rowPageBreak: 'avoid', showHead: 'everyPage',
        didParseCell: data => { if (data.section === 'body' && greenRows.has(data.row.index)) data.cell.styles.fillColor = [228, 243, 230] },
        willDrawPage: () => {
          pdf.setFontSize(14); pdf.setTextColor(35); pdf.text(title, 12, 14)
          pdf.setFontSize(8); pdf.text(pdf.splitTextToSize(coverageNote, 270), 12, 21)
        }
      })
    }
    const body = [], green = new Set()
    for (const unit of coverage.units.filter(u => u.year === 'Jahrgangsstufe 1')) {
      for (const [index, item] of unit.items.entries()) {
        if (item.used) green.add(body.length)
        body.push([index === 0 ? `${unit.id} · ${unit.title}` : '',
          `${item.id} · ${item.title}`, item.used ? 'In meinem Plan' : '—'])
      }
    }
    appendix('GMT · Jahrgangsstufe 1 · Themenübersicht (Kurzfassungen)', ['BPE · Thema', 'Unterpunkt · Themenüberschrift', 'Zuordnung'], body, green)
    appendix('Mein Stundenanteil · Jahrgangsstufe 1 · ohne Informatik', ['Einheit', 'Meine UStd.', 'Lehrplan UStd.', 'Mein Anteil'], [
      ...coverage.units.filter(u => u.used).map(u => [`${u.id} · ${u.title}`, formatHours(u.planned), String(u.hours), `${formatHours(u.planned / u.hours * 100)} %`]),
      ['Puffer / ohne Zuordnung', formatHours(coverage.unassigned), '—', '—'],
      ['Gesamt GMT · Jahrgangsstufe 1', formatHours(coverage.total), String(coverage.curriculumHours), `${formatHours(coverage.percentage)} %`],
      ['Bezugsgröße: GMT-Lehrplan 2020, Jahrgangsstufe 1', '150 BPE + 60 VIP + 30 Leistungsfeststellung = 240 UStd.', 'Informatik nicht enthalten.', ''],
      ...(coverage.invalid ? [['Ungültige Stundenangaben', String(coverage.invalid), 'Nicht mitgezählt', '']] : [])
    ])
  }
  const pages = pdf.getNumberOfPages()
  for (let page = 1; page <= pages; page++) {
    pdf.setPage(page)
    pdf.setFontSize(9)
    pdf.setTextColor(90)
    pdf.text(`Seite ${page} von ${pages}`, 285, 202, { align: 'right' })
  }
  return pdf
}
