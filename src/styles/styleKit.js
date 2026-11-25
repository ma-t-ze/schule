export const STYLE_KIT_KEY = 'school-primevue-style-kit-v1'
const colors = { primary: '#187b5b', accent: '#8a75b8', background: '#f4f7f5', surface: '#ffffff', text: '#23332d', border: '#dce7e0' }
export function applyStyleKit(data) {
  const root = document.documentElement
  for (const [id, fallback] of Object.entries(colors)) {
    const value = data?.colors?.find?.(item => item.id === id)?.value
    root.style.setProperty(`--school-${id}`, typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value) ? value : fallback)
  }
  const radius = ['4', '8', '16', '999'].includes(data?.radius) ? data.radius : '8'
  root.style.setProperty('--school-button-radius', `${radius}px`)
  const panelRadius = ['0', '4', '6', '8', '12'].includes(data?.panelRadius) ? data.panelRadius : '4'
  root.style.setProperty('--school-panel-radius', `${panelRadius}px`)
  root.dataset.schoolButtonSize = ['small', 'normal', 'large'].includes(data?.buttonSize) ? data.buttonSize : 'normal'
}
export function loadStyleKit() {
  try { applyStyleKit(JSON.parse(localStorage.getItem(STYLE_KIT_KEY) || 'null')) }
  catch { applyStyleKit(null) }
}
