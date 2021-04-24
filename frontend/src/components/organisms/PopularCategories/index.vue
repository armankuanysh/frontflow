<template>
  <div class="popular-categories__wrap">
    <ul class="popular-categories">
      <li v-for="category in popular" :key="category.id">
        <Tag :slug="'/' + category.slug">{{ category.name }}</Tag>
      </li>
    </ul>
  </div>
</template>

<script>
import Tag from 'atoms/Tag'

/**
 * ORGANISMS/PopularCategories
 * @displayName PopularCategories
 */
export default {
  name: 'PopularCategories',
  components: { Tag },
  data() {
    return {
      popular: [],
    }
  },
  async fetch() {
    this.popular = await this.$repositories.categories.getPopular()
  },
}
</script>

<style lang="scss" scoped>
.popular-categories {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  &__wrap {
    height: 70px;
    padding-bottom: 30px;
    display: flex;
    overflow: scroll;
  }
}
</style>
