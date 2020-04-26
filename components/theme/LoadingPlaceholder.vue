<template>
  <div
    class="rounded transition duration-150 ease-in"
    :class="light ? 'placeholder-light' : 'placeholder-dark'"
  />
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .placeholder-dark {
    animation-name: pulse-dark;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
  }

  @keyframes pulse-dark {
    0% { background-color: rgb(37, 46, 61) }
    50% { background-color: rgb(41, 50, 66) }
    100% { background-color: rgb(37, 46, 61) }
  }

  .placeholder-light {
    animation-name: pulse-light;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
  }

  @keyframes pulse-light {
    0% { background-color: #6d7c94 }
    50% { background-color: #637288 }
    100% { background-color: #6c7a91 }
  }
</style>
