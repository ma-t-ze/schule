export const periods = [
  { label: 'LP1', className: '1BFD1', subject: 'GRD', source: '1bfd1-bpk', weeks: [2, 3, 4], dates: '11.–29.01.2027' },
  { label: 'LP2', className: '3BKGD1/1', subject: 'GRD', source: '3bkgd1-1', weeks: [5, 7, 8], dates: '01.–05.02. und 15.–26.02.2027' },
  { label: 'LP3', className: '3TGG1/2', subject: 'MET', source: '3tgg1-2', weeks: [9, 10, 11], dates: '01.–19.03.2027' },
  { label: 'LP4', className: '3BKGD1/1', subject: 'MET', examSubject: 'Medientechnik', source: '3bkgd1-1-met', weeks: [14, 15, 16], dates: '05.–23.04.2027' }
]

export const periodForRow = (planId, row) => periods.find(period =>
  period.source === planId && period.weeks.includes(Number(row?.[0]))
)
export function examRemark(planId, row, remark) {
  const period = periodForRow(planId, row)
  if (!period) return remark
  const note = `${period.label}: ${period.className} – ${period.subject}${period.examSubject ? ` (Prüfungsfach: ${period.examSubject})` : ''}`
  return remark.includes(note) ? remark : [remark, note].filter(Boolean).join('; ')
}
export function isRedPlanRow(planId, row) {
  return Boolean(periodForRow(planId, row)) ||
    (planId === '1bfd1-bpk' && ['03.03.27', '10.03.27', '17.03.27'].includes(row?.[1]))
}
