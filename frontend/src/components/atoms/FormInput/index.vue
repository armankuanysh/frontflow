<template>
  <label class="form-control" :for="name">
    <span v-if="label" class="form-control__title">{{ label }}</span>
    <input
      v-model="returnValue"
      :type="type"
      :inputmode="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="input"
      @blur="$emit('blur')"
    />
    <transition name="fade">
      <span v-if="error" class="form-control__hint">{{ error }}</span>
    </transition>
  </label>
</template>

<script>
/**
 * ATOMS/FormInput
 * @displayName FormInput
 */
export default {
  name: 'FormInput',
  props: {
    type: {
      type: String,
      default: 'text',
      required: true,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
      required: true,
    },
    error: {
      type: String,
      default: '',
    },
  },
  computed: {
    returnValue: {
      set() {
        this.$emit('input', this.value)
      },
      get() {
        return this.value
      },
    },
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-control {
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: $f-heading;
  margin-bottom: 20px;
  &__title {
    display: inline-block;
    margin-bottom: 5px;
  }
  input {
    background-color: var(--c-accent-light);
    border: 1px solid transparent;
    outline: none;
    padding: 8px 12px;
    border-radius: 6px;
    transition: 0.25s;
    &:focus {
      border-color: var(--c-accent);
    }
  }
  &__hint {
    display: block;
    margin-top: 5px;
    font-size: rem(14);
    color: #f41;
  }
}
</style>
