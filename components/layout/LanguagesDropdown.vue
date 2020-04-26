<template>
  <dropdown :text="selected || 'select language'">
    <div class="px-4 py-3 text-sm leading-5 text-gray-500 rounded-t-md bg-white shadow-xs">
      <i class="fas fa-search" />
      <input
        v-model="searchLanguage"
        class="ml-2 w-10/12 focus:outline-none"
        placeholder="Search"
      >
    </div>
    <div class="min-h-full h-48 overflow-x-auto scrolling-touch rounded-b-md bg-white shadow-xs">
      <div class="py-1">
        <p
          v-for="(language, index) in searchResults"
          :key="index"
          class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-medium focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          :class="{ 'bg-indigo-100 text-indigo-500 font-medium hover:text-indigo-600 hover:bg-indigo-100': selected === language }"
          @click="selected = language, $emit('update:language', language)"
        >
          {{ language }}
        </p>
      </div>
    </div>
  </dropdown>
</template>

<script>
import json from '@/assets/prism-languages.json'

export default {
  data () {
    return {
      open: false,
      selected: null,
      prismLanguages: json.languages,
      searchLanguage: null
    }
  },
  computed: {
    searchResults () {
      const search = this.searchLanguage

      return search
        ? this.prismLanguages.filter(v => v.includes(search.toLowerCase()))
        : this.prismLanguages
    }
  }
}
</script>

<style>

</style>
