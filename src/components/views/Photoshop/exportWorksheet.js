import fontUrl from '../../../assets/fonts/Jost-Regular.ttf?url'
export async function exportWorksheet(sections, data) {
  const { jsPDF } = await import('jspdf')
  const pdf = new jsPDF()
  const response = await fetch(fontUrl)
  if (!response.ok) throw new Error('Schrift konnte nicht geladen werden')
  const bytes = new Uint8Array(await response.arrayBuffer())
  let binary = ''
  for (let i = 0; i < bytes.length; i += 8192) binary += String.fromCharCode(...bytes.subarray(i, i + 8192))
  pdf.addFileToVFS('Jost.ttf', btoa(binary)); pdf.addFont('Jost.ttf', 'Jost', 'normal'); pdf.setFont('Jost')
  let y = 20
  const page = () => { pdf.addPage(); y = 20 }
  function write(text, size = 11) {
    pdf.setFontSize(size)
    const lines = pdf.splitTextToSize(String(text || ''), 174)
    for (const line of lines) { if (y > 275) page(); pdf.text(line, 18, y); y += size * 0.48 }
    y += 3
  }
  write('Einführung iMac & Photoshop', 21)
  write(`Name: ${data.name || '—'}    Klasse: ${data.group || '—'}    Datum: ${data.date || '—'}`)
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i]
    if (i) page()
    write(section.title, 18); write(section.time); write(section.intro)
    if (section.info) write(section.info)
    if (section.image) {
      const img = new Image()
      await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; img.src = section.image })
      const h = Math.min(130, 174 * img.naturalHeight / img.naturalWidth)
      const w = h * img.naturalWidth / img.naturalHeight
      if (y + h > 270) page()
      pdf.addImage(img, 'PNG', 18, y, w, h); y += h + 10
    }
    for (const f of section.fields) {
      if (y > 245) page()
      write(f.label, 12)
      const answer = data.answers[f.id]?.trim()
      if (answer) write(answer)
      else { for (let j = 0; j < 2; j++) { if (y > 272) page(); y += 8; pdf.setDrawColor(180); pdf.line(18, y, 192, y) } y += 7 }
    }
    if (section.links) { write('Quellen / Recherche', 12); for (const [title, url] of section.links) { write(title); write(url, 9) } }
  }
  for (let i = 1; i <= pdf.getNumberOfPages(); i++) { pdf.setPage(i); pdf.setFontSize(9); pdf.text(`iMac & Photoshop · ${i} / ${pdf.getNumberOfPages()}`,18,289) }
  pdf.save('Einfuehrung_iMac_Photoshop.pdf')
}
