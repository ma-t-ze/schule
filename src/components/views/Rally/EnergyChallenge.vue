<script setup>
import { onMounted, ref } from 'vue'
import { isCorrectEnergyAnswer } from './energyTasks'
const props = defineProps({ task: { type: Array, required: true } })
const emit = defineEmits(['solved'])
const dialog = ref(null)
const answer = ref('')
const incorrect = ref(false)
let solved = false
onMounted(() => dialog.value.showModal())
function check() {
  if (solved) return
  if (isCorrectEnergyAnswer(props.task, answer.value)) {
    solved = true
    emit('solved')
  } else incorrect.value = true
}
</script>

<template>
  <Teleport to="body">
    <dialog ref="dialog" class="energy-challenge" aria-labelledby="energy-task-title" @cancel.prevent>
      <h2 id="energy-task-title">Energie aufladen</h2>
      <p>Eure Energie ist aufgebraucht. Löst die Aufgabe, um wieder 100 % Energie zu bekommen.</p>
      <p class="calculation">{{ task.join(' + ') }} = ?</p>
      <form @submit.prevent="check">
        <label for="energy-answer">Euer Ergebnis</label>
        <input id="energy-answer" v-model="answer" type="text" inputmode="numeric" pattern="[0-9]{3}" maxlength="3" autocomplete="off" required autofocus :aria-invalid="incorrect" :aria-describedby="incorrect ? 'energy-answer-error' : undefined" @input="incorrect = false">
        <p v-if="incorrect" id="energy-answer-error" role="alert">Noch nicht richtig. Rechnet noch einmal nach.</p>
        <button type="submit">Energie aufladen</button>
      </form>
    </dialog>
  </Teleport>
</template>

<style scoped>
.energy-challenge { width: min(480px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); overflow-y: auto; box-sizing: border-box; margin: auto; padding: clamp(20px, 4vw, 32px); border: 1px solid #b6ff00; border-radius: 16px; background: #09120f; color: #fff; font-family: jost, sans-serif; text-align: center; box-shadow: 0 0 50px #b6ff0033; }
.energy-challenge::backdrop { background: #000c; }
h2 { margin-top: 0; font-size: clamp(24px, 5vw, 34px); }
p { line-height: 1.5; }
.calculation { color: #b6ff00; font-size: clamp(22px, 5vw, 36px); font-weight: bold; }
label { display: block; margin-bottom: 8px; }
input { display: block; width: 100%; box-sizing: border-box; margin-bottom: 20px; padding: 12px; border: 1px solid #b6ff0080; border-radius: 6px; background: transparent; color: white; text-align: center; font: inherit; font-size: 24px; }
button { border: 1px solid #b6ff00; border-radius: 6px; padding: 12px 20px; background: transparent; color: #b6ff00; font: inherit; cursor: pointer; }
input:focus-visible, button:focus-visible { outline: 2px solid #b6ff00; outline-offset: 3px; }
[role="alert"] { color: #ffc5b8; }
</style>
