import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '../'

export const state = () => ({
  isOpen: false,
})

export type MenuState = ReturnType<typeof state>

export const getters: GetterTree<MenuState, RootState> = {
  state: (s) => s.isOpen,
}

export const mutations: MutationTree<MenuState> = {
  stateHandle(s) {
    s.isOpen = !s.isOpen
  },
  close(s) {
    s.isOpen = false
  },
}

export const actions: ActionTree<MenuState, RootState> = {}
