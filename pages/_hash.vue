<template>
  <div class="w-full h-screen bg-gray-800">
    <!--
    |--------------------------------------------------------------------------
    | Paste header
    |--------------------------------------------------------------------------
    -->
    <paste-header
      :loading="loading"
      show-name
      show-toggle-right-sidebar
      :paste="paste"
    />

    <!--
    |--------------------------------------------------------------------------
    | Paste content
    |--------------------------------------------------------------------------
    -->
    <div class="px-2 pb-2 md:px-6 -mt-20 -mr-145 pt-24 h-full w-full">
      <div v-if="loading">
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

      <highlight-code
        v-if="!loading"
        :code="paste.content"
        auto
        class="text-gray-600 bg-gray-800 resize-none outline-none h-full w-full overflow-auto text-sm md:text-base"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      paste: {}
    }
  },
  mounted () {
    this.$axios.get(`pastes/${this.$route.params.hash}`)
      .then((res) => {
        this.paste = res.data
      })
      .catch(() => {
        this.$toast.global.error({ message: 'Paste not found.' })
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
