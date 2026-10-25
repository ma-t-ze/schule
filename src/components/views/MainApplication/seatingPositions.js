export const validLayout = (columns, rows) => Number.isInteger(columns) && Number.isInteger(rows) && columns >= 1 && columns <= 20 && rows >= 1 && rows <= 20
export const originalPositions = (studentCount = 30, capacity = 30) => Array.from({ length: capacity }, (_, index) => index < studentCount ? index : null)
export const validPositions = positions => Array.isArray(positions) && positions.length >= 1 && positions.length <= 400 && positions.every(value => value === null || (Number.isInteger(value) && value >= 0 && value < 400)) && new Set(positions.filter(value => value !== null)).size === positions.filter(value => value !== null).length
// Legacy empty seats had their own numbers. They now become null gaps in reading order.
export function normalizePositions(positions, studentCount) {
  if (!validPositions(positions)) return null
  const normalized = positions.map(value => value !== null && value >= studentCount ? null : value)
  const occupied = normalized.filter(value => value !== null)
  return occupied.length === studentCount && new Set(occupied).size === studentCount ? normalized : null
}
export function resizeSeating(positions, columns, rows) {
  if (!validLayout(columns, rows) || !validPositions(positions)) return null
  const capacity = columns * rows
  const occupied = positions.filter(value => value !== null)
  if (occupied.length > capacity) return null
  // Keep gaps where possible; compact only if occupied seats would otherwise disappear.
  const ordered = positions.slice(capacity).some(value => value !== null) ? occupied : positions
  return Array.from({ length: capacity }, (_, index) => ordered[index] ?? null)
}
export function migrateSeating(saved, students) {
  if (!Array.isArray(saved) || saved.length !== 30) return null
  const positions = saved.map(id => id === null ? null : students.findIndex(student => student.id === id))
  return normalizePositions(positions, students.length)
}
