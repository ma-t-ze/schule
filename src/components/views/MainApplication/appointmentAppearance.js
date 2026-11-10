export const appointmentColors = [
  { label: 'Standard', value: null },
  { label: 'Rot', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Grün', value: 'green' }
]

const palette = {
  red: { background: '#fee2e2', ink: '#991b1b', border: '#dc2626' },
  orange: { background: '#ffedd5', ink: '#9a3412', border: '#ea580c' },
  green: { background: '#dcfce7', ink: '#166534', border: '#16a34a' }
}

export function appointmentStyle(item) {
  const colors = palette[item?.event_color] || (item?.category === 'exam'
    ? { background: '#b91c1c', ink: '#ffffff', border: '#991b1b' }
    : { background: '#d8ebdf', ink: '#22563a', border: '#afd0bb' })
  return {
    '--appointment-bg': colors.background,
    '--appointment-ink': colors.ink,
    '--appointment-border': colors.border
  }
}
