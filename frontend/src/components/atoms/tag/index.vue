<template>
  <nuxt-link :to="slug" :class="['tag', isActive && 'is-active']">
    <slot></slot>
  </nuxt-link>
</template>

<script>
/**
 * ATOMS/tag
 * @displayName tag
 */
export default {
  name: 'Tag',
  props: {
    slug: {
      type: String,
      default: '/',
    },
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    isActive() {
      console.log(this.$route.path, this.slug)
      return this.$route.path.startsWith(this.slug)
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  font-family: $f-heading;
  font-size: rem(18);
  color: $c-default;
  padding: 10px 30px;
  margin: 0 10px;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 rem(10) rem(20) rgba($c-accent, 0.25);
  &.nuxt-link-exact-active {
    color: #fff;
    background-color: $c-accent;
    box-shadow: 0 rem(10) rem(20) rgba(#fff, 0.25);
  }
}
</style>
