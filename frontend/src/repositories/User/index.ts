import { Context } from '@nuxt/types'

export interface IUser {
  likeArticle(id: string, article?: any): Promise<void>
  unlikeArticle(id: string, article?: any): Promise<void>
}

export default class User implements IUser {
  constructor(
    private $strapi: Context['$strapi'],
    private store: Context['store']
  ) {}

  async likeArticle(id: string, _article?: any) {
    try {
      if (!this.$strapi?.user) {
        throw new Error('no user')
      }
      const res = await this.$strapi.update('articles', id, {
        likers: this.$strapi?.user?.id,
      })
      this.store.commit('articles/setSingleArticle', res)
    } catch (e) {
      console.error(e)
    }
  }

  async unlikeArticle(id: string, article: any) {
    try {
      const userId = this.$strapi.user.id
      const res = await this.$strapi.update('articles', id, {
        likers: article.likers.filter((u: any) => u !== userId),
      })
      this.store.commit('articles/setSingleArticle', res)
    } catch (e) {
      console.error(e)
    }
  }
}
