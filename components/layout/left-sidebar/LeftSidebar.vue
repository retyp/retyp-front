<template>
  <div class="flex-none inset-0 bg-gray-900 w-12 md:w-16 lg:w-20 shadow">
    <div class="flex flex-col">
      <div class="flex justify-center items-center h-16 md:h-20 shadow">
        <square-logo />
      </div>

      <div class="">
        <div class="text-xl md:text-2xl text-center">
          <tooltip text="Create new paste" :active="route === 'index'">
            <router-link to="/" :disabled="route === 'index'">
              <left-sidebar-item icon="fa fa-pen" :active="route === 'index'" />
            </router-link>
          </tooltip>

          <tooltip text="Duplicate this paste">
            <left-sidebar-item icon="fa fa-clone" />
          </tooltip>

          <tooltip text="Share this paste">
            <left-sidebar-item icon="fa fa-share-alt" />
          </tooltip>

          <tooltip text="Delete this paste">
            <left-sidebar-item icon="fa fa-trash-alt" />
          </tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    route () {
      return this.$route.name
    }
  }
}
</script>
