import fontUrl from '../../../../assets/fonts/Jost-Regular.ttf?url'
import { criteria, variants } from './model'

// Read current lesson text instead of keeping a second copy of the assignment.
export function collectFeedbackContent(root) {
  const text = selector => root.querySelector(selector)?.textContent.replace(/\s+/g, ' ').trim() || ''
  return {
    title: text('#phase-five-title'),
    assignmentTitle: text('.assignment h3'),
    instructions: [...root.querySelectorAll('.assignment ol > li')].map(el => el.textContent.replace(/\s+/g, ' ').trim()),
    teamLabel: text('label[for="phase51-team"]'),
    versions: variants.map(version => ({
      id: version.id,
      label: root.querySelector(`#feedback-${version.id}-${criteria[0].id}`)?.closest('fieldset').querySelector('legend')?.textContent.trim() || version.label,
      criteria: criteria.map(criterion => ({ id: criterion.id, label: text(`label[for="feedback-${version.id}-${criterion.id}"]`) }))
    })),
    favoriteLabel: text('.favorite-choice legend'),
    reasonLabel: text('label[for="phase51-reason"]')
  }
}

export async function exportFeedback(value, content) {
  const [{ jsPDF }, { default: autoTable }, response] = await Promise.all([import('jspdf'), import('jspdf-autotable'), fetch(fontUrl)])
  if (!response.ok) throw new Error('Die Schrift konnte nicht geladen werden.')
  let binary = ''
  for (const byte of new Uint8Array(await response.arrayBuffer())) binary += String.fromCharCode(byte)
  const pdf = new jsPDF({ unit: 'mm', format: 'a4' })
  pdf.addFileToVFS('Jost.ttf', btoa(binary)); pdf.addFont('Jost.ttf', 'Jost', 'normal'); pdf.setFont('Jost')
  pdf.setProperties({ title: `Phase 5.1 – ${content.title}` })
  const styles = { font: 'Jost', fontStyle: 'normal', fontSize: 11, cellPadding: 5, overflow: 'linebreak', lineColor: [191, 213, 239], textColor: [23, 43, 68] }
  function heading(title, subtitle) {
    pdf.setFontSize(18)
    const lines = pdf.splitTextToSize(title, 180)
    pdf.text(lines, 15, 20)
    const subtitleY = 23 + lines.length * 7
    pdf.setFontSize(10); pdf.text(subtitle, 15, subtitleY)
    return subtitleY + 8
  }
  const startY = heading(content.title, '3TGG2 · Phase 5.1 · Analyse und Auswahl')
  autoTable(pdf, { startY, margin: { left: 15, right: 15, top: 18, bottom: 20 }, styles, theme: 'grid', body: [
    [content.assignmentTitle, content.instructions.map((instruction, i) => `${i + 1}. ${instruction}`).join('\n\n')],
    [content.teamLabel, value.team.trim()],
    [content.favoriteLabel, content.versions.find(v => v.id === value.favorite)?.label || ''],
    [content.reasonLabel, value.reason.trim()]
  ], columnStyles: { 0: { cellWidth: 50, fillColor: [229, 239, 252] } } })
  for (const version of content.versions) {
    pdf.addPage()
    const tableY = heading(version.label, '3TGG2 · Phase 5.1 · Analyse und Auswahl')
    autoTable(pdf, { startY: tableY, margin: { left: 15, right: 15, top: 18, bottom: 20 }, styles, theme: 'grid', headStyles: { fillColor: [54, 116, 183], fontStyle: 'normal' }, head: [['Kriterium', 'Euer Teamfeedback']], body: version.criteria.map(c => [c.label, value.reviews[version.id][c.id].trim()]), columnStyles: { 0: { cellWidth: 50, fillColor: [229, 239, 252] } } })
  }
  const pages = pdf.getNumberOfPages()
  for (let i = 1; i <= pages; i++) { pdf.setPage(i); pdf.setFontSize(9); pdf.text(`3TGG2 · Phase 5.1 · Seite ${i} / ${pages}`, 15, 288) }
  pdf.save('5_1_Teamfeedback_Klickdummys.pdf')
}
