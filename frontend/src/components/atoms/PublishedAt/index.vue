<template>
  <time><Time />{{ published }}</time>
</template>

<script>
import Time from 'icons/time.svg?inline'
/**
 * ATOMS/PublishedAt
 * @displayName PublishedAt
 */
export default {
  name: 'PublishedAt',
  components: { Time },
  props: {
    published: {
      type: String,
      default: '--.--.----',
    },
  },
}
</script>

<style lang="scss" scoped>
time {
  display: flex;
  align-items: center;
  font-family: $f-heading;
  font-weight: 200;
  font-size: rem(16);
  margin-bottom: rem(15);
  svg {
    color: lighten($c-default, 20);
    margin-right: 8px;
  }
}
</style>
