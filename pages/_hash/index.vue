<template>
  <div
    v-shortkey.once="['n']"
    class="w-full h-screen bg-gray-800"
    @shortkey="$router.push('/')"
  >
    <!--
    |--------------------------------------------------------------------------
    | Paste header
    |--------------------------------------------------------------------------
    -->
    <paste-header
      :loading="loading"
      show-viewing
      show-name
      show-toggle-right-sidebar
      :paste="paste"
    />

    <div class="px-1 md:px-6 -mt-20 -mr-145 pt-24 pb-6 md:pb-16 h-full w-full text-sm md:text-base">
      <!--
      |--------------------------------------------------------------------------
      | Paste options
      |--------------------------------------------------------------------------
      -->
      <div class="flex flex-wrap justify-between items-center px-2 md:px-4 md:pb-2">
        <div class="flex flex-wrap text-gray-600 text-xs md:text-sm leading-5 font-medium mb-2">
          <!-- paste language -->
          <div class="mr-3">
            <loading-placeholder v-show="loading" class="h-5 w-32" />
            <div v-show="!loading">
              <i class="fas fa-language mr-1" />
              <span>language: {{ paste.language || 'unknown' }}</span>
            </div>
          </div>

          <!-- paste size -->
          <div :class="{ 'mr-3': paste.ttl }">
            <loading-placeholder v-show="loading" class="h-5 w-20" />
            <div v-show="!loading">
              <i class="fas fa-weight mr-1" />
              <span>size: {{ paste.size ? formatBytes(paste.size) : '??' }}</span>
            </div>
          </div>

          <!-- paste ttl -->
          <div v-if="paste.ttl">
            <loading-placeholder v-show="loading" class="h-5 w-20" />
            <div v-show="!loading">
              <i class="fas fa-hourglass-half mr-1" />
              <span>expires in: {{ $moment.duration(paste.ttl, 'seconds').humanize() }}</span>
            </div>
          </div>
        </div>

        <div class="text-gray-100 text-xs md:text-sm leading-5 font-medium">
          <!-- copy link (clipboard) -->
          <button
            class="mr-2 px-2 md:px-3 py-px md:py-2 mb-1 bg-gray-600 hover:bg-gray-700 rounded-md shadow-sm transform duration-150 ease-in focus:outline-none"
            @click="copyLinkToClipboard()"
          >
            <loading-placeholder v-show="loading" class="h-5 w-16" light />
            <div v-show="!loading">
              <i class="fas fa-copy mr-1" />
              <span>copy link</span>
            </div>
          </button>

          <!-- copy content (clipboard) -->
          <button
            class="mr-2 px-2 md:px-3 py-px md:py-2 mb-1 bg-gray-600 hover:bg-gray-700 rounded-md shadow-sm transform duration-150 ease-in focus:outline-none"
            @click="copyContentToClipboard()"
          >
            <loading-placeholder v-show="loading" class="h-5 w-16" light />
            <div v-show="!loading">
              <i class="fas fa-copy mr-1" />
              <span>copy content</span>
            </div>
          </button>

          <!-- view raw -->
          <button class="mr-2 px-2 md:px-3 py-px md:py-2 mb-1 bg-gray-600 hover:bg-gray-700 rounded-md shadow-sm transform duration-150 ease-in focus:outline-none">
            <loading-placeholder v-show="loading" class="h-5 w-16" light />
            <div v-show="!loading">
              <i class="fas fa-file mr-1" />
              <a :href="`${apiUrl}/pastes/${$route.params.hash}/raw`">view raw</a>
            </div>
          </button>

          <!-- download -->
          <button class="mr-2 px-2 md:px-3 py-px md:py-2 mb-1 bg-gray-600 hover:bg-gray-700 rounded-md shadow-sm transform duration-150 ease-in focus:outline-none">
            <loading-placeholder v-show="loading" class="h-5 w-16" light />
            <div v-show="!loading">
              <i class="fas fa-download mr-1" />
              <span @click="download()">download</span>
            </div>
          </button>

          <!-- print -->
          <button class="mr-2 px-2 md:px-3 py-px md:py-2 mb-1 bg-gray-600 hover:bg-gray-700 rounded-md shadow-sm transform duration-150 ease-in focus:outline-none">
            <loading-placeholder v-show="loading" class="h-5 w-16" light />
            <div v-show="!loading">
              <i class="fas fa-print mr-1" />
              <a :href="`/${$route.params.hash}/raw?print=true`" target="_blank">print</a>
            </div>
          </button>
        </div>
      </div>

      <!--
      |--------------------------------------------------------------------------
      | Paste content
      |--------------------------------------------------------------------------
      -->
      <client-only>
        <div slot="placeholder">
          <loading-placeholder class="m-1 mb-8 h-4 w-40 md:w-84" />

          <loading-placeholder class="m-1 mb-3 h-4 w-32 md:w-64  lg:w-96" />
          <loading-placeholder class="m-1 mb-3 h-4 w-56 md:w-108 lg:w-145" />
          <loading-placeholder class="m-1 mb-3 h-4 w-48 md:w-96  lg:w-132" />
          <loading-placeholder class="m-1 mb-3 h-4 w-56 md:w-108 lg:w-145" />
          <loading-placeholder class="m-1 mb-3 h-4 w-40 md:w-84  lg:w-120" />
          <loading-placeholder class="m-1 mb-3 h-4 w-32 md:w-64  lg:w-96" />
          <loading-placeholder class="m-1 mb-3 h-4 w-48 md:w-96  lg:w-132" />
          <loading-placeholder class="m-1 mb-3 h-4 w-48 md:w-96  lg:w-132" />
          <loading-placeholder class="m-1 mb-3 h-4 w-40 md:w-84  lg:w-120" />
          <loading-placeholder class="m-1 mb-3 h-4 w-32 md:w-64  lg:w-96" />
          <loading-placeholder class="m-1 mb-3 h-4 w-40 md:w-84  lg:w-120" />
          <loading-placeholder class="m-1 mb-3 h-4 w-20 md:w-40  lg:w-64" />
          <loading-placeholder class="m-1 mb-3 h-4 w-12 md:w-32  lg:w-40" />
        </div>

        <prism-editor
          v-show="!loading"
          :code="paste.content"
          readonly
          line-numbers
          :language="paste.language || 'html'"
          class="custom-scrollbar"
        />
      </client-only>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Error modal
    |--------------------------------------------------------------------------
    -->
    <paste-not-found-modal
      :showing="showErrorModal"
      :hash="$route.params.hash"
    />

    <!--
    |--------------------------------------------------------------------------
    | Share paste modal
    |--------------------------------------------------------------------------
    -->
    <share-paste-modal
      :showing="showSharePasteModal"
      :paste-link="pasteLink"
      @copy-link="copyLinkToClipboard()"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      loading: true,
      showErrorModal: false,
      apiUrl: process.env.API_URL
    }
  },
  computed: {
    ...mapState({
      paste: state => state.paste.paste,
      showSharePasteModal: state => state.layout.showSharePasteModal
    }),
    pasteLink () {
      if (!process.browser) { return }
      return window.location.href
    }
  },
  mounted () {
    this.$axios.get(`pastes/${this.$route.params.hash}`)
      .then((res) => {
        this.$store.commit('paste/SET_PASTE', res.data)
      })
      .catch(() => { this.showErrorModal = true })
      .finally(() => { this.loading = false })
  },
  beforeDestroy () {
    this.$store.commit('paste/RESET_PASTE')
  },
  methods: {
    copyLinkToClipboard () {
      if (!this.paste.content) { return }

      const toast = this.$toast.global
      navigator.clipboard.writeText(this.pasteLink).then(function () {
        toast.success({ message: 'Successfully copied paste link to clipboard! ' })
      }, function () {
        toast.error({ message: 'An error occured while copying paste link! ' })
      })
    },
    copyContentToClipboard () {
      if (!this.paste.content) { return }

      const toast = this.$toast.global
      navigator.clipboard.writeText(this.paste.content).then(function () {
        toast.success({ message: 'Successfully copied content to clipboard! ' })
      }, function () {
        toast.error({ message: 'An error occured while copying paste content! ' })
      })
    },
    formatBytes (bytes, decimals = 2) {
      if (bytes === 0) { return '0 bytes' }

      const k = 1024
      const dm = decimals < 0 ? 0 : decimals
      const sizes = ['bytes', 'kb', 'mb', 'gb']

      const i = Math.floor(Math.log(bytes) / Math.log(k))

      return parseFloat((bytes / k ** i).toFixed(dm)) + ' ' + sizes[i]
    },
    download () {
      const blob = new Blob([this.paste.content], { type: 'text' })

      const a = document.createElement('a')
      a.download = `Paste ${this.paste.hash}`
      a.href = URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text', a.download, a.href].join(':')
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(function () { URL.revokeObjectURL(a.href) }, 1500)
    }
  }
}
</script>
