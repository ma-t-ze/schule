<script setup>
import { ref } from 'vue'
import mainboardImage from './mainboard.png'
defineOptions({ name: 'HardwarekomponentenPage' })

const selected = ref('cpu')
const hotspots = [
  { id: 'peripherals', label: 'Eingabegeräte', x: 1.2, y: 1.8, w: 21, h: 8.2 },
  { id: 'board', label: 'Mainboard / Motherboard', x: 38.2, y: 1.4, w: 31.6, h: 5.8 },
  { id: 'ports', label: 'Schnittstellen', x: 31.9, y: 25.4, w: 12.9, h: 5.7 },
  { id: 'cpu', label: 'Mikroprozessor (CPU)', x: 49.8, y: 16.7, w: 13.8, h: 7.6 },
  { id: 'ram', label: 'Arbeitsspeicher (RAM)', x: 78.8, y: 20.2, w: 14.1, h: 7.5 },
  { id: 'io', label: 'I/O-Controller', x: 83.3, y: 49, w: 15.6, h: 7.4 },
  { id: 'bus', label: 'Bussystem', x: 51.5, y: 56.7, w: 13.9, h: 7.5 },
  { id: 'storage', label: 'Festplatte / SSD', x: 85.2, y: 71.4, w: 13.6, h: 7.6 },
  { id: 'peripherals', label: 'Ausgabegeräte', x: 1.2, y: 86, w: 18.1, h: 8.2 }
]
const components = [
  { id: 'cpu', short: 'CPU', name: 'Mikroprozessor (CPU)', verb: 'Rechnen und steuern', text: 'Die CPU führt die Befehle der Programme aus. Sie berechnet Daten und steuert Abläufe im Computer.', example: 'Du veränderst die Helligkeit eines Fotos. Die CPU verarbeitet die Befehle des Bildprogramms.', sketch: 'Ein kleiner Chip auf dem Mainboard.' },
  { id: 'bus', short: 'Bus', name: 'Bussystem (Bus)', verb: 'Informationen transportieren', text: 'Der Bus verbindet Bauteile miteinander. Über diese Verbindungen laufen Daten, Speicheradressen und Steuersignale.', example: 'Die CPU liest Bilddaten aus dem RAM. Die Daten werden über Verbindungen zwischen den Bauteilen übertragen.', sketch: 'Linien mit Pfeilen zwischen den Bauteilen.' },
  { id: 'ram', short: 'RAM', name: 'Arbeitsspeicher (RAM)', verb: 'Für die aktuelle Arbeit bereithalten', text: 'Im RAM liegen die Programme und Daten, die gerade gebraucht werden. Der Zugriff ist schnell. Ohne Strom geht sein Inhalt verloren.', example: 'Das geöffnete Bild wird im Arbeitsspeicher bearbeitet. Speichere deine Änderungen, bevor du den Computer ausschaltest.', sketch: 'Ein schmaler Riegel mit mehreren kleinen Chips.' },
  { id: 'storage', short: 'SSD', name: 'Festplatte / SSD', verb: 'Dauerhaft speichern', text: 'Hier liegen Programme und gespeicherte Dateien. Sie bleiben auch ohne Strom erhalten. Eine Festplatte (HDD) speichert auf magnetischen Scheiben. Eine SSD speichert in Speicherchips.', example: 'Du speicherst dein Foto als Datei. Beim nächsten Start kannst du es wieder öffnen.', sketch: 'Eine Festplatte oder eine SSD mit der Beschriftung „Dateien“.' },
  { id: 'board', short: 'Board', name: 'Mainboard (Motherboard)', verb: 'Bauteile verbinden', text: 'Das Mainboard ist die Hauptplatine des Computers. Auf ihr sitzen oder stecken zum Beispiel CPU, RAM und Controller. Leiterbahnen verbinden die Bauteile.', example: 'In einem Desktop-PC steckt der RAM in passenden Steckplätzen auf dem Mainboard.', sketch: 'Eine große Platine als Grundlage für CPU, RAM und Verbindungen.' },
  { id: 'io', short: 'I/O', name: 'I/O-Controller', verb: 'Ein- und Ausgabe steuern', text: 'I/O steht für Input und Output: Eingabe und Ausgabe. Controller regeln den Datenaustausch mit angeschlossenen Geräten. Sie sind oft in andere Chips eingebaut.', example: 'Ein USB-Controller regelt die Verbindung zu einer angeschlossenen USB-Maus.', sketch: 'Ein kleiner Chip zwischen den inneren Bauteilen und den Anschlüssen.' },
  { id: 'peripherals', short: 'Geräte', name: 'Peripheriegeräte', verb: 'Eingeben, ausgeben und speichern', text: 'Diese Geräte ergänzen den Computer. Mit einer Tastatur gibst du Daten ein. Ein Monitor zeigt Ergebnisse. Ein USB-Stick speichert Dateien.', example: 'Eingabe: Maus, Tastatur, Scanner, Mikrofon. Ausgabe: Monitor, Drucker, Lautsprecher. Speicher: USB-Stick, externe Festplatte.', sketch: 'Geräte um den Computer herum. Beschrifte sie mit ihrer Aufgabe.' },
  { id: 'ports', short: 'Ports', name: 'Schnittstellen', verb: 'Geräte anschließen', text: 'Eine Schnittstelle ist eine Verbindung, über die Daten ausgetauscht werden. Anschlüsse und passende Kabel verbinden Geräte mit dem Computer.', example: 'USB: Maus oder USB-Stick. HDMI: Bildschirm. Netzwerkanschluss (RJ45): Netzwerk. SATA: interne Festplatte oder SSD.', sketch: 'Anschlüsse am Computer und Kabel zu den passenden Geräten.' }
]
</script>

