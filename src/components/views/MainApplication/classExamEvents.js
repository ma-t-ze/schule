// Dates are stored only in school_upcoming and shared with the calendar.
export function examDateLabel(items, examKey) {
  const item = items.find(entry => entry.exam_key === examKey)
  if (!item?.event_date) return 'nicht festgelegt'
  const label = date => new Date(date + 'T12:00:00').toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
  return item.end_date ? `${label(item.event_date)} – ${label(item.end_date)}` : label(item.event_date)
}
