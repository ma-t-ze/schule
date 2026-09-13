export const dayNumber = (date) => Date.parse(`${date}T00:00:00Z`) / 86400000
export function learningPlan(total, learned, today) {
  const start = dayNumber('2026-09-10')
  const finish = dayNumber('2026-10-05') // October 5–11 reserved for revision
  const day = dayNumber(today)
  const days = Math.max(0, finish - Math.max(start, day))
  const daily = 8
  const expected = Math.min(total, Math.max(0, day - start) * daily)
  const target = Math.min(total, Math.max(0, day - start + 1) * daily)
  return { days, expected, target, behind: Math.max(0, expected - learned),
    daily,
    todayRemaining: target - learned, remaining: Math.max(0, total - learned) }
}
