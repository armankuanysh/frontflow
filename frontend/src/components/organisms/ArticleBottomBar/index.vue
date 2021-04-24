<template>
  <aside :class="['article-bottom', isHiding && 'is-top']">
    <Like />
  </aside>
</template>

<script>
import Like from 'molecules/Like'
/**
 * ORGANISMS/ArticleBottomBar
 * @displayName ArticleBottomBar
 */
export default {
  name: 'ArticleBottomBar',
  components: { Like },
  data() {
    return {
      isHiding: false,
      scrollTop: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.hidingHandler)
  },
  destroyed() {
    window.removeEventListener('scroll', this.hidingHandler)
  },
  methods: {
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
.article-bottom {
  width: 100%;
  display: flex;
  padding: 10px 15px 50px;
  background-color: rgba(var(--c-accent-rgb), 0.25);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateY(-40px);
  transition: 0.7s;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 3;
  &.is-top {
    transform: translateY(0);
  }
}
</style>
