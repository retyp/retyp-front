import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted)

Vue.toasted.register('error', (payload) => {
  if (!payload.message) {
    return 'Oops... Something went wrong...'
  }

  return payload.message
}, {
  type: 'error',
  iconPack: 'fontawesome',
  icon: 'fa-exclamation-circle',
  duration: '5000'
})

Vue.toasted.register('success', (payload) => {
  if (!payload.message) {
    return 'Success!'
  }

  return payload.message
}, {
  type: 'success',
  iconPack: 'fontawesome',
  icon: 'fa-check',
  duration: '5000'
})
