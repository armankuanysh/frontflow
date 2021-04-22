import { Context } from '@nuxt/types'
import { stringify } from 'qs'

export interface IStrapi {
  get(name: string, params?: any): Promise<any>
  search(name: string, q: string, params?: any): Promise<any>
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

  async search(name: string, q: string, params?: any) {
    try {
      const query = stringify(
        {
          _where: [{ title_contains: q }, { content_contains: q }],
        },
        {
          encode: false,
        }
      )
      const res = await this.$strapi.$http.$get(
        `/${name}?${query}`,
        params && params
      )
      return res
    } catch (e) {
      console.log(e)
    }
  }
}
