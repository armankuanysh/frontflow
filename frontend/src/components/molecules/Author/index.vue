<template>
  <div class="author">
    <img :src="image" :alt="author" />
    <p>{{ author }}</p>
  </div>
</template>

<script>
/**
 * MOLECULES/Author
 * @displayName Author
 */
export default {
  name: 'Author',
  props: {
    author: {
      type: String,
      default: '-',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.author {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: rgba(var(--c-bg-rgb), 0.5);
  backdrop-filter: blur(10px);
  color: var(--c-default);
  z-index: 3;
  img {
    display: block;
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
