<template>
  <div class="theme-switch">
    <Heading type="h3">Тема</Heading>
    <div class="theme-switch__buttons">
      <button
        :class="[mode === 'system' && 'is-active']"
        @click="$colorMode.preference = 'system'"
      >
        Авто
      </button>
      <button
        :class="[mode === 'light' && 'is-active']"
        @click="$colorMode.preference = 'light'"
      >
        Светлый
      </button>
      <button
        :class="[mode === 'dark' && 'is-active']"
        @click="$colorMode.preference = 'dark'"
      >
        Темный
      </button>
    </div>
  </div>
</template>

<script>
import Heading from 'atoms/Heading'
/**
 * ORGANISMS/ThemeSwitch
 * @displayName ThemeSwitch
 */
export default {
  name: 'ThemeSwitch',
  components: { Heading },
  computed: {
    mode() {
      return this.$colorMode.value
    },
  },
}
</script>

<style lang="scss" scoped>
.theme-switch {
  position: relative;
  width: 100%;
  &__buttons {
    display: flex;
    margin-top: 10px;
    button {
      width: 33.3%;
      border: 1px solid var(--c-accent-light);
      outline: none;
      background-color: var(--c-accent);
      backdrop-filter: blur(10px);
      font-family: $f-heading;
      font-size: rem(16);
      font-weight: 300;
      color: var(--c-default);
      padding: 8px;
      &:first-of-type {
        border-right-color: transparent;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      &:last-of-type {
        border-left-color: transparent;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
      &.is-active {
        background-color: var(--c-accent-light);
        pointer-events: none;
      }
    }
  }
}
</style>
