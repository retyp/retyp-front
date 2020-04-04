<template>
  <div class="w-full h-screen bg-gray-800">
    <!--
    |--------------------------------------------------------------------------
    | Paste header
    |--------------------------------------------------------------------------
    |
    | Contains :
    | - Title
    | - Save button
    |
    -->
    <div class="flex items-center justify-between h-16 md:h-20 px-3 md:px-6 shadow">
      <!-- Save paste -->
      <div class="mr-3 md:mr-6">
        <button
          @click="savePaste"
          class="bg-indigo-500 w-8 md:w-24 py-1 rounded shadow text-gray-100 text-sm md:text-lg font-bold"
        >
          <i class="fas fa-save" />
          <span class="hidden md:inline pl-2">Save</span>
        </button>
      </div>

      <!-- Title input -->
      <div class="w-full mr-3 md:mr-6">
        <input
          v-model="paste.title"
          type="text"
          placeholder="Untitled (click to rename)"
          class="bg-gray-800 text-gray-100 font-bold text-xl md:text-3xl outline-none w-full"
        >
      </div>

      <!-- Toggle right sidebar -->
      <div
        @click="$store.dispatch('layout/toggleRightSidebar')"
        class="px-3 pt-2 pb-1 transition duration-150 bg-gray-700 hover:bg-gray-900 rounded-md shadow focus:outline-none"
      >
        <i class="fas fa-bars text-2xl text-gray-500" />
      </div>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Paste content
    |--------------------------------------------------------------------------
    |
    | Paste content, with code formatting, highlighted syntax etc.
    |
    -->
    <div class="px-2 pb-2 md:px-6 -mt-20 -mr-145 pt-24 h-full w-full">
      <highlight-code
        :code="paste.content"
        auto
        class="text-gray-600 bg-gray-800 resize-none outline-none h-full w-full overflow-auto text-sm md:text-base"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paste: {
        title: '',
        content: `public static void bubbleSort(int[] a) {
    boolean sorted = false;
    int temp;
    while(!sorted) {
        sorted = true;
        for (int i = 0; i < array.length - 1; i++) {
            if (a[i] > a[i+1]) {
                temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                sorted = false;
            }
        }
    }
}
public static void bubbleSort(int[] a) {
    boolean sorted = false;
    int temp;
    while(!sorted) {
        sorted = true;
        for (int i = 0; i < array.length - 1; i++) {
            if (a[i] > a[i+1]) {
                temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                sorted = false;
            }
        }
    }
}
public static void bubbleSort(int[] a) {
    boolean sorted = false;
    int temp;
    while(!sorted) {
        sorted = true;
        for (int i = 0; i < array.length - 1; i++) {
            if (a[i] > a[i+1]) {
                temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                sorted = false;
            }
        }
    }
}
public static void bubbleSort(int[] a) {
    boolean sorted = false;
    int temp;
    while(!sorted) {
        sorted = true;
        for (int i = 0; i < array.length - 1; i++) {
            if (a[i] > a[i+1]) {
                temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                sorted = false;
            }
        }
    }
}`
      }
    }
  },
  methods: {
    savePaste () {
      alert('Saving paste')
    }
  }
}
</script>

<style>
.hljs {
  background: #2d3748 !important;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  margin-right: 8px;
  margin-bottom: 20px;
  border-radius: 25px;
  background: #4A5568;
}
::-webkit-scrollbar-thumb {
  border-radius: 25px;
  background: #1A202C;
}
</style>
