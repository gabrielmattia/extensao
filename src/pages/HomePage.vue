<script setup>
  import BasicLayout from './templates/BasicLayout.vue'
  import MainProjects from '@/components/MainProjects.vue'
</script>

<template>
  <BasicLayout>
    <template #main-content>
      <div class="presentation-wrapper">
        <div>
          <img
            src="../assets/images/livia-maria.jpg"
            alt=""
            class="w-full max-w-full max-h-[350px]"
          />
        </div>
        <div class="presentation">
          <h2>Apresentação</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <MainProjects />
    </template>
  </BasicLayout>
</template>

<style scoped>
  .presentation-wrapper {
    @apply grid grid-cols-1 lg:grid-cols-2 gap-6 py-8;
  }
  .presentation p {
    @apply py-2;
  }
</style>
