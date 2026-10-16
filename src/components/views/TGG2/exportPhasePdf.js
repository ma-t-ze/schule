// Render the existing lesson, rather than maintaining a second text-only version.
export async function exportPhasePdf(element) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'), import('jspdf')
  ])
  await document.fonts.ready
  const fields = [...element.querySelectorAll('input, textarea')].map(field => ({
    value: field.value, checked: field.checked
  }))
  const lines = []
  const canvas = await html2canvas(element, {
    scale: 1.5,
    backgroundColor: '#f7f8fa',
    onclone: async (_document, cloned) => {
      cloned.open = true
      cloned.querySelectorAll('details').forEach(details => { details.open = true })
      cloned.querySelectorAll('.questions').forEach(list => {
        list.style.maxHeight = 'none'
        list.style.overflow = 'visible'
      })
      cloned.querySelectorAll('input, textarea').forEach((field, index) => {
        const saved = fields[index]
        if (!saved) return
        if (field.type === 'checkbox' || field.type === 'radio') {
          field.checked = saved.checked
          return
        }
        const replacement = _document.createElement('div')
        const style = _document.defaultView.getComputedStyle(field)
        for (const property of style) replacement.style.setProperty(property, style.getPropertyValue(property))
        replacement.style.height = 'auto'
        replacement.style.minHeight = `${field.getBoundingClientRect().height}px`
        replacement.style.whiteSpace = 'pre-wrap'
        replacement.style.overflowWrap = 'anywhere'
        replacement.style.overflow = 'visible'
        replacement.style.resize = 'none'
        replacement.textContent = saved.value || '\u00a0'
        field.replaceWith(replacement)
      })
      await _document.fonts.ready
      const top = cloned.getBoundingClientRect().top
      // Record text lines so page breaks do not cut through their letters.
      const walker = _document.createTreeWalker(cloned, 4)
      let node
      while ((node = walker.nextNode())) {
        if (!node.textContent.trim() || node.parentElement.closest('[data-html2canvas-ignore]')) continue
        const range = _document.createRange()
        range.selectNodeContents(node)
        for (const rect of range.getClientRects()) {
          if (rect.height) lines.push({ top: rect.top - top, bottom: rect.bottom - top })
        }
      }
    }
  })
  const pdf = new jsPDF({ unit: 'mm', format: 'a4' })
  const margin = 10, width = 190, pageHeight = 277
  const ratio = canvas.width / width
  const scale = canvas.width / element.getBoundingClientRect().width
  const maxHeight = Math.floor(pageHeight * ratio)
  const slice = document.createElement('canvas')
  slice.width = canvas.width
  let offset = 0, page = 0
  while (offset < canvas.height) {
    let end = Math.min(offset + maxHeight, canvas.height)
    if (end < canvas.height) {
      for (let attempt = 0; attempt < 20; attempt++) {
        const crossings = lines.filter(line => line.top * scale < end && line.bottom * scale > end)
        if (!crossings.length) break
        const next = Math.floor(Math.min(...crossings.map(line => line.top * scale))) - 2
        if (next <= offset + maxHeight / 2) break
        end = next
      }
    }
    slice.height = end - offset
    const context = slice.getContext('2d')
    context.drawImage(canvas, 0, offset, canvas.width, slice.height, 0, 0, slice.width, slice.height)
    if (page++) pdf.addPage()
    pdf.addImage(slice.toDataURL('image/jpeg', 0.94), 'JPEG', margin, margin, width, slice.height / ratio)
    offset = end
  }
  pdf.save('2_Ideen-finden.pdf')
}
