const state = () => ({
  paste: {},
  clone: ''
})

const mutations = {
  RESET_PASTE: (state) => {
    state.paste = {}
  },
  RESET_CLONE: (state) => {
    state.clone = ''
  },
  SET_PASTE: (state, paste) => {
    state.paste = paste
  },
  SET_CLONE: (state) => {
    state.clone = state.paste.content
  }
}

const actions = {
}

const getters = {
  isCloning: state => !!state.clone
}

export default {
  state,
  mutations,
  actions,
  getters
}
