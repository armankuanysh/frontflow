<template>
  <section class="article-list">
    <div class="container">
      <Heading type="h2">
        <slot></slot>
        {{ title && title }}
      </Heading>
      <template v-if="!isResult">
        <Card
          v-for="article in articles"
          :key="article.key"
          :article="article"
        />
      </template>
      <template v-else>
        <Card v-for="article in result" :key="article.key" :article="article" />
      </template>
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
      default: '',
    },
    isResult: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    articles() {
      return this.$store.getters['articles/getArticles']
    },
    result() {
      return this.$store.getters['articles/getSearchResult']
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
    svg {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
  }
}
</style>
