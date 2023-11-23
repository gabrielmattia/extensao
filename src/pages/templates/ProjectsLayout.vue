<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main role="main" class="py-8">
    <div class="flex flex-col items-center md:flex-row md:items-start">
      <div class="w-[75%] mx-auto md:px-4 md:mx-0 order-last md:order-first">
        <slot name="title"></slot>
        <div class="grid-container">
          <slot name="main-content"></slot>
        </div>
        <div class="grid place-items-center pt-6">
          <slot name="pagination"></slot>
        </div>
      </div>

      <div class="aside-container">
        <slot name="aside-content"></slot>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>

<style scoped>

.grid-container {
  @apply w-full grid grid-cols-1 md:grid-cols-custom-2 place-content-center justify-items-center gap-4;
}

.aside-container {
  @apply md:w-[25%] md:pe-4 order-first lg:order-last mx-auto mb-8 lg:mb-0;
}

@media (min-width: 1025px) and (max-width: 1250px) {
  .grid-container {
    @apply grid-cols-custom-2;
  }
}

@media (min-width: 1251px) and (max-width: 1660px) {
  .grid-container {
    @apply grid-cols-custom-3;
  }
}

@media (min-width: 1661px) and (max-width: 2230px) {
  .grid-container {
    @apply grid-cols-custom-4;
  }
}

@media (min-width: 2231px) and (max-width: 2600px) {
  .grid-container {
    @apply grid-cols-custom-5;
  }
}

@media (min-width: 2601px) {
  .grid-container {
    @apply grid-cols-custom--auto-fit;
  }
}
</style>
