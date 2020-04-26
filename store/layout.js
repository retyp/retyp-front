const state = () => ({
  openRightSidebar: true
})

const mutations = {
  TOGGLE_RIGHT_SIDEBAR: (state) => {
    state.openRightSidebar = !state.openRightSidebar
  }
}

const actions = {
  toggleRightSidebar: ({ commit }) => {
    commit('TOGGLE_RIGHT_SIDEBAR')
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
