export const energyTasks = [
  [57, 68, 94], [83, 59, 76], [65, 97, 52], [74, 88, 61],
  [91, 56, 79], [63, 85, 98], [72, 54, 87], [96, 67, 58],
  [81, 73, 69], [55, 92, 84], [78, 64, 99], [86, 51, 77],
  [62, 95, 83], [89, 66, 54], [75, 100, 58], [93, 71, 60],
  [50, 82, 96], [68, 79, 85], [97, 53, 74], [80, 91, 57]
]

export function isCorrectEnergyAnswer(task, answer) {
  const text = String(answer).trim()
  return /^\d{3}$/.test(text) && Number(text) === task.reduce((sum, value) => sum + value, 0)
}
