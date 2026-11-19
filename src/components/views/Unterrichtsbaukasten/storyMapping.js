export function safeStoryLink(url) {
  const clean = String(url || '').trim()
  if (/^[\u0000-\u0020]|[\u0000-\u001f]/.test(clean)) return null
  if (/^https?:\/\//i.test(clean) || /^mailto:[^\s]+$/i.test(clean)) return clean
  if ((clean.startsWith('/') && !clean.startsWith('//') && !clean.includes('\\')) || clean.startsWith('#')) return clean
  return null
}
export function storyInline(text) {
  const source = String(text || '').replace(/<br\s*\/?\s*>/gi, '\n')
  const pattern = /\[([^\]]+)\]\(([^\s)]*)(?:\s+"[^"]*")?\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*\n]+)\*/g
  const tokens = []
  let cursor = 0
  for (const match of source.matchAll(pattern)) {
    if (match.index > cursor) tokens.push({ type: 'text', text: source.slice(cursor, match.index) })
    if (match[1] !== undefined) {
      const href = safeStoryLink(match[2])
      tokens.push(href ? { type: 'link', href, children: storyInline(match[1]) } : { type: 'text', text: match[0] })
    } else if (match[3] !== undefined) tokens.push({ type: 'strong', children: storyInline(match[3]) })
    else if (match[4] !== undefined) tokens.push({ type: 'code', text: match[4] })
    else tokens.push({ type: 'em', children: storyInline(match[5]) })
    cursor = match.index + match[0].length
  }
  if (cursor < source.length) tokens.push({ type: 'text', text: source.slice(cursor) })
  return tokens
}
function plain(text) { return text.replace(/\*\*|`|<br\s*\/?>/gi, '').trim() }
export function storyTableCells(line) {
  const cells = []
  let cell = '', escaped = false, code = false
  for (const char of line.trim()) {
    if (escaped) { cell += char === '|' ? '|' : '\\' + char; escaped = false; continue }
    if (char === '\\') { escaped = true; continue }
    if (char === '`') code = !code
    if (char === '|' && !code) { cells.push(cell.trim()); cell = '' } else cell += char
  }
  if (escaped) cell += '\\'
  cells.push(cell.trim())
  if (cells[0] === '') cells.shift()
  if (cells[cells.length - 1] === '') cells.pop()
  return cells
}
function cards(text) {
  return text.replace(/<br\s*\/?\s*>/gi, '\n').split(/\n\s*\n|\n(?=\s*(?:[-*] |\d+\. ))/).map(value => value.trim()).filter(Boolean).map(value => value.replace(/&#10;/g, '\n'))
}
function taskList(text, column) {
  if (!text.trim()) return []
  return text.split(/<br\s*\/?\s*>|\n/gi).map(value => value.trim()).filter(Boolean).map((title, index) => ({
    id: `phase-${column}-task-${index}`, number: plain(title).match(/^(\d+)\./)?.[1] || null,
    title: title.replace(/&#10;/g, '\n'), subtasks: [], annotations: []
  }))
}
export function parseStoryMapping(source) {
  const lines = String(source || '').replace(/\r\n/g, '\n').split('\n')
  let headerIndex = -1, columns = []
  for (let index = 0; index < lines.length - 1; index++) {
    if (!lines[index].includes('|') || !/^\s*\|?\s*:?-{3,}/.test(lines[index + 1])) continue
    const header = storyTableCells(lines[index])
    const names = header.map(plain)
    if (!/^(?:aktivität|aktivitäten|phase)$/i.test(names[0] || '') && !(names.some(name => /einleitung|einstieg/i.test(name)) && names.some(name => /hauptteil/i.test(name)) && names.some(name => /schluss/i.test(name)))) continue
    headerIndex = index
    columns = header.map((name, index) => ({ index, name: plain(name) })).filter(item => item.index > 0)
    break
  }
  if (headerIndex < 0) return null
  const phases = columns.map(column => ({ id: `phase-${column.index}`, title: column.name, column: column.index, tasks: [] }))
  const rows = []
  let end = headerIndex + 2
  for (; end < lines.length && lines[end].trim().startsWith('|'); end++) rows.push(storyTableCells(lines[end]))
  const taskRow = rows.find(row => /^tasks?$/i.test(plain(row[0] || '')))
  if (taskRow) for (const phase of phases) phase.tasks = taskList(taskRow[phase.column] || '', phase.column)
  const extraRows = []
  for (const row of rows) {
    const label = plain(row[0] || '')
    if (/^tasks?$/i.test(label)) continue
    if (/subtasks?/i.test(label)) {
      const number = label.match(/task\s*(\d+)/i)?.[1]
      for (const phase of phases) {
        const content = row[phase.column] || ''
        if (!content.trim()) continue
        let task = number ? phase.tasks.find(item => item.number === number) : phase.tasks[0]
        if (!task) {
          task = { id: `${phase.id}-task-${phase.tasks.length}`, number, title: number ? `Task ${number}` : label || 'Aufgabe', subtasks: [], annotations: [] }
          phase.tasks.push(task)
        }
        task.subtasks.push(...cards(content))
      }
    } else if (row.slice(1).some(value => value.trim())) {
      extraRows.push({ label, values: phases.map(phase => ({ phase: phase.title, text: row[phase.column] || '' })).filter(item => item.text.trim()) })
    }
  }
  const heading = lines.slice(0, headerIndex).find(line => /^#\s+/.test(line))
  const summary = lines.slice(0, headerIndex).filter(line => line.trim() && line !== heading)
  return { title: heading ? heading.replace(/^#\s+/, '') : 'Storymapping', summary, phases, extraRows, remainder: lines.slice(end).join('\n').trim() }
}

export function storyMappingGrid(map) {
  if (!map) return { phases: [], columnCount: 0 }
  let column = 1
  let taskNumber = 1
  const phases = map.phases.map(phase => {
    const start = column
    const tasks = phase.tasks.map(task => {
      const number = String(taskNumber)
      taskNumber++
      return {
        ...task, taskIndex: phase.tasks.indexOf(task), column: column++, displayNumber: number,
        title: task.title.replace(/^(\*\*)?\d+[.)]\s*/, '$1'),
        subtasks: task.subtasks.map((text, index) => ({
          number: `${number}.${index + 1}`, subtaskIndex: index,
          text: text.replace(/^\s*(?:[-*]\s+)?(?:\*\*)?\d+\.\d+(?:\.\d+)*\.?(?:\*\*)?\s*[:·–-]?\s+(?=\S)/, ''),
          row: index + 5
        }))
      }
    })
    if (!tasks.length) column++
    return { ...phase, phaseIndex: map.phases.indexOf(phase), start, span: Math.max(1, tasks.length), tasks }
  })
  return { phases, columnCount: column - 1 }
}

export function storyPhaseHeading(title) {
  const name = title.match(/einleitung|einstieg|hauptteil|schluss/i)?.[0] || title.split(/\s*[·:–—]\s*|(?=Als Schüler)/i)[0].trim()
  const range = title.match(/(\d+(?:[.,]\d+)?)\s*[–—-]\s*(\d+(?:[.,]\d+)?)\s*(?:Min(?:uten)?\.?)/i)
  if (range) {
    const duration = Number(range[2].replace(',', '.')) - Number(range[1].replace(',', '.'))
    if (duration > 0) return `${name} · ${String(duration).replace('.', ',')} Min.`
  }
  const time = title.match(/(\d+(?:[.,]\d+)?)\s*(?:Min(?:uten)?\.?)/i)
  return time ? `${name} · ${time[1]} Min.` : name
}

export function storyPhaseContent(title) {
  const story = String(title || '').match(/Als Schüler[\s\S]*/i)
  if (story) return story[0].trim()
  return String(title || '')
    .replace(/^(?:einleitung|einstieg|hauptteil|schluss)\s*(?:[·:–—-]\s*)?/i, '')
    .replace(/^\s*(?:\(\s*)?(?:ca\.\s*)?\d+(?:[.,]\d+)?(?:\s*[–—-]\s*\d+(?:[.,]\d+)?)?\s*Min(?:uten)?\.?\s*\)?\s*(?:[·:–—-]\s*)?/i, '')
    .trim()
}
