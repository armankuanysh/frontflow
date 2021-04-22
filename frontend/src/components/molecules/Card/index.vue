<template>
  <nuxt-link
    :to="{
      path: `/${article.category.slug}/${article.slug}`,
      params: { slug: article.slug },
    }"
    class="card"
  >
    <div class="card__image">
      <img
        :src="$services.page.getStrapiMedia(article.image.url)"
        :alt="article.title"
        loading="lazy"
      />
    </div>
    <div class="card__content">
      <div class="card__details">
        <PublishedAt :published="published" />
        <TimeEstimate :content="article.content" />
      </div>
      <Heading type="h2">{{ article.title }}</Heading>
      <p>{{ article.description }}</p>
    </div>
    <div v-if="article.tags.length > 0" class="card__hashtags">
      <Hashtag v-for="tag in article.tags" :key="tag.id">
        #{{ tag.name }}
      </Hashtag>
    </div>
  </nuxt-link>
</template>

<script>
import Heading from 'atoms/Heading'
import PublishedAt from 'atoms/PublishedAt'
import TimeEstimate from 'atoms/TimeEstimate'
import Hashtag from 'atoms/Hashtag'
/**
 * MOLECULES/Card
 * @displayName Card
 */
export default {
  name: 'Card',
  components: { Heading, PublishedAt, TimeEstimate, Hashtag },
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
  margin: 15px 0;
  font-family: $f-heading;
  text-decoration: none;
  color: $c-default;
  border-radius: 10px;
  box-shadow: 0 rem(10) rem(20) rgba($c-accent, 0.1);
  overflow: hidden;
  &__image {
    position: relative;
    height: 180px;
    background-image: linear-gradient(
      90deg,
      rgba($c-accent, 0.1) 0,
      rgba($c-accent, 0.025) 40px,
      rgba($c-accent, 0.1) 80px
    );
    background-size: 600px;
    animation: shine 1.6s infinite linear;
    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: rem(30);
      display: block;
      background-color: rgba(#fff, 0.25);
      backdrop-filter: blur(10px);
    }
    img {
      display: block;
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }
  &__content {
    padding: 20px;
    h2 {
      margin: rem(10) 0 !important;
    }
  }
  &__hashtags {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    border-top: 1px solid #bcb;
  }
  &__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
