// Based on the local Farbmischsysteme and MedientechnikProgramme lessons.
// Version this set when changing questions in a running classroom quiz.
export const quizVersion = 1
export const answerSeconds = 30
export const questions = [
  {
    "topic": "Farbmischsysteme",
    "text": "Du gestaltest ein Bild für eine Website. Welches Farbsystem passt?",
    "answers": [
      "RGB",
      "CMYK",
      "Beide sind nur für Papier gedacht.",
      "Keines von beiden"
    ],
    "correct": 0,
    "visual": "screen",
    "explanation": "Websites werden auf Bildschirmen angezeigt. Dafür eignet sich RGB."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Rotes, grünes und blaues Licht leuchten zusammen gleich stark und mit voller Helligkeit. Was entsteht?",
    "answers": [
      "Schwarz",
      "Weiß",
      "Braun",
      "Cyan"
    ],
    "correct": 1,
    "visual": "lights",
    "explanation": "Rot, Grün und Blau ergeben bei voller Helligkeit zusammen weißes Licht."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Was passiert bei der subtraktiven Farbmischung mit dem Licht?",
    "answers": [
      "Die Druckfarben erzeugen eigenes Licht.",
      "Das Papier wird immer heller.",
      "Die Druckfarben nehmen einen Teil des Lichts auf.",
      "Das Licht wird verstärkt."
    ],
    "correct": 2,
    "visual": "printer",
    "explanation": "Druckfarben absorbieren einen Teil des einfallenden Lichts. Das heißt subtraktive Farbmischung."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Warum gibt es bei CMYK zusätzlich schwarze Druckfarbe?",
    "answers": [
      "Damit der Bildschirm heller leuchtet.",
      "Für tiefes Schwarz, klare Schrift und feine Details.",
      "Damit weißes Papier entsteht.",
      "Damit RGB-Farben gedruckt werden können."
    ],
    "correct": 1,
    "visual": "printer",
    "explanation": "Cyan, Magenta und Gelb ergeben im echten Druck oft kein tiefes Schwarz. Dafür gibt es die zusätzliche schwarze Druckfarbe."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Wofür steht RGB?",
    "answers": [
      "Rot, Gelb, Blau",
      "Rot, Grün, Blau",
      "Rosa, Grün, Braun",
      "Rot, Grau, Blau"
    ],
    "correct": 1,
    "visual": "screen",
    "explanation": "RGB steht für die Lichtfarben Rot, Grün und Blau."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Wie nennt man die Farbmischung bei RGB?",
    "answers": [
      "Subtraktive Farbmischung",
      "Additive Farbmischung",
      "Reflexive Farbmischung",
      "Mechanische Farbmischung"
    ],
    "correct": 1,
    "visual": "lights",
    "explanation": "Bei RGB kommt Licht hinzu. Diese Farbmischung heißt additiv."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Was ergibt Rot + Grün bei der additiven Farbmischung?",
    "answers": [
      "Gelb",
      "Cyan",
      "Magenta",
      "Schwarz"
    ],
    "correct": 0,
    "visual": "red-green",
    "explanation": "Rotes und grünes Licht ergeben zusammen gelbes Licht."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Was entsteht bei RGB, wenn kein Licht vorhanden ist?",
    "answers": [
      "Weiß",
      "Grau",
      "Schwarz",
      "Blau"
    ],
    "correct": 2,
    "visual": "screen",
    "explanation": "Wenn alle drei Lichtfarben ausgeschaltet sind, entsteht Schwarz."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Wo wird CMYK typischerweise eingesetzt?",
    "answers": [
      "Monitor",
      "Website",
      "Druck",
      "Smartphone-Display"
    ],
    "correct": 2,
    "visual": "printer",
    "explanation": "CMYK wird für Druckfarben verwendet, zum Beispiel beim Druck von Flyern und Broschüren."
  },
  {
    "topic": "Farbmischsysteme",
    "text": "Was passiert bei RGB, wenn mehr Licht hinzukommt?",
    "answers": [
      "Die Farbe wird dunkler.",
      "Die Mischung wird heller.",
      "Die Farbe wird schwarz.",
      "Es passiert nichts."
    ],
    "correct": 1,
    "visual": "lights",
    "explanation": "Bei der additiven Farbmischung wird die Mischung durch zusätzliches Licht heller."
  },
  {
    "topic": "Programme",
    "text": "Auf einem Porträt sollen Hautunreinheiten entfernt werden. Welches Programm passt?",
    "answers": [
      "Illustrator",
      "Photoshop",
      "InDesign",
      "Figma"
    ],
    "correct": 1,
    "visual": "photo",
    "explanation": "Photoshop eignet sich für die Bearbeitung von Fotos und für Retusche."
  },
  {
    "topic": "Programme",
    "text": "Welches Programm eignet sich besonders zum Erstellen von Logos und Vektorgrafiken?",
    "answers": [
      "Photoshop",
      "InDesign",
      "Illustrator",
      "Figma"
    ],
    "correct": 2,
    "visual": "vector",
    "explanation": "In Illustrator werden Logos, Symbole und andere Vektorgrafiken gestaltet."
  },
  {
    "topic": "Programme",
    "text": "Ein 24-seitiges Programmheft braucht einheitliche Überschriften und Seitenzahlen. Welches Programm passt?",
    "answers": [
      "Figma",
      "Photoshop",
      "Illustrator",
      "InDesign"
    ],
    "correct": 3,
    "visual": "book",
    "explanation": "InDesign unterstützt mehrseitige Layouts mit einheitlichen Texteinstellungen und Seitenzahlen."
  },
  {
    "topic": "Programme",
    "text": "Welches Programm wird verwendet, um Oberflächen für Websites und Apps zu entwerfen?",
    "answers": [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Figma"
    ],
    "correct": 3,
    "visual": "phone",
    "explanation": "Figma wird für den Entwurf von Oberflächen und das Testen von Klickwegen genutzt."
  },
  {
    "topic": "Programme",
    "text": "Woraus besteht ein Pixelbild?",
    "answers": [
      "Pfaden",
      "Bildpunkten",
      "Seiten",
      "Ankerpunkten"
    ],
    "correct": 1,
    "visual": "pixels",
    "explanation": "Ein Pixelbild besteht aus vielen kleinen Bildpunkten, den Pixeln."
  },
  {
    "topic": "Programme",
    "text": "Was ist ein Vorteil von Vektorgrafiken?",
    "answers": [
      "Sie können ohne Verpixeln vergrößert werden.",
      "Sie bestehen immer aus Fotos.",
      "Sie eignen sich besonders zur Fotoretusche.",
      "Sie bestehen aus einzelnen Pixeln."
    ],
    "correct": 0,
    "visual": "vector",
    "explanation": "Vektorformen werden mathematisch beschrieben. Ihre Kanten bleiben beim Vergrößern scharf."
  },
  {
    "topic": "Programme",
    "text": "Wodurch werden Formen in Illustrator beschrieben?",
    "answers": [
      "Pixel und Ebenen",
      "Pfade und Ankerpunkte",
      "Seiten und Spalten",
      "Frames und Prototypen"
    ],
    "correct": 1,
    "visual": "path",
    "explanation": "Pfade beschreiben Linien und Konturen. Ankerpunkte bestimmen ihren Verlauf."
  },
  {
    "topic": "Programme",
    "text": "Welches Programm bringt bei einer Broschüre Foto, Logo und Text auf den Seiten zusammen?",
    "answers": [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Figma"
    ],
    "correct": 2,
    "visual": "book",
    "explanation": "InDesign ordnet die vorbereiteten Bilder, Grafiken und Texte auf den Seiten an."
  },
  {
    "topic": "Programme",
    "text": "Was ist ein Prototyp in Figma?",
    "answers": [
      "Eine fertig programmierte App",
      "Ein Entwurf, bei dem Klickwege ausprobiert werden können",
      "Eine gedruckte Broschüre",
      "Ein bearbeitetes Foto"
    ],
    "correct": 1,
    "visual": "phone",
    "explanation": "Ein Prototyp verbindet Ansichten miteinander, damit die Bedienung ausprobiert werden kann."
  },
  {
    "topic": "Programme",
    "text": "Welcher Workflow passt zu einer gedruckten Broschüre?",
    "answers": [
      "Photoshop → Illustrator → InDesign",
      "InDesign → Figma → Photoshop",
      "Figma → Photoshop → Browser",
      "Illustrator → Figma → InDesign"
    ],
    "correct": 0,
    "visual": "book",
    "explanation": "Das Foto wird in Photoshop bearbeitet, das Logo in Illustrator gezeichnet. InDesign bringt alles auf den Seiten zusammen."
  }
]

