<template>
  <div
    v-shortkey.once="['ctrl', 's']"
    class="w-full h-screen bg-gray-800"
    @shortkey="savePaste()"
  >
    <!--
    |--------------------------------------------------------------------------
    | Paste header
    |--------------------------------------------------------------------------
    -->
    <paste-header
      show-save
      show-name-input
      show-toggle-right-sidebar
      :paste.sync="paste"
      @save-paste="savePaste()"
    />

    <!--
    |--------------------------------------------------------------------------
    | Paste content
    |--------------------------------------------------------------------------
    -->
    <div class="px-1 pb-2 md:px-6 -mt-20 -mr-145 pt-24 h-full w-full text-sm md:text-base">
      <client-only>
        <prism-editor
          :code.sync="paste.content"
          line-numbers
          language="js"
          class="custom-scrollbar"
        />
      </client-only>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Save options modal
    |--------------------------------------------------------------------------
    -->
    <save-options-modal
      :showing="showSaveOptionsModal"
      :paste="paste"
      @close="showSaveOptionsModal = false"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      paste: {},
      showSaveOptionsModal: false
    }
  },
  computed: {
    ...mapState({
      clone: state => state.paste.clone
    })
  },
  watch: {
    clone (newVal, oldVal) {
      if (!newVal) { this.paste = {} }
    }
  },
  beforeMount () {
    if (this.$store.getters['paste/isCloning']) {
      this.paste.content = this.clone
    }
  },
  beforeDestroy () {
    this.$store.commit('paste/RESET_CLONE')
  },
  methods: {
    savePaste () {
      if (!this.paste.content) {
        return this.$toast.global.error({ message: 'Your paste cannot be empty.' })
      }

      this.showSaveOptionsModal = true
    }
  }
}
</script>
