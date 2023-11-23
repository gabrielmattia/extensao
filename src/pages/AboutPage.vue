<script setup>
  import BasicLayout from './templates/BasicLayout.vue'
</script>

<template>
  <BasicLayout>
    <template #main-content>
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </template>
  </BasicLayout>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 80vh;
    display: flex;
    align-items: flex-start;
  }
}
</style>