export function questionPhase(game, now) {
  if (!game || game.phase !== 'question') return game?.phase || 'lobby'
  const start = game.startedAt?.toMillis?.() ?? game.startedAt
  return Number.isFinite(start) && now >= start + answerSeconds * 1000 ? 'reveal' : 'question'
}
export function answerCounts(answers, index) {
  const counts = [0, 0, 0, 0]
  for (const answer of answers) if (answer.questionIndex === index && Number.isInteger(answer.choice) && answer.choice >= 0 && answer.choice < 4) counts[answer.choice]++
  return counts
}
export function answerPoints(answer) {
  if (!answer || questions[answer.questionIndex]?.correct !== answer.choice) return 0
  // Existing answers from the previous scoring system keep their original points.
  if (!answer.questionStartedAt) return 1000
  const start = answer.questionStartedAt?.toMillis?.() ?? answer.questionStartedAt
  const end = answer.answeredAt?.toMillis?.() ?? answer.answeredAt
  if (!Number.isFinite(start) || !Number.isFinite(end) || end < start || end >= start + answerSeconds * 1000) return 0
  return Math.round(1000 - 500 * (end - start) / (answerSeconds * 1000))
}
export function ranking(players, answers) {
  return players.map(player => {
    const unique = new Map()
    for (const answer of answers) if (answer.uid === player.id && !unique.has(answer.questionIndex)) unique.set(answer.questionIndex, answer)
    const points = [...unique.values()].map(answerPoints)
    return { ...player, correct: points.filter(p => p > 0).length, score: points.reduce((sum, p) => sum + p, 0) }
  }).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, 'de'))
}
