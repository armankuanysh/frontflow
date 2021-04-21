<template>
  <section class="article-list">
    <div class="container">
      <Heading type="h2">{{ title }}</Heading>
      <Card v-for="article in articles" :key="article.key" :article="article" />
    </div>
  </section>
</template>

<script>
import Heading from 'atoms/Heading'
import Card from 'molecules/Card'

/**
 * TEMPLATES/ArticleList
 * @displayName ArticleList
 */
export default {
  name: 'ArticleList',
  components: { Heading, Card },
  props: {
    title: {
      type: String,
      default: '-',
    },
  },
  computed: {
    articles() {
      return this.$store.getters['articles/getArticles']
    },
  },
}
</script>

<style lang="scss" scoped>
.article-list {
  position: relative;
  width: 100%;
  h2 {
    font-family: $f-heading;
    font-size: rem(28);
  }
}
</style>
