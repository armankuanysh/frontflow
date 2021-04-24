<template>
  <button :class="['like', isLiked && 'is-active']" @click="handler">
    <Heart />
    {{ article.likers.length || 0 }}
  </button>
</template>

<script>
import Heart from 'icons/heart.svg?inline'

/**
 * MOLECULES/Like
 * @displayName Like
 */
export default {
  name: 'Like',
  components: { Heart },
  computed: {
    article() {
      return this.$store.getters['articles/getSingleArticle']
    },
    isLiked() {
      const user = this.$strapi.user
      const liker = user
        ? this.article.likers.filter((l) => l.id === user.id)
        : []
      return liker.length > 0
    },
  },
  methods: {
    async handler() {
      if (this.$strapi.user) {
        console.log('liked')
        // await this.$repositories.user.likeArticle(this.article.id)
        // await this.$services.like.like(this.article.id)
        if (!this.isLiked) {
          await this.$repositories.user.likeArticle(this.article.id)
        } else {
          await this.$repositories.user.unlikeArticle(
            this.article.id,
            this.article
          )
        }
      } else {
        this.$toast.show('Войдите, чтоб поставить лайк', {
          theme: 'toasted-primary',
          position: 'bottom-center',
          duration: 2000,
          singleton: true,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.like {
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--c-default);
  display: flex;
  align-items: center;
  @include transition-s;
  &.is-active {
    svg {
      fill: #f41;
    }
  }
  svg {
    margin-right: 5px;
  }
}
</style>
