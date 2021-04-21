<template>
  <nuxt-link
    :to="{
      path: `/${article.category.slug}/${article.slug}`,
      params: { slug: article.slug },
    }"
    class="card"
  >
    <time><Time />{{ published }}</time>
    <Heading type="h2">{{ article.title }}</Heading>
    <p>{{ article.description }}</p>
  </nuxt-link>
</template>

<script>
import Heading from 'atoms/Heading'
import Time from 'icons/time.svg?inline'
/**
 * MOLECULES/Card
 * @displayName Card
 */
export default {
  name: 'Card',
  components: { Heading, Time },
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    slug() {
      return `/${this.article.category.slug}/${this.article.slug}`
    },
    published() {
      return this.$services.date.format(this.article.publishedAt)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: block;
  width: 100%;
  padding: 20px;
  margin: 15px 0;
  font-family: $f-heading;
  text-decoration: none;
  color: $c-default;
  border-radius: 10px;
  box-shadow: 0 rem(10) rem(20) rgba($c-accent, 0.1);
  time {
    display: flex;
    align-items: center;
    font-size: rem(16);
    margin-bottom: rem(15);
    svg {
      color: lighten($c-default, 20);
      margin-right: 8px;
    }
  }
  h2 {
    margin: rem(10) 0 !important;
  }
}
</style>
