// Export exactly the A4 sheets displayed by the lesson, without slicing their content.
const expectedAnswers = [
  'Die Ränder sind sehr hart. Die Bearbeitung ist deutlich sichtbar und wirkt wie ein Kreis auf der Haut.',
  'Härte: 22 %; Größe: 18 px. Meist funktioniert eine kleine Pinselgröße besser; sie richtet sich nach der Größe des Matschflecks. Eine geringe Härte sorgt für weiche Übergänge, sodass die Bearbeitung möglichst wenig auffällt.',
  'Wir haben anfangs mit der Lupe gezoomt. Später haben wir gemerkt, dass dies zu lange dauert, und sind zu den Tastenkürzeln gewechselt.',
  'Ja, bessere Ergebnisse lassen sich erzielen, wenn man die Deckkraft bewusst reduziert und den Pinsel leicht um die zu bearbeitende Stelle bewegt. Bei zu starker Bearbeitung geht jedoch die Hautstruktur verloren und das Ergebnis wirkt verschwommen.'
]
export async function exportPhotoshopWorksheet(pages, { expectations = false } = {}) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
  await document.fonts.ready
  await Promise.all(pages.flatMap(page => [...page.querySelectorAll('img')].map(image => image.decode())))
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
  pdf.setProperties({ title: `Retuschieren mit dem Kopierstempel-Werkzeug${expectations ? ' · Erwartungshorizont' : ''} · 1BFD1 BPK` })
  const staging = document.createElement('div')
  Object.assign(staging.style, { position: 'absolute', left: '-10000px', top: '0', width: '794px' })
  document.body.append(staging)
  let answerIndex = 0
  try {
    for (let index = 0; index < pages.length; index++) {
      // Lay out hidden lesson sheets before capture; inline v-show styles otherwise distort cloned content.
      const sheet = pages[index].cloneNode(true)
      const sourceStyle = getComputedStyle(pages[index])
      Object.assign(sheet.style, { display: 'flex', fontFamily: sourceStyle.fontFamily, color: sourceStyle.color })
      if (expectations) {
        sheet.querySelector('.byline').textContent += ' | Erwartungshorizont'
        sheet.querySelector('.sheet-footer span').textContent += ' · Erwartungshorizont'
        for (const area of sheet.querySelectorAll('.writing-lines')) {
          // Keep the writing area's original height, so the teacher copy has the same page layout.
          const height = area.children.length * 26
          area.textContent = expectedAnswers[answerIndex++]
          Object.assign(area.style, { height: `${height}px`, boxSizing: 'border-box', padding: '10px 12px', lineHeight: '1.6' })
        }
      }
      staging.replaceChildren(sheet)
      await new Promise(resolve => requestAnimationFrame(resolve))
      const canvas = await html2canvas(sheet, {
        scale: 2, backgroundColor: '#ffffff', width: 794, height: 1123, windowWidth: 1280,
        x: 0, y: 0, scrollX: 0, scrollY: 0,
        onclone(_document, page) {
          page.style.display = 'flex'
          // Render one sheet at the origin, independent of scroll position and the active lesson page.
          _document.body.replaceChildren(page)
          _document.body.style.margin = '0'
          _document.body.style.padding = '0'
          page.style.position = 'absolute'
          page.style.left = '0'
          page.style.top = '0'
          page.style.margin = '0'
          page.style.transform = 'none'
          page.style.fontFamily = 'Jost, Arial, sans-serif'
        }
      })
      if (index) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.96), 'JPEG', 0, 0, 210, 297)
    }
  } finally { staging.remove() }
  pdf.save(expectations ? '1BFD1_BPK_Kopierstempel_Erwartungshorizont.pdf' : '1BFD1_BPK_Kopierstempel_Arbeitsblatt.pdf')
}
