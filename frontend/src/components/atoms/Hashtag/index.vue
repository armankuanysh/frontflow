<template>
  <span class="hashtag"><slot></slot></span>
</template>

<script>
/**
 * ATOMS/Hashtag
 * @displayName Hashtag
 */
export default {
  name: 'Hashtag',
}
</script>

<style lang="scss" scoped>
.hashtag {
  display: inline-block;
  background-color: rgba($c-accent, 0.25);
  padding: 5px 10px;
  border-radius: 15px;
  margin: 0 5px;
  font-family: $f-heading;
  font-weight: 300;
}
</style>
