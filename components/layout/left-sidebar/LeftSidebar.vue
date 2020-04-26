<template>
  <div class="flex-none inset-0 bg-gray-900 w-12 md:w-16 lg:w-20 shadow">
    <div class="flex flex-col">
      <div class="flex justify-center items-center h-16 md:h-20 shadow">
        <square-logo />
      </div>

      <div class="">
        <div class="text-xl md:text-2xl text-center">
          <!--
          |--------------------------------------------------------------------------
          | Create new paste
          |--------------------------------------------------------------------------
          -->
          <tooltip text="Create new paste" :active="route === 'index'">
            <left-sidebar-item
              icon="fa fa-pen"
              :active="route === 'index' && !$store.getters['paste/isCloning']"
              @click.native="naviguateIndex()"
            />
          </tooltip>

          <!--
          |--------------------------------------------------------------------------
          | View paste
          |--------------------------------------------------------------------------
          -->
          <tooltip text="View paste" :active="route === 'hash'">
            <left-sidebar-item
              :icon="route === 'hash' ? 'fas fa-eye' : 'fas fa-eye-slash'"
              :active="route === 'hash'"
              :class="{ 'cursor-not-allowed': route !== 'hash' }"
            />
          </tooltip>

          <!--
          |--------------------------------------------------------------------------
          | Clone this paste
          |--------------------------------------------------------------------------
          -->
          <tooltip text="Clone this paste">
            <left-sidebar-item
              icon="fa fa-clone"
              :active="route === 'index' && $store.getters['paste/isCloning']"
              :class="{ 'cursor-not-allowed': route !== 'hash' }"
              @click.native="clonePaste()"
            />
          </tooltip>

          <!--
          |--------------------------------------------------------------------------
          | Share this paste
          |--------------------------------------------------------------------------
          -->
          <tooltip text="Share this paste">
            <left-sidebar-item
              icon="fa fa-share-alt"
              :class="{ 'cursor-not-allowed': route !== 'hash' }"
            />
          </tooltip>

          <!--
          |--------------------------------------------------------------------------
          | Delete this paste
          |--------------------------------------------------------------------------
          -->
          <tooltip text="Delete this paste">
            <left-sidebar-item
              icon="fa fa-trash-alt"
              :class="{ 'cursor-not-allowed': route !== 'hash' }"
            />
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
  },
  methods: {
    naviguateIndex () {
      if (this.$store.getters['paste/isCloning']) {
        this.$store.commit('paste/RESET_CLONE')
      } else {
        this.$router.push('/')
      }
    },
    clonePaste () {
      if (this.route !== 'hash') { return }

      this.$store.commit('paste/SET_CLONE')
      this.$toast.global.success({ message: 'Successfully cloned the paste.' })
      this.$router.push('/')
    }
  }
}
</script>
