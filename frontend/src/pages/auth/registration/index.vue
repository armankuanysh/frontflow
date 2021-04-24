<template>
  <main class="auth">
    <div class="container">
      <div class="auth-logo">
        <img :src="logo" alt="FRONTFLOW." />
      </div>
      <Heading type="h1" class="auth-heading"> Регистрация </Heading>
      <RegistrationForm />
      <Button class="home" type="circle" @click="$router.push('/')">
        <Home />
      </Button>
    </div>
  </main>
</template>

<script>
import Home from 'icons/home.svg?inline'
import Heading from 'atoms/Heading'
import RegistrationForm from 'organisms/RegistrationForm'
import Button from 'atoms/Button'

import LogoD from '~/assets/images/logo.png'
import LogoL from '~/assets/images/logo-light.png'
/**
 * 'PAGES/Registration'
 * @displayName Registration
 */
export default {
  name: 'Registration',
  components: { Heading, RegistrationForm, Button, Home },
  layout: 'auth',
  computed: {
    logo() {
      return this.$colorMode.value === 'light' ? LogoD : LogoL
    },
  },
}
</script>

<style lang="scss" scoped>
.auth {
  position: relative;
  width: 100%;
  height: 100%;
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

.home {
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
}
</style>
