<template>
  <label :class="['input', focused && 'input--focused']" :for="name">
    <Search v-if="type === 'search'" class="input-icon" />
    <div class="input-element">
      <input
        :type="type"
        :inputmode="type"
        :name="name"
        :placeholder="placeholder"
        @input="input"
        @focus="onFocus"
        @blur="onBlur"
        @keypress.enter="$emit('submit')"
      />
    </div>
  </label>
</template>

<script>
import Search from 'icons/search.svg?inline'
/**
 * ATOMS/Input
 * @displayName Input
 */
export default {
  name: 'Input',
  components: { Search },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: 'app-input',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      focused: false,
    }
  },
  methods: {
    onFocus(e) {
      this.focused = true
      this.$emit('focus', e)
    },
    onBlur(e) {
      this.focused = false
      this.$emit('blur', e)
    },
    input(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: block;
  width: 100%;
  // height: 24px;
  height: 100%;
  background-color: #c3e7ed;
  backdrop-filter: blur(15px);
  border-radius: 6px;
  border: 1px solid rgba($c-accent, 0);
  transition: 0.25s ease-in;
  &--focused {
    border: 1px solid rgba($c-accent-hover, 0.75);
  }
  &-icon {
    position: absolute;
    top: 50%;
    left: 5px;
    display: block;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
  }
  &-element {
    width: 100%;
    height: 100%;
    padding-left: 28px;
    input {
      background-color: transparent;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-family: $f-heading;
      font-weight: 300;
      &::-webkit-search-cancel-button {
        appearance: none;
        width: 20px;
        height: 20px;
        display: block;
        background-image: url('~assets/icons/clear.svg');
        background-size: contain;
        transition: 0.25s;
      }
      &:focus {
        .input {
          border: 1px solid $c-accent-hover;
        }
      }
    }
  }
}
</style>
