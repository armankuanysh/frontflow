import { Context } from '@nuxt/types'

export interface IArticles {
  getArticles(params: any): Promise<any>
  search(q: string): Promise<any>
}

export default class Articles implements IArticles {
  constructor(private http: Context['$services']['strapi']) {}

  async getArticles(params: any) {
    const res = await this.http.get('articles', params && params)
    return res
  }

  async search(q: string) {
    const res = await this.http.search('articles', q)
    return res
  }
}
