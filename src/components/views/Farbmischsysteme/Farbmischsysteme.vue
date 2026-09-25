<script setup>
import { computed, ref } from 'vue'
import prismImage from '../../../assets/farbmischsysteme/prisma.png'
import absorptionImage from '../../../assets/farbmischsysteme/absorption-reflexion.png'
import lightImage from '../../../assets/farbmischsysteme/rgb-lichtkegel.png'
const rgb = ref([255, 100, 40])
const cmyk = ref([75, 0, 35, 10])
const rgbNames = ['Rot', 'Grün', 'Blau']
const inkNames = ['Cyan', 'Magenta', 'Gelb', 'Schwarz']
const rgbColor = computed(() => `rgb(${rgb.value.join(',')})`)
// Teaching illustration, not a color-managed print simulation: overlapping
// CMY retains a brownish residual; K progressively removes that residual.
const inkColor = computed(() => {
  const inks = cmyk.value.slice(0, 3).map(value => value / 100)
  const overlap = Math.min(...inks)
  const residual = [55, 44, 35]
  const channels = inks.map((ink, index) => Math.round(
    (255 * (1 - ink) + residual[index] * overlap) * (1 - cmyk.value[3] / 100)
  ))
  return `rgb(${channels.join(',')})`
})

const questions = [
  { text: 'Du gestaltest ein Bild für eine Website. Welches Farbsystem passt?', options: ['RGB', 'CMYK', 'Beide sind nur für Papier gedacht.'], correct: 0, explanation: 'Eine Website erscheint auf einem Bildschirm. Er mischt rotes, grünes und blaues Licht.', hint: 'Überlege: Leuchtet ein Bildschirm selbst oder braucht er Druckfarbe?' },
  { text: 'Rotes, grünes und blaues Licht leuchten zusammen gleich stark und mit voller Helligkeit. Was entsteht?', options: ['Schwarz', 'Weiß', 'Braun'], correct: 1, explanation: 'Die drei Lichtfarben ergeben zusammen Weiß. Bei RGB kommt Licht dazu.', hint: 'Bei der additiven Farbmischung wird die Mischung durch mehr Licht heller.' },
  { text: 'Was passiert bei der subtraktiven Farbmischung mit dem Licht?', options: ['Die Druckfarben erzeugen eigenes Licht.', 'Das Papier wird immer heller.', 'Die Druckfarben nehmen einen Teil des Lichts auf.'], correct: 2, explanation: 'Druckfarben nehmen einen Teil des Lichts auf. Der übrige Teil wird zurückgeworfen und erreicht dein Auge.', hint: 'Subtrahieren bedeutet wegnehmen. Denke an Licht, das auf bedrucktes Papier fällt.' },
  { text: 'Warum gibt es bei CMYK zusätzlich schwarze Druckfarbe?', options: ['Damit der Bildschirm heller leuchtet.', 'Für tiefes Schwarz, klare Schrift und feine Details.', 'Damit weißes Papier entsteht.'], correct: 1, explanation: 'Cyan, Magenta und Gelb ergeben im echten Druck oft kein tiefes, sauberes Schwarz. Dafür gibt es die schwarze Druckfarbe.', hint: 'Überlege, wie ein Drucker kleine schwarze Buchstaben besonders klar drucken kann.' }
]
const choices = ref(questions.map(() => null))
const answeredCount = computed(() => choices.value.filter(value => value !== null).length)
const correctCount = computed(() => questions.filter((question, index) => choices.value[index] === question.correct).length)
</script>
<template>
  <main class="color-page">
    <nav class="top"><RouterLink to="/">← Schule</RouterLink><span>GESTALTUNG · FARBEN VERSTEHEN</span></nav>
    <aside class="why-colors" aria-labelledby="why-colors-title">
      <h2 id="why-colors-title">Warum ist das wichtig?</h2>
      <p>Ob Website, Foto oder Flyer: Farben sollen zum Ergebnis passen. <strong>Bildschirme arbeiten mit RGB, der Vierfarbdruck mit CMYK.</strong> Wenn du den Unterschied kennst, kannst du deine Gestaltung passend vorbereiten und besser einschätzen, warum eine Farbe auf Papier anders aussieht als auf dem Bildschirm.</p>
      <p>Du möchtest einen Flyer drucken lassen? Manche RGB-Farben leuchten auf dem Bildschirm stärker, als sie mit CMYK gedruckt werden können. Ist dein Projekt in RGB angelegt, können die Farben im Druck deshalb deutlich anders aussehen. <strong>Stelle dein Projekt vor dem Drucken auf CMYK um.</strong></p>
    </aside>
    <header class="hero"><p class="eyebrow">ZWEI WEGE ZUR FARBE</p><h1>Licht an.<br><span>Farbe drauf.</span></h1><p>Warum mischt dein Bildschirm Farben anders als ein Drucker? Entdecke RGB und CMYK – und probiere es selbst aus.</p><div class="jump"><a href="#rgb">RGB entdecken ↗</a><a href="#cmyk">CMYK entdecken ↗</a></div></header>
    <section id="rgb" class="chapter rgb-section">
      <div class="explanation"><p class="eyebrow">01 · FARBIGES LICHT</p><h2>RGB: Licht kommt dazu.</h2><p>RGB steht für <strong>Rot, Grün und Blau</strong>. Dein Handy, Fernseher und Monitor erzeugen Farben mit Licht. Kleine Bildpunkte leuchten unterschiedlich stark.</p><p>Je mehr Licht zusammenkommt, desto heller wird die Mischung. Das heißt <strong>additive Farbmischung</strong>. „Addieren“ bedeutet „dazuzählen“.</p><div class="rule">Kein Licht → Schwarz<br>Alle drei Lichtfarben gleich stark und ganz hell → Weiß</div></div>
      <figure class="mix-figure dark"><svg viewBox="0 0 400 330" role="img" aria-labelledby="rgb-title rgb-desc"><title id="rgb-title">Drei überlappende Lichtkreise</title><desc id="rgb-desc">Rot und Grün ergeben Gelb, Grün und Blau Cyan, Blau und Rot Magenta. Alle drei ergeben Weiß.</desc><g style="isolation:isolate"><circle cx="200" cy="112" r="91" fill="#f00"/><circle cx="147" cy="208" r="91" fill="#0f0" style="mix-blend-mode:screen"/><circle cx="253" cy="208" r="91" fill="#00f" style="mix-blend-mode:screen"/></g><g fill="white" font-size="17" text-anchor="middle"><text x="200" y="16">Rot</text><text x="58" y="315">Grün</text><text x="342" y="315">Blau</text></g><text x="200" y="183" fill="#111" text-anchor="middle" font-size="15">Weiß</text></svg><figcaption>So überlagern sich rote, grüne und blaue Lichtstrahlen.</figcaption></figure>
      <div class="lab"><div><p class="eyebrow">AUSPROBIEREN</p><h3>Dein Lichtmischer</h3><p>Bewege die Regler. 0 bedeutet aus, 255 bedeutet volle Helligkeit.</p><label v-for="(name, i) in rgbNames" :key="name" :for="`rgb-${i}`"><span>{{ name }}</span><input :id="`rgb-${i}`" v-model.number="rgb[i]" type="range" min="0" max="255"><output :for="`rgb-${i}`">{{ rgb[i] }}</output></label><div class="presets"><button @click="rgb = [0,0,0]">Licht aus</button><button @click="rgb = [255,255,255]">Alles an</button><button @click="rgb = [255,255,0]">Rot + Grün</button></div></div><div class="swatch-wrap"><div class="swatch" :style="{ background: rgbColor }" role="img" :aria-label="`Gemischte Lichtfarbe: ${rgbColor}`"></div><p>RGB {{ rgb.join(' / ') }}</p></div></div>
    </section>
    <section id="cmyk" class="chapter ink-section">
      <div class="explanation"><p class="eyebrow">02 · FARBE AUF PAPIER</p><h2>CMYK: Licht wird geschluckt.</h2><p>CMYK steht für <strong>Cyan, Magenta, Yellow und Key</strong>. Cyan ist ein Türkisblau, Magenta ein kräftiges Pink. Yellow heißt Gelb. Key steht für die schwarze Druckfarbe.</p><p>Weißes Papier wirft Licht zurück. Druckfarben nehmen einen Teil davon auf. Nur der Rest gelangt in dein Auge. Mehr Farbe lässt die Mischung meist dunkler werden. Das heißt <strong>subtraktive Farbmischung</strong>: Licht wird weggenommen.</p><div class="rule">Keine Druckfarbe → weißes Papier<br>Cyan, Magenta und Gelb auf dem Papier, ergänzt durch zusätzliche schwarze Druckfarbe → kräftiges Schwarz</div><p>Warum noch Schwarz? Cyan, Magenta und Gelb ergeben im echten Druck zusammen oft kein sauberes, tiefes Schwarz. Die schwarze Farbe sorgt auch für klare Schrift und feine Details.</p></div>
      <figure class="mix-figure light"><svg viewBox="0 0 400 330" role="img" aria-labelledby="ink-title ink-desc"><title id="ink-title">Überlappende Cyan-, Magenta- und Gelbflächen</title><desc id="ink-desc">Im idealisierten Modell ergeben Cyan und Magenta Blau, Magenta und Gelb Rot, Gelb und Cyan Grün. In der Mitte entsteht Schwarz.</desc><g style="isolation:isolate"><rect width="400" height="330" fill="white"/><circle cx="200" cy="112" r="91" fill="#0ff" style="mix-blend-mode:multiply"/><circle cx="147" cy="208" r="91" fill="#f0f" style="mix-blend-mode:multiply"/><circle cx="253" cy="208" r="91" fill="#ff0" style="mix-blend-mode:multiply"/></g><g fill="#171923" font-size="17" text-anchor="middle"><text x="200" y="16">Cyan</text><text x="62" y="315">Magenta</text><text x="342" y="315">Gelb</text></g><text x="200" y="183" fill="white" text-anchor="middle" font-size="13">Schwarz</text></svg><figcaption>Vereinfachtes Modell: Druckfarben nehmen Licht weg. Echte Druckfarben mischen sich nicht ganz so ideal.</figcaption></figure>
      <div class="lab"><div><p class="eyebrow">AUSPROBIEREN</p><h3>Dein Druckfarbenmischer</h3><p>0 % bedeutet keine Farbe, 100 % bedeutet voller Farbanteil.</p><label v-for="(name, i) in inkNames" :key="name" :for="`ink-${i}`"><span>{{ name }}</span><input :id="`ink-${i}`" v-model.number="cmyk[i]" type="range" min="0" max="100"><output :for="`ink-${i}`">{{ cmyk[i] }} %</output></label><div class="presets"><button @click="cmyk = [0,0,0,0]">Weißes Papier</button><button @click="cmyk = [0,0,0,100]">Schwarz</button><button @click="cmyk = [100,100,100,0]">CMY ohne Schwarz</button><button @click="cmyk = [100,0,100,0]">Cyan + Gelb</button></div></div><div class="swatch-wrap"><div class="swatch" :style="{ background: inkColor }" role="img" :aria-label="`Druckfarbenmischung: ${cmyk.join(', ')} Prozent CMYK`"></div><p>CMYK {{ cmyk.join(' / ') }}</p><small>Vereinfachte Lernansicht: Volles Cyan, Magenta und Gelb ohne Schwarz ergeben hier Dunkelbraun. Mit Schwarz wird die Mischung tiefschwarz. Der echte Druck hängt von Papier, Farben und Drucker ab.</small></div></div>
    </section>
    <section class="comparison"><p class="eyebrow">DAS BLEIBT HÄNGEN</p><h2>Bildschirm oder Papier?</h2><div class="table-scroll"><table><thead><tr><th>Eigenschaft</th><th>RGB</th><th>CMYK</th></tr></thead><tbody><tr><th>Was wird gemischt?</th><td>Licht</td><td>Druckfarben</td></tr><tr><th>Grundfarben</th><td>Rot, Grün, Blau</td><td>Cyan, Magenta, Gelb + Schwarz</td></tr><tr><th>Ohne Mischung</th><td>Schwarz: kein Licht</td><td>Weiß: unbedrucktes weißes Papier</td></tr><tr><th>Typischer Einsatz</th><td>Handy, Monitor, Website</td><td>Flyer, Plakat, Zeitschrift</td></tr></tbody></table></div><p class="note">Ein leuchtendes Bildschirmgrün lässt sich nicht immer genauso drucken. RGB und CMYK können unterschiedliche Farbbereiche darstellen.</p></section>
    <section class="quiz" aria-labelledby="quiz-title">
      <p class="eyebrow">KURZER CHECK</p>
      <h2 id="quiz-title">Vier Fragen zu RGB und CMYK</h2>
      <p>Wähle pro Frage eine Antwort. Du kannst deine Auswahl jederzeit ändern.</p>
      <fieldset v-for="(question, questionIndex) in questions" :key="questionIndex" class="quiz-question">
        <legend>{{ questionIndex + 1 }}. {{ question.text }}</legend>
        <label v-for="(option, optionIndex) in question.options" :key="optionIndex" class="quiz-option" :class="{ chosen: choices[questionIndex] === optionIndex }">
          <input v-model="choices[questionIndex]" type="radio" :name="`question-${questionIndex}`" :value="optionIndex" :aria-describedby="`feedback-${questionIndex}`">
          <span>{{ option }}</span>
        </label>
        <p :id="`feedback-${questionIndex}`" class="quiz-feedback" role="status">
          <template v-if="choices[questionIndex] !== null">{{ choices[questionIndex] === question.correct ? `Richtig! ${question.explanation}` : `Noch nicht richtig. ${question.hint}` }}</template>
        </p>
      </fieldset>
      <div class="quiz-summary">
        <p role="status">{{ answeredCount }} von 4 beantwortet · {{ correctCount }} von 4 richtig{{ correctCount === 4 ? ' – alles geschafft!' : '' }}</p>
        <button type="button" @click="choices = questions.map(() => null)">Neu starten</button>
      </div>
    </section>
    <section class="physics" aria-labelledby="physics-title">
      <p class="eyebrow">EINFACH ERKLÄRT · LICHT UND FARBE</p>
      <h2 id="physics-title">Weißes Sonnenlicht enthält alle Spektralfarben.</h2>
      <article class="physics-card">
        <div>
          <h3>Die Farben stecken schon im Licht.</h3>
          <p>Weißes Sonnenlicht enthält alle Farben des Regenbogens. Ein Prisma trennt sie voneinander. Auf dem Foto siehst du, wie aus dem weißen Licht ein buntes Farbband wird.</p>
          <p>Das Prisma erzeugt diese Farben nicht. Es macht die einzelnen Farben sichtbar.</p>
        </div>
        <figure><img class="prism-photo" :src="prismImage" alt="Ein Glasprisma zerlegt einen weißen Lichtstrahl in ein regenbogenfarbenes Band." loading="lazy"><figcaption>Ein Prisma trennt weißes Licht in seine Spektralfarben.</figcaption></figure>
      </article>
      <article class="physics-card absorption-card">
        <div>
          <h3>Subtraktiv: Farben aus dem Licht wegnehmen.</h3>
          <p>Trifft weißes Licht auf einen Körper, nimmt er bestimmte Farbanteile auf. Das heißt <strong>Absorption</strong>. Andere Farbanteile wirft er zurück. Das heißt <strong>Reflexion</strong>.</p>
          <p>Ein roter Körper wirft vor allem rotes Licht zurück und absorbiert die anderen Farbanteile stärker. Ein weißer Körper wirft fast alle Farben zurück. Ein schwarzer Körper absorbiert fast das gesamte sichtbare Licht.</p>
          <p>Auch Druckfarben nehmen Farbanteile aus weißem Licht weg. Werden Cyan, Magenta und Gelb übereinandergedruckt, absorbieren sie zusammen mehr Licht. Die Mischung wird dunkler.</p>
          <div class="rule">Subtraktiv → Farbanteile durch Absorption wegnehmen.<br>Alles sichtbare Licht absorbiert → Schwarz.</div>
        </div>
        <figure><img :src="absorptionImage" alt="Vereinfachte Darstellung der Absorption und Reflexion: Ein roter Körper reflektiert rotes Licht, ein weißer alle Farben und ein schwarzer absorbiert alle Farben." loading="lazy"><figcaption>Die Abbildung zeigt vereinfacht, welche Farbanteile zurückgeworfen oder aufgenommen werden.</figcaption></figure>
      </article>
      <article class="physics-card">
        <div>
          <h3>Additiv: Licht hinzufügen.</h3>
          <p>Die drei Lampen leuchten rot, grün und blau. Wo sich ihre Lichtkegel treffen, kommt Licht zusammen. Die Mischung wird heller.</p>
          <p>Rot und Grün ergeben Gelb. Grün und Blau ergeben Cyan. Rot und Blau ergeben Magenta. Treffen alle drei Lichtfarben in passender Stärke zusammen, entsteht weißes Licht.</p>
          <div class="rule">Additiv → Licht hinzufügen.<br>Rot + Grün + Blau → Weiß.</div>
        </div>
        <figure><img :src="lightImage" alt="Rote, grüne und blaue Lichtkegel überlagern sich. Auf der gemeinsamen Fläche entsteht weißes Licht." loading="lazy"><figcaption>Bei RGB werden farbige Lichtstrahlen addiert.</figcaption></figure>
      </article>
    </section>
    <footer><RouterLink to="/">← Zurück zur Schule</RouterLink><span>Licht addieren. Licht wegnehmen. Farben verstehen.</span></footer>
  </main>
