// Set the target before Vue Router handles the click, so normal browser tab
// navigation works for both RouterLink and ordinary internal anchors.
export function installNewTabLinks(root = document) {
  const onClick = event => {
    const link = event.target?.closest?.('a[href]')
    if (!link || event.defaultPrevented || link.hasAttribute('download') || link.hasAttribute('target')) return
    const href = link.getAttribute('href')
    if (!href || href.startsWith('#')) return
    const destination = new URL(href, link.baseURI)
    const current = new URL(link.ownerDocument.location.href)
    if (!['http:', 'https:'].includes(destination.protocol) || destination.origin !== current.origin) return
    if (destination.hash && destination.pathname === current.pathname && destination.search === current.search) return
    link.target = '_blank'
    link.rel = [...new Set([...link.relList, 'noopener', 'noreferrer'])].join(' ')
  }
  root.addEventListener('click', onClick, true)
  return () => root.removeEventListener('click', onClick, true)
}
