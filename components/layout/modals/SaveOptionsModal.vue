<template>
  <modal :showing="showing">
    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
          <i class="fas fa-cog text-indigo-600" />
        </div>

        <div class="mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left w-full">
          <!--
          |--------------------------------------------------------------------------
          | Title and description
          |--------------------------------------------------------------------------
          -->
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Paste settings
          </h3>
          <div class="mt-2">
            <p class="text-sm leading-5 text-gray-500">
              Configure your paste before saving it.
            </p>
          </div>

          <!--
          |--------------------------------------------------------------------------
          | Syntax highlighting selection
          | // TODO: add search input
          |--------------------------------------------------------------------------
          -->
          <div class="mt-5 flex">
            <div class="w-full mx-4 sm:ml-0 sm:mr-2">
              <label class="block tracking-wide text-gray-700 text-left text-xs font-bold mb-1" for="syntax">
                Syntax highlighting
              </label>
              <div class="relative">
                <select
                  id="syntax"
                  v-model="options.language"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option
                    v-for="(value, index) in syntaxes"
                    :key="index"
                    :value="value"
                  >
                    {{ value }}
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>

          <!--
          |--------------------------------------------------------------------------
          | Visibility selection
          |--------------------------------------------------------------------------
          -->
          <div class="mt-5 flex">
            <div class="w-full mx-4 sm:ml-0 sm:mr-2">
              <label class="block tracking-wide text-gray-700 text-left text-xs font-bold mb-1" for="visibility">
                Visibility
              </label>
              <div class="relative">
                <select
                  id="visibility"
                  v-model="options.visibility"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option
                    v-for="(option, index) in visibilities"
                    :key="index"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>

          <!--
          |--------------------------------------------------------------------------
          | Expiration selection
          |--------------------------------------------------------------------------
          -->
          <div class="my-5 flex">
            <div class="w-full mx-4 sm:ml-0 sm:mr-2">
              <label class="block tracking-wide text-gray-700 text-left text-xs font-bold mb-1" for="expiration">
                Expiration
              </label>
              <div class="relative">
                <select
                  id="expiration"
                  v-model="options.ttl"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option
                    v-for="(option, index) in expirations"
                    :key="index"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span class="flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5 mr-2"
            @click="$emit('close')"
          >
            Cancel
          </button>
          <button
            class="inline-flex justify-center w-full rounded-md shadow px-4 py-2 bg-indigo-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            :class="{ 'cursor-not-allowed': isSaving }"
            @click="savePaste()"
          >
            Save
          </button>
        </span>
      </div>
    </div>
  </modal>
</template>

<script>
import prismLanguages from '@/assets/prism-languages.json'

export default {
  props: {
    showing: {
      type: Boolean,
      default: false
    },
    hash: {
      type: String,
      default: ''
    },
    paste: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      isSaving: false,
      options: {
        language: 'none',
        visibility: 'unlisted',
        ttl: 24 * 3600
      },
      syntaxes: prismLanguages.languages,
      visibilities: [
        { label: 'Private', value: 'private' },
        { label: 'Unlisted (default)', value: 'unlisted' },
        { label: 'Public', value: 'public' }
      ],
      expirations: [
        { label: '1 hour', value: 1 * 3600 },
        { label: '12 hours', value: 12 * 3600 },
        { label: '24 hours (default)', value: 24 * 3600 },
        { label: '2 days', value: 2 * 24 * 3600 },
        { label: '7 days', value: 7 * 24 * 3600 },
        { label: 'Never', value: 'never' }
      ]
    }
  },
  methods: {
    savePaste () {
      this.isSaving = true

      // Post temporary paste
      if (this.options.ttl !== 'never') {
        return this.$axios.post('/pastes/temp', { ...this.paste, ...this.options })
          .then((res) => {
            this.$toast.global.success({ message: 'Paste successfully created!' })
            this.$router.push(`/${res.data.hash}`)
          })
          .catch((err) => {
            this.isSaving = false
            console.log(err)
            this.$toast.global.error({ message: err.response.data.errors[0].detail })
          })
      }

      // Post permanent paste
      return this.$axios.post('/pastes', { ...this.paste, ...this.options })
        .then((res) => {
          this.$toast.global.success({ message: 'Paste successfully created!' })
          this.$router.push(`/${res.data.hash}`)
        })
        .catch((err) => {
          this.isSaving = false
          this.$toast.global.error({ message: err.response.data.errors[0].detail })
        })
    }
  }
}
</script>