<template>
  <main class="hardware-page">
    <div class="page-shell">
      <RouterLink to="/" class="back">← Zur Startseite</RouterLink>
      <header class="hero">
        <p class="eyebrow">MEDIENTECHNIK / ERSTES JAHR</p>
        <h1>Hardwarekomponenten</h1>
        <p class="lead">Die Bauteile eines Computers.<br><span>Was sie tun und wie sie zusammenarbeiten.</span></p>
      </header>

      <section class="assignment" aria-labelledby="assignment-title">
        <p class="eyebrow">DEINE AUFGABE</p>
        <h2 id="assignment-title">Visualisiere die Hardwarekomponenten eines Computers.</h2>
      </section>

      <nav class="jump" aria-label="Abschnitte dieser Seite">
        <a href="#ueberblick">Kurzer Überblick</a>
        <a href="#eva">Das Grundprinzip</a><a href="#bauteile">Die acht Begriffe</a><a href="#zusammenspiel">Der Aufbau</a>
      </nav>

      <section id="ueberblick" class="introduction" aria-labelledby="introduction-title">
        <p class="eyebrow">KURZER ÜBERBLICK</p>
        <h2 id="introduction-title">Was steckt in einem Computer?</h2>
        <p>Diese Seite erklärt, aus welchen Hardwarekomponenten ein Computer aufgebaut ist. Hardwarekomponenten sind die einzelnen Bauteile des Computers.</p>
        <p>Dieses Wissen hilft dir zum Beispiel, wenn du als Grafikdesignerin oder Grafikdesigner einen Computer kaufen möchtest. Du kannst dann besser einschätzen, wie leistungsfähig die einzelnen Bauteile für deine Arbeit sein sollten. Für große Bilder oder aufwendige Grafiken braucht ein Computer zum Beispiel genügend Arbeitsspeicher und passende Rechenleistung.</p>
        <p>In einem Computer arbeiten verschiedene Bauteile zusammen. Der <strong>Prozessor (CPU)</strong> ist für das Rechnen zuständig. Der <strong>Arbeitsspeicher (RAM)</strong> merkt sich die Daten, die gerade gebraucht werden. Auf der <strong>Festplatte oder SSD</strong> werden Dateien dauerhaft gespeichert, zum Beispiel Bilder und Videos. Die <strong>Grafikkarte (GPU)</strong> berechnet die Bilder, die auf dem Monitor angezeigt werden. Das <strong>Mainboard</strong> verbindet alle Bauteile miteinander. Über die <strong>Anschlüsse</strong> kannst du Geräte wie Maus, Tastatur, Monitor oder Drucker mit dem Computer verbinden.</p>
        <p class="example"><strong>Vergleich:</strong> Stell dir einen Arbeitsplatz vor. Die CPU ist der Mitarbeiter, der die Aufgaben erledigt. Der RAM ist der Schreibtisch, auf dem alles liegt, was gerade gebraucht wird. Die SSD ist der Schrank, in dem Unterlagen aufbewahrt werden. Die Grafikkarte ist ein Spezialist, der sich um die Bilder kümmert.</p>
        <p>Die einzelnen Bauteile und ihre Aufgaben schauen wir uns gleich weiter unten genauer an.</p>
      </section>

      <section id="eva" aria-labelledby="eva-title">
        <p class="eyebrow">01 / DAS GRUNDPRINZIP</p>
        <h2 id="eva-title">Eingabe → Verarbeitung → Ausgabe</h2>
        <p>Hardware sind die Teile eines Computers, die du anfassen kannst. Software sind die Programme. Gemeinsam arbeiten sie nach dem <strong>EVA-Prinzip</strong>:</p>
        <div class="eva-grid">
          <article><span class="badge">E</span><h3>Eingabe</h3><p>Du gibst Daten oder Befehle ein.</p><p class="example">Du klickst mit der Maus auf „Bild heller machen“.</p></article>
          <article><span class="badge">V</span><h3>Verarbeitung</h3><p>Der Computer verarbeitet die Daten.</p><p class="example">Die CPU führt Befehle aus. Die Bilddaten liegen im RAM.</p></article>
          <article><span class="badge">A</span><h3>Ausgabe</h3><p>Du siehst oder hörst das Ergebnis.</p><p class="example">Der Monitor zeigt das hellere Bild.</p></article>
        </div>
      </section>

      <section id="bauteile" aria-labelledby="parts-title">
        <p class="eyebrow">02 / DIE ACHT BEGRIFFE</p>
        <h2 id="parts-title">Was macht welches Bauteil?</h2>
        <div class="parts-grid">
          <article v-for="(part, index) in components" :key="part.id" class="part">
            <p class="eyebrow">{{ String(index + 1).padStart(2, '0') }} / {{ part.short }}</p>
            <h3>{{ part.name }}</h3><p class="verb">{{ part.verb }}</p><p>{{ part.text }}</p>
            <div class="example"><strong>Beispiel</strong><p>{{ part.example }}</p></div>
            <p class="sketch"><strong>Idee für deine Zeichnung:</strong> {{ part.sketch }}</p>
          </article>
        </div>
      </section>

      <section class="memory" aria-labelledby="memory-title">
        <p class="eyebrow">03 / MERKE DIR</p><h2 id="memory-title">RAM und Festplatte haben verschiedene Aufgaben.</h2>
        <div class="pair"><div><h3>RAM = dein Arbeitstisch</h3><p>Hier liegt, was du gerade bearbeitest. Ohne Strom ist der Inhalt weg.</p></div><div><h3>Festplatte / SSD = dein Schrank</h3><p>Hier bewahrst du gespeicherte Dateien auf. Sie bleiben auch ohne Strom erhalten.</p></div></div>
        <p class="save"><strong>Speichern heißt:</strong> Du schreibst deine Arbeit als Datei auf die Festplatte oder SSD.</p>
      </section>
      <section id="zusammenspiel" class="overview" aria-labelledby="overview-title">
        <p class="eyebrow">04 / DER AUFBAU</p>
        <h2 id="overview-title">Die Bauteile arbeiten zusammen.</h2>
        <p>Tippe auf eine Beschriftung im Bild. Darunter steht die Aufgabe des Bauteils.</p>
        <div class="diagram-scroll" tabindex="0" aria-label="Komponentenbild; auf kleinen Bildschirmen seitlich scrollbar">
          <div class="diagram" role="group" aria-label="Anklickbare Hardwarekomponenten">
            <img :src="mainboardImage" width="1536" height="1024" alt="Mainboard mit CPU, RAM, Bussystem, I/O-Controller, SSD und Schnittstellen. Links sind Maus, Tastatur, Scanner, Monitor und Drucker angeschlossen.">
            <button v-for="spot in hotspots" :key="spot.label" type="button" class="hotspot" :aria-label="`${spot.label}: Erklärung anzeigen`" :aria-pressed="selected === spot.id" aria-controls="component-explanation" :style="{ left: `${spot.x}%`, top: `${spot.y}%`, width: `${spot.w}%`, height: `${spot.h}%` }" @click="selected = spot.id"></button>
          </div>
        </div>
        <div id="component-explanation" class="diagram-detail" aria-live="polite"><template v-for="part in components" :key="part.id"><template v-if="selected === part.id"><h3>{{ part.name }}</h3><p>{{ part.text }}</p></template></template></div>
        <p class="caption">Die Pfeile zeigen vereinfacht den Datenaustausch. Auf kleinen Bildschirmen kannst du das Bild seitlich verschieben. Eine Festplatte oder SSD kann im Computer eingebaut oder extern angeschlossen sein.</p>
      </section>

    </div>
  </main>
