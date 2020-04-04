<template>
  <transition name="slide-fade">
    <div v-if="open" class="flex-none right-0 bg-gray-900 hidden sm:block sm:w-84 md:w-108 xl:w-132 shadow">
      <div />
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      open: state => state.layout.openRightSidebar
    })
  }
}
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .25s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  width: 0
}
</style>
