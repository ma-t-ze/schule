import pagedScript from '../../../../node_modules/pagedjs/dist/paged.polyfill.js?url'
import regularFont from '../../../assets/fonts/Roboto-Regular.ttf?url'
import boldFont from '../../../assets/fonts/Roboto-Bold.ttf?url'
import langformCss from './kopierstempelLangform.css?raw'
import verlaufCss from './kopierstempelVerlauf.css?raw'

// Render the original document HTML and CSS. No reconstructed jsPDF tables,
// replacement fonts, invented running headers or changes to the document structure.
export async function exportKopierstempelPlan(root, mode) {
  const source = root?.querySelector('.doc')
  if (!source) throw new Error('Dokument konnte nicht geladen werden.')
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
  const landscape = mode === 'verlauf'
  const frame = document.createElement('iframe')
  frame.title = 'PDF-Satz der Originalvorlage'
  frame.setAttribute('aria-hidden', 'true')
  frame.style.cssText = 'position:fixed;left:-100000px;top:0;width:1400px;height:1600px;border:0;pointer-events:none;'
  document.body.append(frame)
  try {
    const doc = frame.contentDocument
    doc.open(); doc.write('<!doctype html><html lang="de"><head><meta charset="utf-8"></head><body></body></html>'); doc.close()
    frame.contentWindow.PagedConfig = { auto: false }
    await new Promise((resolve, reject) => {
      const script = doc.createElement('script')
      script.src = pagedScript
      script.onload = resolve; script.onerror = () => reject(new Error('PDF-Seitensatz konnte nicht geladen werden.'))
      doc.head.append(script)
    })
    // Apply the print rules from the original Vue files in the rendering iframe.
    const printRules = landscape ? `
      @page { size: A4 landscape; margin: 12mm 15mm; }
      .page { width: auto; margin: 0; padding: 0; }
      .doc { width: 100%; }
      thead { display: table-header-group; }
      tr { break-inside: avoid; }
      th { background: white !important; }
    ` : `
      .doc { max-width: none; }
      .page { padding: 0; border-bottom: none; }
      .cover-page { break-after: page; }
      table, tr { break-inside: avoid; }
      h2, h3, h4 { break-after: avoid; }
      p { orphans: 3; widows: 3; }
      [data-toc-target] a { color: inherit; text-decoration: none; }
      [data-toc-target] a::after { content: target-counter(attr(href), page); }
    `
    const css = `
      @font-face { font-family: Roboto; src: url('${regularFont}'); font-weight: 400; }
      @font-face { font-family: Roboto; src: url('${boldFont}'); font-weight: 700; }
      body { margin: 0; background: white; }
      ${landscape ? verlaufCss : langformCss}
      ${printRules}
      .pagedjs_page { margin: 0; background: white; box-shadow: none; }
    `
    const clone = source.cloneNode(true)
    clone.querySelectorAll('[data-toc-target]').forEach(cell => {
      const anchor = doc.createElement('a')
      anchor.href = `#${cell.dataset.tocTarget}`
      cell.replaceChildren(anchor)
    })
    // Preload local fonts before measuring and paginating text.
    const style = doc.createElement('style'); style.textContent = css; doc.head.append(style)
    await Promise.all([doc.fonts.load('11pt Roboto'), doc.fonts.load('700 11pt Roboto')])
    const target = doc.createElement('div'); doc.body.append(target)
    await frame.contentWindow.PagedPolyfill.preview(clone.outerHTML, [{ [location.origin + '/original-plan.css']: css }], target)
    await doc.fonts.ready
    const pages = [...target.querySelectorAll('.pagedjs_page')]
    if (!pages.length) throw new Error('Die PDF enthält keine Seiten.')
    const normalize = text => text.replace(/\s+/g, '')
    const renderedText = normalize(target.textContent)
    for (const node of source.querySelectorAll('p, li, td, h1, h2, h3, h4')) {
      if (node.hasAttribute('data-toc-target')) continue
      const expected = normalize(node.textContent)
      if (expected && !renderedText.includes(expected)) throw new Error('Beim Seitensatz fehlt Text. Die PDF wurde nicht erstellt.')
    }
    // Paged.js relies on inherited styles and CSSOM-generated rules. Preserve the
    // resolved layout explicitly so html2canvas's clone cannot reflow the tables.
    const resolvedStyles = [...target.querySelectorAll('*')].map(element => {
      const computed = frame.contentWindow.getComputedStyle(element)
      return [element, [...computed].map(property => [property, computed.getPropertyValue(property)])]
    })
    for (const [element, properties] of resolvedStyles) {
      for (const [property, value] of properties) element.style.setProperty(property, value)
    }
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: landscape ? 'landscape' : 'portrait' })
    pdf.setProperties({ title: landscape ? 'Verlaufsplan · Kopierstempel in Photoshop' : 'Unterrichtsausarbeitung · Kopierstempel in Photoshop', author: 'Matthias Heckel' })
    for (const [index, page] of pages.entries()) {
      const canvas = await html2canvas(page, {
        scale: 2, backgroundColor: '#ffffff', windowWidth: 1400,
        onclone: async clonedDocument => {
          await Promise.all([clonedDocument.fonts.load('11pt Roboto'), clonedDocument.fonts.load('700 11pt Roboto')])
          await clonedDocument.fonts.ready
          // Force character-wise canvas text placement; preserves visible spaces
          // in bold Roboto headings without changing the original typesetting.
          clonedDocument.querySelectorAll('.doc, .doc *').forEach(element => { element.style.letterSpacing = '0.001px' })
        }
      })
      if (index) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/jpeg', .97), 'JPEG', 0, 0, landscape ? 297 : 210, landscape ? 210 : 297)
    }
    pdf.save(landscape ? 'Kopierstempel_Verlaufsplan.pdf' : 'Kopierstempel_Unterrichtsausarbeitung.pdf')
  } finally { frame.remove() }
}
