import { Context } from '@nuxt/types'
import { ICategory } from '~/src/models/Categories'

export interface ICategories {
  getCategories(): Promise<any>
  getPopular(): Promise<any>
}

export default class Categories implements ICategories {
  private categories = [] as ICategory[]
  constructor(private http: Context['$services']['strapi']) {}

  async getCategories() {
    try {
      this.categories = await this.http.get('categories')
      return this.categories
    } catch (e) {
      console.log(e)
    }
  }

  async getPopular() {
    try {
      if (this.categories.length === 0) {
        await this.getCategories()
      }
      const res = this.categories.filter((c: any) => c.is_popular)
      return res
    } catch (e) {
      console.log(e)
    }
  }
}
