<template>
  <main class="padded-page">
    <div class="container">
      <article class="user-card">
        <Heading type="h2">
          {{ user.first_name }} {{ user.second_name }}
        </Heading>
        <p>{{ user.email }}</p>
      </article>
      <ThemeSwitch />
      <nav class="user-nav">
        <ul>
          <li>
            <nuxt-link to="/profile/saved">
              <Bookmark />
              Сохраненные
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <Button class="logout" type="inline" @click="logout">
        <Logout />
        Выйти
      </Button>
    </div>
  </main>
</template>

<script>
import Bookmark from 'icons/bookmark.svg?inline'
import Logout from 'icons/logout.svg?inline'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import ThemeSwitch from 'organisms/ThemeSwitch'
/**
 * 'PAGES/profile'
 * @displayName profile
 */
export default {
  name: 'Profile',
  components: { Heading, Button, Bookmark, Logout, ThemeSwitch },
  middleware: 'auth',
  asyncData({ store, $strapi }) {
    store.commit('header/setTitle', $strapi.user?.username || 'Пользовать')
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
  },
  methods: {
    async logout() {
      await this.$services.auth.logout()
    },
  },
}
</script>

<style lang="scss" scoped>
.user-card {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}
.user-nav {
  position: relative;
  width: 100%;
  font-family: $f-heading;
  font-size: rem(20);
  margin: 20px 0 10px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li a {
      color: var(--c-default);
      display: flex;
      align-items: center;
      padding: 10px 0;
      text-decoration: none;
      svg {
        margin-right: 10px;
      }
    }
  }
}
.logout {
  color: #f41;
}
</style>
