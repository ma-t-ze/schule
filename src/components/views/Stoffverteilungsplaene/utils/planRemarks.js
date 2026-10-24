// Official exam dates must remain visible alongside locally saved remarks.
export function mergePlanRemark(source, saved) {
  const examNote = source.split(';').map(part => part.trim())
    .find(part => part.startsWith('BKGD-Aufnahmeprüfungen:'))
  if (!examNote || saved.includes(examNote)) return saved
  return [saved, examNote].filter(Boolean).join('; ')
}
