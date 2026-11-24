export const gradeFormat = 'school-oral-grades'
export const gradeStorageKey = classId => `local-oral-grades:v1:${classId}`
export const localDate = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}
export function validGradeDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(`${value}T12:00:00Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
}
export function parseGrades(text, classId) {
  const data = JSON.parse(text)
  if (data?.format !== gradeFormat || data.version !== 1 || data.classId !== classId || !Array.isArray(data.entries) || data.entries.length > 50000) throw new Error('Die Notendatei ist ungültig oder gehört zu einer anderen Klasse.')
  const ids = new Set()
  const entries = data.entries.map(entry => {
    if (!entry || typeof entry.id !== 'string' || !entry.id || entry.id.length > 100 || ids.has(entry.id) || typeof entry.studentId !== 'string' || !entry.studentId || entry.studentId.length > 150 || !validGradeDate(entry.date) || typeof entry.grade !== 'string' || !entry.grade.trim() || entry.grade.length > 20 || typeof entry.note !== 'string' || entry.note.length > 2000 || !Number.isSafeInteger(entry.updatedAt) || entry.updatedAt < 0 || typeof entry.deleted !== 'boolean' || (entry.type !== undefined && !['oral', 'written', 'practical'].includes(entry.type)) || (entry.examSlot !== undefined && (!Number.isInteger(entry.examSlot) || entry.examSlot < 1 || entry.examSlot > 4 || entry.type !== 'written')) || (entry.oralSlot !== undefined && (!['participation', 'presentation'].includes(entry.oralSlot) || (entry.type !== undefined && entry.type !== 'oral')))) throw new Error('Die Notendatei enthält ungültige oder doppelte Einträge.')
    ids.add(entry.id)
    return { id: entry.id, studentId: entry.studentId, date: entry.date, grade: entry.grade, note: entry.note, updatedAt: entry.updatedAt, deleted: entry.deleted, ...(entry.type !== undefined ? { type: entry.type } : {}), ...(entry.examSlot !== undefined ? { examSlot: entry.examSlot } : {}), ...(entry.oralSlot !== undefined ? { oralSlot: entry.oralSlot } : {}) }
  })
  return entries
}
export function mergeGrades(local, imported) {
  const merged = new Map(local.map(entry => [entry.id, entry]))
  for (const entry of imported) {
    const existing = merged.get(entry.id)
    if (!existing || entry.updatedAt > existing.updatedAt) merged.set(entry.id, entry)
  }
  return [...merged.values()]
}
export function validateWeights(weights) {
  return weights && ['written', 'practical', 'oral'].every(key => weights[key] === null || (Number.isFinite(weights[key]) && weights[key] >= 0 && weights[key] <= 100))
}
export function validateFinalGrades(values) {
  return values && typeof values === 'object' && !Array.isArray(values) && Object.entries(values).every(([id, value]) => id.length > 0 && id.length <= 150 && typeof value === 'string' && value.length <= 20)
}
export function serializeGrades(classId, classTitle, students, entries, weights = null, finalGrades = {}, writtenResetAt = null) {
  return JSON.stringify({ format: gradeFormat, version: 1, classId, classTitle, students: students.map(student => ({ id: String(student.id), name: student.name })), entries, ...(weights ? { weights } : {}), finalGrades, ...(writtenResetAt != null ? { writtenResetAt } : {}) }, null, 2) + '\n'
}

// Existing files without a category contain oral grades.
export const gradeType = entry => entry.type || 'oral'
export function gradesForStudent(entries, studentId, type) {
  return entries.filter(entry => !entry.deleted && entry.studentId === String(studentId) && gradeType(entry) === type)
    .sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt - a.updatedAt)
}

export const oralSlotLabels = { participation: 'Wortmeldungen', presentation: 'Präsentationen' }
export const hasFixedOralSlots = classId => classId === '3bkgd1-1-grd'
export function oralSlot(entries, studentId, slot) {
  return gradesForStudent(entries, studentId, 'oral').find(entry => entry.oralSlot === slot) || null
}
export function assignOralSlots(entries, now = Date.now()) {
  const groups = new Map()
  for (const entry of entries) {
    if (entry.deleted || gradeType(entry) !== 'oral') continue
    const list = groups.get(entry.studentId) || []
    list.push(entry)
    groups.set(entry.studentId, list)
  }
  const replacements = new Map()
  for (const list of groups.values()) {
    const occupied = new Set(list.map(entry => entry.oralSlot).filter(Boolean))
    const available = Object.keys(oralSlotLabels).filter(slot => !occupied.has(slot))
    const unassigned = list.filter(entry => !entry.oralSlot).sort((a, b) => a.date.localeCompare(b.date) || a.updatedAt - b.updatedAt || a.id.localeCompare(b.id))
    unassigned.slice(0, available.length).forEach((entry, index) => replacements.set(entry.id, { ...entry, oralSlot: available[index], updatedAt: Math.max(now, entry.updatedAt + 1) }))
  }
  return replacements.size ? entries.map(entry => replacements.get(entry.id) || entry) : entries
}
export function updateOralSlot(entries, studentId, slot, value, options) {
  if (!Object.hasOwn(oralSlotLabels, slot) || typeof value !== 'string' || value.trim().length > 20 || !validGradeDate(options.date) || !Number.isSafeInteger(options.updatedAt)) throw new Error('Ungültige Eingabe für die mündliche Note.')
  const grade = value.trim()
  const previous = oralSlot(entries, studentId, slot)
  if (!previous && !grade) return entries
  if (previous && previous.grade === grade) return entries
  const updatedAt = Math.max(options.updatedAt, (previous?.updatedAt || 0) + 1)
  if (!grade) return entries.map(entry => entry.id === previous.id ? { ...entry, deleted: true, updatedAt } : entry)
  const next = previous ? { ...previous, grade, updatedAt, deleted: false } : { id: options.id, studentId: String(studentId), date: options.date, grade, note: '', updatedAt, deleted: false, type: 'oral', oralSlot: slot }
  return previous ? entries.map(entry => entry.id === previous.id ? next : entry) : [...entries, next]
}

export const hasFixedWrittenSlots = classId => classId === '3bkgd1-1-grd'
export function writtenSlot(entries, studentId, slot) {
  return gradesForStudent(entries, studentId, 'written').find(entry => entry.examSlot === slot) || null
}
export function updateWrittenSlot(entries, studentId, slot, value, options) {
  if (!Number.isInteger(slot) || slot < 1 || slot > 4 || typeof value !== 'string' || value.trim().length > 20 || !validGradeDate(options.date) || !Number.isSafeInteger(options.updatedAt)) throw new Error('Ungültige Eingabe für die Klassenarbeit.')
  const grade = value.trim()
  const previous = writtenSlot(entries, studentId, slot)
  if (!previous && !grade) return entries
  if (previous && previous.grade === grade) return entries
  const updatedAt = Math.max(options.updatedAt, (previous?.updatedAt || 0) + 1)
  if (!grade) return entries.map(entry => entry.id === previous.id ? { ...entry, deleted: true, updatedAt } : entry)
  const next = previous ? { ...previous, grade, updatedAt, deleted: false } : { id: options.id, studentId: String(studentId), date: options.date, grade, note: '', updatedAt, deleted: false, type: 'written', examSlot: slot }
  return previous ? entries.map(entry => entry.id === previous.id ? next : entry) : [...entries, next]
}
export function writtenSlotAverage(entries, studentId) {
  const slots = [1, 2, 3, 4].map(slot => writtenSlot(entries, studentId, slot)).filter(Boolean)
  if (!slots.length) return null
  const values = slots.map(entry => {
    const text = entry.grade.trim().replace(',', '.')
    if (!/^[1-6](?:\.\d+)?$/.test(text)) return NaN
    const value = Number(text)
    return value >= 1 && value <= 6 ? value : NaN
  })
  return values.every(Number.isFinite) ? values.reduce((sum, value) => sum + value, 0) / values.length : null
}
export function applyWrittenReset(entries, timestamp) {
  if (!Number.isSafeInteger(timestamp) || timestamp < 0) return entries
  return entries.filter(entry => gradeType(entry) !== 'written' || entry.updatedAt > timestamp)
}

const categories = ['written', 'practical', 'oral']
export function weightedAverage(entries, studentId, weights) {
  if (!weights || categories.some(key => !Number.isFinite(weights[key])) || Math.abs(categories.reduce((sum, key) => sum + weights[key], 0) - 100) > 0.001) return null
  let result = 0
  for (const key of categories) {
    if (!weights[key]) continue
    const grades = gradesForStudent(entries, studentId, key)
    if (!grades.length) return null
    const values = grades.map(entry => {
      const text = entry.grade.trim().replace(',', '.')
      if (!/^[1-6](?:\.\d+)?$/.test(text)) return NaN
      const value = Number(text)
      return value >= 1 && value <= 6 ? value : NaN
    })
    if (values.some(value => !Number.isFinite(value))) return null
    result += values.reduce((sum, value) => sum + value, 0) / values.length * weights[key] / 100
  }
  return result
}

