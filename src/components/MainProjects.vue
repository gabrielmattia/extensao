<script setup>
  import { onMounted, ref } from 'vue'
  import CardProject from '@/components/CardProject.vue'
  import { getFavoritos } from '../services/projectService'
 

  const favoriteProjects = ref([])

  onMounted(async () => {
  
    const response = await getFavoritos()
    if (!response.length) return

    favoriteProjects.value = response
  })
</script>

<template>
  <div
    v-if="favoriteProjects.length"
    class="welcome-content"
  >
    <CardProject
      v-for="fav in favoriteProjects"
      :key="fav.id"
      :projectId="fav.id"
      :projectTitle="fav.nome_oficial"
      :year="fav?.ano"
      :author="fav?.autor"
      :country="fav?.pais"
      :state="fav?.estado"
      :city="fav?.cidade"
      :imageFileName="fav.images[0]?.file"
      :imgAltText="fav.images[0]?.name"
    />
  </div>
</template>

<style scoped>
  .welcome-content {
    /* @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-center py-8; */
    @apply w-full grid grid-cols-1 md:grid-cols-custom-2 lg:grid-cols-custom-3 xl:grid-cols-custom-4 2xl:grid-cols-custom-5 place-content-center justify-items-center gap-4;
  }
</style>
