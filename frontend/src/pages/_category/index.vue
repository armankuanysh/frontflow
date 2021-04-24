<template>
  <main class="padded-page">
    <div class="container"></div>
    <ArticleList>
      <slot>
        Посты категорий {{ category.name }}
        <span class="heading-icon">
          <component :is="icon[slug]" />
        </span>
      </slot>
    </ArticleList>
  </main>
</template>

<script>
import Angular from 'icons/angular.svg?inline'
import Docker from 'icons/docker.svg?inline'
import Git from 'icons/git.svg?inline'
import Nuxt from 'icons/nuxt.svg?inline'
import Typescript from 'icons/typescript.svg?inline'
import ArticleList from 'templates/ArticleList'

/**
 * 'PAGES/category'
 * @displayName category
 */
export default {
  name: 'Category',
  components: { ArticleList, Angular, Docker, Git, Nuxt, Typescript },
  async asyncData({ $strapi, params, store }) {
    const slug = params.category
    const category = await $strapi.find('categories', { slug })
    store.commit('header/setTitle', category[0].name)
    store.dispatch('articles/fetchArticles', { 'category.slug': slug })
    return { category: category[0] }
  },
  data() {
    return {
      icon: {
        '/nuxtjs': Nuxt,
        '/docker': Docker,
        '/angular': Angular,
        '/git': Git,
        '/typescript': Typescript,
      },
    }
  },
  computed: {
    slug() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
.heading-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 3px;
  vertical-align: bottom;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
