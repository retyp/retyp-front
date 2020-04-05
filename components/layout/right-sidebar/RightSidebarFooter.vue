<template>
  <div class="flex justify-between items-center h-10 px-6 text-gray-700 text-xs md:text-base">
    <div>
      <p class="align-text-bottom">
        © {{ new Date().getFullYear() }}
        <a
          class="transition duration-300 hover:text-gray-500 font-extrabold"
          href="https://arthurdufour.com"
          target="_blank"
        >Arthur Dufour</a>
      </p>
    </div>
    <div>
      <a
        class="transition duration-300 hover:text-gray-500"
        href="https://github.com/retyp"
        target="_blank"
      >
        <span>v{{ version }}</span>
      </a>

      <a
        class="transition duration-300 hover:text-gray-500 pl-3"
        href="https://github.com/retyp"
        target="_blank"
      >
        <i class="fab fa-github text-lg md:text-xl" />
      </a>
    </div>
  </div>
</template>

<script>
import packageJson from '../../../package.json'

export default {
  data () {
    return {
      version: packageJson.version
    }
  }
}
</script>
