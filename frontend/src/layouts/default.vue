<template>
  <div>
    <Header />
    <Menu />
    <Nuxt class="main" />
  </div>
</template>

<script>
import Header from 'organisms/Header'
import Menu from 'organisms/Menu'

export default {
  name: 'Default',
  components: { Header, Menu },
  watch: {
    $route() {
      this.$store.commit('menu/close')
    },
  },
  created() {
    this.$services.auth.checkUser()
  },
}
</script>

<style lang="scss" scoped>
.main {
  padding: 60px 0 100px;
  overflow-x: hidden;
}
</style>
