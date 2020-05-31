<template>
  <transition
    leave-active-class="transition ease-in duration-75 transform"
    leave-class="opacity-100"
    leave-to-class="opacity-0 translate-y-8"
  >
    <div v-if="show" class="hidden md:block fixed bottom-0 inset-x-0 px-2 pb-10 sm:px-0">
      <div class="max-w-6xl mx-auto px-4 lg:px-6">
        <div class="py-3 pl-6 pr-3 rounded-lg bg-indigo-600 shadow-lg">
          <div class="flex items-center justify-between flex-wrap">
            <!-- left text -->
            <div class="w-full flex-1 flex items-center sm:w-0">
              <div class="px-3 py-2 mr-3 bg-indigo-800 rounded-lg shadow-lg">
                <i class="fas fa-bullhorn text-gray-200 " />
              </div>

              <p class="text-gray-200 truncate">
                <strong class="hidden md:inline font-medium text-white">
                  This is a preview version!
                </strong>
                <span class="hidden md:inline">
                  All features are not available and bugs might exist.
                </span>
              </p>
            </div>

            <!-- github button -->
            <div class="flex-shrink-0">
              <div class="rounded-md shadow-sm">
                <a href="https://github.com/retyp" target="_blank" rel="noopen" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-lg text-indigo-600 bg-white hover:text-indigo-400 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                  <i class="fab fa-github pr-2" />
                  Github
                </a>
              </div>
            </div>

            <!-- close button -->
            <div class="pl-4 pr-2 cursor-pointer" @click="show = false">
              <p class="text-gray-200">
                <i class="fas fa-times" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>
