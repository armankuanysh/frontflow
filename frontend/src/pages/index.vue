<template>
  <main class="padded-page">
    <PopularCategories />
    <ArticleList title="Последние статьи" />
  </main>
</template>

<script>
import PopularCategories from 'organisms/PopularCategories'
import ArticleList from 'templates/ArticleList'

export default {
  name: 'Home',
  components: { ArticleList, PopularCategories },
  fetch({ store }) {
    store.dispatch('articles/fetchArticles')
  },
}
</script>
