const state = () => ({
  openRightSidebar: true,
  showSharePasteModal: false
})

const mutations = {
  TOGGLE_RIGHT_SIDEBAR: (state, open) => {
    state.openRightSidebar = open || !state.openRightSidebar
  },

  TOGGLE_SHOW_SHARE_PASTE_MODAL: (state, open) => {
    state.showSharePasteModal = open || !state.showSharePasteModal
  }
}

const actions = {
  toggleRightSidebar: ({ commit }, open) => {
    commit('TOGGLE_RIGHT_SIDEBAR', open)
  },
  toggleShowSharePasteModal: ({ commit }, open) => {
    commit('TOGGLE_SHOW_SHARE_PASTE_MODAL', open)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
