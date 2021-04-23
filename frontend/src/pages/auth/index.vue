<template>
  <main class="auth">
    <div class="container">
      <div class="auth-logo">
        <img :src="logo" alt="FRONTFLOW." />
      </div>
      <Heading type="h1" class="auth-heading"> Авторизация </Heading>
      <AuthForm />
    </div>
  </main>
</template>

<script>
import Heading from 'atoms/Heading'
import AuthForm from 'organisms/AuthForm'

import LogoD from '~/assets/images/logo.png'
/**
 * 'PAGES/Auth'
 * @displayName Auth
 */
export default {
  name: 'Auth',
  components: { Heading, AuthForm },
  layout: 'auth',
  data() {
    return {
      logo: LogoD,
    }
  },
}
</script>

<style lang="scss" scoped>
.auth {
  position: relative;
  width: 100%;
  padding: 100px 0;

  &-logo {
    position: relative;
    max-width: 240px;
    width: 100%;
    margin: 0 auto 40px;
    img {
      display: block;
      width: 100%;
    }
  }

  &-heading {
    text-align: center;
    margin-bottom: 25px;
  }
}
</style>
