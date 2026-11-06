import test from 'node:test'
import assert from 'node:assert/strict'
import { parseGrades, serializeGrades, mergeGrades, validGradeDate, gradeStorageKey, gradeType, gradesForStudent } from './localOralGrades.js'
const entry = { id: 'grade-1', studentId: 'student-1', date: '2026-11-06', grade: '2+', note: 'Beitrag', updatedAt: 100, deleted: false }
const encode = entries => serializeGrades('test-class', 'Testklasse', [{ id: 'student-1', name: 'Testperson' }], entries)
test('local files retain grades and identify the class', () => {
  assert.deepEqual(parseGrades(encode([entry]), 'test-class'), [entry])
  assert.throws(() => parseGrades(encode([entry]), 'other-class'))
  assert.notEqual(gradeStorageKey('test-class'), gradeStorageKey('other-class'))
})
test('invalid dates, malformed records and duplicate IDs are rejected', () => {
  assert.equal(validGradeDate('2026-02-30'), false)
  assert.equal(validGradeDate('2028-02-29'), true)
  for (const patch of [{ date: '2026-02-30' }, { grade: '' }, { note: 5 }, { updatedAt: '100' }, { studentId: null }, { deleted: 'false' }]) {
    assert.throws(() => parseGrades(encode([{ ...entry, ...patch }]), 'test-class'))
  }
  assert.throws(() => parseGrades(encode([entry, entry]), 'test-class'))
})
test('merging preserves newer edits, unrelated entries and deletions', () => {
  const deleted = { ...entry, updatedAt: 200, deleted: true }
  const other = { ...entry, id: 'grade-2' }
  assert.deepEqual(mergeGrades([deleted], [entry, other]), [deleted, other])
  assert.deepEqual(mergeGrades([entry], [deleted]), [deleted])
  assert.deepEqual(mergeGrades([entry], [entry]), [entry])
})

test('oral legacy grades and written grades retain their category', () => {
  const written = { ...entry, id: 'written-1', type: 'written' }
  const parsed = parseGrades(encode([entry, written]), 'test-class')
  assert.equal(gradeType(parsed[0]), 'oral')
  assert.equal(gradeType(parsed[1]), 'written')
  assert.deepEqual(gradesForStudent(parsed, 'student-1', 'oral'), [entry])
  assert.deepEqual(gradesForStudent(parsed, 'student-1', 'written'), [written])
  assert.deepEqual(gradesForStudent(parsed, 'other-student', 'oral'), [])
  assert.throws(() => parseGrades(encode([{ ...written, type: 'unknown' }]), 'test-class'))
})
