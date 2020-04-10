<template>
  <pre>{{ paste.content || 'Error: paste not found.' }}</pre>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'empty',
  computed: {
    ...mapState({
      paste: state => state.paste.paste
    })
  },
  mounted () {
    this.$axios.get(`pastes/${this.$route.params.hash}/raw`)
      .then((res) => {
        this.$store.commit('paste/SET_PASTE', { content: res.data })
      })
  }
}
</script>
