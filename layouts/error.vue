<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <h1 class="text-gray-200 text-5xl font-bold">
      It looks like an error occured!
    </h1>

    <nuxt-link to="/" class="pt-5 text-gray-500 text-xl duration-300 hover:text-gray-600">
      — Back to home —
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    if (this.error && this.error.message) {
      this.$toast.global.error({ message: this.error.message })
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'bg-gray-900 antialiased'
      }
    }
  }
}
</script>
