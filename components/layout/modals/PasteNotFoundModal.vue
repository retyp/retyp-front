<template>
  <modal :showing="showing">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <i class="fas fa-exclamation-triangle text-red-600" />
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Paste {{ hash }} not found.
          </h3>
          <div class="mt-2">
            <p class="text-sm leading-5 text-gray-500">
              We couldn't find any paste matching your query.<br>
              It has either expired or been removed by its creator.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <span class="flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
        <button
          class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          @click="$router.push('/')"
        >
          Take me to the home page
        </button>
      </span>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    showing: {
      type: Boolean,
      default: false
    },
    hash: {
      type: String,
      default: ''
    }
  }
}
</script>
