<script setup>
  import { onBeforeMount, onMounted, reactive, ref } from 'vue'
  import { useRoute } from 'vue-router'

  import BtnGoBack from '@/components/ButtonGoBack.vue'
  import LoadingIcon from '@/components/LoadingIcon.vue'
  import { getProjectById } from '@/services/projectService'

  let projectObj = reactive({})
  const isLoading = ref(true)
  const route = useRoute()
  const imageSrc = ref('')

  onBeforeMount(() => {
    imageSrc.value = import.meta.env.VITE_API_URL_STORAGE_DEV
  })
  onMounted(async () => {
    const projectId = Number(route.params.id)
    projectObj = await getProjectById(projectId)
    if (projectObj) isLoading.value = false
    console.log('obj: ', projectObj)
  })
</script>

<template>
  <LoadingIcon v-if="isLoading" />
  <div
    v-else
    class="container mx-auto my-8"
  >
    <BtnGoBack />
    <div class="content-wrapper flex flex-col items-center">
      <div class="carousel carousel-center max-w-[450px] space-x-4 bg-transparent rounded-box items-center">
        <div
          class="carousel-item w-full items-center justify-center"
          v-for="(image, index) in projectObj.images"
          :key="index"
        >
        <img :src="`/../${image.file}`" :alt="`${image.name}`" class="rounded-lg" />
        </div>
      </div>

      <div class="flex items-center py-8">
        <h3 class="self-baseline capitalize">{{ projectObj?.nome_oficial }}</h3>
        <div
          v-if="projectObj?.ano"
          class="border-1 w-[5px] h-[6px] bg-slate-700 m-2"
        ></div>
        <h4 class="self-baseline text-skin-black-mute font-medium">{{ projectObj?.ano }}</h4>
      </div>

      <div class="lg:columns-2">
        <span>endereço</span>
        <p>{{ projectObj?.endereco }} - {{ projectObj?.cidade }} - {{ projectObj?.estado }}.</p>
        <p>{{ projectObj?.cep }} - {{ projectObj?.pais }}.</p>
        <span>autor(es)</span>
        <p>
          {{ projectObj?.autor }}
        </p>
        <span>executor(es)</span>
        <p>
          {{ projectObj?.executor }}
        </p>
        <span>ano da construcao</span>
        <p>
          {{ projectObj?.ano_da_construcao }}
        </p>
        <span>area do terreno</span>
        <p>
          {{ projectObj?.area_do_terreno }}
        </p>
        <span>area construida</span>
        <p>
          {{ projectObj?.area_construida }}
        </p>
        <span>programa</span>
        <p>
          {{ projectObj?.programa }}
        </p>
        <span>numero de pavimentos</span>
        <p>
          {{ projectObj?.numero_de_pavimentos }}
        </p>
        <span>subsolo</span>
        <p>
          {{ projectObj?.subsolo }}
        </p>
        <span>elevadores</span>
        <p>
          {{ projectObj?.elevadores }}
        </p>
        <span>obras de arte</span>
        <p>
          {{ projectObj?.obras_de_arte }}
        </p>
        <span>proprietario original</span>
        <p>
          {{ projectObj?.proprietario_original }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  span {
    @apply tracking-widest text-base uppercase;
  }
  p {
    @apply text-sm leading-4;
  }
  p:not(:first-of-type) {
    @apply mb-4;
  }
</style>
