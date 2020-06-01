import Vue from 'vue'
const ShortKey = require('vue-shortkey')

// custom shortkey config settings
Vue.use(ShortKey, { prevent: ['input', 'textarea'] })

export default ShortKey
