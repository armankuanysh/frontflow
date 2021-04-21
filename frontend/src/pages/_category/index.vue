<template>
  <main>
    <div class="container"></div>
    <ArticleList :title="`Посты категорий ${category.name}`" />
  </main>
</template>

<script>
import ArticleList from 'templates/ArticleList'

/**
 * 'PAGES/category'
 * @displayName category
 */
export default {
  name: 'Category',
  components: { ArticleList },
  async asyncData({ $strapi, params, store }) {
    const slug = params.category
    const category = await $strapi.find('categories', { slug })
    store.commit('header/setTitle', category[0].name)
    store.dispatch('articles/fetchArticles', { 'category.slug': slug })
    return { category: category[0] }
  },
}
</script>
