<template>
  <span>~{{ readEstimate }} мин. чтения</span>
</template>

<script>
/**
 * ATOMS/TimeEstimate
 * @displayName TimeEstimate
 */
export default {
  name: 'TimeEstimate',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  computed: {
    readEstimate() {
      return this.$services.reading.estimate(this.content)
    },
  },
}
</script>

<style lang="scss" scoped>
span {
  font-family: $f-heading;
  font-weight: 200;
  margin-bottom: rem(15);
}
</style>
