<script setup>
  import { onMounted, ref } from 'vue'
  import CardProject from '@/components/CardProject.vue'
  import { getProjects } from '../services/projectService'
  import { FILTER_TYPES } from '../constants/filters'

  const favoriteProjects = ref([])

  onMounted(async () => {
    const filterParams = {
      type: FILTER_TYPES['favorito'],
      value: true,
    }
    const response = await getProjects(filterParams)
    if (!response.length) return

    favoriteProjects.value = response
  })
</script>

<template>
  <div
    v-if="favoriteProjects.length"
    class="welcome-content place-items-center"
  >
    <CardProject
      v-for="fav in favoriteProjects"
      :key="fav.id"
      :projectId="fav.id"
      :projectTitle="fav.nome_oficial"
      :subtitle="`${fav.ano} - ${fav.autor}`"
      :imageFileName="fav.images[0]?.file"
      :imgAltText="fav.images[0]?.name"
    />
  </div>
</template>

<style scoped>
  .welcome-content {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-center py-8;
  }
</style>
