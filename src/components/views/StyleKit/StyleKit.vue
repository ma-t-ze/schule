<script setup>
import { computed, reactive, ref, watch } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import SelectButton from 'primevue/selectbutton'
import { applyStyleKit, STYLE_KIT_KEY } from '../../../styles/styleKit'

const storageKey = STYLE_KIT_KEY
const defaults = () => ({
  colors: [
    { id: 'primary', name: 'Primär', value: '#187b5b', purpose: 'Wichtige Aktionen und Links' },
    { id: 'accent', name: 'Akzent', value: '#8a75b8', purpose: 'Hervorhebungen und Kategorien' },
    { id: 'background', name: 'Hintergrund', value: '#f4f7f5', purpose: 'Flächen im Seitenhintergrund' },
    { id: 'surface', name: 'Oberfläche', value: '#ffffff', purpose: 'Karten und Formulare' },
    { id: 'text', name: 'Text', value: '#23332d', purpose: 'Überschriften und Fließtext' },
    { id: 'border', name: 'Rahmen', value: '#dce7e0', purpose: 'Trennlinien und Eingabefelder' }
  ],
  radius: '8', panelRadius: '4', buttonSize: 'normal'
})
function restore() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || 'null')
    if (!data || !Array.isArray(data.colors)) return defaults()
    const base = defaults()
    const required = base.colors.map(item => {
      const found = data.colors.find(color => color.id === item.id)
      return { ...item, value: /^#[0-9a-f]{6}$/i.test(found?.value) ? found.value : item.value }
    })
    const extra = data.colors.filter(item => typeof item.id === 'string' && item.id.startsWith('custom-') && typeof item.name === 'string' && /^#[0-9a-f]{6}$/i.test(item.value)).map(item => ({ id: item.id, name: item.name.slice(0, 60), value: item.value, purpose: typeof item.purpose === 'string' ? item.purpose.slice(0, 100) : '' }))
    return { colors: [...required, ...extra], radius: ['4', '8', '16', '999'].includes(data.radius) ? data.radius : base.radius, panelRadius: ['0', '4', '6', '8', '12'].includes(data.panelRadius) ? data.panelRadius : base.panelRadius, buttonSize: ['small', 'normal', 'large'].includes(data.buttonSize) ? data.buttonSize : base.buttonSize }
  } catch { return defaults() }
}
const kit = reactive(restore())
const storageError = ref(false)
watch(kit, () => {
  applyStyleKit(kit)
  try { localStorage.setItem(storageKey, JSON.stringify(kit)); storageError.value = false }
  catch { storageError.value = true }
}, { deep: true })
const radiusOptions = [{ label: 'Dezent', value: '4' }, { label: 'Mittel', value: '8' }, { label: 'Rund', value: '16' }, { label: 'Pille', value: '999' }]
const panelRadiusOptions = [{ label: 'Eckig', value: '0' }, { label: 'Dezent', value: '4' }, { label: 'Mittel', value: '6' }, { label: 'Rund', value: '8' }, { label: 'Weich', value: '12' }]
const sizeOptions = [{ label: 'Klein', value: 'small' }, { label: 'Normal', value: 'normal' }, { label: 'Groß', value: 'large' }]
const values = computed(() => Object.fromEntries(kit.colors.map(color => [color.id, color.value])))
const previewStyle = computed(() => ({ '--kit-primary': values.value.primary, '--kit-accent': values.value.accent, '--kit-bg': values.value.background, '--kit-surface': values.value.surface, '--kit-text': values.value.text, '--kit-border': values.value.border, '--kit-radius': `${kit.radius}px`, '--kit-panel-radius': `${kit.panelRadius}px` }))
const buttonSize = computed(() => kit.buttonSize === 'normal' ? undefined : kit.buttonSize)
function addColor() { kit.colors.push({ id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name: 'Neue Farbe', value: '#6c91a4', purpose: '' }) }
function reset() { Object.assign(kit, defaults()) }
</script>

