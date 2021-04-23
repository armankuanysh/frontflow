<template>
  <nav :class="['menu', isOpen && 'is-open', isHiding && 'is-hiding']">
    <div class="menu-float">
      <Button class="menu-float__btn" type="circle" @click="open">
        <Shevron />
      </Button>
    </div>
    <div class="menu-head">
      <Tag class="menu-home" slug="/">Home</Tag>
      <div class="menu-top__wrap">
        <ul class="menu-top">
          <li v-for="category in popular" :key="category.id">
            <Tag :slug="'/' + category.slug">{{ category.name }}</Tag>
          </li>
        </ul>
      </div>
    </div>
    <ul class="menu-body">
      <li v-for="category in categories" :key="category.id">
        <nuxt-link :to="'/' + category.slug">
          {{ category.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Tag from 'atoms/Tag'
import Button from 'atoms/Button'
import Shevron from 'icons/shevron.svg?inline'
/**
 * ORGANISMS/Menu
 * @displayName Menu
 */
export default {
  name: 'Menu',
  components: { Tag, Button, Shevron },
  data() {
    return {
      categories: [],
      popular: [],
      isHiding: false,
      scrollTop: 0,
    }
  },
  async fetch() {
    this.categories = await this.$repositories.categories.getCategories()
    this.popular = await this.$repositories.categories.getPopular()
  },
  computed: {
    isOpen() {
      return this.$store.getters['menu/state']
    },
  },
  mounted() {
    window.addEventListener('scroll', this.hidingHandler)
  },
  destroyed() {
    window.removeEventListener('scroll', this.hidingHandler)
  },
  methods: {
    open() {
      this.$store.commit('menu/stateHandle')
    },
    hidingHandler() {
      const st = window.scrollY
      if (st > this.scrollTop) {
        this.isHiding = true
      } else {
        this.isHiding = false
      }
      setTimeout(() => {
        this.scrollTop = st
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: var(--c-bg);
  padding: 35px 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0 rem(5) rem(20) rgba(var(--c-accent-rgb), 0.25);
  transition: 0.5s ease-in;
  transform: translateY(calc(100% - 95px));
  z-index: 10;

  &.is-hiding {
    transform: translateY(calc(100% - 35px));
  }

  &.is-open {
    transform: translateY(0);
    padding: 70px 0 35px;

    .menu-float {
      transform: translate(-50%, 50%);
      &__btn svg {
        transform: rotate(180deg);
      }
    }
  }

  &-float {
    position: absolute;
    top: 0;
    left: 50%;
    transition: 0.5s;
    transform: translate(-50%, -50%);

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        transition: 0.45s;
      }
    }
  }

  .menu-head {
    display: flex;
    .menu-home {
      width: 40px;
    }
  }

  .menu-top {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    &__wrap {
      height: 70px;
      padding-bottom: 30px;
      display: flex;
      overflow: scroll;
    }
  }

  ul.menu-body {
    height: calc(100% - 70px);
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 0 15px;
    overflow-y: scroll;
    li {
      font-family: $f-heading;
      font-size: rem(24);
      font-weight: 500;
      color: var(--c-default);
      a {
        display: inline-block;
        font-size: inherit;
        color: inherit;
        text-decoration: none;
        padding: 15px 0;
        &.nuxt-link-exact-active {
          color: var(--c-accent);
        }
      }
    }
  }
}
</style>
