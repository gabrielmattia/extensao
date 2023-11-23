<script setup>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main role="main" class="py-8">
    <div class="grid lg:grid-cols-10">
      <div class="lg:col-span-8 px-4 order-last lg:order-first">
        <slot name="title"></slot>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
          <slot name="main-content"></slot>
        </div>
        <div class="grid place-items-center pt-6">
            <slot name="pagination"></slot>  
        </div>
      </div>
      
      <div class="lg:col-span-2 px-4 lg:ps-0 lg:pe-4 order-first lg:order-last mx-auto mb-8 lg:mb-0">
        <slot name="aside-content"></slot>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
