<template>
  <nuxt-link
    :to="slug"
    :class="['tag', icon[slug] && 'tag--icon', isActive && 'is-active']"
  >
    <component :is="icon[slug]" v-if="icon[slug]" />
    <slot v-else></slot>
  </nuxt-link>
</template>

<script>
import Home from 'icons/home.svg?inline'
import Angular from 'icons/angular.svg?inline'
import Docker from 'icons/docker.svg?inline'
import Git from 'icons/git.svg?inline'
import Nuxt from 'icons/nuxt.svg?inline'
import Typescript from 'icons/typescript.svg?inline'
/**
 * ATOMS/tag
 * @displayName tag
 */
export default {
  name: 'Tag',
  components: { Home, Angular, Docker, Git, Nuxt, Typescript },
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
  data() {
    return {
      icon: {
        '/': Home,
        '/nuxtjs': Nuxt,
        '/docker': Docker,
        '/angular': Angular,
        '/git': Git,
        '/typescript': Typescript,
      },
    }
  },
  computed: {
    isActive() {
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
  color: var(--c-accent);
  padding: 10px 30px;
  margin: 0 10px;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 rem(5) rem(10) rgba(var(--c-accent-rgb), 0.25);
  @include transition-s;
  &.nuxt-link-exact-active {
    color: #fff;
    background-color: var(--c-accent);
    box-shadow: 0 rem(5) rem(10) rgba(var(--c-bg-rgb), 0.25);
    @include transition-s;
    svg path {
      fill: #fff;
    }
  }

  &--icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
