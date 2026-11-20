<script setup>
import { nextTick, ref, watch } from 'vue'
const props = defineProps({ step: { type: Number, default: 1 } })
const heading = ref(null)
watch(() => props.step, async () => { await nextTick(); heading.value?.focus() })
const link = step => ({ name: 'medientechnik-figma-tutorial-1', params: { step } })
</script>

<template>
  <main class="lesson-page"><div class="shell">
    <RouterLink to="/medientechnik/figma" class="back">← Figma</RouterLink>
    <header><p class="eyebrow">FIGMA · TEILTUTORIAL 1 · SCHRITT {{ step }} VON 3</p><h1 ref="heading" tabindex="-1">Figma kennenlernen und anmelden</h1></header>
    <nav class="step-links" aria-label="Schritte dieses Tutorials"><RouterLink v-for="number in 3" :key="number" :to="link(number)" :aria-current="step === number ? 'step' : undefined" :aria-label="`Schritt ${number}`">{{ number }}</RouterLink></nav>
    <p v-if="step === 1" class="intro"><strong>Figma</strong> ist ein Gestaltungsprogramm für digitale Inhalte wie Websites, Apps, Präsentationen und Grafiken. Es bietet Werkzeuge zur Gestaltung von Layouts, Texten und Vektorgrafiken. Einzelne Bildschirmansichten lassen sich zu <strong>interaktiven Prototypen</strong> verbinden, um die Bedienung zu testen. Mehrere Personen können gleichzeitig an einem Entwurf arbeiten.</p>
    <figure v-if="step === 1" class="document-image"><a href="/medientechnik/figma/figma-startseite.png" target="_blank" rel="noopener noreferrer"><img src="/medientechnik/figma/figma-startseite.png" alt="Screenshot der Figma-Startseite mit Navigationsleiste und Beispielen für digitale Gestaltungen."></a></figure>
    <section v-if="step === 2" aria-labelledby="school-license-title"><h2 id="school-license-title">Schullizenz und Zusammenarbeit</h2><p>Mit deiner Schul-E-Mail-Adresse erhältst du Zugang zur <strong>Figma-Schullizenz</strong>. Diese bietet Funktionen einer <strong>Pro-Lizenz</strong>, mit denen ihr besonders gut zusammenarbeiten könnt: Ihr könnt gemeinsam an Dateien gestalten und euch gegenseitig Rückmeldung geben.</p><p>Die <strong>KI-Funktionen stehen in der Schullizenz nicht zur Verfügung</strong>. Melde dich deshalb unbedingt mit deiner Schul-E-Mail-Adresse an, um den Zugang der Schule zu nutzen.</p></section>
    <section v-if="step === 1" aria-labelledby="comparison-title"><h2 id="comparison-title">Figma und InDesign im Vergleich</h2><dl>
      <div><dt>Figma</dt><dd>Mit Figma gestaltest du digitale Inhalte, insbesondere Benutzeroberflächen für Websites und Apps. Du kannst verschiedene Bildschirmansichten miteinander verknüpfen und als <strong>klickbaren Prototyp</strong> testen. So lässt sich ausprobieren, wie die spätere Website oder App funktioniert.</dd></div>
      <div><dt>InDesign</dt><dd>Du gestaltest vor allem Seitenlayouts, zum Beispiel Flyer, Plakate und mehrseitige Broschüren, und bereitest sie für Druck oder digitale Ausgabe vor.</dd></div>
    </dl></section>
    <section v-if="step === 3" class="practice" aria-labelledby="practice-title"><h2 id="practice-title">So gehst du vor</h2><ol>
      <li><strong>Figma öffnen:</strong> Rufe <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">figma.com</a> im Browser auf oder öffne die Desktop-App.</li>
      <li><strong>Schul-E-Mail-Adresse verwenden:</strong> Wähle die Anmeldung. Verwende für das Tutorial unbedingt deine <strong>persönliche Schul-E-Mail-Adresse</strong>, keine private Adresse.</li>
      <li><strong>Vorhandenes Schulkonto:</strong> Wenn du bereits ein Figma-Konto mit deiner Schul-E-Mail-Adresse hast, melde dich damit an. Nutze gegebenenfalls die von der Schule vorgegebene Anmeldemethode.</li>
      <li><strong>Neues Konto:</strong> Falls du noch kein Konto mit der Schul-E-Mail-Adresse hast, wähle die Registrierung und folge den angezeigten Schritten. Bestätige deine Adresse, falls Figma dich dazu auffordert. Frage deine Lehrkraft, wenn du bei der Anmeldung oder beim Zugriff auf deine Schul-E-Mails Hilfe brauchst.</li>
      <li><strong>Anmeldung prüfen:</strong> Kontrolliere in deinen Kontoeinstellungen, ob deine Schul-E-Mail-Adresse zum angemeldeten Konto gehört. Melde dich bei Bedarf ab und mit dem Schulkonto erneut an.</li>
      <li><strong>Schullizenz verifizieren:</strong> Du wirst nun aufgefordert, deine Schullizenz zu verifizieren. Folge den angezeigten Schritten und verwende dabei deine Schul-E-Mail-Adresse. Falls du Unterstützung benötigst, frage deine Lehrkraft.</li>
    </ol></section>
    <section v-if="step === 3" class="check" aria-labelledby="check-title"><h2 id="check-title">Prüfe dein Ergebnis</h2><p>Du bist mit deiner Schul-E-Mail-Adresse angemeldet und kannst erklären, wofür du Figma und InDesign jeweils einsetzen würdest.</p></section>
    <nav class="pager" aria-label="Tutorialnavigation"><RouterLink v-if="step > 1" :to="link(step - 1)">← Zurück</RouterLink><RouterLink v-else to="/medientechnik/figma">← Zur Übersicht</RouterLink><span>{{ step }} / 3</span><RouterLink v-if="step < 3" :to="link(step + 1)">Weiter →</RouterLink><RouterLink v-else to="/medientechnik/figma">Zur Übersicht →</RouterLink></nav>
  </div></main>
</template>
<style scoped>
@import './indesignTutorial.css';
@import './figmaTutorial.css';
header { padding-bottom: 0; }
header h1 { margin-bottom: 0; }
header + .intro { margin-top: 16px; }
</style>
