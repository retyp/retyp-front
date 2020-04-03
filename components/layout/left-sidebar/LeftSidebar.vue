<template>
  <div class="flex-none inset-0 bg-gray-900 w-12 md:w-16 lg:w-20 shadow">
    <div class="flex flex-col">
      <div class="flex justify-center items-center h-16 md:h-20 shadow">
        <square-logo />
      </div>

      <div class="">
        <div class="text-xl md:text-2xl text-center">
          <left-sidebar-item icon="fa fa-pen" active />

          <left-sidebar-item icon="fa fa-clone" />

          <left-sidebar-item icon="fa fa-share-alt" />

          <left-sidebar-item icon="fa fa-trash-alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
