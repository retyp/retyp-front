<template>
  <div class="w-full h-screen bg-gray-800">
    <!--
    |--------------------------------------------------------------------------
    | Paste header
    |--------------------------------------------------------------------------
    -->
    <paste-header
      show-save
      show-name-input
      show-toggle-right-sidebar
      :paste="paste"
    />

    <!--
    |--------------------------------------------------------------------------
    | Paste content
    |--------------------------------------------------------------------------
    -->
    <div class="px-2 pb-2 md:px-6 -mt-20 -mr-145 pt-24 h-full w-full">
      <textarea
        v-model="paste.content"
        placeholder="Write or paste your code here..."
        class="text-gray-600 bg-gray-800 resize-none outline-none h-full w-full overflow-auto text-sm md:text-base"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paste: {}
    }
  }
}
</script>
