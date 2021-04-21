<template>
  <header :class="['header', isVisible && 'is-visible']">
    <div class="container">
      <div class="header-inner">
        <transition name="fade" mode="in-out">
          <Back v-if="$route.path !== '/'" class="header-back" />
        </transition>
        <transition name="fade" mode="in-out">
          <p>{{ title }}</p>
        </transition>
        <transition name="fade" mode="in-out">
          <Share v-if="$route.path !== '/'" class="header-share" />
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import Back from 'atoms/Back'
import Share from 'atoms/Share'
/**
 * ORGANISMS/Header
 * @displayName Header
 */
export default {
  name: 'Header',
  components: { Back, Share },
  data() {
    return {
      scrollTop: 0,
      isVisible: true,
    }
  },
  computed: {
    title() {
      return this.$store.getters['header/title']
    },
  },
  watch: {
    $route(to) {
      this.$services.header.getHeading(to.path)
    },
  },
  created() {
    this.$services.header.getHeading(this.$route.path)
  },
  mounted() {
    window.addEventListener('scroll', this.headerHandler)
  },
  destroyed() {
    window.removeEventListener('scroll', this.headerHandler)
  },
  methods: {
    headerHandler() {
      const st = window.scrollY
      if (st > this.scrollTop) {
        this.isVisible = false
      } else {
        this.isVisible = true
      }
      setTimeout(() => {
        this.scrollTop = st
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100vw;
  padding: 15px 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba($c-accent, 0.05);
  display: flex;
  align-items: center;
  transition: 0.35s;
  transform: translateY(-100%);
  z-index: 10;
  overflow: hidden;

  &.is-visible {
    transform: translateY(0);
  }

  &-inner {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &-back,
  &-share {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &-back {
    left: 0;
  }
  &-share {
    right: 0;
    transform: rotate(180deg) translateY(50%);
  }

  p {
    font-family: $f-heading;
    font-size: rem(22);
    font-weight: 500;
  }

  .logo {
    font-size: rem(48);
    font-family: $f-heading;
    font-weight: 900;
    text-decoration: none;
    color: $c-accent;
    text-shadow: 0 rem(20) rem(20) rgba($c-accent, 0.25);
    &:hover {
      color: $c-accent-hover;
    }
  }
}
</style>
