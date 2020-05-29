<template>
  <transition name="slide-fade">
    <div v-if="open" class="flex-none absolute top-0 right-0 w-screen h-screen bg-gray-900 shadow md:static md:right-0 md:w-108 xl:w-132">
      <div class="flex flex-col min-h-full">
        <!-- main content -->
        <div class="flex-grow" />

        <!-- footer -->
        <right-sidebar-footer />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      windowWidth: null
    }
  },
  computed: {
    ...mapState({
      open: state => state.layout.openRightSidebar
    })
  },
  watch: {
    windowWidth (newVal, oldVal) {
      if (newVal < 800 && oldVal >= 800) { this.$store.dispatch('layout/toggleRightSidebar', false) }
      if (newVal >= 800 && oldVal < 800) { this.$store.dispatch('layout/toggleRightSidebar', true) }
    }
  },
  mounted () {
    if (process.browser) {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    }
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
