<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import Dialog from 'primevue/dialog'
import projectionImage from './projektion-ansichten.png'
import lineTypesImage from './projektion-linienarten.png'
import drawingExampleImage from './projektion-beispielzeichnung.png'
import dimensionImage from './projektion-bemassung.png'
const props = defineProps({ step: { type: Number, required: true } })
const heading = ref(null)
const previewOpen = ref(false)
const previewImage = ref('')
const previewAlt = ref('')
function openPreview(src, alt) { previewImage.value = src; previewAlt.value = alt; previewOpen.value = true }
const steps = [
  {
    title: 'Projektion nach DIN ISO 5456',
    goal: 'Die Projektion nach DIN ISO 5456 stellt einen Körper in mehreren senkrecht auf ihn gerichteten Ansichten dar. Die Darstellung mit drei Ansichten heißt Dreiseitenansicht oder Dreitafelprojektion. Dadurch lassen sich Form und Maße des Körpers für die Fertigung oder Weiterbearbeitung erkennen.',
    intro: 'Die Abbildung zeigt, wie ein räumlicher Körper aus verschiedenen Richtungen betrachtet und auf Ebenen übertragen wird. Beim Aufklappen der Ebenen entstehen nebeneinander angeordnete, zweidimensionale Ansichten. Zusammen beschreiben sie die Form des Körpers.',
    terms: [['DIN', 'Das Deutsche Institut für Normung. DIN kennzeichnet hier die deutsche Ausgabe der Norm.'], ['ISO', 'Die Internationale Organisation für Normung. DIN ISO bezeichnet eine unverändert in das deutsche Normenwerk übernommene internationale Norm.'], ['5456', 'Die Nummer der Normenreihe für Projektionsmethoden. Teil 2 behandelt orthografische Darstellungen.'], ['Vorderansicht', 'Der Blick gerade von vorne auf den Körper.'], ['Draufsicht', 'Der Blick senkrecht von oben auf den Körper.'], ['Linke Seitenansicht', 'Der Blick gerade von links auf den Körper.'], ['Sichtbare Kante', 'Eine Kante, die aus der jeweiligen Blickrichtung nicht von einer Fläche verdeckt wird.']],
    actions: [],
    check: 'Die Vorderseite ist festgelegt. Für jede Blickrichtung sind sichtbare und verdeckte Kanten am Körper erkannt.'
  },
  {
    title: 'Einen Körper aus Kapplasteinen bauen',
    goal: 'Baue einen kompakten Körper aus vier Kapplasteinen.',
    intro: 'Der selbst gebaute Körper dient als Vorlage für die Zeichnung in den nächsten Schritten.',
    terms: [['Kapplasteine', 'Rechteckige Holzplättchen, die zu einem Körper zusammengesetzt werden.']],
    actions: ['Lege vier Kapplasteine bereit.', 'Baue daraus einen eigenen Körper. Ordne die Kapplasteine rechtwinklig zueinander an, sodass sie sich überlappen. Halte die Anordnung kompakt, damit die Ansichten später auf ein DIN-A3-Blatt passen. Achte darauf, dass die Steine ruhig liegen und der Körper seine Form behält.'],
    check: 'Ein stabiler, kompakter Körper aus vier rechtwinklig angeordneten, überlappenden Kapplasteinen steht bereit.'
  },
  {
    title: 'Drei Ansichten zeichnen',
    goal: 'Zeichne die Ansichten fluchtgerecht und verwende passende Linienarten.',
    intro: 'Bei der europäischen Projektionsmethode werden die Ansichten auf dem Blatt gegenüber der Blickrichtung angeordnet. Die Form hängt vom selbst gebauten Körper ab.',
    terms: [['Projektionslinien', 'Schmale Hilfslinien übertragen zusammengehörige Punkte und Kanten zwischen den Ansichten.'], ['Fluchtgerecht', 'Zusammengehörige Punkte liegen auf derselben waagerechten oder senkrechten Projektionslinie.'], ['Breite Volllinie', 'Sie kennzeichnet sichtbare Körperkanten und Umrisse.'], ['Schmale Strichlinie', 'Sie kennzeichnet verdeckte Kanten.'], ['Schmale Strichpunktlinie', 'Sie kennzeichnet vorhandene Achsen oder Mittellinien.']],
    actions: ['Lege fest, welche Seite des Körpers vorne ist. Behalte diese Orientierung während der gesamten Zeichnung bei.', 'Betrachte den Körper gerade von vorne, senkrecht von oben und gerade von links. Bewege dich um den Körper, statt ihn für jede Ansicht neu auszurichten.', 'Vergleiche die Blickrichtungen: Welche Umrisse und Kanten sind sichtbar? Welche Kanten liegen aus einer Richtung hinter einer Fläche?', 'Zeichne die Vorderansicht mit Bleistift und Lineal. Verwende für alle Linienarten denselben Bleistift. Zeichne die Hilfslinien mit sehr wenig Druck vor und beachte die tatsächlichen Größenverhältnisse.', 'Zeichne die Draufsicht unter die Vorderansicht. Übertrage zusammengehörige Breiten und Punkte mit senkrechten Projektionslinien in der Stärke von Hilfslinien.', 'Zeichne die Ansicht von links rechts neben die Vorderansicht.', 'Prüfe jede Ansicht am Körper. Zeichne sichtbare Kanten mit viel Druck als breite Volllinien, verdeckte Kanten als schmale Strichlinien und vorhandene Achsen als schmale Strichpunktlinien.', 'Lass Projektionslinien schmal und unterscheidbar.'],
    check: 'Die Draufsicht liegt unter der Vorderansicht, die linke Seitenansicht rechts daneben. Zusammengehörige Höhen und Breiten fluchten; die Linienarten sind unterscheidbar.'
  },
  {
    title: 'Länge, Breite und Höhe bemaßen',
    goal: 'Trage alle erforderlichen Maße in geeigneten Ansichten ein.',
    intro: 'Eine technische Zeichnung zeigt nicht nur die Form. Maße geben an, wie groß der Körper tatsächlich ist. Wähle für jedes Maß eine Ansicht, in der die betreffende Ausdehnung gut erkennbar ist.',
    terms: [['Maßhilfslinie', 'Eine schmale Linie, die von der Körperkante zur Maßlinie führt und etwa 2 mm über die Maßlinie hinausragt.'], ['Maßlinie', 'Eine schmale Linie zwischen den Maßhilfslinien. Sie zeigt, welche Ausdehnung gemessen wird, und liegt in dieser Übung 10 mm von der Körperkante entfernt.'], ['Maßpfeil', 'Ein langer, schmaler Pfeil an jedem Ende der Maßlinie. Die Spitzen zeigen auf die Maßhilfslinien.'], ['Maßzahl', 'Die Zahl über der Maßlinie gibt die tatsächliche Größe des Körpers an.']],
    actions: ['Zeichne die Maßlinie außerhalb der Körperkontur mit 10 mm Abstand zur Körperkante. Zeichne die Maßhilfslinien so, dass sie 2 mm über die Maßlinie hinausragen. Verwende denselben Bleistift und wähle einen Druck zwischen dem für die breiten Volllinien und dem für die vorgezeichneten Hilfslinien.', 'Ordne die Maßlinien so an, dass sie sich nicht kreuzen. Das größte Maß steht außen, bei waagerechten Maßlinien oben. Halte zwischen den Maßlinien jeweils 10 mm Abstand ein.', 'Begrenze die Maßlinie an beiden Enden mit langen, dünnen Maßpfeilen. Die Pfeilspitzen zeigen auf die Maßhilfslinien.', 'Trage die passende Maßzahl an der Maßlinie ein. Wiederhole dies für alle erforderlichen Maße und gib jedes Maß nur einmal an.', 'Prüfe, dass Maßlinien und Maßzahlen gut lesbar sind und keine Maßzahl geschätzt wurde.'],
    check: 'Alle zur Beschreibung des Körpers erforderlichen Maße sind jeweils einmal in einer geeigneten Ansicht mit Maßhilfslinien, Maßlinie, Pfeilen und Maßzahl eingetragen.'
  },
  {
    title: 'Zeichnung prüfen und vorstellen',
    goal: 'Vergleiche deine Zeichnung mit einem Mitschüler und halte eine konkrete Verbesserung fest.',
    intro: 'Eine technische Zeichnung muss auch für andere verständlich sein. Prüft gemeinsam, ob die Ansichten zum Körper passen und ob die Maße eindeutig lesbar sind.',
    terms: [],
    actions: ['Tauscht die Zeichnungen zu zweit. Vergleicht die Vorderansicht, die Draufsicht und die linke Seitenansicht jeweils mit dem zugehörigen Körper.', 'Prüft die Lage der Ansichten, fluchtende Punkte und Kanten, die Linienarten und die eingetragenen Maße.', 'Erklärt an konkreten Linien, welche Funktion sie haben. Begründet die Anordnung der Ansichten anhand der Blickrichtungen.', 'Gebt euch eine konkrete Rückmeldung. Notiere eine Verbesserung für deine nächste Zeichnung, zum Beispiel: „Verdeckte Kanten als schmale Strichlinien zeichnen.“', 'Ausgewählte Schülerinnen und Schüler zeigen ihr Ergebnis über den Projektor und erläutern eine Besonderheit ihrer Zeichnung.'],
    check: 'Die Zeichnung wurde gemeinsam geprüft. Eine konkrete Verbesserung ist festgehalten und ausgewählte Ergebnisse wurden vorgestellt.'
  }
]
const current = computed(() => steps[props.step - 1])
const link = step => ({ name: '3tgg12-projektion-schritt', params: { step } })
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
</script>

