<script setup>
import { computed, ref, watch } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import { PhCalendarBlank, PhWallet, PhForkKnife, PhShoppingCart, PhHeart, PhArrowLeft, PhCheck, PhMagnifyingGlass, PhPlus, PhTrash } from '@phosphor-icons/vue'
import WireframeImage from './WireframeImage.vue'
import { variants, days, meals, money, mealById, totalCost, parseBudget, assignMeal, createPrototypeState, restorePrototype, shoppingItems } from './model'

const props = defineProps({ variant: { type: String, required: true } })
const definition = computed(() => variants.find(v => v.id === props.variant) || variants[0])
const state = ref(createPrototypeState())
const screen = ref('budget')
const selectedDay = ref(days[0])
const selectedMeal = ref(null)
const budgetInput = ref('25')
const search = ref('')
const onlyLikes = ref(false)
const showFilters = ref(false)
const message = ref('')
const error = ref('')
const storageNotice = ref('')
const scrollArea = ref(null)
const key = () => `3tgg2-phase51-prototype-${definition.value.id}-mobile-v3`
const startScreen = () => definition.value.id === 'b' ? 'collection' : definition.value.id === 'c' ? 'discover' : 'calendar'
watch(() => props.variant, () => {
  try { state.value = restorePrototype(JSON.parse(localStorage.getItem(key()) || 'null')) }
  catch { state.value = createPrototypeState(); storageNotice.value = 'Testdaten können hier nicht gespeichert werden.' }
  budgetInput.value = String(state.value.budget / 100).replace('.', ',')
  screen.value = state.value.budgetConfirmed ? startScreen() : 'budget'
  selectedDay.value = days[0]; selectedMeal.value = null; search.value = ''; onlyLikes.value = false; message.value = ''; error.value = ''; showFilters.value = false
}, { immediate: true })
watch(state, value => {
  try { localStorage.setItem(key(), JSON.stringify(value)) }
  catch { storageNotice.value = 'Testdaten bleiben nur in dieser Ansicht erhalten.' }
}, { deep: true })
watch(screen, () => { if (scrollArea.value) scrollArea.value.scrollTop = 0 }, { flush: 'post' })
const total = computed(() => totalCost(state.value.plan))
const remaining = computed(() => state.value.budget - total.value)
const completedDays = computed(() => days.filter(day => state.value.plan[day]).length)
const shopping = computed(() => shoppingItems(state.value.plan))
const collected = computed(() => state.value.collection.map(mealById).filter(Boolean))
const visibleMeals = computed(() => meals.filter(m => m.cents <= state.value.maxPrice && (!onlyLikes.value || state.value.likes.includes(m.id)) && m.title.toLocaleLowerCase('de').includes(search.value.trim().toLocaleLowerCase('de'))))
const title = computed(() => ({ calendar: 'Wochentag wählen', collection: 'Meine Essensliste', allocation: 'Essen zuordnen', discover: 'Essen entdecken', plan: 'Meine Woche', budget: 'Wochenbudget', day: selectedDay.value, catalogue: definition.value.id === 'b' ? 'Zur Liste hinzufügen' : 'Essen auswählen', detail: selectedMeal.value?.title, success: 'Gespeichert', shop: 'Einkaufsliste' })[screen.value])
const daysShort = ['Mo', 'Di', 'Mi', 'Do', 'Fr']
function navigate(to) { screen.value = to; error.value = ''; message.value = '' }
function home() { navigate(startScreen()) }
function openDay(day) { selectedDay.value = day; navigate('day') }
function openMeal(meal) { selectedMeal.value = meal; navigate('detail') }
function editBudget() { budgetInput.value = String(state.value.budget / 100).replace('.', ','); navigate('budget') }
function saveBudget() {
  const cents = parseBudget(budgetInput.value)
  if (cents === null) { error.value = 'Betrag zwischen 1 und 500 € eingeben.'; return }
  if (cents < total.value) { error.value = `Der Plan kostet bereits ${money(total.value)}.`; return }
  state.value.budget = cents; state.value.budgetConfirmed = true; home()
}
function chooseMeal() {
  const result = assignMeal(state.value.plan, selectedDay.value, selectedMeal.value?.id, state.value.budget)
  if (result.error) { error.value = result.error; return }
  state.value.plan = result.plan; state.value.checked = []; navigate('success')
}
function allocate(day, id) {
  if (!id) { state.value.plan[day] = null; state.value.checked = []; return }
  const result = assignMeal(state.value.plan, day, id, state.value.budget)
  if (result.error) { error.value = result.error; return }
  state.value.plan = result.plan; state.value.checked = []; error.value = ''
}
function removeMeal(day) { state.value.plan[day] = null; state.value.checked = []; message.value = 'Essen entfernt.' }
function addToCollection(meal) {
  if (!state.value.collection.includes(meal.id)) state.value.collection.push(meal.id)
  navigate('collection'); message.value = `${meal.title} zur Liste hinzugefügt.`
}
function removeFromCollection(id) {
  state.value.collection = state.value.collection.filter(value => value !== id)
  // Assigned meals remain in the plan; removing a shortlist item does not silently delete a day.
  message.value = 'Aus der Essensliste entfernt. Geplante Tage bleiben erhalten.'
}
function like(id) { const i = state.value.likes.indexOf(id); if (i >= 0) state.value.likes.splice(i, 1); else state.value.likes.push(id) }
function reset() {
  state.value = createPrototypeState(); screen.value = 'budget'; budgetInput.value = '25'
  selectedDay.value = days[0]; selectedMeal.value = null; search.value = ''; onlyLikes.value = false; showFilters.value = false; message.value = ''; error.value = ''
}
const assignmentOptions = computed(() => [...new Set([...state.value.collection, ...Object.values(state.value.plan).filter(Boolean)])].map(mealById).filter(Boolean))
</script>

