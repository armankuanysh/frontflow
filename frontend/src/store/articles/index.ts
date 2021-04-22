import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '../'

export const state = () => ({
  articles: [],
  searchResult: [],
})

export type ArticlesState = ReturnType<typeof state>

export const getters: GetterTree<ArticlesState, RootState> = {
  getArticles: (s) => s.articles,
  getSearchResult: (s) => s.searchResult,
}

export const mutations: MutationTree<ArticlesState> = {
  setArticles(s, p) {
    s.articles = p
  },
  setSearchResult(s, p) {
    s.searchResult = p
  },
}

export const actions: ActionTree<ArticlesState, RootState> = {
  async fetchArticles({ commit }, p) {
    const res = await this.$repositories.articles.getArticles(p && p)
    commit('setArticles', res)
  },

  async search({ commit }, p) {
    const res = await this.$repositories.articles.search(p)
    commit('setSearchResult', res)
  },
}
