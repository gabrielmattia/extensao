<script setup>
  defineProps({
    textBtn: {
      type: String,
      default: () => 'Button',
    },
    btnClasses: {
      type: String,
      default: () => 'bg-green-600 hover:bg-gray-700',
    },
  })
</script>

<template>
  <button :class="`${btnClasses}`">{{ textBtn }}</button>
</template>

<style scoped>
  button {
    @apply max-w-fit inline-block cursor-pointer rounded-md px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out;
  }
</style>