<template>
  <main class="style-page"><div class="shell">
    <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
    <header><div><p class="eyebrow">DESIGNVORLAGE</p><h1>Style-Kit</h1><p>Lege Farben und Button-Stil für dein Design fest und sieh dir die Kombination direkt an.</p></div><Button label="Vorschlag zurücksetzen" severity="secondary" outlined @click="reset" /></header>
    <Message severity="info" :closable="false">Deine Einstellungen werden in diesem Browser gespeichert. Die Grundfarben und der Button-Stil werden in Schule angewendet. Individuell gestaltete Inhalte können davon abweichen.</Message>
    <Message v-if="storageError" severity="warn" :closable="false">Das Style-Kit konnte nicht gespeichert werden.</Message>
    <div class="layout"><div class="settings">
      <Card><template #title>Farbpalette</template><template #subtitle>Ein ruhiger Grünton mit hellen Flächen als Ausgangspunkt.</template><template #content>
        <div class="palette"><div v-for="color in kit.colors" :key="color.id" class="color-row"><label class="color-swatch" :style="{ background: color.value }" :aria-label="`Farbe ${color.name} auswählen`"><input v-model="color.value" type="color" :aria-label="`Farbe ${color.name}`" /></label><div class="color-description"><InputText v-if="color.id.startsWith('custom-')" v-model="color.name" aria-label="Name der zusätzlichen Farbe" maxlength="60" /><strong v-else>{{ color.name }}</strong><small v-if="!color.id.startsWith('custom-')">{{ color.purpose }}</small><InputText v-else v-model="color.purpose" aria-label="Verwendung der zusätzlichen Farbe" placeholder="Verwendung (optional)" maxlength="100" /></div><code>{{ color.value.toUpperCase() }}</code><Button v-if="color.id.startsWith('custom-')" label="×" text severity="secondary" :aria-label="`${color.name} entfernen`" @click="kit.colors = kit.colors.filter(item => item.id !== color.id)" /></div></div>
        <Button label="＋ Farbe hinzufügen" outlined size="small" @click="addColor" />
      </template></Card>
      <Card><template #title>Buttons</template><template #subtitle>Wähle die Form und Größe für deine Vorschau.</template><template #content><div class="control"><label>Rundung</label><SelectButton v-model="kit.radius" :options="radiusOptions" option-label="label" option-value="value" :allow-empty="false" aria-label="Button-Rundung" /></div><div class="control"><label>Größe</label><SelectButton v-model="kit.buttonSize" :options="sizeOptions" option-label="label" option-value="value" :allow-empty="false" aria-label="Button-Größe" /></div></template></Card>
      <Card><template #title>Links</template><template #subtitle>Links verwenden die Primärfarbe und werden beim Darüberfahren unterstrichen.</template><template #content><a class="kit-link-example" href="#link-beispiel" @click.prevent>Beispiellink</a></template></Card>
      <Card><template #title>Bereichsfelder</template><template #subtitle>Bestimme die Rundung von Bereichen wie Kalender, Klassen und Notengebung.</template><template #content><div class="control"><label>Rundung der Bereichsfelder</label><SelectButton v-model="kit.panelRadius" :options="panelRadiusOptions" option-label="label" option-value="value" :allow-empty="false" aria-label="Rundung der Bereichsfelder" /></div></template></Card>
    </div><section class="live" :style="previewStyle" aria-label="Live-Vorschau des Style-Kits"><p class="live-label">LIVE-VORSCHAU</p><div class="sample"><span class="sample-tag">UNTERRICHT PLANEN</span><h2>Dein Unterricht im Blick</h2><p>Ein ruhiges, klares Design für Klassen, Arbeitsaufträge und Unterrichtsplanung.</p><div class="sample-buttons"><Button label="Arbeitsauftrag erstellen" :size="buttonSize" class="kit-primary" /><Button label="Mehr erfahren" :size="buttonSize" class="kit-outline" outlined /><Button label="Abbrechen" :size="buttonSize" class="kit-text" text /></div><div class="sample-card"><span class="sample-dot"></span><div><strong>3TGG1/2</strong><small>Gestaltungs- und Medientechnik</small></div><span>↗</span></div><label for="sample-input">Thema</label><input id="sample-input" placeholder="Thema eingeben" /></div><p class="hint">Die Vorschau zeigt den gewählten Stil beispielhaft. Für gute Lesbarkeit sollte Text ausreichend Kontrast zum Hintergrund haben.</p></section></div>
  </div></main>
