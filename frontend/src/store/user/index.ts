import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '../'

export const state = () => ({
  user: {},
})

export type UserState = ReturnType<typeof state>

export const getters: GetterTree<UserState, RootState> = {
  getUser: (s) => s.user,
}

export const mutations: MutationTree<UserState> = {
  setUser(s, p) {
    s.user = p
  },
}

export const actions: ActionTree<UserState, RootState> = {}
