<template>
  <div class="tooltip">
    <slot />

    <div
      class="tooltip-text bg-indigo-500 text-white text-xs rounded py-2 px-2 shadow-md"
      :class="classes"
    >
      {{ text }}
      <svg
        class="absolute h-4 -ml-6 -mt-4 transform rotate-90 text-indigo-500"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
        xml:space="preserve"
      >
        <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "I'm a tooltip"
    },
    classes: {
      type: String,
      default: ' -mt-10 ml-24'
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.tooltip .tooltip-text {
  visibility: hidden;
  text-align: center;
  position: absolute;
  z-index: 100;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
}
</style>
