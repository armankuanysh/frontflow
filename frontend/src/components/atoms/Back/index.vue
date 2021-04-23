<template>
  <button @click="goBack">
    <Arrow />
    Назад
  </button>
</template>

<script>
import Arrow from 'icons/arrow.svg?inline'
/**
 * ATOMS/Back
 * @displayName Back
 */
export default {
  name: 'Back',
  components: { Arrow },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  font-family: $f-heading;
  font-weight: 300;
  color: var(--c-default);
  transition: color 0.25s;
  svg {
    margin-right: 8px;
  }
}
</style>
