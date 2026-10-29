import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import fontUrl from '../../../assets/fonts/Graphit-Regular.ttf?url'

export async function exportStoryMapping(draft) {
  const response = await fetch(fontUrl)
  if (!response.ok) throw new Error('Die Schrift konnte nicht geladen werden.')
  const bytes = new Uint8Array(await response.arrayBuffer())
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  pdf.addFileToVFS('Graphit.ttf', btoa(binary))
  pdf.addFont('Graphit.ttf', 'Graphit', 'normal')
  pdf.setFont('Graphit')
  pdf.setProperties({ title: 'Phase 3 – User Story Mapping' })
  // Four activity columns per horizontal section; long text flows onto more pages.
  for (let start = 0; start < draft.columns.length; start += 4) {
    if (start) pdf.addPage()
    const columns = draft.columns.slice(start, start + 4)
    pdf.setFontSize(16)
    pdf.text('Phase 3 · Anforderungen festlegen', 12, 16)
    pdf.setFontSize(10)
    const teamLines = pdf.splitTextToSize(`Gruppe: ${draft.team.trim() || '____________________'}`, 270)
    pdf.text(teamLines, 12, 24)
    const y = 24 + teamLines.length * 5
    pdf.text('Schulessen für fünf Tage planen · Wochenbudget: 25 €', 12, y)
    const count = Math.max(...columns.map(column => column.stories.length))
    autoTable(pdf, {
      startY: y + 5,
      margin: { left: 12, right: 12, top: 15, bottom: 16 },
      theme: 'grid',
      styles: { font: 'Graphit', fontStyle: 'normal', fontSize: 10, cellPadding: 4, overflow: 'linebreak', textColor: [23, 43, 68], fillColor: [255, 246, 210], lineColor: [191, 213, 239] },
      headStyles: { fillColor: [54, 116, 183], textColor: [255, 255, 255], fontStyle: 'normal' },
      head: [columns.map((column, index) => `${start + index + 1}. ${column.activity.trim() || 'Aktivität'}`)],
      body: Array.from({ length: count }, (_, row) => columns.map(column => {
        const story = column.stories[row]
        return story ? story.text.trim() || '____________________' : ''
      }))
    })
  }
  const pages = pdf.getNumberOfPages()
  for (let page = 1; page <= pages; page++) {
    pdf.setPage(page); pdf.setFontSize(9)
    pdf.text(`3TGG2 GMT · User Story Mapping · Seite ${page} / ${pages}`, 12, 202)
  }
  pdf.save('3_Anforderungen_Story-Mapping.pdf')
}
