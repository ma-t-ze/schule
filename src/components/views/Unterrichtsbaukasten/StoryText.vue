<script>
import { h } from 'vue'
import { storyInline } from './storyMapping.js'
function renderTokens(tokens) {
  return tokens.map((token, index) => {
    if (token.type === 'text') return token.text
    if (token.type === 'link') return h('a', { key: index, href: token.href, target: '_blank', rel: 'noopener noreferrer' }, renderTokens(token.children))
    return h(token.type, { key: index }, token.children ? renderTokens(token.children) : token.text)
  })
}
export default {
  props: { text: { type: String, default: '' } },
  setup(props) { return () => h('span', { class: 'story-text' }, renderTokens(storyInline(props.text))) }
}
</script>
<style scoped>
.story-text { white-space: pre-line; overflow-wrap: anywhere; }
.story-text :deep(a) { color: #174b77; text-decoration: underline; text-underline-offset: 3px; }
</style>
