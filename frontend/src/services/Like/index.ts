import { Context } from '@nuxt/types'

export interface ILike {
  like(id: string): Promise<void>
  unlike(id: string, article: any): Promise<void>
}

export default class Like implements ILike {
  constructor(
    private store: Context['store'],
    private user: Context['$repositories']['user']
  ) {}

  async like(id: string) {
    const res = await this.user?.likeArticle(id)
    this.store.commit('articles/setSingleArticle', res)
  }

  async unlike(id: string, article: any) {
    const res = await this.user.unlikeArticle(id, article)
    this.store.commit('articles/setSingleArticle', res)
  }
}
