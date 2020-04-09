<template>
  <div
    :class="active
      ? 'text-indigo-500 hover:text-indigo-300 border-indigo-500 border-r-2 md:border-r-4'
      : 'text-gray-800 hover:text-gray-600'"
    class="mt-5 sm:mt-8 px-4 duration-300 cursor-pointer"
  >
    <i :class="[icon, { '-mr-1': active }]" class="" />
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
