<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <h1
      v-if="error.statusCode === 404"
      class="text-gray-200 text-5xl font-bold"
    >
      Page not found
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
  head () {
    return {
      bodyAttrs: {
        class: 'bg-gray-900 antialiased'
      }
    }
  }
}
</script>
