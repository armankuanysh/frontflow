import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '../'

export const state = () => ({
  currentTitle: '',
})

export type HeaderState = ReturnType<typeof state>

export const getters: GetterTree<HeaderState, RootState> = {
  title: (s) => s.currentTitle,
}

export const mutations: MutationTree<HeaderState> = {
  setTitle(s, p) {
    s.currentTitle = p
  },
}

export const actions: ActionTree<HeaderState, RootState> = {}
