<script setup>
import { ref } from 'vue'
import Panel from 'primevue/panel'

const classes = [
  { name: '3BKGD1/1 MET', items: [
    { title: 'Designvorlage Klassenarbeit', url: '/designvorlagen/klassenarbeiten/3bkgd1-1-met', type: 'worksheet' },
    { title: 'Designvorlage A4', url: '/designvorlagen/a4/3bkgd1-1-met', type: 'worksheet' },
    { title: 'Korrekturvorschläge Klassenarbeit 01', url: '/3bkgd1-1-met/korrekturvorschlaege-klassenarbeit-01', type: 'worksheet' },
    { title: 'Bewertungsbogen Klassenarbeit 01', url: '/3bkgd1-1-met/bewertungsbogen-klassenarbeit-01', type: 'worksheet' },
    { title: 'Kahoot Farbmischsysteme und Programme BKGD', url: '/kahoot-farbmischsysteme-programme-bkgd', type: 'app' },
    { title: 'Programme im ersten Jahr Medientechnik', url: '/programme-medientechnik-erstes-jahr', type: 'app' },
    { title: 'Hardwarekomponenten', url: '/hardwarekomponenten', type: 'app' },
    { title: 'Farbmischsysteme', url: '/farbmischsysteme', type: 'app' }
  ] },
  { name: '3BKGD1_1_GRD', items: [
    { title: 'Designvorlage Klassenarbeit', url: '/designvorlagen/klassenarbeiten/3bkgd1-1-grd', type: 'worksheet' },
    { title: 'Designvorlage A4', url: '/designvorlagen/a4/3bkgd1-1-grd', type: 'worksheet' },
    { title: 'Klassenarbeit 01', url: '/3bkgd1-1-grd/klassenarbeit-01', type: 'worksheet' },
    { title: 'InDesign-Seiten übernehmen', url: '/3bkgd1-1-grd/indesign-seiten-uebernehmen', type: 'worksheet' }
  ] },
  { name: '1BFD1 BPK', items: [
    { title: 'Designvorlage A4', url: '/designvorlagen/a4/1bfd1-bpk', type: 'worksheet' },
    { title: 'Umfang Klassenarbeit 01', url: '/1bfd1/umfang-klassenarbeit-01', type: 'worksheet' },
    { title: 'Photoshop: Käfer retuschieren', url: '/1bfd1/kaefer-retuschieren', type: 'app' },
    { title: 'Kopierstempel in Photoshop', url: '/1bfd1/medientechnik/adobe-photoshop/mini-tutorials/kopierstempel', type: 'app' }
  ] },
  { name: '3TGG1/2', items: [
    { title: 'Designvorlage Klassenarbeit', url: '/designvorlagen/klassenarbeiten/3tgg1-2', type: 'worksheet' },
    { title: 'Designvorlage A4', url: '/designvorlagen/a4', type: 'worksheet' },
    { title: 'Klassenarbeit 01', url: '/3tgg12/klassenarbeit-01', type: 'worksheet' },
    { title: 'Visuelle Kommunikation mit Punkt und Linie', url: '/material/3tgg12/Visuelle_Kommunikation_mit_Punkt_und_Linie.pdf', type: 'pdf' },
    { title: 'Der Punkt und Punktportraits', url: '/material/3tgg12/Der_Punkt_und_Punktportraits.pdf', type: 'pdf' },
    { title: 'Die Linie und Linienportraits', url: '/material/3tgg12/Die_Linie_und_Linienportraits.pdf', type: 'pdf' },
    { title: 'Die Fläche und Flächenportraits', url: '/material/3tgg12/Die_Flaeche_und_Flaechenportraits.pdf', type: 'pdf' },
    { title: 'Sehvorgang', url: '/material/3tgg12/Sehvorgang.pdf', type: 'pdf' },
    { title: 'Eine andere Geschichte des Farbensehens', url: '/material/3tgg12/Eine_andere_Geschichte_des_Farbensehens.pdf', type: 'pdf' },
    { title: 'Gestaltgesetze und Kunst vs. Design', url: '/material/3tgg12/Gestaltgesetze_und_Kunst_VS_Design.pdf', type: 'pdf' },
    { title: 'Rückblick', url: '/material/3tgg12/Rueckblick.pdf', type: 'pdf' },
    { title: 'Semiotik', url: '/material/3tgg12/Semiotik.pdf', type: 'pdf' },
    { title: 'Zeichen und Bezeichnetes', url: '/3tgg12/zeichen-und-bezeichnetes', type: 'worksheet' },
    { title: 'Zeichen, Objekt und Interpretant', url: '/material/3tgg12/3TGG1_2_Zeichen_Objekt_Interpretant.pdf', type: 'pdf' },
    { title: 'Ikon, Index und Symbol', url: '/material/3tgg12/3TGG1_2_Ikon_Index_Symbol.pdf', type: 'pdf' },
    { title: 'Plakatwettbewerb – Zeichenanalyse', url: '/material/3tgg12/3TGG1_2_Plakatwettbewerb_Zeichenanalyse.pdf', type: 'pdf' },
    { title: 'Helligkeit und Sättigung', url: '/3tgg12/helligkeit-und-saettigung', type: 'app' },
    { title: 'Projektion nach DIN ISO 5456', url: '/3tgg12/projektion-nach-din-iso-5456/1', type: 'app' },
    { title: 'Zeichenspiel', url: '/3tgg12/zeichen-spiel', type: 'app' }
  ] },
  { name: '3TGG2', items: [
    { title: 'Designvorlage Klassenarbeit', url: '/designvorlagen/klassenarbeit/3tgg2', type: 'worksheet' },
    { title: 'Designvorlage A4', url: '/designvorlagen/a4/3tgg2', type: 'worksheet' },
    { title: 'Klassenarbeit 01', url: '/3tgg2/klassenarbeit-01', type: 'worksheet' },
    { title: 'Projekt- und Designmanagement', url: '/3tgg2/entwicklung-einer-app-design-thinking', type: 'app' }
  ] }
]
const selected = ref(null)
const kind = item => item.type === 'pdf' ? 'PDF' : item.type === 'worksheet' ? 'Arbeitsblatt · PDF-Ausgabe' : 'Anwendung'
</script>

