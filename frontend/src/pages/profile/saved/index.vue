<template>
  <main class="padded-page"></main>
</template>

<script>
/**
 * 'PAGES/profile/saved'
 * @displayName profile/saved
 */
export default {
  name: 'Saved',
  asyncData({ store }) {
    store.commit('header/setTitle', 'Сохраненные')
  },
}
</script>
