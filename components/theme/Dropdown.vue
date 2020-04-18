<template>
  <div v-click-outside="closeDropDown" class="relative inline-block text-left">
    <!--
    |--------------------------------------------------------------------------
    | Button
    |--------------------------------------------------------------------------
    -->
    <div @click="toggleDropDown()">
      <span class="rounded-md shadow-sm">
        <button class="text-gray-100 text-xs md:text-sm leading-5 font-medium mr-2 px-2 md:px-3 py-px md:py-2 mb-1 bg-gray-600 hover:bg-gray-700 rounded-md shadow-sm transform duration-150 ease-in focus:outline-none">
          <!-- <button type="button" class="inline-flex justify-center w-full rounded-md px-2 md:px-3 py-1 md:py-2 mt-1 bg-gray-600 text-xs md:text-sm leading-5 font-medium text-gray-100 hover:bg-gray-700 focus:outline-none focus:outline-none active:bg-gray-50 active:text-gray-700 transition ease-in duration-150"> -->
          {{ text }}
          <i class="fas fa-chevron-down pt-1 -mr-1 ml-1 md:ml-2 h-5 w-5" />
        </button>
      </span>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Content
    |--------------------------------------------------------------------------
    -->
    <div v-show="isOpen" class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDropDown () {
      this.isOpen = !this.isOpen
      console.log('toggle', this.isOpen, !this.isOpen)
      this.$emit('change', this.isOpen)
    },
    closeDropDown () {
      this.isOpen = false
      this.$emit('change', false)
    }
  }
}
</script>

<style>

</style>
