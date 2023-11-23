<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import LoadingIcon from '@/components/LoadingIcon.vue'

defineProps({
  projectId: {
    type: Number,
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  imageFileName: {
    type: String,
  },
  imgAltText: {
    type: String,
  },

})
const router = useRouter()
const imageSrc = ref('')
const isLoading = ref(true)

onBeforeMount(() => {
  imageSrc.value = import.meta.env.VITE_API_URL_STORAGE_DEV
  isLoading.value = false
})


</script>

<template>
  <LoadingIcon v-if="isLoading" />
  <div v-else class="card glass">
    <router-link to="#" @click="router.push(`/projects/${projectId}`)">
      <figure>

        <img :src="`src/assets/images/${this.imageFileName}`" :alt="imgAltText" />


      </figure>

      <div class="card-body">
        <h2 class="card-title">{{ projectTitle }}</h2>
        <p>{{ subtitle }}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.glass {
  @apply w-[100%] max-w-[250px];
}

.card-body {
  @apply p-3 gap-0;
}

.card img {
  @apply w-full max-w-full max-h-[250px] rounded-t-lg;
}
</style>