<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/3tgg12" class="back">← Zur Übersicht 3TGG1/2</RouterLink>
    <header><p class="eyebrow">PROJEKTION · SCHRITT {{ step }} VON {{ steps.length }}</p><p v-if="step === 1" class="topic-label">Thema: Technisches Zeichnen</p><h1 ref="heading" tabindex="-1">{{ current.title }}</h1><p class="goal">{{ current.goal }}</p></header>
    <nav class="step-links" aria-label="Die fünf Schritte"><RouterLink v-for="(item, index) in steps" :key="item.title" :to="link(index + 1)" :aria-current="step === index + 1 ? 'step' : undefined" :aria-label="`Schritt ${index + 1}: ${item.title}`">{{ index + 1 }}</RouterLink></nav>
    <p class="intro">{{ current.intro }}</p>
    <figure v-if="step === 1" class="document-image projection-reference">
      <button type="button" class="image-trigger" aria-label="Abbildung der Projektion vergrößern" @click="openPreview(projectionImage, 'Ein räumlicher Körper wird auf Ebenen projiziert. Rechts sind Vorderansicht, Draufsicht und eine Seitenansicht auf der aufgeklappten Zeichenebene dargestellt.')"><img :src="projectionImage" alt="Ein räumlicher Körper wird auf Ebenen projiziert. Rechts sind Vorderansicht, Draufsicht und eine Seitenansicht auf der aufgeklappten Zeichenebene dargestellt."></button>
      <figcaption>Links werden die Ansichten auf Ebenen übertragen; rechts liegen die Ebenen aufgeklappt in einer Zeichenfläche. Bei der europäischen Projektionsmethode liegt die Ansicht von links rechts neben der Vorderansicht.</figcaption>
    </figure>
    <figure v-if="step === 2" class="document-image projection-reference">
      <button type="button" class="image-trigger" aria-label="Abbildung der Projektion vergrößern" @click="openPreview(projectionImage, 'Ein räumlicher Körper wird auf Ebenen projiziert. Daneben sind Vorderansicht, Draufsicht und Seitenansicht dargestellt.')"><img :src="projectionImage" alt="Ein räumlicher Körper wird auf Ebenen projiziert. Daneben sind Vorderansicht, Draufsicht und Seitenansicht dargestellt."></button>
      <figcaption>Die Abbildung zeigt, wie Vorderansicht, Draufsicht und Seitenansicht aus einem Körper entstehen. Der Körper aus vier Kapplasteinen dient als Vorlage für die nächsten Schritte.</figcaption>
    </figure>
    <div v-if="step === 3" class="reference-images">
      <figure class="document-image"><button type="button" class="image-trigger" aria-label="Übersicht der Linienarten vergrößern" @click="openPreview(lineTypesImage, 'Tabelle mit ausgewählten Linienarten, ihren Bezeichnungen, Strichstärken und Verwendungen.')"><img :src="lineTypesImage" alt="Tabelle mit ausgewählten Linienarten, ihren Bezeichnungen, Strichstärken und Verwendungen."></button><figcaption>Ausgewählte Linienarten und ihre Verwendung. Zum Vergrößern das Bild öffnen.</figcaption></figure>
      <figure class="document-image"><button type="button" class="image-trigger" aria-label="Beispiel einer Projektion vergrößern" @click="openPreview(drawingExampleImage, 'Beispiel eines räumlichen Körpers und seiner technischen Zeichnung mit drei Ansichten und Hilfslinien.')"><img :src="drawingExampleImage" alt="Beispiel eines räumlichen Körpers und seiner technischen Zeichnung mit drei Ansichten und Hilfslinien."></button><figcaption>Beispiel: räumlicher Körper und zugehörige Ansichten. Zum Vergrößern das Bild öffnen.</figcaption></figure>
    </div>
    <div v-if="step === 4" class="reference-images">
      <figure class="document-image">
        <button type="button" class="image-trigger" aria-label="Abbildung der Bemaßung vergrößern" @click="openPreview(dimensionImage, 'Zeichnung mit beschrifteter Maßzahl, Maßlinie, Maßpfeil und Maßhilfslinie.')"><img :src="dimensionImage" alt="Zeichnung mit beschrifteter Maßzahl, Maßlinie, Maßpfeil und Maßhilfslinie."></button>
        <figcaption>Die Abbildung zeigt die Bestandteile einer Bemaßung. Das Bild lässt sich zum Vergrößern öffnen.</figcaption>
      </figure>
      <figure class="document-image">
        <button type="button" class="image-trigger" aria-label="Beispiel einer bemaßten Zeichnung vergrößern" @click="openPreview(drawingExampleImage, 'Räumlicher Körper und technische Zeichnung mit drei Ansichten und eingetragenen Maßen.')"><img :src="drawingExampleImage" alt="Räumlicher Körper und technische Zeichnung mit drei Ansichten und eingetragenen Maßen."></button>
        <figcaption>Beispiel einer bemaßten Zeichnung. Das Bild lässt sich zum Vergrößern öffnen.</figcaption>
      </figure>
    </div>
    <section v-if="current.actions.length" class="practice" aria-labelledby="practice-title"><h2 id="practice-title">Schritt für Schritt</h2><ol><li v-for="action in current.actions" :key="action">{{ action }}</li></ol><p v-if="step === 3">Die Bemaßung wird im nächsten Schritt durchgeführt.</p></section>
    <section v-if="current.terms.length" aria-labelledby="terms-title"><h2 id="terms-title">Einfach erklärt</h2><dl><div v-for="term in current.terms" :key="term[0]"><dt>{{ term[0] }}</dt><dd>{{ term[1] }}</dd></div></dl></section>
    <section v-if="step > 1" class="check" aria-labelledby="check-title"><h2 id="check-title">Ergebnis prüfen</h2><p>{{ current.check }}</p></section>
    <nav class="pager" aria-label="Vorwärts und zurück"><RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/3tgg12">← Zur Übersicht</RouterLink><span>{{ step }} / {{ steps.length }}</span><RouterLink v-if="step < steps.length" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/3tgg12">Zur Übersicht →</RouterLink></nav>
    <Dialog v-model:visible="previewOpen" modal dismissable-mask :closable="false" :style="{ width: 'min(1200px, calc(100vw - 24px))' }" :content-style="{ padding: '0 16px 16px', maxHeight: '80vh', overflow: 'auto' }">
      <template #header><div class="preview-header"><strong>Bildansicht</strong><button type="button" class="preview-close" aria-label="Bildansicht schließen" @click="previewOpen = false"><span aria-hidden="true">×</span><span>Schließen</span></button></div></template>
      <img class="preview-image" :src="previewImage" :alt="previewAlt">
    </Dialog>
  </div></main>
