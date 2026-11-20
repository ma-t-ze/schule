<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'
import Dialog from 'primevue/dialog'

const isDev = import.meta.env.DEV
let SeatingPlan = null
if (import.meta.env.DEV) {
  SeatingPlan = defineAsyncComponent(() => import('../MainApplication/SitzplaeneDev.vue'))
}
const classes = [
  { name: '3BKGD1/1 MET', seatingId: '3bkgd1-1-met' },
  { name: '3BKGD1_1_GRD', seatingId: '3bkgd1-1-grd' },
  { name: '3TGG1/2', seatingId: '3tgg1-2' },
  { name: '3TGG2', seatingId: '3tgg2' },
  { name: '1BFD1 BPK', seatingId: null }
]
const selectedClass = ref(null)
const activeTheory = ref('')
const heading = computed(() => selectedClass.value ? selectedClass.value.name : 'Klasse auswählen')
</script>

<template>
  <main class="grading-page">
    <div class="grading-shell">
    <header class="page-header">
      <RouterLink to="/">Zur Startseite</RouterLink>
      <h1>Notengebung</h1>
      <p>Leistungen nach Art und Klasse planen und verwalten.</p>
    </header>
    <div class="workspace">
      <div class="left-column">
      <aside class="navigation" aria-label="Klassen">
          <button v-for="classroom in classes" :key="classroom.name" type="button"
            :class="{ active: selectedClass?.name === classroom.name }"
            :aria-pressed="selectedClass?.name === classroom.name"
            @click="selectedClass = classroom">{{ classroom.name }}</button>
      </aside>
      <aside class="theory">
        <h2>Leistungsmessung</h2>
        <button type="button" class="theory-button" aria-haspopup="dialog" @click="activeTheory = 'Funktionen der Notengebung'">Funktionen der Notengebung</button>
        <Dialog :visible="activeTheory === 'Funktionen der Notengebung'" @update:visible="activeTheory = ''" modal header="Funktionen der Notengebung" :style="{ width: '42rem', maxWidth: 'calc(100vw - 2rem)' }">
          <ol class="theory-list">
            <li><strong>Selektion und Berechtigungen:</strong> Noten entscheiden über Versetzung, Abschlüsse und weitere Bildungswege.</li>
            <li><strong>Sozialisation:</strong> Schüler lernen, dass Leistung in unserer Gesellschaft bewertet wird.</li>
            <li><strong>Kontrolle:</strong> Noten überprüfen, ob Lernziele erreicht wurden.</li>
            <li><strong>Prognose:</strong> Noten sollen zukünftige Leistungen und Lernerfolge abschätzen helfen.</li>
            <li><strong>Information und Rückmeldung:</strong> Noten informieren Schüler, Eltern und Lehrkräfte über den Leistungsstand.</li>
            <li><strong>Selbstdisziplinierung und Motivation:</strong> Noten sollen Schüler zu Anstrengung und eigenverantwortlichem Lernen anregen.</li>
          </ol>
        </Dialog>
        <button type="button" class="theory-button" aria-haspopup="dialog" @click="activeTheory = 'Gütekriterien der Leistungsmessung'">Gütekriterien der Leistungsmessung</button>
        <Dialog :visible="activeTheory === 'Gütekriterien der Leistungsmessung'" @update:visible="activeTheory = ''" modal header="Gütekriterien der Leistungsmessung" :style="{ width: '42rem', maxWidth: 'calc(100vw - 2rem)' }">
          <p>Hier geht es um die <strong>drei Gütekriterien der Leistungsmessung</strong>. Sie helfen mir zu beurteilen, ob eine Klassenarbeit Leistungen fair, zuverlässig und fachlich passend erfasst.</p>
          <ol class="theory-list">
            <li><strong>Objektivität – Unabhängigkeit:</strong> Das Ergebnis darf nicht davon abhängen, welche Lehrkraft die Arbeit durchführt, korrigiert oder bewertet.</li>
            <li><strong>Reliabilität – Zuverlässigkeit:</strong> Die Messung soll möglichst genau und zuverlässig sein. Zufällige Einzelleistungen sollen das Ergebnis nicht übermäßig beeinflussen.</li>
            <li><strong>Validität – Gültigkeit:</strong> Die Arbeit muss tatsächlich die Kompetenzen prüfen, die gemessen werden sollen.</li>
          </ol>
          <p><strong>Beispiel zur Validität:</strong> Bei einer Gestaltungsaufgabe mit zu wenig Zeit messe ich möglicherweise eher die Arbeitsgeschwindigkeit als die Gestaltungsqualität.</p>
          <p><strong>Beispiel zur Reliabilität:</strong> Eine Klassenarbeit mit nur einer Aufgabe ist weniger zuverlässig, weil ein einzelner Fehler das Ergebnis stark beeinflussen kann. Mehrere geeignete Aufgaben können die Zuverlässigkeit erhöhen.</p>
        </Dialog>
        <button type="button" class="theory-button" aria-haspopup="dialog" @click="activeTheory = 'Formen der Leistungsbeurteilung'">Formen der Leistungsbeurteilung</button>
        <Dialog :visible="activeTheory === 'Formen der Leistungsbeurteilung'" @update:visible="activeTheory = ''" modal header="Formen der Leistungsbeurteilung" :style="{ width: '42rem', maxWidth: 'calc(100vw - 2rem)' }">
          <p>Hier geht es darum, <strong>wann, für wen und zu welchem Zweck</strong> ich Leistungen beurteile.</p>
          <ol class="theory-list">
            <li><strong>Diagnostische Beurteilung – Vor dem Lernen</strong><ul><li><strong>Zweck:</strong> Lernvoraussetzungen und Wissensstand feststellen.</li><li><strong>Nutzen:</strong> Die Lehrkraft kann den Unterricht gezielt planen und anpassen.</li><li><strong>Beispiel:</strong> Unbenoteter Eingangstest oder Ich-kann-Liste.</li></ul></li>
            <li><strong>Formative Beurteilung – Während des Lernens</strong><ul><li><strong>Zweck:</strong> Lernfortschritte erkennen und Rückmeldung geben.</li><li><strong>Nutzen:</strong> Schüler erfahren, was sie bereits können und wie sie sich verbessern können.</li><li><strong>Beispiel:</strong> Feedback zu einem Zwischenentwurf, meist unbenotet.</li></ul></li>
            <li><strong>Summative Beurteilung – Nach dem Lernen</strong><ul><li><strong>Zweck:</strong> Feststellen, inwieweit die Lernziele erreicht wurden.</li><li><strong>Nutzen:</strong> Leistungen für Schüler, Eltern und Schule bewerten und dokumentieren.</li><li><strong>Beispiel:</strong> Benotete Klassenarbeit.</li></ul></li>
          </ol>
          <p><strong>Merksatz:</strong> Diagnostisch = Unterricht planen, formativ = Lernen verbessern, summativ = Leistung bewerten.</p>
        </Dialog>
        <button type="button" class="theory-button" aria-haspopup="dialog" @click="activeTheory = 'Bezugsnormen der Leistungsbeurteilung'">Bezugsnormen der Leistungsbeurteilung</button>
        <Dialog :visible="activeTheory === 'Bezugsnormen der Leistungsbeurteilung'" @update:visible="activeTheory = ''" modal header="Bezugsnormen der Leistungsbeurteilung" :style="{ width: '42rem', maxWidth: 'calc(100vw - 2rem)' }">
          <p>Hier geht es darum, <strong>mit welchem Maßstab ich die Leistung eines Schülers vergleiche.</strong></p>
          <ol class="theory-list">
            <li><strong>Individualnorm – Vergleich mit sich selbst</strong><ul><li><strong>Zweck:</strong> Persönliche Lernfortschritte erkennen und würdigen.</li><li><strong>Vorteil:</strong> Kann motivieren.</li><li><strong>Nachteil:</strong> Verbindliche Leistungsstandards können aus dem Blick geraten.</li></ul></li>
            <li><strong>Sozialnorm – Vergleich mit anderen</strong><ul><li><strong>Zweck:</strong> Leistung innerhalb einer Gruppe einordnen.</li><li><strong>Vorteil:</strong> Ermöglicht Rangvergleiche.</li><li><strong>Nachteil:</strong> Individuelle Fortschritte bleiben möglicherweise unberücksichtigt.</li></ul></li>
            <li><strong>Sachnorm – Vergleich mit festgelegten Kriterien</strong><ul><li><strong>Zweck:</strong> Überprüfen, ob die Lernziele erreicht wurden.</li><li><strong>Vorteil:</strong> Transparente und nachvollziehbare Bewertung.</li><li><strong>Nachteil:</strong> Erfordert klare und angemessene Kriterien.</li></ul></li>
          </ol>
          <p><strong>Beispiel aus dem Gestaltungsunterricht:</strong> Ein Schüler hat seinen Entwurf stark verbessert (Individualnorm), liegt im Klassendurchschnitt (Sozialnorm), erfüllt aber noch nicht alle Gestaltungskriterien aus dem Bildungsplan (Sachnorm).</p>
          <p><strong>Merksatz:</strong> Individualnorm = eigener Fortschritt, Sozialnorm = Vergleich mit anderen, Sachnorm = Lernziele aus dem Bildungsplan erreichen.</p>
        </Dialog>
        <button type="button" class="theory-button" aria-haspopup="dialog" @click="activeTheory = 'Rechtliche Überprüfbarkeit der Notengebung'">Rechtliche Überprüfbarkeit der Notengebung</button>
        <Dialog :visible="activeTheory === 'Rechtliche Überprüfbarkeit der Notengebung'" @update:visible="activeTheory = ''" modal header="Rechtliche Überprüfbarkeit der Notengebung" :style="{ width: '42rem', maxWidth: 'calc(100vw - 2rem)' }">
          <ol class="theory-list">
            <li><strong>Verfahrensfehler:</strong> Die vorgeschriebenen Regeln zur Leistungserhebung und Bewertung müssen eingehalten werden.<br><strong>Beispiel:</strong> Eine Klassenarbeit wird nicht unter den vorgeschriebenen Bedingungen durchgeführt, z. B. keine transparenten Bewertungskriterien.</li>
            <li><strong>Unrichtige Tatsachen:</strong> Die Note muss auf den tatsächlich erbrachten Leistungen beruhen.<br><strong>Beispiel:</strong> Eine richtige Antwort wird versehentlich als falsch gewertet.</li>
            <li><strong>Allgemeine Bewertungsgrundsätze:</strong> Für alle Schüler müssen gleiche Bewertungsmaßstäbe gelten.<br><strong>Beispiel:</strong> Bei zwei Schülern wird derselbe Fehler unterschiedlich stark gewichtet.</li>
            <li><strong>Sachfremde Erwägungen:</strong> Persönliche Sympathien oder Antipathien dürfen die Bewertung nicht beeinflussen.<br><strong>Beispiel:</strong> Ein unsympathischer Schüler erhält trotz guter Leistung eine schlechtere Note.</li>
            <li><strong>Fachlich richtige Lösungen:</strong> Auch richtige Alternativlösungen müssen anerkannt werden.<br><strong>Beispiel:</strong> Ein Schüler löst eine Aufgabe auf einem anderen, aber fachlich korrekten Weg.</li>
          </ol>
        </Dialog>
      </aside>
      </div>
      <section class="work-area" aria-live="polite">
        <div class="work-heading"><span>ARBEITSBEREICH</span><h2>{{ heading }}</h2></div>
        <div v-if="!selectedClass" class="empty-state"><h3>Wähle eine Klasse</h3><p>Wähle links eine Klasse aus.</p></div>
        <template v-else>
          <component :is="SeatingPlan" v-if="isDev && selectedClass.seatingId" :key="selectedClass.seatingId" :class-id="selectedClass.seatingId" embedded />
          <div v-else class="empty-state"><h3>Kein Sitzplan verfügbar</h3><p v-if="!isDev">Die Sitzpläne stehen in der lokalen Entwicklungsansicht zur Verfügung.</p><p v-else>Für diese Klasse ist noch kein Sitzplan hinterlegt.</p></div>
        </template>
      </section>
    </div>
    </div>
  </main>
