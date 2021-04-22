<template>
  <main class="padded-page">
    <ArticleList title="Результаты пойска" is-result />
  </main>
</template>

<script>
import ArticleList from 'templates/ArticleList'

/**
 * 'PAGES/result'
 * @displayName result
 */
export default {
  name: 'Result',
  components: { ArticleList },
  asyncData({ store, query }) {
    store.dispatch('articles/search', query?.q)
  },
}
</script>
