const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
})
export function breakAlarmState(date) {
  const parts = Object.fromEntries(formatter.formatToParts(date).filter(part => part.type !== 'literal').map(part => [part.type, Number(part.value)]))
  const weekday = new Date(Date.UTC(parts.year, parts.month - 1, parts.day)).getUTCDay()
  const seconds = parts.hour * 3600 + parts.minute * 60 + parts.second
  const schoolDay = weekday >= 1 && weekday <= 5
  const breaks = [{ at: 9 * 3600 + 30 * 60, label: '9:30 Uhr' }, { at: 11 * 3600 + 20 * 60, label: '11:20 Uhr' }]
  return { weekday, seconds, schoolDay, active: schoolDay ? breaks.find(pause => seconds >= pause.at - 120 && seconds < pause.at) || null : null, next: schoolDay ? breaks.find(pause => seconds < pause.at) || null : null }
}