</template>

<style scoped>
.grading-page { min-height: 100vh; background: #f8f7f3; color: #202d32; font-family: 'Jost', Arial, sans-serif; }
.grading-shell { width: 100%; max-width: 1920px; box-sizing: border-box; padding: 28px 24px 60px; margin: auto; }
.page-header { padding-bottom: 28px; }
.page-header a { color: #526166; font-size: 14px; text-underline-offset: 4px; }
.page-header h1 { font-size: clamp(30px, 3vw, 44px); font-weight: 500; letter-spacing: -.03em; margin: 22px 0 0; }
.page-header p, .theory p, .empty-state p { color: #526166; line-height: 1.6; }
.workspace { display: grid; grid-template-columns: minmax(230px, 1fr) minmax(0, 4fr); gap: 20px; align-items: start; }
.left-column { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
.navigation, .theory { border: 1px solid #dce3d9; border-radius: 14px; background: #eef2eb; padding: 20px 16px; }
.work-area { border: 1px solid #dce3d9; border-radius: 14px; background: white; padding: 22px; }
.navigation h2, .theory h2 { font-size: 23px; font-weight: 500; line-height: 1.3; margin: 0 0 12px; }
.theory-button { display: block; width: 100%; margin-top: 12px; padding: 14px; border: 1px solid #dce3d9; border-radius: 8px; background: white; color: #202d32; text-align: left; font: inherit; cursor: pointer; }
.theory-button:hover { background: #f8faf7; }
.theory-list { padding-left: 1.3rem; margin: 0; line-height: 1.55; }
.theory-list li + li { margin-top: .75rem; }
.navigation button { display: block; width: 100%; border: 0; border-radius: 8px; text-align: left; padding: .55rem .65rem; background: transparent; color: #202d32; font: inherit; cursor: pointer; }
.navigation button:hover { background: #e7ede2; }
.navigation button.active { background: #dce8d9; color: #202d32; font-weight: 600; }
.work-area { min-height: 480px; min-width: 0; }
.work-heading { border-bottom: 1px solid #dce3d9; padding-bottom: 1rem; }
.work-heading span { font-size: 11px; color: #536c5a; font-weight: 500; letter-spacing: .12em; }
.work-heading h2 { margin: .35rem 0 0; font-size: 23px; font-weight: 500; }
.empty-state { padding: 3rem 1rem; text-align: center; }
.empty-state h3 { margin-bottom: .4rem; }
@media (max-width: 650px) { .grading-shell { padding: 20px 16px 40px; } .workspace { grid-template-columns: minmax(0, 1fr); } .work-area { min-height: 300px; } }
</style>
