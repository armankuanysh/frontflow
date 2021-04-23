import { Context } from '@nuxt/types'

export interface IAuth {
  checkUser(): void
  login(identifier: string, password: string): Promise<any>
}

export default class Auth implements IAuth {
  constructor(
    private strapi: Context['$strapi'],
    private $store: Context['store']
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
}
