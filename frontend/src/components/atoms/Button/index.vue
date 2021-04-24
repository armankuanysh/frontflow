<template>
  <button
    :class="['btn', type && `btn--${type}`, loading && 'is-loading']"
    :disabled="disabled"
    @click="handler"
  >
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
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
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
  position: relative;
  border: 1px solid transparent;
  outline: none;
  appearance: none;
  padding: 15px 25px;
  border-radius: 5px;
  font-family: $f-heading;
  font-size: rem(16);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: 0.25s;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.is-loading {
    color: transparent;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      display: block;
      border-radius: 50%;
      border: 2px solid var(--c-default);
      border-left-color: transparent;
      transform: translate(-50%, -50%);
      animation: loading 5s infinite ease-out;
    }
  }

  &--default {
    width: 100%;
    background-color: var(--c-accent);
    color: #fff;
  }

  &--inline {
    width: 100%;
    background-color: transparent;
    font-size: rem(20);
    font-weight: 300;
    color: var(--c-default);
    text-align: left;
    padding: 8px 0;
    border-radius: 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }

  &--circle {
    width: rem(48);
    height: rem(48);
    padding: 10px;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: 0 rem(5) rem(20) rgba($c-accent, 0.25);
  }
}

@keyframes loading {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  10% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
