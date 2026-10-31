// Export exactly the A4 sheets displayed by the lesson, without slicing their content.
export async function exportPhotoshopWorksheet(pages) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
  await document.fonts.ready
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
  pdf.setProperties({ title: 'Retuschieren mit dem Kopierstempel-Werkzeug · 1BFD1 BPK' })
  for (let index = 0; index < pages.length; index++) {
    const canvas = await html2canvas(pages[index], {
      scale: 2, backgroundColor: '#ffffff', width: 794, height: 1123, windowWidth: 1280,
      onclone(_document, page) {
        page.style.display = 'flex'
        const stage = page.closest('.paper-stage')
        stage.style.transform = 'none'
        stage.style.position = 'static'
        const frame = stage.parentElement
        frame.style.overflow = 'visible'
        frame.style.height = 'auto'
        frame.style.width = '794px'
        frame.style.maxWidth = 'none'
      }
    })
    if (index) pdf.addPage()
    pdf.addImage(canvas.toDataURL('image/jpeg', 0.96), 'JPEG', 0, 0, 210, 297)
  }
  pdf.save('1BFD1_BPK_Kopierstempel_Arbeitsblatt.pdf')
}
