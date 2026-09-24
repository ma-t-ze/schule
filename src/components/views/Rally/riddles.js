export const riddles = {
  1: { answers: ['🏠 Haus', '🌳 Baum', '🪨 Felsen', '🌻 Blume'], correct: 1 },
  2: { answers: ['See', 'Bach', 'Pfütze', 'Brunnen'], correct: 1 },
  3: { answers: ['Feder', 'Blüte', 'Blatt', 'Zweig'], correct: 2 },
  4: { answers: ['Schatten', 'Stein', 'Spur', 'Weg'], correct: 2 },
  5: { answers: ['Sonne', 'Wolke', 'Mond', 'Wind'], correct: 0 },
  6: { answers: ['Fliege', 'Käfer', 'Biene', 'Libelle'], correct: 2 },
  7: { answers: ['Gras', 'Moos', 'Farn', 'Klee'], correct: 1 },
  8: { answers: ['Wolke', 'Stern', 'Sonne', 'Regenbogen'], correct: 1 }
}
export const riddleAudio = id => `/rally/creature_${id}.mp3`
export const isCorrectAnswer = (id, index) => riddles[id]?.correct === index