<template>
  <main class="prototype-page" :class="`variant-${definition.id}`">
    <div class="prototype-shell">
      <header class="test-toolbar"><RouterLink :to="{ name: '3tgg2-design-thinking', hash: '#phase-five-test' }">← Phase 5.1</RouterLink><strong>{{ definition.label }}</strong><Button label="Neu starten" text @click="reset" /></header>
      <div class="app-frame" aria-label="Mobiler Wireframe">
        <header class="phone-header"><strong>Essensplan</strong><span>{{ money(remaining) }} übrig</span></header>
        <div ref="scrollArea" class="app-content" :data-screen="screen">
          <p v-if="storageNotice" class="notice" role="status">{{ storageNotice }}</p>
          <div class="screen-heading"><Button v-if="!['calendar', 'collection', 'discover', 'budget'].includes(screen)" aria-label="Zur Startseite" text class="back-button" @click="home"><PhArrowLeft :size="18" /></Button><h1>{{ title }}</h1><span v-if="screen !== 'budget'" class="plan-count">{{ completedDays }}/5</span></div>
          <p v-if="error" class="notice error" role="alert">{{ error }}</p><p v-if="message" class="notice" role="status">{{ message }}</p>

          <form v-if="screen === 'budget'" class="budget-form" @submit.prevent="saveBudget">
            <PhWallet :size="32" /><p>Montag bis Freitag</p><label for="weekly-budget">Betrag in Euro</label><InputText id="weekly-budget" v-model="budgetInput" inputmode="decimal" maxlength="6" autocomplete="off" />
            <p class="helper">Testbudget: 25 €</p><Button type="submit" label="Budget bestätigen" />
          </form>

          <!-- A: The selected day drives the entire flow, as in the calendar sketches. -->
          <section v-else-if="screen === 'calendar'" class="calendar-screen">
            <div class="budget-summary"><div><span>Budget</span><strong>{{ money(state.budget) }}</strong></div><div><span>Geplant</span><strong>{{ money(total) }}</strong></div><div><span>Rest</span><strong>{{ money(remaining) }}</strong></div></div>
            <div class="calendar-label">Deine Schulwoche</div>
            <div class="week-calendar"><button v-for="(day, i) in days" :key="day" type="button" :aria-label="`${day} öffnen`" :class="{ planned: state.plan[day] }" @click="openDay(day)"><span>{{ daysShort[i] }}</span><PhCheck v-if="state.plan[day]" :size="22" /><PhPlus v-else :size="22" /><small>{{ state.plan[day] ? mealById(state.plan[day]).title : 'Planen' }}</small></button></div>
            <p class="helper">Wähle zuerst einen Wochentag.</p>
            <ul class="calendar-costs"><li v-for="day in days" :key="day"><button type="button" :aria-label="`${day} bearbeiten`" @click="openDay(day)"><strong>{{ day }}</strong><span>{{ mealById(state.plan[day])?.title || '—' }}</span><b>{{ state.plan[day] ? money(mealById(state.plan[day]).cents) : '—' }}</b></button></li></ul>
            <Button label="Einkaufsliste" outlined class="full-width" @click="navigate('shop')" />
          </section>

          <!-- B: A shortlist precedes assignment. No copy of A's day-card dashboard. -->
          <section v-else-if="screen === 'collection'" class="collection-screen">
            <p class="helper">1. Essen sammeln → 2. Tagen zuordnen</p>
            <div class="list-actions"><Button label="Essen hinzufügen" outlined @click="navigate('catalogue')"><PhPlus :size="17" /> Hinzufügen</Button><Button label="Tagen zuordnen" :disabled="!collected.length" @click="navigate('allocation')" /></div>
            <div v-if="!collected.length" class="empty-state"><PhForkKnife :size="30" /><p>Deine Liste ist noch leer.</p><p class="helper">Sammle zuerst Essen für deine Woche.</p></div>
            <ul v-else class="collection-list"><li v-for="meal in collected" :key="meal.id"><button type="button" class="collection-open" :aria-label="`${meal.title} ansehen`" @click="openMeal(meal)"><strong>{{ meal.title }}</strong><span>{{ money(meal.cents) }}</span></button><Button :aria-label="`${meal.title} aus Liste entfernen`" text @click="removeFromCollection(meal.id)"><PhTrash :size="18" /></Button></li></ul>
            <p class="helper" v-if="collected.length">Die Liste ist eine Vorauswahl. Kosten zählen erst nach der Tageszuordnung.</p>
            <Button v-if="completedDays" label="Wochenplan prüfen" outlined class="full-width" @click="navigate('plan')" />
          </section>
          <section v-else-if="screen === 'allocation'" class="allocation-screen">
            <p class="helper">Wähle pro Tag ein Essen aus deiner Liste.</p>
            <div v-for="day in days" :key="day" class="allocation-row"><label :for="`allocation-${day}`">{{ day }}</label><select :id="`allocation-${day}`" :value="state.plan[day] || ''" @change="allocate(day, $event.target.value); $event.target.value = state.plan[day] || ''"><option value="">Noch offen</option><option v-for="meal in assignmentOptions" :key="meal.id" :value="meal.id">{{ meal.title }} · {{ money(meal.cents) }}</option></select></div>
            <div class="total-line"><span>Geplant</span><strong>{{ money(total) }} / {{ money(state.budget) }}</strong></div><Button label="Zuordnung bestätigen" class="full-width" @click="navigate('plan')" />
          </section>

          <!-- C: visual discovery and learned preferences are the entry point. -->
          <section v-else-if="screen === 'discover'" class="discover-screen">
            <div class="discovery-actions"><Button label="Suche und Filter" outlined @click="navigate('catalogue')" /><Button label="Wochenplan" outlined @click="navigate('plan')" /></div>
            <div class="discovery-grid"><article v-for="meal in meals" :key="meal.id"><button type="button" class="discovery-card" :aria-label="`${meal.title} ansehen`" @click="openMeal(meal)"><WireframeImage /><span><strong>{{ meal.title }}</strong><b>{{ money(meal.cents) }}</b></span></button><Button :aria-label="`${meal.title}: Favorit`" :aria-pressed="state.likes.includes(meal.id)" text class="like-button" @click="like(meal.id)"><PhHeart :size="18" :weight="state.likes.includes(meal.id) ? 'fill' : 'regular'" /></Button></article></div>
          </section>

          <section v-else-if="screen === 'plan'" class="plan-screen"><p class="helper">Montag bis Freitag · {{ completedDays }} von 5 Tagen</p><div v-for="day in days" :key="day" class="plan-row"><div><strong>{{ day }}</strong><span>{{ mealById(state.plan[day])?.title || 'Noch offen' }}</span></div><b>{{ state.plan[day] ? money(mealById(state.plan[day]).cents) : '—' }}</b><Button :aria-label="`${day} bearbeiten`" text @click="definition.id === 'b' ? navigate('allocation') : openDay(day)">Ändern</Button></div><div class="total-line"><span>Gesamt</span><strong>{{ money(total) }}</strong></div><div class="screen-actions"><Button v-if="definition.id === 'b'" label="Zur Essensliste" outlined @click="navigate('collection')" /><Button label="Einkaufsliste" @click="navigate('shop')" /></div></section>

          <section v-else-if="screen === 'day'" class="day-detail"><div class="day-selection"><span>Mittagessen</span><strong>{{ mealById(state.plan[selectedDay])?.title || 'Noch nicht geplant' }}</strong><b>{{ state.plan[selectedDay] ? money(mealById(state.plan[selectedDay]).cents) : '—' }}</b></div><div class="screen-actions"><Button :label="state.plan[selectedDay] ? 'Essen austauschen' : 'Essen auswählen'" @click="navigate('catalogue')" /><Button v-if="state.plan[selectedDay]" label="Essen entfernen" outlined @click="removeMeal(selectedDay)" /><Button label="Zurück zur Woche" outlined @click="home" /></div></section>

          <section v-else-if="screen === 'catalogue'" class="catalogue-screen">
            <div class="search-field"><PhMagnifyingGlass :size="18" /><label class="sr-only" for="meal-search">Essen suchen</label><InputText id="meal-search" v-model="search" placeholder="Essen suchen …" /></div>
            <div v-if="definition.id === 'c'" class="filter-toggle"><Button :label="showFilters ? 'Filter schließen' : 'Filter'" text :aria-expanded="showFilters" @click="showFilters = !showFilters" /><span>{{ visibleMeals.length }} Essen</span></div>
            <div v-if="showFilters && definition.id === 'c'" class="filters"><label for="max-price">Bis {{ money(state.maxPrice) }}</label><input id="max-price" v-model.number="state.maxPrice" type="range" min="350" max="1000" step="50" /><div class="check-line"><Checkbox v-model="onlyLikes" binary inputId="only-likes" /><label for="only-likes">Nur Favoriten</label></div></div>
            <ul class="meal-list"><li v-for="meal in visibleMeals" :key="meal.id"><button class="meal-open" type="button" :aria-label="`${meal.title} ansehen`" @click="openMeal(meal)"><strong>{{ meal.title }}</strong><b>{{ money(meal.cents) }}</b><span aria-hidden="true">›</span></button></li></ul><div v-if="!visibleMeals.length" class="empty-state"><p>Keine passende Auswahl.</p><Button label="Filter zurücksetzen" outlined @click="search = ''; state.maxPrice = 1000; onlyLikes = false" /></div>
          </section>

          <section v-else-if="screen === 'detail' && selectedMeal" class="meal-detail"><WireframeImage v-if="definition.id === 'c'" class="detail-placeholder" /><strong class="meal-price">{{ money(selectedMeal.cents) }}</strong>
            <template v-if="definition.id === 'b'"><p class="helper">Erst zur Liste hinzufügen, anschließend den Tagen zuordnen.</p><div class="screen-actions"><Button :label="state.collection.includes(selectedMeal.id) ? 'Bereits in der Liste' : 'Zur Liste hinzufügen'" :disabled="state.collection.includes(selectedMeal.id)" @click="addToCollection(selectedMeal)" /><Button label="Zur Essensliste" outlined @click="navigate('collection')" /><Button label="Andere Essen ansehen" outlined @click="navigate('catalogue')" /></div></template>
            <template v-else><label v-if="definition.id === 'c'" for="assign-day">Für welchen Tag?</label><select v-if="definition.id === 'c'" id="assign-day" v-model="selectedDay"><option v-for="day in days" :key="day">{{ day }}</option></select><p v-else class="day-context">Für {{ selectedDay }}</p><p v-if="state.plan[selectedDay]" class="helper">Ersetzt {{ mealById(state.plan[selectedDay]).title }}.</p><div class="screen-actions"><Button label="Auswahl bestätigen" @click="chooseMeal" /><Button label="Zurück zur Auswahl" outlined @click="navigate('catalogue')" /></div></template>
          </section>
          <section v-else-if="screen === 'success'" class="success-screen"><span class="success-icon"><PhCheck :size="32" /></span><h2>{{ selectedDay }} geplant</h2><p>{{ mealById(state.plan[selectedDay])?.title }} · {{ money(mealById(state.plan[selectedDay])?.cents || 0) }}</p><p>Rest: {{ money(remaining) }}</p><div class="screen-actions"><Button :label="definition.id === 'a' ? 'Zum Kalender' : 'Zum Wochenplan'" @click="navigate(definition.id === 'a' ? 'calendar' : 'plan')" /><Button label="Einkaufsliste" outlined @click="navigate('shop')" /></div></section>
          <section v-else-if="screen === 'shop'" class="shopping-panel"><div v-if="!shopping.length" class="empty-state"><PhShoppingCart :size="30" /><p>Deine Liste ist noch leer.</p><Button label="Zur Planung" @click="home" /></div><template v-else><div v-for="item in shopping" :key="item.id" class="shopping-row" :class="{ checked: state.checked.includes(item.id) }"><Checkbox v-model="state.checked" :value="item.id" :inputId="`shopping-${item.id}`" /><label :for="`shopping-${item.id}`">{{ item.label }}</label><strong>{{ money(item.cents) }}</strong></div><div class="total-line"><span>Gesamt</span><strong>{{ money(total) }}</strong></div><p class="helper">{{ state.checked.filter(id => shopping.some(i => i.id === id)).length }} / {{ shopping.length }} abgehakt</p></template></section>
        </div>
        <nav class="bottom-nav" aria-label="App-Navigation">
          <template v-if="definition.id === 'a'"><button type="button" :class="{ active: ['calendar', 'day', 'success'].includes(screen) }" @click="navigate('calendar')"><PhCalendarBlank /><span>Kalender</span></button><button type="button" :class="{ active: screen === 'budget' }" @click="editBudget"><PhWallet /><span>Budget</span></button><button type="button" :class="{ active: screen === 'shop' }" @click="navigate('shop')"><PhShoppingCart /><span>Einkauf</span></button></template>
          <template v-else-if="definition.id === 'b'"><button type="button" :class="{ active: ['collection', 'catalogue', 'detail'].includes(screen) }" @click="navigate('collection')"><PhForkKnife /><span>Essensliste</span></button><button type="button" :class="{ active: ['allocation', 'plan'].includes(screen) }" @click="navigate(state.collection.length ? 'allocation' : 'collection')"><PhCalendarBlank /><span>Zuordnen</span></button><button type="button" :class="{ active: screen === 'budget' }" @click="editBudget"><PhWallet /><span>Budget</span></button><button type="button" :class="{ active: screen === 'shop' }" @click="navigate('shop')"><PhShoppingCart /><span>Einkauf</span></button></template>
          <template v-else><button type="button" :class="{ active: ['discover', 'catalogue', 'detail'].includes(screen) }" @click="navigate('discover')"><PhMagnifyingGlass /><span>Entdecken</span></button><button type="button" :class="{ active: ['plan', 'day', 'success'].includes(screen) }" @click="navigate('plan')"><PhCalendarBlank /><span>Woche</span></button><button type="button" :class="{ active: screen === 'budget' }" @click="editBudget"><PhWallet /><span>Budget</span></button><button type="button" :class="{ active: screen === 'shop' }" @click="navigate('shop')"><PhShoppingCart /><span>Einkauf</span></button></template>
        </nav>
      </div>
      <footer class="test-footer"><span>5 Schultage · Budget 25 €</span><RouterLink :to="{ name: '3tgg2-design-thinking', hash: '#phase-five-test' }">Zum Teamfeedback →</RouterLink></footer>
    </div>
  </main>
</template>

<style scoped src="./prototype.css"></style>