</template>
<style scoped>
.why-colors { margin-top: 24px; padding: 20px 24px; border-left: 4px solid #6041dc; border-radius: 0 12px 12px 0; background: #e8e2fa; }
.why-colors h2 { margin: 0 0 8px; font-size: 21px; }
.why-colors p { margin: 0; line-height: 1.6; font-size: 16px; }
.why-colors p + p { margin-top: 12px; }
.color-page { --ink:#171923; --accent:#6041dc; background:#f6f4ee; color:var(--ink); font-family:jost,Arial,sans-serif; min-height:100vh; padding:0 max(20px,calc((100vw - 1180px)/2)); }
.color-page * { box-sizing:border-box; } a { color:inherit; } .top,footer { display:flex; justify-content:space-between; align-items:center; gap:20px; padding:26px 0; font-size:13px; } .top { border-bottom:1px solid #d8d6cf; } .top a,footer a { font-weight:600; text-decoration:none; } .top span { letter-spacing:.12em; }
.hero { padding:76px 0 72px; max-width:820px; }.eyebrow { font-size:12px; font-weight:600; letter-spacing:.18em; margin:0 0 20px; } h1 { font-size:clamp(60px,10vw,120px); line-height:.94; letter-spacing:-.06em; margin:0 0 28px; font-weight:700; } h1 span { color:var(--accent); } .hero > p:last-of-type { max-width:590px; font-size:21px; line-height:1.6; } .jump { display:flex; gap:12px; flex-wrap:wrap; margin-top:28px; } .jump a { padding:12px 20px; border:1px solid #b8b4ad; border-radius:100px; text-decoration:none; }
.chapter { padding:46px; border-radius:28px; display:grid; grid-template-columns:1.1fr 1fr; gap:38px; margin-bottom:32px; scroll-margin-top:20px; }.rgb-section { color:#f5f5ff; background:#171923; }.ink-section { background:#fff; border:1px solid #e4e0d8; } h2 { font-size:clamp(28px,4vw,42px); line-height:1.12; letter-spacing:-.03em; margin:0 0 22px; } .explanation p { line-height:1.7; } .rule { padding:18px; border-left:3px solid #a68bff; background:#88888815; line-height:1.8; margin:24px 0; } figure { margin:0; align-self:center; } svg { width:100%; height:auto; } figcaption { font-size:13px; line-height:1.5; margin-top:16px; opacity:.8; } .dark { background:#000; border-radius:20px; padding:20px; }.light { background:#fff; padding:20px; }
.lab { grid-column:1/-1; display:grid; grid-template-columns:1.2fr 1fr; gap:40px; padding-top:32px; border-top:1px solid #8885; } h3 { font-size:26px; margin:0 0 8px; }.lab p { line-height:1.5; } label { display:grid; grid-template-columns:70px minmax(0,1fr) 60px; align-items:center; gap:12px; margin:18px 0; } input { width:100%; accent-color:#9672ff; } output { text-align:right; font-variant-numeric:tabular-nums; } .presets { display:flex; flex-wrap:wrap; gap:8px; margin-top:20px; } button { cursor:pointer; font:inherit; border:1px solid #8888; color:inherit; background:transparent; border-radius:9px; padding:10px 16px; } button:hover,button[aria-pressed=true] { background:#9377ed33; } :is(button,a,input):focus-visible { outline:3px solid #9871fa; outline-offset:4px; }.swatch-wrap { align-self:center; } .swatch { height:220px; border-radius:18px; border:1px solid #8886; transition:background .08s; }.swatch-wrap p { font-size:14px; }.swatch-wrap small { display:block; line-height:1.5; color:#62616a; }
.comparison { padding:48px 0; }.table-scroll { overflow-x:auto; } table { width:100%; border-collapse:collapse; font-size:16px; } th,td { text-align:left; padding:18px 14px; border-bottom:1px solid #dad7d0; } thead { background:#eae5f6; } tbody th { font-weight:500; } .note { max-width:760px; line-height:1.7; margin-top:24px; }.quiz { padding:38px; background:#e8e2fa; border-radius:24px; margin:20px 0 40px; }.quiz h2 { font-size:28px; }.quiz p:last-child { min-height:3em; line-height:1.6; }footer { border-top:1px solid #d8d6cf; padding-bottom:40px; }
.quiz-question { border: 0; border-top: 1px solid #c5bbdf; padding: 22px 0 12px; margin: 28px 0 0; min-width: 0; }
.quiz-question legend { font-size: 19px; font-weight: 600; padding: 0 8px 0 0; line-height: 1.4; }
.quiz label.quiz-option { display: flex; gap: 12px; margin: 10px 0; padding: 12px 16px; border: 1px solid #b9acd5; border-radius: 10px; cursor: pointer; background: #ffffff55; }
.quiz label.chosen { background: #ffffffb0; border-color: #6041dc; }
.quiz-option input { width: 18px; height: 18px; flex: 0 0 18px; margin: 0; }
.quiz .quiz-feedback { min-height: 1.5em; font-size: 15px; }
.quiz-summary { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; }
.quiz-summary p { min-height: 0 !important; }
.physics { padding: 30px 0 48px; }
.physics-card { display: grid; grid-template-columns: 1.2fr 1fr; align-items: center; gap: 32px; padding: 30px; margin: 24px 0; background: #fff; border: 1px solid #dedbd3; border-radius: 20px; }
.physics-card img { display: block; width: 100%; height: auto; border-radius: 12px; }
.physics-card .prism-photo { max-height: 420px; object-fit: contain; }
.absorption-card { grid-template-columns: 1fr; }
.absorption-card figure { width: 100%; max-width: 950px; justify-self: center; }
.physics-card p { line-height: 1.7; }
.physics-card h3 { line-height: 1.3; }
@media(max-width:760px) { .physics-card { grid-template-columns: 1fr; padding: 22px; }.physics-card figure { width: 100%; max-width: 460px; justify-self: center; } }
@media(max-width:760px) { .chapter { grid-template-columns:1fr; padding:24px; gap:28px; }.lab { grid-template-columns:1fr; gap:20px; }.mix-figure { max-width:420px; width:100%; justify-self:center; }.hero { padding:48px 0; }.top span,footer span { display:none; } .swatch { height:160px; }th,td { padding:12px 8px; font-size:14px; }.quiz { padding:24px; } }
@media(prefers-reduced-motion:reduce) { .swatch { transition:none; } }
</style>
