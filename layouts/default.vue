<template>
  <div class="flex overflow-hidden">
    <!--
      |--------------------------------------------------------------------------
      | Left sidebar
      |--------------------------------------------------------------------------
      | The left sidebar is used as the "current paste menu".
      -->
    <left-sidebar />

    <!--
      |--------------------------------------------------------------------------
      | Nuxt
      |--------------------------------------------------------------------------
      | Main page goes here.
      -->
    <nuxt class="overflow-hidden" />

    <!--
      |--------------------------------------------------------------------------
      | Right sidebar
      |--------------------------------------------------------------------------
      | The right sidebar is for every other things :
      | - Show paste informations
      | - Authentication
      | - Show profile informations
      -->
    <right-sidebar />

    <!--
      |--------------------------------------------------------------------------
      | Preview banner
      |--------------------------------------------------------------------------
      | Show to the user that the website is still under development
      | (Can be closed (hide))
      -->
    <preview-banner />
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'bg-gray-800 antialiased'
      }
    }
  }
}
</script>
