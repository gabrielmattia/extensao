<script setup>
  import { useRouter } from 'vue-router'

  defineProps({
    label: {
      type: String,
      default: () => 'Voltar',
    },
  })

  const router = useRouter()

  const goBack = () => {
    router.go(-1)
  }
</script>

<template>
  <button
    type="submit"
    class="btn-go-back"
    :aria-label="label"
    @click="goBack"
  ></button>
</template>

<style scoped>
  .btn-go-back {
    @apply rounded-xl
    border-[1px]
    border-black
    bg-skin-btn-secondary
    bg-back-arrow
    bg-center bg-no-repeat p-5 mb-4
    md:hover:bg-skin-btn-secondary-hover
    focus:border-btn-secondary-focus
  }
</style>
