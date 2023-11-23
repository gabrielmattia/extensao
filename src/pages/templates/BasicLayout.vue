<script setup>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main role="main">
    <div class="layout-wrapper">
      <slot name="main-content"></slot>
    </div>
  </main>
  <FooterComponent />
</template>

<style scoped>
  .layout-wrapper {
    @apply container mx-auto p-8 min-h-[80vh];
  }
</style>
