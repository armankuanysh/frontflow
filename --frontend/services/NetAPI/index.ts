import { Context } from '@nuxt/types'

export default class NetAPI {
  constructor(private $strapi: Context['$strapi']) {}

  async get(name: string) {
    try {
      const res = await this.$strapi.find(name)
      return res
    } catch (e) {
      console.log(e)
    }
  }
}
