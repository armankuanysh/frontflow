<template>
  <main>
    <div class="article-image" :style="{ marginBottom: `-${offset + 25}px` }">
      <img
        :src="$services.page.getStrapiMedia(article.image.url)"
        :alt="article.title"
      />
    </div>
    <div class="container">
      <div ref="articleTop" class="article-top">
        <nuxt-link
          :to="{
            path: `/${article.category.slug}`,
            params: { slug: article.slug },
          }"
          class="category-link"
        >
          {{ article.category.name }}
        </nuxt-link>
        <Heading type="h1">{{ article.title }}</Heading>
        <div class="article-top__details">
          <PublishedAt
            :published="$services.date.format(article.publishedAt)"
          />
          <TimeEstimate :content="article.content" />
        </div>
      </div>
      <Content :article="article" />
    </div>
  </main>
</template>

<script>
/* eslint-disable no-unused-expressions */
import Heading from 'atoms/Heading'
import PublishedAt from 'atoms/PublishedAt'
import TimeEstimate from 'atoms/TimeEstimate'
import Content from 'templates/Content'
/**
 * 'PAGES/category'
 * @displayName category
 */
export default {
  name: 'Category',
  components: { Content, Heading, PublishedAt, TimeEstimate },
  async asyncData({ $strapi, params, store }) {
    const slug = params.article
    const article = await $strapi.find('articles', { slug })
    store.commit('header/setTitle', 'Пост')
    return { article: article[0] }
  },
  data() {
    return {
      offset: 0,
    }
  },
  mounted() {
    this.offset = this.$refs.articleTop.getBoundingClientRect().height
  },
}
</script>

<style lang="scss">
main {
  .article-image {
    position: relative;
    width: 100%;
    height: 300px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(var(--c-bg-rgb), 0.25),
        rgba(var(--c-bg-rgb), 0.5),
        rgba(var(--c-bg-rgb), 0.85),
        rgba(var(--c-bg-rgb), 1)
      );
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .article-top {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    z-index: 2;

    &__details {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .category-link {
    font-family: $f-heading;
    font-size: rem(14);
    color: var(--c-deafult-light);
    text-decoration: none;
  }

  h1 {
    margin: rem(10) 0 rem(18) !important;
  }
}
</style>
