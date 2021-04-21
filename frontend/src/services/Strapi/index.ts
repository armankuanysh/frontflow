import { Context } from '@nuxt/types'

export interface IStrapi {
  get(name: string, params?: any): Promise<any>
}

export default class Strapi implements IStrapi {
  constructor(private $strapi: Context['$strapi']) {}

  async get(name: string, params?: any) {
    try {
      const res = await this.$strapi.find(name, params && params)
      return res
    } catch (e) {
      console.log(e)
    }
  }
}
