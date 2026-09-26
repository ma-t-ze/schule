export const riddles = {
  1: { answers: ['Haus', 'Baum', 'Felsen', 'Blume'], correct: 1 },
  2: { answers: ['See', 'Bach', 'Pfütze', 'Brunnen'], correct: 1 },
  3: { answers: ['Feder', 'Blüte', 'Blatt', 'Zweig'], correct: 2 },
  4: { answers: ['Schatten', 'Stein', 'Spur', 'Weg'], correct: 2 },
  5: { answers: ['Sonne', 'Wolke', 'Mond', 'Wind'], correct: 0 },
  6: { answers: ['Megamonster'], correct: 0 },
  7: { answers: ['Glaskugel'], correct: 0 },
  8: { answers: ['Wolke', 'Stern', 'Sonne', 'Regenbogen'], correct: 1 }
}
export const riddleAudio = id => id === 9 ? '/rally/frage-9.mp3' : `/rally/creature_${id}.mp3${id === 2 ? '?v=20260926-1511' : id === 3 ? '?v=20260926-0955' : id === 5 ? '?v=20260926-1014' : id === 6 ? '?v=20260926-1047' : id === 7 ? '?v=20260926-1053' : ''}`
export const isCorrectAnswer = (id, index) => riddles[id]?.correct === index
export function isCorrectTextAnswer(id, answer) {
  const riddle = riddles[id]
  if (!riddle || typeof answer !== 'string') return false
  const normalize = text => text.normalize('NFKC').trim().toLocaleLowerCase('de-DE')
    .replace(/[.!?]+$/, '').trim().replace(/^(?:(?:der|die|das|ein|eine|einen)\s+)+/, '')
  return normalize(answer) === normalize(riddle.answers[riddle.correct])
}
