import curriculum from '../data/gmt-curriculum.json'
export function curriculumCoverage(rows, hoursColumn = 4) {
  const hours = {}, used = new Set(), known = new Set(curriculum.flatMap(u => [u.id, ...u.items.map(i => i.id)]))
  let total = 0, unassigned = 0, invalid = 0
  for (const row of rows) {
    if (/ferien/i.test(row[3])) continue
    const refs = [...new Set((row[2].match(/\d+(?:\.\d+)?/g) || []).filter(id => known.has(id)))]
    refs.forEach(id => used.add(id))
    const raw = String(row[hoursColumn] ?? '').trim()
    if (!raw || /^[-–—]$/.test(raw)) continue
    const n = Number(raw.replace(',', '.'))
    if (!Number.isFinite(n) || n < 0) { invalid++; continue }
    total += n
    if (!refs.length) unassigned += n
    for (const ref of refs) hours[ref] = (hours[ref] || 0) + n / refs.length
  }
  const units = curriculum.map(unit => ({ ...unit,
    used: used.has(unit.id) || unit.items.some(item => used.has(item.id)),
    planned: (hours[unit.id] || 0) + unit.items.reduce((sum,i) => sum + (hours[i.id] || 0),0),
    items: unit.items.map(item => ({ ...item, used: used.has(item.id), planned: hours[item.id] || 0 }))
  }))
  return { curriculumHours: 240, percentage: total / 240 * 100, units, total, unassigned, invalid, covered: units.flatMap(u => u.items).filter(i => i.used).length }
}
export const formatHours = n => n.toLocaleString('de-DE', { maximumFractionDigits: 2 })
export const coverageNote = 'Grün = im Plan zugeordnet, keine Aussage zur vollständigen Behandlung. Mehrfachzuordnungen werden gleichmäßig aufgeteilt; Ferien zählen nicht. Angaben in Unterrichtsstunden (45 Minuten).'
