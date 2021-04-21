import { Context } from '@nuxt/types'
import Articles from '~/repositories/Articles'

export type repositoriesT = {
  articles: Articles
}

declare module '@nuxt/types' {
  interface Context {
    $repositories: repositoriesT
  }
}

export default function (ctx: Context, inject: any) {
  const repositories: repositoriesT = {
    articles: new Articles(ctx.$services.netApi),
  }

  inject('repositories', repositories)
}
