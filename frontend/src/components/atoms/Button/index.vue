<template>
  <button :class="['btn', type && `btn--${type}`]" @click="handler">
    <slot></slot>
  </button>
</template>

<script>
/**
 * ATOMS/Button
 * @displayName Button
 */
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    handler(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  border: 1px solid transparent;
  outline: none;
  appearance: none;
  padding: 15px 25px;
  border-radius: 5px;
  font-size: rem(16);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: 0.25s;

  &--circle {
    width: rem(48);
    height: rem(48);
    padding: 10px;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: 0 rem(5) rem(20) rgba($c-accent, 0.25);
  }
}
</style>
