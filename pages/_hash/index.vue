<template>
  <div class="w-full h-screen bg-gray-800">
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

    <div class="px-2 md:px-6 -mt-20 -mr-145 pt-24 pb-6 md:pb-16 h-full w-full">
      <!--
      |--------------------------------------------------------------------------
      | Paste options
      |--------------------------------------------------------------------------
      -->
      <div class="flex flex-wrap justify-between items-center px-2 md:px-4 md:pb-2">
        <div class="flex flex-row text-gray-600 text-xs md:text-sm leading-5 font-medium mb-1">
          <!-- paste language -->
          <div class="mr-3">
            <loading-placeholder v-show="loading" class="h-5 w-32" />
            <div v-show="!loading">
              <i class="fas fa-language mr-1" />
              <span>language: {{ paste.language || 'unknown' }}</span>
            </div>
          </div>

          <!-- paste size -->
          <div class="">
            <loading-placeholder v-show="loading" class="h-5 w-20" />
            <div v-show="!loading">
              <i class="fas fa-weight mr-1" />
              <span>size: {{ paste.size ? formatBytes(paste.size) : '??' }}</span>
            </div>
          </div>
        </div>

        <div class="text-gray-100 text-xs md:text-sm leading-5 font-medium">
          <!-- copy (clipboard) -->
          <button
            class="mr-2 px-2 md:px-3 py-px md:py-2 mb-1 bg-gray-600 hover:bg-gray-700 rounded-md shadow-sm transform duration-150 ease-in focus:outline-none"
            @click="copyToClipboard()"
          >
            <loading-placeholder v-show="loading" class="h-5 w-16" light />
            <div v-show="!loading">
              <i class="fas fa-copy mr-1" />
              <span>copy</span>
            </div>
          </button>

          <!-- view raw -->
          <button class="mr-2 px-2 md:px-3 py-px md:py-2 mb-1 bg-gray-600 hover:bg-gray-700 rounded-md shadow-sm transform duration-150 ease-in focus:outline-none">
            <loading-placeholder v-show="loading" class="h-5 w-16" light />
            <div v-show="!loading">
              <i class="fas fa-file mr-1" />
              <a :href="`/${$route.params.hash}/raw`">view raw</a>
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
          :language="language"
          class="custom-scrollbar"
        />
      </client-only>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Error modal
    |--------------------------------------------------------------------------
    -->
    <modal :showing="showErrorModal">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <i class="fas fa-exclamation-triangle text-red-600" />
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Paste {{ $route.params.hash }} not found.
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">
                We couldn't find any paste matching your query.<br>
                It has either expired or been removed by its creator.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            @click="$router.push('/')"
          >
            Take me to the home page
          </button>
        </span>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      language: 'html',
      loading: true,
      showErrorModal: false
    }
  },
  computed: {
    ...mapState({
      paste: state => state.paste.paste
    })
  },
  mounted () {
    this.$axios.get(`pastes/${this.$route.params.hash}`)
      .then((res) => {
        this.$store.commit('paste/SET_PASTE', res.data)
      })
      .catch(() => {
        this.showErrorModal = true
      })
      .finally(() => {
        this.loading = false
      })
  },
  beforeDestroy () {
    this.$store.commit('paste/RESET_PASTE')
  },
  methods: {
    copyToClipboard () {
      if (!this.paste.content) { return }

      const toast = this.$toast.global
      navigator.clipboard.writeText(this.paste.content).then(function () {
        toast.success({ message: 'Successfully copied to clipboard! ' })
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
    }
  }
}
</script>
