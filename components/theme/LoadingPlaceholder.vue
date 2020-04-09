<template>
  <div class="placeholder rounded transition duration-150 ease-in" />
</template>

<script>
export default {

}
</script>

<style scoped>
  .placeholder {
    animation-name: pulse;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0% { background-color: rgb(37, 46, 61) }
    50% { background-color: rgb(41, 50, 66) }
    100% { background-color: rgb(37, 46, 61) }
  }
</style>
