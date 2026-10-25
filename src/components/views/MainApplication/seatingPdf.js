import { jsPDF } from 'jspdf'
import fontUrl from '../../../assets/fonts/Graphit-Regular.ttf?url'

async function imageData(url) {
  const image = new Image()
  image.src = url
  await image.decode()
  const canvas = document.createElement('canvas')
  canvas.width = image.naturalWidth
  canvas.height = image.naturalHeight
  const context = canvas.getContext('2d')
  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.drawImage(image, 0, 0)
  return { data: canvas.toDataURL('image/jpeg', 0.95), width: canvas.width, height: canvas.height }
}
export async function createSeatingPdf({ title, columns, rows, seats }) {
  const response = await fetch(fontUrl)
  if (!response.ok) throw new Error('Schrift konnte nicht geladen werden.')
  const bytes = new Uint8Array(await response.arrayBuffer())
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  const pictures = await Promise.all(seats.map(seat => seat?.photo ? imageData(seat.photo) : null))
  const landscape = columns >= rows
  const pdf = new jsPDF({ orientation: landscape ? 'landscape' : 'portrait', unit: 'mm', format: 'a4', compress: true })
  pdf.addFileToVFS('Graphit.ttf', btoa(binary))
  pdf.addFont('Graphit.ttf', 'Graphit', 'normal')
  pdf.setFont('Graphit')
  pdf.setProperties({ title: `Sitzplan ${title}` })
  const width = pdf.internal.pageSize.getWidth()
  const height = pdf.internal.pageSize.getHeight()
  const margin = 10
  const cellWidth = (width - margin * 2) / columns
  // Use additional pages for tall grids so photos and names remain readable.
  const rowsPerPage = Math.min(rows, Math.max(1, Math.floor((height - 36) / 32)))
  const cellHeight = Math.min(48, (height - 36) / rowsPerPage)
  const pageCount = Math.ceil(rows / rowsPerPage)
  for (let page = 0; page < pageCount; page++) {
    if (page) pdf.addPage()
    pdf.setFontSize(15)
    pdf.setTextColor(32, 38, 34)
    pdf.text(`Sitzplan · ${title}`, margin, 13)
    pdf.setFontSize(9)
    pdf.text(`${columns} × ${rows} Plätze · Seite ${page + 1} von ${pageCount}`, margin, 20)
    for (let row = page * rowsPerPage; row < Math.min(rows, (page + 1) * rowsPerPage); row++) {
      for (let col = 0; col < columns; col++) {
        const index = row * columns + col
        const seat = seats[index]
        const picture = pictures[index]
        const x = margin + col * cellWidth
        const y = 26 + (row % rowsPerPage) * cellHeight
        pdf.setDrawColor(210, 220, 212)
        pdf.rect(x, y, cellWidth, cellHeight)
        pdf.setFontSize(Math.min(7, cellWidth * 0.7))
        pdf.setTextColor(100, 113, 104)
        pdf.text(`${row + 1} · ${col + 1}`, x + 1.5, y + 3)
        const fontSize = Math.min(9, Math.max(4, cellWidth * 0.6))
        pdf.setFontSize(fontSize)
        const lines = pdf.splitTextToSize(seat?.name || 'Freier Platz', cellWidth - 3)
        const textHeight = lines.length * fontSize * 0.3528 * 1.15
        const imageHeight = Math.max(1, cellHeight - 9 - textHeight)
        if (picture) {
          const scale = Math.min((cellWidth - 4) / picture.width, imageHeight / picture.height)
          const w = picture.width * scale
          const h = picture.height * scale
          pdf.addImage(picture.data, 'JPEG', x + (cellWidth - w) / 2, y + 5 + (imageHeight - h) / 2, w, h)
        }
        pdf.setTextColor(32, 38, 34)
        pdf.text(lines, x + cellWidth / 2, y + cellHeight - 2 - textHeight + fontSize * 0.3528, { align: 'center', lineHeightFactor: 1.15 })
      }
    }
  }
  return pdf
}
