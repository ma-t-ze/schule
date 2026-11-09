import { randomUUID } from 'node:crypto'
import { mkdir, readFile, writeFile, unlink } from 'node:fs/promises'
import path from 'node:path'

export function createLocalAttendanceStore(root) {
  return {
    async save(classId, pdf) {
      if (!/^[a-z0-9][a-z0-9-]{0,99}$/.test(classId)) throw new Error('Ungültige Klasse.')
      const roster = JSON.parse(await readFile(path.join(root, 'src/local-sitzplaene/klassen', classId, 'klasse.json'), 'utf8'))
      if (roster.id !== classId || !Array.isArray(roster.students)) throw new Error('Unbekannte lokale Klasse.')
      if (!Buffer.isBuffer(pdf) || pdf.length > 20 * 1024 * 1024 || pdf.subarray(0, 5).toString() !== '%PDF-' || !pdf.subarray(-1024).includes(Buffer.from('%%EOF'))) throw new Error('Ungültige PDF.')
      const parts = Object.fromEntries(new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' }).formatToParts(new Date()).map(part => [part.type, part.value]))
      const date = `${parts.year}-${parts.month}-${parts.day}`
      const time = `${parts.hour}-${parts.minute}-${parts.second}`
      const filename = `Anwesenheit_${classId}_${date}_${time}_${randomUUID().slice(0, 8)}.pdf`
      const directory = path.join(root, 'local-anwesenheit')
      await mkdir(directory, { recursive: true, mode: 0o700 })
      const destination = path.join(directory, filename)
      // Each snapshot is a new file; never overwrite an earlier attendance record.
      try { await writeFile(destination, pdf, { flag: 'wx', mode: 0o600 }) }
      catch (error) { if (error.code !== 'EEXIST') await unlink(destination).catch(() => {}); throw error }
      return { file: `local-anwesenheit/${filename}` }
    }
  }
}
