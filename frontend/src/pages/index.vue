<template>
  <main class="padded-page">
    <ArticleList title="Последние статьи" />
  </main>
</template>

<script>
import ArticleList from 'templates/ArticleList'

export default {
  name: 'Home',
  components: { ArticleList },
  fetch({ store }) {
    store.dispatch('articles/fetchArticles')
  },
}
</script>
