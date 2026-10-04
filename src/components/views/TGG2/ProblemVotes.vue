<script setup>
import { ref, computed, watch, onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import { studentIdentity, watchDesignVotes, submitDesignVote, designError } from '../../../services/designThinkingFirebase'
const props = defineProps({ posts: { type: Array, default: () => [] } })
const selected = ref([]), votes = ref([]), uid = ref(null), ready = ref(false), busy = ref(false), error = ref('')
const submitted = computed(() => votes.value.some(vote => vote.id === uid.value))
watch(submitted, (value, previous) => { if (previous && !value) selected.value = [] })
const counts = computed(() => {
  const result = {}
  for (const vote of votes.value) for (const id of vote.postIds || []) result[id] = (result[id] || 0) + 1
  return result
})
watch(() => props.posts, posts => { selected.value = selected.value.filter(id => posts.some(post => post.id === id)) })
let stop, generation = 0
function cleanup() { generation++; stop?.(); stop = null; ready.value = false }
onActivated(async () => {
  const current = ++generation
  error.value = ''
  try {
    const identity = await studentIdentity()
    if (current !== generation) return
    uid.value = identity.uid
    stop = watchDesignVotes(value => { votes.value = value; ready.value = true }, e => { ready.value = false; error.value = designError(e, 'Abstimmung laden') })
  } catch(e) { if (current === generation) error.value = designError(e, 'Abstimmung laden') }
})
onDeactivated(cleanup); onBeforeUnmount(cleanup)
async function submit() {
  if (!ready.value || busy.value || submitted.value || !selected.value.length || selected.value.length > 2) return
  busy.value = true; error.value = ''
  try { await submitDesignVote([...selected.value]) }
  catch(e) { error.value = designError(e, 'Stimme abgeben') }
  finally { busy.value = false }
}
</script>
<template>
  <details class="votes" open>
    <summary>Problemfragen und Abstimmung ({{ posts.length }})</summary>
    <div class="content">
      <p v-if="!posts.length">Noch keine Problemfragen veröffentlicht.</p>
      <p v-else-if="!submitted">Setzt insgesamt höchstens zwei Kreuze – eines pro Problemfrage.</p>
      <p v-if="submitted" role="status">Deine Stimme wurde abgegeben. Hier siehst du die aktuellen Stimmenzahlen.</p>
      <div class="questions">
        <div v-for="post in posts" :key="post.id" class="question">
          <label :for="'vote-' + post.id">{{ post.text }}</label>
          <span v-if="submitted" class="count">{{ counts[post.id] || 0 }} {{ counts[post.id] === 1 ? 'Stimme' : 'Stimmen' }}</span>
          <input v-else :id="'vote-' + post.id" v-model="selected" type="checkbox" :value="post.id" :disabled="!ready || busy || (selected.length >= 2 && !selected.includes(post.id))">
        </div>
      </div>
      <template v-if="!submitted && posts.length">
        <p>{{ selected.length }} von 2 Kreuzen gesetzt</p>
        <button type="button" :disabled="!ready || busy || !selected.length" @click="submit">{{ busy ? 'Wird gespeichert …' : 'Stimme Abgeben' }}</button>
      </template>
      <p v-if="error" role="alert">{{ error }}</p>
    </div>
  </details>
</template>
<style scoped>
.votes { margin-top:16px; border:1px solid #8daed6; border-radius:10px; background:white; }
summary { padding:16px; cursor:pointer; font-weight:600; }
.content { padding:0 16px 16px; }.questions { max-height:480px; overflow-y:auto; }
.question { display:flex; align-items:center; gap:16px; padding:16px 0; border-top:1px solid #bfd5ef; }
label { flex:1; min-width:0; white-space:pre-wrap; overflow-wrap:anywhere; line-height:1.65; }
input { appearance:none; width:32px; height:32px; flex-shrink:0; border:2px solid #2156a0; border-radius:4px; cursor:pointer; }
input:checked::after { content:'×'; display:block; text-align:center; font-size:28px; line-height:26px; color:#2156a0; }
input:disabled { opacity:.5; cursor:default; }.count { font-weight:600; white-space:nowrap; }
button { padding:12px 20px; border:0; border-radius:8px; background:#2156a0; color:white; font:inherit; cursor:pointer; }button:disabled { opacity:.5; cursor:default; }
summary:focus-visible,input:focus-visible,button:focus-visible { outline:3px solid #2156a0; outline-offset:3px; }
</style>
