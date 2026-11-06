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
    if (!entry || typeof entry.id !== 'string' || !entry.id || entry.id.length > 100 || ids.has(entry.id) || typeof entry.studentId !== 'string' || !entry.studentId || entry.studentId.length > 150 || !validGradeDate(entry.date) || typeof entry.grade !== 'string' || !entry.grade.trim() || entry.grade.length > 20 || typeof entry.note !== 'string' || entry.note.length > 2000 || !Number.isSafeInteger(entry.updatedAt) || entry.updatedAt < 0 || typeof entry.deleted !== 'boolean' || (entry.type !== undefined && !['oral', 'written'].includes(entry.type))) throw new Error('Die Notendatei enthält ungültige oder doppelte Einträge.')
    ids.add(entry.id)
    return { id: entry.id, studentId: entry.studentId, date: entry.date, grade: entry.grade, note: entry.note, updatedAt: entry.updatedAt, deleted: entry.deleted, ...(entry.type !== undefined ? { type: entry.type } : {}) }
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
export function serializeGrades(classId, classTitle, students, entries) {
  return JSON.stringify({ format: gradeFormat, version: 1, classId, classTitle, students: students.map(student => ({ id: String(student.id), name: student.name })), entries }, null, 2) + '\n'
}

// Existing files without a category contain oral grades.
export const gradeType = entry => entry.type || 'oral'
export function gradesForStudent(entries, studentId, type) {
  return entries.filter(entry => !entry.deleted && entry.studentId === String(studentId) && gradeType(entry) === type)
    .sort((a, b) => b.date.localeCompare(a.date) || b.updatedAt - a.updatedAt)
}