</template>
<style scoped>
@import '../Medientechnik/indesignTutorial.css';
.topic-label { margin: 20px 0 0; color: #526166; font-size: 16px; font-weight: 500; }
.image-trigger { display: block; width: 100%; padding: 0; border: 0; border-radius: 12px; background: transparent; cursor: zoom-in; }
.image-trigger:focus-visible { outline: 3px solid #a02b62; outline-offset: 4px; }
.preview-header { display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; }
.preview-close { display: inline-flex; align-items: center; gap: 7px; padding: 7px 12px; border: 1px solid #c8c7c0; border-radius: 8px; background: #fff; color: #202d32; font: inherit; cursor: pointer; }
.preview-close span:first-child { font-size: 26px; line-height: 1; }
.preview-close:focus-visible { outline: 3px solid #a02b62; outline-offset: 2px; }
.preview-image { display: block; width: 100%; height: auto; }
.reference-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin: 28px 0; align-items: start; }
.reference-images .document-image { margin: 0; }
@media (max-width: 600px) { .reference-images { grid-template-columns: 1fr; } }
.projection-reference { max-width: 900px; }
.dimension-reference { max-width: 750px; }
.projection-figure { margin: 32px 0; }.projection-figure svg { display: block; width: 100%; height: auto; }.projection-figure figcaption { color: #526166; font-size: 14px; line-height: 1.6; margin-top: 12px; }.diagram-title { font: 600 16px Jost, sans-serif; fill: #526166; letter-spacing: .07em; }.diagram-label { font: 500 19px Jost, sans-serif; fill: #202d32; }.diagram-small { font: 14px Jost, sans-serif; fill: #7d3960; }
</style>
