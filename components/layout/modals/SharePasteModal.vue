<template>
  <modal :showing="showing">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
          <i class="fas fa-share-alt text-indigo-600" />
        </div>

        <div class="mt-3 text-center sm:mt-0 sm:ml-10 sm:text-left">
          <!-- title/description -->
          <h3 class="mb-1 text-lg leading-6 font-medium text-gray-900">
            Share paste
          </h3>
          <div class="mb-5">
            <p class="text-sm leading-5 text-gray-500">
              You can share this paste by sending this link to someone.
            </p>
          </div>

          <!-- tweet button -->
          <div class="mt-3 flex">
            <a
              class="w-full px-2 py-2 text-center text-gray-100 rounded-lg bg-blue-400 hover:bg-blue-300 focus:outline-none transition ease-in-out duration-150"
              :href="`https://twitter.com/intent/tweet?text=${encodeURI(pasteLink)}`"
              rel="noopener"
              target="_blank"
            >
              <i class="fab fa-twitter pr-2" />
              Tweet
            </a>
          </div>

          <!-- send mail -->
          <div class="mt-3 flex">
            <a
              class="w-full px-2 py-2 text-center text-gray-100 rounded-lg bg-blue-700 hover:bg-blue-600 focus:outline-none transition ease-in-out duration-150"
              :href="`mailto:?body=${encodeURI(pasteLink)}`"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fas fa-envelope pr-2" />
              Send through mail
            </a>
          </div>

          <!-- copy link -->
          <div class="mt-3 flex flex-row w-100">
            <p class="w-full px-2 py-2 bg-gray-200 text-gray-600 rounded-l-lg">
              {{ pasteLink }}
            </p>
            <button
              class="-ml-2 px-4 py-2 bg-indigo-600 text-gray-100 rounded-lg focus:outline-none hover:bg-indigo-500 transition ease-in-out duration-150"
              @click="$emit('copy-link')"
            >
              <i class="fas fa-copy" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      <span class="flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
        <button
          class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          @click="$store.dispatch('layout/toggleShowSharePasteModal', false)"
        >
          Close
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
    pasteLink: {
      type: String,
      default: ''
    }
  }
}
</script>
