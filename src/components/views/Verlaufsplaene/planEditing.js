// Only these formatting elements survive browser edits or imported data.
const allowed = new Set(['STRONG', 'B', 'EM', 'I', 'BR', 'UL', 'OL', 'LI', 'P', 'SPAN'])
export function cleanTextHtml(html) {
  const source = document.createElement('template')
  source.innerHTML = html
  function copy(node) {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent)
    if (node.nodeType !== Node.ELEMENT_NODE || ['SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'SVG', 'MATH'].includes(node.tagName)) return document.createTextNode('')
    const element = document.createElement(allowed.has(node.tagName) ? node.tagName.toLowerCase() : 'span')
    if (node.tagName === 'SPAN' && node.classList.contains('label')) element.className = 'label'
    for (const child of node.childNodes) element.append(copy(child))
    return element
  }
  const target = document.createElement('div')
  for (const child of source.content.childNodes) target.append(copy(child))
  return target.innerHTML
}
function hash(text) {
  let value = 2166136261
  for (let i = 0; i < text.length; i++) value = Math.imul(value ^ text.charCodeAt(i), 16777619)
  return (value >>> 0).toString(16).padStart(8, '0')
}
export function collectBlocks(root) {
  const seen = new Map()
  const candidates = [...root.querySelectorAll('td, h1, h2, h3, h4, p, li, .thema-box')]
    .filter(el => !el.closest('.toc') && !el.querySelector('a') && el.textContent.trim())
  const set = new Set(candidates)
  return candidates.filter(el => {
    for (let parent = el.parentElement; parent && parent !== root; parent = parent.parentElement) if (set.has(parent)) return false
    return true
  }).map(el => {
    const base = cleanTextHtml(el.innerHTML)
    const signature = hash(el.tagName + base)
    const count = seen.get(signature) || 0
    seen.set(signature, count + 1)
    return { el, key: `${signature}-${count}`, base, original: el.innerHTML }
  })
}
export function validBlocks(value) {
  return Array.isArray(value) && value.length <= 1000 && value.every(block => block && /^[a-f0-9]{8}-\d+$/.test(block.key) && typeof block.base === 'string' && typeof block.html === 'string' && block.base.length <= 30000 && block.html.length <= 30000) && new Set(value.map(block => block.key)).size === value.length
}