<template>
  <main class="assignment-page">
    <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
    <header><p class="eyebrow">UNTERRICHT PLANEN</p><h1>Arbeitsaufträge planen</h1><p>Wähle links eine Klasse und einen Arbeitsauftrag für die Vorschau.</p></header>
    <div class="layout">
      <aside class="classes" aria-label="Arbeitsaufträge nach Klasse">
        <Panel v-for="group in classes" :key="group.name" :header="group.name" toggleable :collapsed="group.name !== '3TGG1/2'">
          <div v-if="group.items.length" class="assignment-list">
            <button v-for="item in group.items" :key="item.url" type="button" :class="{ active: selected?.url === item.url }" :aria-pressed="selected?.url === item.url" @click="selected = item">
              <span>{{ item.title }}</span><small>{{ kind(item) }}</small>
            </button>
          </div>
          <p v-else class="empty-class">Noch keine Arbeitsaufträge hinterlegt.</p>
        </Panel>
      </aside>
      <section class="preview" aria-label="Vorschau des Arbeitsauftrags">
        <template v-if="selected">
          <div class="preview-header"><div><p class="eyebrow">{{ kind(selected) }}</p><h2>{{ selected.title }}</h2></div><a :href="selected.url" target="_blank" rel="noopener noreferrer">In neuem Tab öffnen ↗</a></div>
          <p v-if="selected.type === 'worksheet'" class="hint">Dieses Arbeitsblatt wird als Webseite dargestellt. Die PDF-Ausgabe findest du in der Vorschau.</p>
          <div :class="selected.type === 'app' ? 'ipad-frame' : 'document-frame'"><iframe :key="selected.url" :src="selected.url" :title="`Vorschau: ${selected.title}`" /></div>
          <p v-if="selected.type === 'app'" class="hint">Vorschau im iPad-Querformat</p>
        </template>
        <div v-else class="empty-preview"><h2>Vorschau</h2><p>Wähle einen Arbeitsauftrag aus der Klassenliste.</p></div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.assignment-page { max-width: 1600px; margin: auto; padding: 32px; color: #202d32; font-family: 'Jost', sans-serif; }
.back, a { color: #315c54; text-underline-offset: 3px; }
header { margin: 28px 0; } h1 { margin: 4px 0; font-size: clamp(2rem, 3vw, 3rem); } header p { color: #526461; }
.eyebrow { color: #55756d; font-size: .75rem; letter-spacing: .12em; font-weight: 700; margin: 0; }
.layout { display: grid; grid-template-columns: minmax(220px, 300px) minmax(0, 1fr); gap: 24px; align-items: start; }
.classes { display: grid; gap: 10px; } .assignment-list { display: grid; gap: 4px; }
.assignment-list button { text-align: left; border: 0; background: transparent; border-radius: 6px; padding: 9px; color: inherit; cursor: pointer; font: inherit; }
.assignment-list button:hover, .assignment-list button.active { background: #e5efeb; }
.assignment-list small { display: block; color: #657772; margin-top: 3px; }
.empty-class, .hint { color: #62736e; font-size: .9rem; line-height: 1.45; }
.preview { background: #f5f7f5; border: 1px solid #e0e8e3; border-radius: 10px; padding: 20px; min-width: 0; }
.preview-header { display: flex; align-items: start; justify-content: space-between; gap: 16px; margin-bottom: 16px; } .preview-header h2 { margin: 4px 0 0; font-size: 1.35rem; }
.document-frame { height: 78vh; min-height: 500px; background: white; border: 1px solid #d9e1dd; }
.ipad-frame { width: 100%; aspect-ratio: 4 / 3; max-height: 78vh; border: 12px solid #202727; border-radius: 24px; overflow: hidden; background: white; }
iframe { width: 100%; height: 100%; border: 0; display: block; background: white; } .empty-preview { min-height: 350px; display: grid; place-content: center; text-align: center; color: #62736e; }
@media (max-width: 760px) { .assignment-page { padding: 20px 16px; } .layout { grid-template-columns: 1fr; } .preview-header { flex-direction: column; } .document-frame { min-height: 450px; } .ipad-frame { border-width: 7px; border-radius: 14px; } }
</style>
