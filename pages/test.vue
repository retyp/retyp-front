<template>
  <div class="bg-gray-800 flex flex-col w-screen">
    <!--
    |--------------------------------------------------------------------------
    | Paste header
    |--------------------------------------------------------------------------
    |
    | Contains :
    | - Title
    |
    -->
    <div class="bg-gray-800">
      <div class="px-6 md:px-10 py-5 md:py-8">
        <!-- title -->
        <input
          class="bg-gray-800 text-gray-100 text-2xl md:text-3xl font-bold leading-tight outline-none"
          placeholder="Untitled (click to rename)"
        >
      </div>
    </div>

    <!--
    |--------------------------------------------------------------------------
    | Paste body
    |--------------------------------------------------------------------------
    |
    | Paste content, with code formatting etc...
    |
    -->
    <div class="h-full pl-6 md:pl-10 pr-2 md:pr-4 pb-4 md:pb-8 bg-gray-800">
      <!-- <textarea
        class="text-gray-600 bg-gray-800 h-full w-full resize-none outline-none"
        spellcheck="false"
      /> -->
      <highlight-code
        auto
        class="text-gray-600 bg-gray-800 h-full w-full resize-none outline-none"
      >
        let str = 'Hello, World!';
        console.log(str);

        function test () {
        console.log(str);
        }
      </highlight-code>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.hljs {
  background: #2d3748 !important;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  border-radius: 25px;
  background: #4A5568;
}
/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 25px;
  background: #1A202C;
}
</style>
