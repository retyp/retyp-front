<template>
  <div
    :class="active ? 'text-indigo-500' : 'text-gray-800'"
    class="pt-5 sm:pt-8"
  >
    <i :class="icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fas fa-question'
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
