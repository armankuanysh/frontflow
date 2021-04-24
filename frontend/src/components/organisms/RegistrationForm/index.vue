<template>
  <form class="auth-form">
    <FormInput
      v-model="first_name"
      type="text"
      name="first_name"
      label="Имя"
      placeholder="Нурбол"
      :value="first_name"
    />
    <FormInput
      v-model="second_name"
      type="text"
      name="second_name"
      label="Фамилия"
      placeholder="Жаксылык"
      :value="second_name"
    />
    <FormInput
      v-model="email"
      type="text"
      name="email"
      label="Эл. почта"
      placeholder="example@mail.kz"
      :value="email"
    />
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
    <Button
      class="auth-form__submit"
      :disabled="disabled"
      :loading="loading"
      @click="submit"
    >
      Зарегистрироваться
    </Button>
    <nuxt-link to="/auth/registration" class="auth-form__link">
      Авторизация
    </nuxt-link>
  </form>
</template>

<script>
import FormInput from 'atoms/FormInput'
import Button from 'atoms/Button'
/**
 * ORGANISMS/RegistrationForm
 * @displayName RegistrationForm
 */
export default {
  name: 'RegistrationForm',
  components: { FormInput, Button },
  data() {
    return {
      first_name: '',
      second_name: '',
      email: '',
      username: '',
      password: '',
      loading: false,
    }
  },
  computed: {
    disabled() {
      return !(this.username.length > 0 &&
        this.password.length > 0 &&
        this.first_name.length > 0 &&
        this.second_name.length > 0,
      this.email.length > 0)
    },
  },
  methods: {
    async submit(e) {
      e.preventDefault()
      if (
        this.username &&
        this.password &&
        this.first_name &&
        this.second_name &&
        this.email
      ) {
        const loged = await this.$services.auth.register({
          username: this.username,
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          second_name: this.second_name,
        })
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
