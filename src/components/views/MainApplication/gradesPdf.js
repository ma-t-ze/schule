import { jsPDF } from 'jspdf'
import fontUrl from '../../../assets/fonts/Graphit-Regular.ttf?url'
import { gradesForStudent, weightedAverage } from './localOralGrades'

const categories = ['written', 'practical', 'oral']

export async function createGradesPdf({ classroom, entries, weights, finalGrades = {} }) {
  const response = await fetch(fontUrl)
  if (!response.ok) throw new Error('Die Schrift für das PDF konnte nicht geladen werden.')
  const bytes = new Uint8Array(await response.arrayBuffer())
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true })
  pdf.addFileToVFS('Graphit.ttf', btoa(binary))
  pdf.addFont('Graphit.ttf', 'Graphit', 'normal')
  pdf.setFont('Graphit')
  pdf.setProperties({ title: `Notenliste · ${classroom.title}` })
  const columns = [42, 32, 32, 32, 30, 22]
  const x = [10, 52, 84, 116, 148, 178]
  const rows = classroom.students.map(person => {
    const average = weightedAverage(entries, person.id, weights)
    return [person.name, ...categories.map(type => gradesForStudent(entries, person.id, type).map(entry => entry.grade).join(', ') || '–'), average === null ? '–' : average.toFixed(2).replace('.', ','), finalGrades[person.id] ?? (average === null ? '–' : String(Math.round(average)))]
  })
  let fontSize = 9
  let lineHeight, lines, heights
  do {
    pdf.setFontSize(fontSize)
    lineHeight = fontSize * 0.3528 * 1.2
    lines = rows.map(row => row.map((value, i) => pdf.splitTextToSize(value, columns[i] - 4)))
    heights = lines.map(row => Math.max(6, Math.max(...row.map(cell => cell.length)) * lineHeight + 2))
    if (heights.reduce((sum, value) => sum + value, 0) <= 250) break
    fontSize -= 0.5
  } while (fontSize >= 5)
  if (fontSize < 5) throw new Error('Die Notenliste ist zu umfangreich für eine lesbare DIN-A4-Seite.')
  pdf.setFontSize(16)
  pdf.text(`Notenliste · ${classroom.title}`, 10, 14)
  pdf.setFontSize(fontSize)
  const titles = ['Name', ...categories.map((key, i) => `${['Schriftlich', 'Praktisch', 'Mündlich'][i]} (${weights[key] == null ? '–' : `${weights[key]} %`})`), 'Durchschnitt', 'Endnote']
  let y = 22
  pdf.setFillColor(232, 239, 232)
  pdf.rect(10, y, 190, 9, 'F')
  for (let i = 0; i < columns.length; i++) {
    pdf.rect(x[i], y, columns[i], 9)
    pdf.text(titles[i], x[i] + 2, y + 6, { maxWidth: columns[i] - 4 })
  }
  y += 9
  lines.forEach((row, index) => {
    const height = heights[index]
    for (let i = 0; i < columns.length; i++) {
      pdf.rect(x[i], y, columns[i], height)
      pdf.text(row[i], x[i] + 2, y + 1.5 + fontSize * 0.3528, { lineHeightFactor: 1.2 })
    }
    y += height
  })
  return pdf
}
