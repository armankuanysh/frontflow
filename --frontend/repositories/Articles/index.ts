import { Context } from '@nuxt/types'

export default class Articles {
  constructor(private http: Context['$services']['netApi']) {}

  async getArticles() {
    const res = await this.http.get('articles')
    console.log(
      '🐞 ~ file: index.ts ~ line 8 ~ Articles ~ getArticles ~ res',
      res
    )
    return res
  }
}
