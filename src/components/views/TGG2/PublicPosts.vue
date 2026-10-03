<script setup>
defineProps({ posts: { type: Array, default: () => [] } })
</script>
<template>
  <details class="public-posts" open>
    <summary>Alle Beiträge ({{ posts.length }})</summary>
    <div class="post-list">
      <p v-if="!posts.length">Noch keine Beiträge veröffentlicht.</p>
      <article v-for="post in posts" :key="post.id">{{ post.text }}</article>
    </div>
  </details>
</template>
<style scoped>
.public-posts { margin-top:16px; border:1px solid #8daed6; border-radius:10px; background:white; }
summary { padding:16px; cursor:pointer; font-weight:600; }
summary:focus-visible { outline:3px solid #2156a0; outline-offset:3px; }
.post-list { max-height:480px; overflow-y:auto; padding:0 16px 16px; }
article { padding:16px 0; border-top:1px solid #bfd5ef; white-space:pre-wrap; overflow-wrap:anywhere; line-height:1.65; }
</style>
