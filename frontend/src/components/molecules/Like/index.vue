<template>
  <button class="like">
    <Heart />
  </button>
</template>

<script>
import Heart from 'icons/heart.svg?inline'
/**
 * MOLECULES/Like
 * @displayName Like
 */
export default {
  name: 'Like',
  components: { Heart },
}
</script>

<style lang="scss" scoped>
.like {
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--c-default);
  @include transition-s;
}
</style>
