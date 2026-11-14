export const prototypeBase = '/3tgg2/entwicklung-einer-app-design-thinking/klickdummy'
export const variants = [
  { id: 'a', label: 'Version A', title: 'Woche im Blick', focus: 'Kalender und Kostenübersicht', description: 'Zuerst das Budget, dann den Wochentag wählen. Gerichte und ihre Kosten bleiben im Wochenplan sichtbar.', source: 'Alexis, Maria – Subtasks.pdf', reason: 'Klarer Ablauf von Budgeteingabe über Tagesauswahl bis zur Bestätigung; geplante Kosten und Bearbeitung sind im Entwurf nachvollziehbar.' },
  { id: 'b', label: 'Version B', title: 'Liste und Zuordnung', focus: 'Essen sammeln, dann Tagen zuordnen', description: 'Zuerst Essen in einer Liste sammeln und anschließend den Schultagen zuordnen.', source: 'Micha, David - Subtasks.pdf', reason: 'Der Entwurf beginnt mit einer Gerichteliste: hinzufügen, entfernen und anschließend zuordnen. Das unterscheidet sich vom kalenderbasierten Einstieg in Version A.' },
  { id: 'c', label: 'Version C', title: 'Entdecken und planen', focus: 'Visuelle Auswahl und Favoriten', description: 'Gerichte entdecken, Favoriten markieren und direkt einem Tag zuordnen.', source: 'Markos, Nisa – Subtasks.jpeg', reason: 'Eigenständiger visueller Ansatz mit Bildkarten, Favoriten, Budgetfilter und Einkaufsliste; ergänzt die beiden stärker geführten Ansätze.' }
]
export const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag']
export const meals = [
  { id: 'essen-1', title: 'Essen 1', cents: 350 },
  { id: 'essen-2', title: 'Essen 2', cents: 400 },
  { id: 'essen-3', title: 'Essen 3', cents: 450 },
  { id: 'essen-4', title: 'Essen 4', cents: 500 },
  { id: 'essen-5', title: 'Essen 5', cents: 600 },
  { id: 'essen-6', title: 'Essen 6', cents: 800 },
  { id: 'essen-7', title: 'Essen 7', cents: 1000 }
]

export const criteria = [
  { id: 'usability', title: 'Bedienbarkeit', question: 'Konntet ihr ohne Hilfe einen Tag planen und ein Gericht austauschen? Wo wart ihr unsicher und welchen Klick oder welche Beschriftung würdet ihr ändern?' },
  { id: 'clarity', title: 'Übersichtlichkeit', question: 'Waren Navigation, Gerichte und der aktuelle Plan gut erkennbar? Was sollte anders angeordnet, hervorgehoben oder vereinfacht werden?' },
  { id: 'planning', title: 'Wochen- und Budgetplanung', question: 'Konntet ihr fünf Mittagessen unter 25 € planen und Restbudget sowie Einkaufsliste prüfen? Welche Information oder Rückmeldung fehlt euch?' }
]
export const money = cents => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(cents / 100)
export const mealById = id => meals.find(m => m.id === id)
export const emptyPlan = () => Object.fromEntries(days.map(day => [day, null]))
export function totalCost(plan) { return days.reduce((sum, day) => sum + (mealById(plan[day])?.cents || 0), 0) }
export function parseBudget(value) {
  const text = String(value).trim().replace(',', '.')
  if (!/^\d{1,3}(\.\d{1,2})?$/.test(text)) return null
  const cents = Math.round(Number(text) * 100)
  return cents >= 100 && cents <= 50000 ? cents : null
}
export function assignMeal(plan, day, mealId, budget) {
  if (!days.includes(day) || !mealById(mealId)) return { error: 'Bitte wähle einen Tag und ein Gericht.' }
  const next = { ...plan, [day]: mealId }
  if (totalCost(next) > budget) return { error: `Das Wochenbudget würde um ${money(totalCost(next) - budget)} überschritten. Wähle ein günstigeres Gericht oder ändere deinen Plan.` }
  return { plan: next }
}
export function createPrototypeState() { return { budget: 2500, budgetConfirmed: false, plan: emptyPlan(), maxPrice: 1000, likes: [], collection: [], checked: [] } }
export function restorePrototype(saved) {
  const state = createPrototypeState()
  if (!saved || typeof saved !== 'object') return state
  if (Number.isInteger(saved.budget) && saved.budget >= 100 && saved.budget <= 50000) state.budget = saved.budget
  state.budgetConfirmed = saved.budgetConfirmed === true
  for (const day of days) if (mealById(saved.plan?.[day])) state.plan[day] = saved.plan[day]
  if (totalCost(state.plan) > state.budget) state.plan = emptyPlan()
  if (Number.isInteger(saved.maxPrice) && saved.maxPrice >= 350 && saved.maxPrice <= 1000) state.maxPrice = saved.maxPrice
  state.likes = Array.isArray(saved.likes) ? saved.likes.filter(id => mealById(id)).slice(0, meals.length) : []
  state.collection = Array.isArray(saved.collection) ? [...new Set(saved.collection.filter(id => mealById(id)))].slice(0, meals.length) : []
  state.checked = Array.isArray(saved.checked) ? saved.checked.filter(s => typeof s === 'string').slice(0, 30) : []
  return state
}
export function shoppingItems(plan) {
  const counts = new Map()
  for (const day of days) {
    const meal = mealById(plan[day])
    if (meal) counts.set(meal.id, (counts.get(meal.id) || 0) + 1)
  }
  return [...counts].map(([id, count]) => ({ id, count, label: `${count} × ${mealById(id).title}`, cents: mealById(id).cents * count }))
}

export function createFeedback() {
  return { team: '', reviews: Object.fromEntries(variants.map(v => [v.id, Object.fromEntries(criteria.map(c => [c.id, '']))])), favorite: '', reason: '' }
}
export function restoreFeedback(saved) {
  const result = createFeedback()
  if (!saved || typeof saved !== 'object') return result
  for (const key of ['team', 'reason']) if (typeof saved[key] === 'string') result[key] = saved[key].slice(0, key === 'team' ? 200 : 1500)
  if (variants.some(v => v.id === saved.favorite)) result.favorite = saved.favorite
  for (const v of variants) for (const c of criteria) if (typeof saved.reviews?.[v.id]?.[c.id] === 'string') result.reviews[v.id][c.id] = saved.reviews[v.id][c.id].slice(0, 1500)
  return result
}
export function feedbackProblems(value) {
  const missing = []
  if (!value.team.trim()) missing.push('Teamnamen eintragen')
  for (const v of variants) for (const c of criteria) if (!value.reviews[v.id][c.id].trim()) missing.push(`${v.label}: ${c.title}`)
  if (!variants.some(v => v.id === value.favorite)) missing.push('Favoriten wählen')
  if (!value.reason.trim()) missing.push('Favoritenwahl begründen')
  return missing
}
