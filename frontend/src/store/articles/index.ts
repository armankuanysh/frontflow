import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '../'

export const state = () => ({
  articles: [],
})

export type ArticlesState = ReturnType<typeof state>

export const getters: GetterTree<ArticlesState, RootState> = {
  getArticles: (s) => s.articles,
}

export const mutations: MutationTree<ArticlesState> = {
  setArticles(s, p) {
    s.articles = p
  },
}

export const actions: ActionTree<ArticlesState, RootState> = {
  async fetchArticles({ commit }, p) {
    const res = await this.$repositories.articles.getArticles(p && p)
    commit('setArticles', res)
  },
}
