// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Context } from '@nuxt/types'
import Articles, { IArticles } from 'repositories/Articles'
import Categories, { ICategories } from 'repositories/Categories'

export type repositoriesT = {
  articles: IArticles
  categories: ICategories
}

declare module '@nuxt/types' {
  interface Context {
    $repositories: repositoriesT
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $repositories: repositoriesT
  }
}

/**
 *
 * @param {Context} ctx
 * @param inject
 */
export default function (ctx: Context, inject: any) {
  const repositories: repositoriesT = {
    articles: new Articles(ctx.$services.strapi),
    categories: new Categories(ctx.$services.strapi),
  }

  inject('repositories', repositories)
}
