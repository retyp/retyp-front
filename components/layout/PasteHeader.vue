<template>
  <div class="flex items-center justify-between h-16 md:h-20 px-3 md:px-6 shadow">
    <!--
    |--------------------------------------------------------------------------
    | Loading placeholder
    |--------------------------------------------------------------------------
    -->
    <loading-placeholder
      v-if="loading"
      class="h-6 md:h-8 md:w-56 w-32 sm:w-56 lg:w-96 md:px-6"
    />

    <!--
    |--------------------------------------------------------------------------
    | Save (paste) button
    |--------------------------------------------------------------------------
    -->
    <div v-if="showSave && !loading" class="md:mr-6">
      <button
        class="bg-indigo-500 hover:bg-indigo-600 duration-200 transform hover:scale-105 rounded-md shadow text-gray-100 font-bold text-xl md:text-2xl
        fixed bottom-0 right-0 md:bottom-auto md:right-auto md:static px-3 py-1 mb-5 mr-5 md:mb-0 md:mr-0 focus:outline-none"
        @click="$emit('save-paste')"
      >
        <i class="fas fa-save" />
      </button>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Viewing indicator
    |--------------------------------------------------------------------------
    -->
    <div v-if="showViewing && !loading" class="md:mr-6">
      <button class="hidden md:block px-3 py-1 bg-gray-900 text-gray-700 font-bold text-xl md:text-2xl rounded-md shadow focus:outline-none cursor-not-allowed">
        <i class="fas fa-lock" />
      </button>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Paste name
    |--------------------------------------------------------------------------
    -->
    <div v-if="showName && !loading" class="w-full mr-3 md:mr-6 overflow-x-auto">
      <p class="bg-gray-800 text-gray-100 font-bold text-xl md:text-3xl outline-none whitespace-no-wrap overflow-x-auto">
        {{ paste.name }}
      </p>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Paste name input
    |--------------------------------------------------------------------------
    -->
    <div v-if="showNameInput && !loading" class="w-full mr-3 md:mr-6">
      <input
        v-model="paste.name"
        type="text"
        placeholder="Untitled (click to rename)"
        class="bg-gray-800 text-gray-100 font-bold text-xl md:text-3xl outline-none w-full"
      >
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Toggle right sidebar
    |--------------------------------------------------------------------------
    -->
    <div
      v-if="showToggleRightSidebar"
      class="z-50 py-2 md:py-3 px-2 md:px-3 -mr-3 md:-mr-6 bg-gray-700 md:bg-gray-900 rounded-l-lg"
    >
      <div
        class="px-2 md:px-3 pt-1 md:pt-2 pb-px md:pb-1 transition duration-150 bg-gray-900 md:bg-gray-700 hover:bg-gray-800 rounded-md shadow focus:outline-none focus:bg-gray-800 cursor-pointer"
        @click="$store.dispatch('layout/toggleRightSidebar')"
      >
        <i class="fas fa-bars text-md md:text-2xl text-gray-500" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    // Options
    showSave: {
      type: Boolean,
      default: false
    },
    showViewing: {
      type: Boolean,
      default: false
    },
    showName: {
      type: Boolean,
      default: false
    },
    showNameInput: {
      type: Boolean,
      default: false
    },
    showToggleRightSidebar: {
      type: Boolean,
      default: false
    },
    // Data
    paste: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 3px !important;
  height: 3px !important;
}
::-webkit-scrollbar-track {
  margin: 0px;
}
</style>
