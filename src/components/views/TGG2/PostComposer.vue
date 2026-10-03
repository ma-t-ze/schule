<script setup>
import { ref, computed, watch } from 'vue'
import { submitDesignPost, designError } from '../../../services/designThinkingFirebase'
const props = defineProps({ kind: { type: String, required: true }, modelValue: { type: String, default: undefined }, label: { type: String, required: true }, buttonLabel: { type: String, default: 'Posten' } })
const emit = defineEmits(['update:modelValue'])
const localText = ref(''), busy = ref(false), message = ref(''), error = ref('')
const key = `3tgg2-post-${props.kind}`
try { const draft = JSON.parse(localStorage.getItem(key) || '{}'); localText.value = typeof draft.text === 'string' ? draft.text : '' } catch {}
const text = computed({ get: () => props.modelValue ?? localText.value, set: value => { localText.value = value; emit('update:modelValue', value) } })
watch(text, () => { message.value = ''; try { localStorage.setItem(key, JSON.stringify({ text: text.value })) } catch {} })
let pending = null
async function post() {
  if (busy.value || !text.value.trim() || text.value.length > 5000) return
  const payload = { text: text.value }
  if (!pending || pending.text !== payload.text) pending = { ...payload, id: crypto.randomUUID() }
  busy.value = true; error.value = ''; message.value = ''
  try { await submitDesignPost(pending.id, props.kind, pending.text); message.value = 'Dein Beitrag wurde veröffentlicht und ist jetzt für alle sichtbar.' }
  catch (e) { error.value = designError(e, 'Beitrag senden') }
  finally { busy.value = false }
}
</script>
<template><div class="post-composer">
  <label :for="`post-${kind}`">{{ label }}</label>
  <textarea :id="`post-${kind}`" v-model="text" rows="5" maxlength="5000" :disabled="busy"></textarea>
  <button type="button" :disabled="busy || !text.trim() || text.length > 5000" @click="post">{{ busy ? 'Wird gesendet …' : buttonLabel }}</button>
  <p v-if="message" role="status">{{ message }}</p><p v-if="error" role="alert">{{ error }}</p>
</div></template>
<style scoped>
label { display:block; margin:12px 0; font-weight:500; }textarea { box-sizing:border-box; width:100%; padding:14px; border:1px solid #8daacb; border-radius:8px; font:inherit; resize:vertical; }button { margin-top:16px; padding:14px 22px; border:0; border-radius:8px; background:#2156a0; color:white; font:inherit; cursor:pointer; }button:disabled { opacity:.5; cursor:not-allowed; }p { font-size:15px; }button:focus-visible, textarea:focus-visible { outline:3px solid #2156a0; outline-offset:3px; }
</style>