</template>

<style scoped>
.hardware-page { background: #f8f7f3; color: #202d32; min-height: 100vh; font-family: 'Jost', Arial, sans-serif; user-select: text; }
.hardware-page * { box-sizing: border-box; }
.page-shell { max-width: 1180px; padding: 32px 28px 48px; margin: auto; }
a { color: inherit; text-underline-offset: 4px; }
.back { font-size: 14px; color: #435355; }
.hero { padding: 64px 0 36px; }
.eyebrow { font-size: 12px; letter-spacing: .14em; font-weight: 500; color: #526166; margin: 0 0 18px; }
h1 { font-size: clamp(34px, 6vw, 72px); line-height: 1.08; letter-spacing: -.04em; font-weight: 500; margin: 0 0 24px; overflow-wrap: anywhere; }
.lead { font-size: clamp(19px, 2.5vw, 25px); margin: 0; }.lead span { color: #68766c; }
h2 { font-size: clamp(25px, 3.2vw, 38px); font-weight: 500; line-height: 1.2; letter-spacing: -.02em; margin: 0 0 24px; }
h3 { font-size: 23px; line-height: 1.3; font-weight: 500; margin: 18px 0 10px; }
p, li { line-height: 1.65; } section { margin-top: 64px; scroll-margin-top: 24px; }
.assignment { margin-top: 0; background: #e8eee7; padding: 32px; border-radius: 18px; border: 1px solid #d6dfd4; border-top: 5px solid #4c695d; }
.assignment > .eyebrow { color: #315e4c; }
.assignment h2 { max-width: 780px; margin-bottom: 28px; }
.jump { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }.jump a { padding: 12px 20px; border: 1px solid #bbc7bf; border-radius: 100px; text-decoration: none; }
.eva-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 28px; }.eva-grid article { border-top: 1px solid #bbc7bf; padding-top: 24px; }
.badge { display: inline-grid; place-items: center; width: 44px; height: 44px; border-radius: 10px; background: #e8eee7; color: #315e4c; font-size: 22px; }
.overview { padding: 32px; border-radius: 18px; background: #eaf0f6; }
.diagram-scroll { overflow-x: auto; margin: 28px 0; border-radius: 12px; }
.diagram { position: relative; min-width: 640px; }
.diagram img { display: block; width: 100%; height: auto; }
.hotspot { position: absolute; padding: 0; background: transparent; border: 2px solid transparent; border-radius: 8px; cursor: pointer; }
.hotspot:hover { background: #ffffff25; border-color: #285d83; }
.hotspot[aria-pressed=true] { border-color: #285d83; box-shadow: 0 0 0 3px #ffffffb3; }
:is(button,a,.diagram-scroll):focus-visible { outline: 3px solid #285d83; outline-offset: 4px; }
.pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.diagram-detail { padding: 20px 24px; border-left: 4px solid #285d83; background: #ffffffa8; border-radius: 0 10px 10px 0; }.diagram-detail h3 { margin-top: 0; }.diagram-detail p { margin-bottom: 0; }.caption { font-size: 13px; color: #526166; }
.parts-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }.part { padding: 28px; background: white; border: 1px solid #dce0db; border-top: 5px solid #4c695d; border-radius: 18px; }.part h3 { margin-top: 0; font-size: 27px; }.verb { color: #315e4c; margin-top: 0; font-size: 18px; }
.example { padding: 18px; border-radius: 10px; background: #edf2eb; }.example p { margin: 6px 0 0; }.sketch { font-size: 14px; margin-bottom: 0; color: #526166; }
.memory { padding: 32px; background: #e8eee7; border-radius: 18px; }.save { padding-top: 16px; border-top: 1px solid #bbc7bf; margin-bottom: 0; }
@media (max-width: 700px) { .page-shell { padding: 24px 20px 36px; }.hero { padding-top: 40px; }.assignment,.overview,.memory,.part { padding: 22px; }.eva-grid,.parts-grid { grid-template-columns: 1fr; }.pair { gap: 10px; } section { margin-top: 44px; }.assignment { margin-top: 0; }}
@media (max-width: 380px) { .pair { grid-template-columns: 1fr; } }
</style>
