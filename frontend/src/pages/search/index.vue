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
  name: 'Search',
  components: { ArticleList },
  asyncData({ store, query }) {
    store.commit('header/setTitle', 'Поиск')
    store.dispatch('articles/search', query?.q)
  },
  updated() {
    console.log('search updated')
  },
}
</script>
