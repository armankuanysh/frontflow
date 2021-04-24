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
      <Author
        :author="article.author.name"
        :image="$services.page.getStrapiMedia(article.author.picture.url)"
        class="card__user"
      />
      <!-- <div class="card__user">
        <img
          :src="$services.page.getStrapiMedia(article.author.picture.url)"
          :alt="article.author.name"
        />
        <p>{{ article.author.name }}</p>
      </div> -->
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
import Author from 'molecules/Author'
/**
 * MOLECULES/Card
 * @displayName Card
 */
export default {
  name: 'Card',
  components: { Heading, PublishedAt, TimeEstimate, Hashtag, Author },
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
  color: var(--c-default);
  border-radius: 10px;
  box-shadow: 0 rem(10) rem(20) rgba(var(--c-accent-rgb), 0.1);
  overflow: hidden;
  @include transition-s;
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
    @include transition-s;
    img {
      display: block;
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  }
  &__user {
    margin-top: -50px;
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
