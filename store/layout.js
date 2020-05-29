const state = () => ({
  openRightSidebar: true
})

const mutations = {
  TOGGLE_RIGHT_SIDEBAR: (state, open) => {
    state.openRightSidebar = open || !state.openRightSidebar
  }
}

const actions = {
  toggleRightSidebar: ({ commit }, open) => {
    commit('TOGGLE_RIGHT_SIDEBAR', open)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
