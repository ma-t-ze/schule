// Allocate non-overlapping lanes; clip ranges to the visible Monday–Sunday row.
export function calendarRanges(notes, keys) {
  const segments = notes.flatMap(note => {
    if (!note.event_date) return []
    const occupied = keys.map((key, index) => key >= note.event_date && key <= (note.end_date || note.event_date) ? index : -1).filter(index => index >= 0)
    return occupied.length ? [{ note, start: occupied[0], end: occupied.at(-1), continuesBefore: note.event_date < keys[0], continuesAfter: (note.end_date || note.event_date) > keys.at(-1) }] : []
  }).sort((a, b) => a.start - b.start || b.end - a.end || a.note.id - b.note.id)
  const lanes = []
  return segments.map(segment => {
    let lane = lanes.findIndex(end => end < segment.start)
    if (lane === -1) lane = lanes.length
    lanes[lane] = segment.end
    return { ...segment, lane }
  })
}
