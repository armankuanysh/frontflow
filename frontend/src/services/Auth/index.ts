/* eslint-disable camelcase */
import { Context } from '@nuxt/types'

type RegistrationData = {
  email: string
  username: string
  password: string
  first_name?: string
  second_name?: string
}
export interface IAuth {
  checkUser(): void
  login(identifier: string, password: string): Promise<any>
  logout(): Promise<void>
  register(data: RegistrationData): Promise<any>
}

export default class Auth implements IAuth {
  constructor(
    private strapi: Context['$strapi'],
    private $store: Context['store'],
    private redirect: Context['redirect']
  ) {}

  checkUser() {
    const user = this.strapi.user
    user && this.$store.commit('user/setUser', user)
  }

  async login(identifier: string, password: string) {
    try {
      const res = await this.strapi.login({ identifier, password })
      this.$store.commit('user/setUser', res.user)
      return res
    } catch (e) {
      console.error(e)
    }
  }

  async logout() {
    try {
      await this.strapi.logout()
      this.redirect(301, '/')
    } catch (e) {
      console.error(e)
    }
  }

  async register(data: RegistrationData) {
    try {
      const res = await this.strapi.register(data)
      this.$store.commit('user/setUser', res.user)
      return res
    } catch (e) {
      console.error(e)
    }
  }
}
