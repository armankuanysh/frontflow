<template>
  <form class="auth-form">
    <FormInput
      v-model="username"
      type="text"
      name="username"
      label="Логин"
      placeholder="john.doe"
      :value="username"
    />
    <FormInput
      v-model="password"
      type="password"
      name="password"
      label="Пароль"
      placeholder="••••••"
      :value="password"
    />
    <Button class="auth-form__submit" :disabled="disabled" @click="submit">
      Войти
    </Button>
    <nuxt-link to="/auth/register" class="auth-form__link"
      >Регистрация</nuxt-link
    >
  </form>
</template>

<script>
import FormInput from 'atoms/FormInput'
import Button from 'atoms/Button'
/**
 * ORGANISMS/AuthForm
 * @displayName AuthForm
 */
export default {
  name: 'AuthForm',
  components: { FormInput, Button },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  computed: {
    disabled() {
      return !(this.username.length > 0 && this.password.length > 0)
    },
  },
  methods: {
    async submit(e) {
      e.preventDefault()
      if (this.username && this.password) {
        const loged = await this.$services.auth.login(
          this.username,
          this.password
        )
        loged && this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.auth-form {
  position: relative;
  width: 100%;
  max-width: 260px;
  margin: 0 auto;
  &__submit {
    margin: 10px 0 20px;
  }
  &__link {
    display: inline-block;
    width: 100%;
    font-family: $f-heading;
    font-weight: 300;
    text-align: center;
    color: var(--c-accent);
  }
}
</style>