</template>

<style scoped>
.style-page { min-height: 100vh; padding: 32px; background: #f5f7f6; color: #202d32; font-family: 'Jost', sans-serif; } .shell { max-width: 1400px; margin: auto; } .back { color: #315c54; text-underline-offset: 3px; } header { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin: 30px 0 24px; } h1 { margin: 4px 0; font-size: clamp(2rem, 3vw, 3rem); } header p:not(.eyebrow) { color: #63736b; margin: 8px 0 0; } .eyebrow,.live-label { font-size: .72rem; letter-spacing: .1em; font-weight: 700; color: #558170; margin: 0; } .layout { display: grid; grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr); gap: 20px; margin-top: 20px; align-items: start; } .settings { display: grid; gap: 16px; } .kit-link-example { color: var(--school-primary); text-decoration: none; } .kit-link-example:hover { text-decoration: underline; text-underline-offset: 4px; } .kit-link-example:focus-visible { outline: 2px solid var(--school-primary); outline-offset: 3px; } .palette { display: grid; gap: 12px; margin-bottom: 20px; } .color-row { display: flex; align-items: center; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid #eaf0ec; } .color-swatch { flex: none; width: 44px; height: 44px; border: 1px solid #d4ded7; border-radius: 9px; position: relative; overflow: hidden; cursor: pointer; } .color-swatch input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; cursor: pointer; } .color-description { flex: 1; min-width: 0; display: grid; gap: 4px; } .color-description strong { font-size: .95rem; } .color-description small { color: #77877e; } .color-description :deep(input) { width: 100%; font-size: .85rem; } code { color: #687970; font-size: .8rem; } .control { display: grid; gap: 10px; margin: 12px 0 20px; } .control label { font-weight: 600; } .live { background: var(--kit-bg); border: 1px solid var(--kit-border); border-radius: 14px; padding: 24px; color: var(--kit-text); } .live-label { color: var(--kit-primary); margin-bottom: 18px; } .sample { background: var(--kit-surface); border: 1px solid var(--kit-border); border-radius: var(--kit-panel-radius); padding: 28px; } .sample-tag { font-size: .7rem; letter-spacing: .1em; font-weight: 700; color: var(--kit-primary); } .sample h2 { margin: 12px 0; font-size: 1.8rem; } .sample p { line-height: 1.5; opacity: .75; } .sample-buttons { display: flex; gap: 10px; flex-wrap: wrap; margin: 25px 0; } .sample :deep(.kit-primary) { background: var(--kit-primary); border-color: var(--kit-primary); color: white; border-radius: var(--kit-radius); } .sample :deep(.kit-outline) { background: transparent; border-color: var(--kit-primary); color: var(--kit-primary); border-radius: var(--kit-radius); } .sample :deep(.kit-text) { color: var(--kit-primary); border-radius: var(--kit-radius); } .sample-card { border: 1px solid var(--kit-border); border-radius: var(--kit-panel-radius); display: flex; align-items: center; gap: 12px; padding: 16px; margin-bottom: 20px; } .sample-card div { flex: 1; } .sample-card small { display: block; opacity: .7; margin-top: 4px; } .sample-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--kit-accent); } .sample label { display: block; font-weight: 600; margin-bottom: 8px; } .sample input { width: 100%; box-sizing: border-box; border: 1px solid var(--kit-border); border-radius: 8px; padding: 11px; color: var(--kit-text); background: var(--kit-surface); font: inherit; } .hint { font-size: .85rem; line-height: 1.5; opacity: .75; } @media(max-width: 800px) { .style-page { padding: 20px 16px; } header { align-items: start; flex-direction: column; } .layout { grid-template-columns: 1fr; } } @media(max-width: 440px) { .color-row { flex-wrap: wrap; } .sample { padding: 18px; } }
</style>
