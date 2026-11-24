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
  const practical = { ...entry, id: 'practical-1', type: 'practical' }
  assert.deepEqual(gradesForStudent(parseGrades(encode([practical]), 'test-class'), 'student-1', 'practical'), [practical])
  assert.deepEqual(gradesForStudent(parsed, 'other-student', 'oral'), [])
  assert.throws(() => parseGrades(encode([{ ...written, type: 'unknown' }]), 'test-class'))
})

test('written slots survive serialization and old written grades are excluded after reset', async () => {
  const { writtenSlot, applyWrittenReset, hasFixedWrittenSlots } = await import('./localOralGrades.js')
  const written = { ...entry, id: 'written-slot', type: 'written', examSlot: 2, updatedAt: 300 }
  const parsed = parseGrades(encode([entry, written]), 'test-class')
  assert.equal(writtenSlot(parsed, 'student-1', 2).grade, '2+')
  assert.equal(writtenSlot(parsed, 'student-1', 1), null)
  assert.deepEqual(applyWrittenReset(parsed, 300), [entry])
  assert.deepEqual(applyWrittenReset(parsed, 299), parsed)
  assert.equal(hasFixedWrittenSlots('3bkgd1-1-grd'), true)
  assert.equal(hasFixedWrittenSlots('3tgg2'), false)
  assert.throws(() => parseGrades(encode([{ ...written, examSlot: 6 }]), 'test-class'))
  assert.throws(() => parseGrades(encode([{ ...written, type: 'oral' }]), 'test-class'))
})

test('written slot preview averages entered numeric KA grades without inventing missing grades', async () => {
  const { writtenSlotAverage } = await import('./localOralGrades.js')
  const grade = (examSlot, value) => ({ ...entry, id: `written-${examSlot}`, type: 'written', examSlot, grade: value })
  assert.equal(writtenSlotAverage([], 'student-1'), null)
  assert.equal(writtenSlotAverage([grade(1, '2'), grade(3, '3,5')], 'student-1'), 2.75)
  assert.equal(writtenSlotAverage([grade(1, '2+'), grade(2, '3')], 'student-1'), null)
  assert.equal(writtenSlotAverage([grade(1, '2')], 'other-student'), null)
})

test('direct written slot entry supports adding, updating and clearing without changing other grades', async () => {
  const { updateWrittenSlot, writtenSlot } = await import('./localOralGrades.js')
  const options = { id: 'ka-1', date: '2026-11-23', updatedAt: 400 }
  const added = updateWrittenSlot([entry], 'student-1', 1, '2,5', options)
  assert.equal(writtenSlot(added, 'student-1', 1).grade, '2,5')
  const updated = updateWrittenSlot(added, 'student-1', 1, '2', options)
  assert.equal(writtenSlot(updated, 'student-1', 1).grade, '2')
  assert(updated[1].updatedAt > added[1].updatedAt)
  const cleared = updateWrittenSlot(updated, 'student-1', 1, '', options)
  assert.equal(writtenSlot(cleared, 'student-1', 1), null)
  assert.equal(cleared[1].deleted, true)
  assert.deepEqual(cleared[0], entry)
  assert.throws(() => updateWrittenSlot([], 'student-1', 6, '2', options))
})

test('3TGG1/2 uses five written slots and assigns P notes to presentations', async () => {
  const { writtenSlots, assignTggOralSlots, writtenSlotAverage } = await import('./localOralGrades.js')
  assert.deepEqual(writtenSlots('3tgg1-2'), [1, 2, 3, 4, 5])
  assert.deepEqual(writtenSlots('3bkgd1-1-grd'), [1, 2, 3, 4])
  const records = [entry, { ...entry, id: 'p1', note: 'P' }, { ...entry, id: 'p2', note: 'P' }]
  const assigned = assignTggOralSlots(records, 300)
  assert.deepEqual(assigned.map(item => item.oralSlot), ['participation', 'presentation', 'presentation'])
  assert.deepEqual(assignTggOralSlots(assigned, 400), assigned)
  assert.equal(writtenSlotAverage([{ ...entry, type: 'written', examSlot: 5 }], 'student-1'), null)
  assert.equal(writtenSlotAverage([{ ...entry, grade: '2', type: 'written', examSlot: 5 }], 'student-1'), 2)
})

test('oral slots follow chronological order and preserve grades, dates and notes', async () => {
  const { assignOralSlots, oralSlot, updateOralSlot } = await import('./localOralGrades.js')
  const earlier = { ...entry, id: 'earlier', type: 'oral', date: '2026-10-01', grade: '2', note: 'mündlich' }
  const later = { ...entry, id: 'later', type: 'oral', date: '2026-11-01', grade: '3', note: 'Präsentation' }
  const assigned = assignOralSlots([later, earlier], 300)
  assert.equal(oralSlot(assigned, 'student-1', 'participation').id, 'earlier')
  assert.equal(oralSlot(assigned, 'student-1', 'presentation').id, 'later')
  assert.equal(oralSlot(assigned, 'student-1', 'presentation').note, 'Präsentation')
  assert.deepEqual(assignOralSlots(assigned, 400), assigned)
  const changed = updateOralSlot(assigned, 'student-1', 'presentation', '2,5', { id: 'new', date: '2026-11-23', updatedAt: 500 })
  assert.equal(oralSlot(changed, 'student-1', 'presentation').grade, '2,5')
  assert.equal(oralSlot(changed, 'student-1', 'presentation').note, 'Präsentation')
  assert.equal(oralSlot(changed, 'student-1', 'participation').grade, '2')
  const cleared = updateOralSlot(changed, 'student-1', 'presentation', '', { id: 'new', date: '2026-11-23', updatedAt: 600 })
  assert.equal(oralSlot(cleared, 'student-1', 'presentation'), null)
  assert.throws(() => parseGrades(encode([{ ...earlier, oralSlot: 'other' }]), 'test-class'))
  assert.throws(() => parseGrades(encode([{ ...earlier, type: 'written', oralSlot: 'participation' }]), 'test-class'))
})
