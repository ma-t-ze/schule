<script setup>
import { onMounted, ref } from 'vue'
import { objectives } from './zeichenKurzplan'

const document = ref(null)
onMounted(() => {
  const pages = [...document.value.querySelectorAll('.page')]
  document.value.querySelectorAll('[data-toc-target]').forEach(cell => {
    const target = document.value.querySelector(`[id="${cell.dataset.tocTarget}"]`)
    if (target) cell.textContent = String(pages.indexOf(target.closest('.page')) + 1)
  })
})
</script>
<template>
  <div ref="document" class="doc">
<div class="page cover-page">
<p class="seminar">Seminar für Ausbildung und Fortbildung der Lehrkräfte Karlsruhe (Berufliche Schulen)</p>
<h1>Unterrichtsentwurf für</h1>
<h2>☒ den Beratungsbesuch (Langform)</h2>
<h2 class="unchecked">☐ eine Lehrübung (Langform)</h2>
<table class="meta-table"><tbody>
<tr>
<td colspan="2"><span class="label">Vor- und Nachname</span><br>Matthias Heckel</td>
</tr>
<tr>
<td colspan="2"><span class="label">Schulanschrift (mit Telefonnummer)</span><br>Carl-Hofer-Schule<br>Adlerstr. 29 · 76133 Karlsruhe<br>Telefon: 0721 133-4866</td>
</tr>
<tr>
<td colspan="2"><span class="label">Schulleiter/-in</span><br>Veit Kibele</td>
</tr>
<tr>
<td colspan="1"><span class="label">Mentor/-in</span><br>Steffen Bittmann</td>
<td colspan="1"><span class="label">Ausbilder/-in</span><br>Andreas Lorenschatt</td>
</tr>
<tr>
<td colspan="1"><span class="label">Datum</span><br>17.11.2026</td>
<td colspan="1"><span class="label">Uhrzeit</span><br>10:35–11:20</td>
</tr>
<tr>
<td colspan="1"><span class="label">Klasse / Schulart</span><br>3TGG1/2 · Technisches Gymnasium (TGG)</td>
<td colspan="1"><span class="label">Raum</span><br>429</td>
</tr>
<tr>
<td colspan="2"><span class="label">Fach/ggf. Lernfeld</span><br>Gestaltungs- und Medientechnik (GMT)</td>
</tr>
</tbody></table>
<p class="thema-label"><strong>Thema des Unterrichts (ggf. unter Angabe der Lernsituation):</strong></p>
<div class="thema-box">Warum verstehen wir Zeichen unterschiedlich? – Untersuchung von Zeichenbeziehungen in der visuellen Kommunikation anhand humorvoller Werbevideos</div>
</div>
<div class="page">
<h3>Inhaltsverzeichnis</h3>
<table class="toc"><tbody>
<tr><td>1.</td><td>Überblick und zentrales Anliegen</td><td data-toc-target="_Toc1">–</td></tr>
<tr class="toc-subsection"><td>1.1.</td><td>Thema</td><td data-toc-target="toc-1-1">–</td></tr>
<tr class="toc-subsection"><td>1.2.</td><td>Lehrplanbezug</td><td data-toc-target="toc-1-2">–</td></tr>
<tr class="toc-subsection"><td>1.3.</td><td>Zentrales Anliegen</td><td data-toc-target="toc-1-3">–</td></tr>
<tr class="toc-subsection"><td>1.4.</td><td>Lehr-Lernarrangement</td><td data-toc-target="toc-1-4">–</td></tr>
<tr><td>2.</td><td>Begründungszusammenhänge/Vertiefung</td><td data-toc-target="_Toc2">–</td></tr>
<tr class="toc-subsection"><td>2.1.</td><td>Rahmenbedingungen und Einbettung der Stunde</td><td data-toc-target="_Toc3">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.1.1.</td><td>Organisatorisches</td><td data-toc-target="toc-2-1-1">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.1.2.</td><td>Klassenstruktur</td><td data-toc-target="toc-2-1-2">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.1.3.</td><td>Inhaltliche Einbettung in die Unterrichtseinheit</td><td data-toc-target="toc-2-1-3">–</td></tr>
<tr class="toc-subsection"><td>2.2.</td><td>Lernziele und Kompetenzentwicklung</td><td data-toc-target="_Toc7">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.2.1.</td><td>Zielformulierung der Unterrichtsstunde</td><td data-toc-target="toc-2-2-1">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.2.2.</td><td>Beschreibung der Kompetenzentwicklung im Zusammenhang mit den in vorangegangenen und nachfolgenden Unterrichtsstunden erworbenen Teilkompetenzen</td><td data-toc-target="toc-2-2-2">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.2.3.</td><td>Lernziele im Bereich Fachkompetenz</td><td data-toc-target="toc-2-2-3">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.2.4.</td><td>Lernziele aus dem Bereich der überfachlichen Kompetenzen</td><td data-toc-target="toc-2-2-4">–</td></tr>
<tr class="toc-subsection"><td>2.3.</td><td>Inhalte</td><td data-toc-target="_Toc12">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.3.1.</td><td>Fachwissenschaftliche Sachanalyse</td><td data-toc-target="toc-2-3-1">–</td></tr>
<tr class="toc-subsection toc-level-3"><td>2.3.2.</td><td>Fachdidaktische Analyse</td><td data-toc-target="toc-2-3-2">–</td></tr>
<tr class="toc-subsection"><td>2.4.</td><td>Gestaltung des Lehr-/Lernarrangements</td><td data-toc-target="_Toc17">–</td></tr>
<tr><td>3.</td><td>Anhang</td><td data-toc-target="toc-anhang">–</td></tr>
</tbody></table>
</div>
<div class="page">
<h2 id="_Toc1" class="section-title">1. Überblick und zentrales Anliegen</h2>
<table class="content-table"><tbody>
<tr>
<td id="toc-1-1" colspan="1" class="key">1.1 Thema</td>
<td colspan="1">Warum verstehen wir Zeichen unterschiedlich? – Untersuchung von Zeichenbeziehungen in der visuellen Kommunikation anhand humorvoller Werbevideos</td>
</tr>
<tr>
<td id="toc-1-2" colspan="1" class="key">1.2 Lehrplanbezug</td>
<td colspan="1">Der Bildungsplan 2021 für das Berufliche Gymnasium, Technische Richtung, Profil Gestaltungs- und Medientechnik (TGG) nennt in BPE 2 „Grundlagen der visuellen Kommunikation“ (S. 13–14), insbesondere BPE 2.4 (S. 14), das Beurteilen von Zeichen hinsichtlich ihrer Repräsentationsform. Verbindlich genannt werden Ikon (Ähnlichkeit/Abbild), Index (Symptom/Hinweis) und Symbol (Konvention). Die Stunde erarbeitet deren Bedeutungsbeziehungen in alltagssprachlicher Form als Vorbereitung auf die anschließende explizite Fachbegriffseinführung.</td>
</tr>
<tr>
<td id="toc-1-3" colspan="1" class="key">1.3 Zentrales Anliegen</td>
<td colspan="1">Die SuS unterscheiden Zeichen, den dadurch ausgelösten Gedanken und drei Arten der Zeichenbeziehung. Sie begründen an bekannten Videosituationen, wie Bedeutungen durch Ähnlichkeit, Konvention oder Zusammenhang entstehen, und erkennen deren Bedeutung für verständliche Gestaltung.</td>
</tr>
<tr>
<td id="toc-1-4" colspan="1" class="key">1.4 Lehr-Lernarrangement</td>
<td colspan="1">Problemorientierter Einstieg über drei kurze Werbevideos; gelenktes Unterrichtsgespräch mit sprachlichem Scaffolding; Dreiergruppenarbeit mit A/B-Zuordnungen und schriftlichen Begründungen; gemeinsame Sicherung und Designtransfer. Die Begriffe Ikon, Index und Symbol folgen bewusst erst im nächsten Lernschritt.</td>
</tr>
</tbody></table>
</div>
<div class="page">
<h2 id="_Toc2" class="section-title">2. Begründungszusammenhänge / Vertiefung</h2>
<h3 id="_Toc3">2.1. Rahmenbedingungen und Einbettung der Stunde</h3>
<h4 id="toc-2-1-1">2.1.1. Organisatorisches</h4>
<p>Die Carl-Hofer-Schule Karlsruhe bietet mit dem Technischen Gymnasium im Profil Gestaltungs- und Medientechnik (TGG) einen dreijährigen Bildungsgang an, der zur allgemeinen Hochschulreife führt. Neben einer breiten Allgemeinbildung erwerben die Schülerinnen und Schüler grundlegende fachliche Kenntnisse und praktische Kompetenzen in den Bereichen Gestaltung, Design und Medientechnik.</p>
<p>Der Unterricht im Profilfach Gestaltungs- und Medientechnik (GMT) verbindet theoretische Grundlagen mit gestalterischen und technischen Anwendungen. Die Schülerinnen und Schüler setzen sich unter anderem mit visueller Kommunikation, Gestaltungsprinzipien und digitalen Medien auseinander.</p>
<p>Der Unterricht findet in Raum 429 der Carl-Hofer-Schule statt. Der Klassenraum verfügt über insgesamt 30 Sitzplätze, denen jeweils ein iMac-Arbeitsplatz zugeordnet ist. Darüber hinaus ist der Raum mit einem Beamer ausgestattet, der die Präsentation digitaler und audiovisueller Unterrichtsinhalte ermöglicht. Die technische Ausstattung bietet gute Voraussetzungen für die Verbindung theoretischer Unterrichtsinhalte mit praktischen und digitalen Arbeitsphasen.</p>
<h4 id="toc-2-1-2">2.1.2. Klassenstruktur</h4>
<p>Die Klasse 3TGG1/2 des Technischen Gymnasiums im Profil Gestaltungs- und Medientechnik wird von insgesamt 20 Schülerinnen und Schülern im Alter zwischen 15 und 17 Jahren besucht. Zwei Lernende sind erst 15 Jahre alt.</p>
<p>Die Klasse zeichnet sich insgesamt durch ein ruhiges, aufmerksames und kooperatives Arbeitsverhalten aus. Die Schülerinnen und Schüler folgen dem Unterricht konzentriert und zeigen sich gegenüber der Lehrkraft sowie untereinander respektvoll. Sprachliche Barrieren bestehen innerhalb der Lerngruppe nicht, sodass Arbeitsaufträge und fachliche Inhalte in der Regel ohne zusätzliche sprachliche Unterstützung vermittelt werden können.</p>
<p>Die insgesamt positive Lernatmosphäre bietet gute Voraussetzungen für unterschiedliche Sozialformen. Neben lehrergeführten Unterrichtsphasen können auch Partner- und Gruppenarbeiten durchgeführt werden, in denen sich die Schülerinnen und Schüler gegenseitig unterstützen und gemeinsam Aufgabenstellungen bearbeiten.</p>
<h4 id="toc-2-1-3">2.1.3. Inhaltliche Einbettung in die Unterrichtseinheit</h4>
<p>Die Unterrichtsstunde ist Teil einer Unterrichtsreihe zur Analyse von Zeichen und Zeichenbeziehungen im Fach Gestaltungs- und Medientechnik. Zuvor beschäftigten sich die Schülerinnen und Schüler mit den Grundlagen der visuellen Wahrnehmung. Anhand optischer Täuschungen wurde verdeutlicht, dass unsere Wahrnehmung kein objektives Abbild der Wirklichkeit darstellt, sondern durch unser Gehirn interpretiert und konstruiert wird.</p>
<p>Darauf aufbauend wurde der Konstruktivismus eingeführt. Die Schülerinnen und Schüler lernten, dass Menschen dieselbe Situation aufgrund unterschiedlicher Erfahrungen, Kenntnisse und Erwartungen verschieden wahrnehmen und interpretieren können.</p>
<p>Im Anschluss wurde die Semiotik als Wissenschaft von den Zeichen und Zeichenprozessen eingeführt. Dabei beschäftigten sich die Lernenden mit den drei Betrachtungsebenen der Semiotik: Syntax (Beziehungen zwischen Zeichen), Semantik (Beziehungen zwischen Zeichen und ihrer Bedeutung) und Pragmatik (Beziehungen zwischen Zeichen und ihren Nutzern). Dieses grundlegende Verständnis wurde durch erste einfache semiotische Analysen von Zeichen und Produkten vertieft.</p>
<p>Die aktuelle Unterrichtsstunde knüpft an diese Grundlagen an und erweitert die bisherige Betrachtung um die unterschiedlichen Beziehungen zwischen Zeichen und dem, worauf sie verweisen. Anhand humorvoller Werbevideos untersuchen die Schülerinnen und Schüler, wie Zeichen durch Ähnlichkeit, einen tatsächlichen Zusammenhang oder eine erlernte Konvention Bedeutung vermitteln können.</p>
<p>Ziel ist es, dass die Lernenden diese drei grundlegenden Zeichenbeziehungen zunächst anhand anschaulicher Beispiele erkennen, unterscheiden und beschreiben können. Darauf aufbauend werden im weiteren Verlauf der Unterrichtsreihe die Fachbegriffe Ikon, Index und Symbol eingeführt und mit den bereits erarbeiteten Zeichenbeziehungen verknüpft.</p>
</div>
<div class="page">
<h3 id="_Toc7">2.2. Lernziele und Kompetenzentwicklung</h3>
<h4 id="toc-2-2-1">2.2.1. Zielformulierung der Unterrichtsstunde</h4>
<ol>
<li v-for="goal in objectives" :key="goal">{{ goal }}</li>
</ol>
<h4 id="toc-2-2-2">2.2.2. Beschreibung der Kompetenzentwicklung im Zusammenhang mit den in vorangegangenen und nachfolgenden Unterrichtsstunden erworbenen Teilkompetenzen</h4>
<p>In den vorangegangenen Unterrichtsstunden haben die SuS anhand optischer Täuschungen und des Konstruktivismus erkannt, dass Wahrnehmung durch Erfahrungen, Kenntnisse und Erwartungen geprägt wird. Mit den Betrachtungsebenen Syntax, Semantik und Pragmatik haben sie erste Kriterien für die semiotische Analyse von Zeichen und Produkten erworben.</p>
<p>Die aktuelle Stunde erweitert diese Teilkompetenzen: Die SuS unterscheiden wahrnehmbare Zeichen von den dadurch ausgelösten Gedanken und untersuchen, auf welcher Grundlage eine Bedeutung entsteht. Anhand der Werbevideos beschreiben und begründen sie Ähnlichkeit, Konvention und tatsächlichen Zusammenhang zunächst in eigenen Worten. Damit vertiefen sie insbesondere die Betrachtung der Beziehung zwischen Zeichen und Bedeutung.</p>
<p>In den nachfolgenden Unterrichtsstunden werden die erarbeiteten Vorstellungen mit den Fachbegriffen Ikon, Index und Symbol verknüpft. Die SuS können Zeichenbeziehungen dadurch zunehmend fachsprachlich beschreiben und ihre Kenntnisse für die Analyse und Gestaltung verständlicher Botschaften nutzen.</p>
<h4 id="toc-2-2-3">2.2.3. Lernziele im Bereich Fachkompetenz</h4>
<p>Die SuS unterscheiden zwischen einem wahrnehmbaren Zeichen und dem dadurch ausgelösten Gedanken. Sie erkennen, dass Zeichen durch Ähnlichkeit, Konvention oder einen tatsächlichen Zusammenhang Bedeutung vermitteln können, und beschreiben diese Zusammenhänge zunächst in eigenen Worten. Erst im weiteren Verlauf der Stunde wird dafür der übergeordnete Fachbegriff „Zeichenbeziehung“ eingeführt. Dabei entwickeln die SuS ein Verständnis dafür, wie Zeichen auf unterschiedliche Weise Bedeutung vermitteln und wie dieses Wissen für die Gestaltung verständlicher Botschaften genutzt werden kann.</p>
<h4 id="toc-2-2-4">2.2.4. Lernziele aus dem Bereich der überfachlichen Kompetenzen</h4>
<p><strong>Methodenkompetenz:</strong> Die SuS entwickeln ihre Fähigkeit, audiovisuelle Inhalte systematisch zu analysieren, relevante Informationen zu erkennen und Zusammenhänge herauszuarbeiten. Sie lernen, Beobachtungen von Interpretationen zu unterscheiden, ihre Erkenntnisse anhand vorgegebener Kriterien zu strukturieren und Schlussfolgerungen nachvollziehbar zu begründen. Durch den Vergleich unterschiedlicher Lösungsansätze üben sie, Ergebnisse kritisch zu überprüfen und gegebenenfalls zu überarbeiten.</p>
<p><strong>Selbstkompetenz:</strong> Die SuS setzen sich eigenständig mit den dargestellten Situationen auseinander und entwickeln begründete Interpretationen. Sie hinterfragen ihre eigenen Deutungen und erkennen, dass Zeichen aufgrund unterschiedlicher Erfahrungen und kultureller Prägungen verschieden verstanden werden können. Dabei reflektieren sie ihre Ergebnisse und überprüfen diese anhand der erarbeiteten Kriterien.</p>
</div>
<div class="page">
<h3 id="_Toc12">2.3. Inhalte</h3>
<h4 id="toc-2-3-1">2.3.1. Fachwissenschaftliche Sachanalyse</h4>
<p>Die Unterscheidung zwischen verschiedenen Zeichenarten geht auf den amerikanischen Philosophen und Logiker Charles Sanders Peirce (1839–1914) zurück. Er entwickelte eine Zeichentheorie, die beschreibt, wie Zeichen auf etwas verweisen und wie durch ihre Interpretation Bedeutung entsteht.</p>
<p>Peirce versteht Zeichen als dreigliedrige Beziehung zwischen dem Zeichen (Representamen), dem Objekt und dem Interpretanten. Das Zeichen ist dabei das Wahrnehmbare, das auf etwas anderes verweist. Das Objekt ist das Bezeichnete, also dasjenige, worauf sich das Zeichen bezieht. Dabei unterscheidet Peirce unter anderem das dynamische Objekt, das unabhängig von der jeweiligen Interpretation besteht. Der Interpretant beschreibt die durch das Zeichen vermittelte Bedeutung und kann vereinfacht mit einer gedanklichen Vorstellung verglichen werden. Beispielsweise kann aufsteigender Rauch als Zeichen auf ein tatsächlich vorhandenes Feuer verweisen. Während das Feuer das Objekt darstellt, kann die Interpretation des Rauchs unterschiedlich ausfallen. Eine Person vermutet möglicherweise einen Hausbrand, obwohl lediglich ein Kamin befeuert wird. Die Unterscheidung verdeutlicht, dass die Interpretation eines Zeichens nicht zwangsläufig mit den tatsächlichen Gegebenheiten übereinstimmen muss.</p>
<p>Peirce unterscheidet drei grundlegende Zeichenarten anhand ihrer Beziehung zum Objekt:</p>
<ul class="zeichenarten">
<li><strong>Ikon (Ähnlichkeit):</strong> Das Zeichen verweist aufgrund einer Ähnlichkeit auf sein Objekt. Ein Beispiel ist eine bildliche Darstellung, die dem dargestellten Gegenstand in bestimmten Eigenschaften ähnelt.</li>
<li><strong>Index (tatsächlicher Zusammenhang):</strong> Das Zeichen steht in einer realen, beispielsweise ursächlichen oder räumlichen Beziehung zu seinem Objekt. Beispielsweise kann Rauch als Hinweis auf Feuer dienen.</li>
<li><strong>Symbol (Konvention):</strong> Die Beziehung zwischen Zeichen und Objekt beruht auf erlernten Regeln oder gesellschaftlichen Vereinbarungen. Beispiele sind Wörter, Verkehrszeichen oder kulturell geprägte Bedeutungen von Farben und Gegenständen.</li>
</ul>
<p>Die drei Zeichenarten unterscheiden sich somit durch die Art der Beziehung zwischen Zeichen und Objekt. Ein Zeichen kann dabei auch mehrere dieser Eigenschaften gleichzeitig aufweisen. Die Interpretation eines Zeichens ist zudem vom jeweiligen Kontext sowie von den Erfahrungen und dem Wissen der interpretierenden Person abhängig.</p>
<p>In der Sequenz „Haustier“ führt die äußere Ähnlichkeit zwischen einer Wollmütze und einer Katze zu einer Verwechslung. In der Sequenz „Blumen“ werden Chrysanthemen aufgrund ihrer kulturell erlernten Bedeutung als Zeichen der Trauer interpretiert. In der Sequenz „Einkaufsladen“ führt die Deutung eines beobachtbaren Verhaltens zu einer falschen Schlussfolgerung. Dabei zeigt sich, dass wahrnehmbare Hinweise unterschiedliche Interpretationen hervorrufen können, die nicht zwangsläufig den tatsächlichen Gegebenheiten entsprechen.</p>
<h4 id="toc-2-3-2">2.3.2. Fachdidaktische Analyse</h4>
<p>Die Stoffstruktur folgt einem schrittweisen Aufbau. Nachdem sich die Schülerinnen und Schüler mit der visuellen Wahrnehmung und dem Konstruktivismus beschäftigt haben, wurde die Semiotik mit ihren drei Betrachtungsebenen Syntax, Semantik und Pragmatik eingeführt. Durch einfache Analysen von Zeichen und Produkten konnten die Lernenden erste praktische Erfahrungen mit der semiotischen Analyse sammeln. Die aktuelle Stunde knüpft daran an und erweitert das bisherige Verständnis um die Frage, auf welche Weise Zeichen auf etwas anderes verweisen.</p>
<p>Im Sinne der didaktischen Reduktion wird auf eine umfassende Einführung in die Zeichentheorie von Charles Sanders Peirce verzichtet. Stattdessen konzentriert sich die Stunde auf drei grundlegende Zeichenbeziehungen: Ähnlichkeit, Konvention und tatsächlicher Zusammenhang. Die Schülerinnen und Schüler erschließen diese zunächst anhand anschaulicher Beispiele und beschreiben sie in eigenen Worten. Die Fachbegriffe Ikon, Index und Symbol folgen in einer späteren Unterrichtsstunde. Dieses Vorgehen ermöglicht es, an vorhandenes Wissen anzuknüpfen und zunächst ein inhaltliches Verständnis aufzubauen, bevor abstrakte Fachbegriffe eingeführt werden.</p>
<p>Den Ausgangspunkt bilden drei humorvolle Werbevideos, in denen Zeichen unterschiedlich interpretiert werden und dadurch Missverständnisse entstehen. Die Videos schaffen einen lebensnahen Zugang zum Thema. Die Schülerinnen und Schüler untersuchen die Ursachen der Missverständnisse und erkennen dabei unterschiedliche Arten der Bedeutungsvermittlung.</p>
</div>
<div class="page">
<h3 id="_Toc17">2.4. Gestaltung des Lehr-/Lernarrangements</h3>
<p>Die Unterrichtsstunde ist überwiegend schülerzentriert gestaltet und verbindet gemeinsame Erarbeitungsphasen im Plenum mit kooperativer Gruppenarbeit. Die Lehrkraft übernimmt dabei hauptsächlich eine moderierende und unterstützende Rolle. Der Lernprozess folgt einem schrittweisen Aufbau vom anschaulichen Beispiel zur abstrakten Erkenntnis. Da das Thema für Schülerinnen und Schüler der Eingangsklasse sehr abstrakt und theoretisch ist, wird bewusst auf die unmittelbare Einführung der Fachbegriffe Ikon, Index und Symbol verzichtet. Stattdessen sollen die Lernenden zunächst anhand konkreter Beispiele ein grundlegendes Verständnis der Zusammenhänge entwickeln. Im Sinne des Scaffoldings erhalten sie dabei Unterstützung durch gezielte Leitfragen und strukturierte Aufgabenstellungen, die im Verlauf der weiteren Unterrichtseinheiten mit zunehmender Selbstständigkeit schrittweise reduziert wird.</p>
<p>In der Gruppenarbeit bearbeiten die SuS ein gemeinsames, zweiseitiges Arbeitsblatt in Dreiergruppen. Sie ordnen den drei Werbefilmen das passende Zeichen beziehungsweise die Zeichengruppe und die Bedeutung zu, die die handelnde Person damit verbindet. Dazu tragen sie die Buchstaben A und B in die vorgesehenen Felder ein, benennen Ähnlichkeit, Konvention oder Zusammenhang als Grund für das Missverständnis und begründen ihre Zuordnung jeweils in ein bis zwei kurzen Sätzen. Die Aufgaben 01 und 02 stehen auf der ersten Seite, Aufgabe 03 auf der zweiten Seite. Alle Gruppen bearbeiten dieselben drei Aufgaben; eine Zusatzaufgabe ist nicht vorgesehen.</p>
<p>Die Ergebnissicherung erfolgt durch die gemeinsame Besprechung der Zuordnungen und Begründungen des Arbeitsblattes im Plenum. Abschließend wird der Blick von den Missverständnissen auf den eigentlichen Lerngegenstand gelenkt: die unterschiedlichen Arten, wie Zeichen Bedeutung vermitteln. Dabei wird der Bezug zur Gestaltung hergestellt. Die Schülerinnen und Schüler erkennen, dass das Verständnis unterschiedlicher Zeichenbeziehungen eine wichtige Voraussetzung dafür ist, Zeichen gezielt einzusetzen und verständliche Botschaften zu gestalten.</p>
</div>
<div class="page appendix-page">
<h2 id="toc-anhang" class="section-title">3. Anhang</h2>
<p>Präsentation<br>Arbeitsblatt „Zeichen und ihre Bedeutung“ (2 Seiten)</p>
</div>
  </div>
</template>
<style scoped>
@import "./unterrichtLangform.css";
</style>
