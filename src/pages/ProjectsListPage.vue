<script setup>
  import { onMounted, ref, computed } from 'vue'
  import ProjectsLayout from './templates/ProjectsLayout.vue'
  import CardProject from '@/components/CardProject.vue'
  import { getProjects } from '@/services/projectService'
  import { PROJECT_FILTER_OPTIONS, FILTER_TYPES, FILTER_TYPES_MAPPING } from '../constants/filters'

  const projectsData = ref([])
  const selectedOption = ref(null)
  const searchText = ref(null)
  const filterErrorMsg = ref(false)

  const selectOption = (option) => {
    selectedOption.value = Number(option?.srcElement.id)
  }

  const findProjects = (filterParam, searchTextValue) => {
    return projectsData.value.filter((project) => {
      if (filterParam === FILTER_TYPES.localidade) {
        return (
          project.cidade?.toLowerCase().includes(searchTextValue) ||
          project.estado?.toLowerCase().includes(searchTextValue) ||
          project.pais?.toLowerCase().includes(searchTextValue)
        )
      }
      return project[FILTER_TYPES_MAPPING[filterParam]]?.toLowerCase().includes(searchTextValue)
    })
  }

  const filteredProjects = computed(() => {
    const searchTextValue = searchText.value ? searchText.value.toLowerCase() : ''
    return findProjects(selectedOption.value, searchTextValue)
  })

  onMounted(async () => {
    projectsData.value = await getProjects()
    selectedOption.value = FILTER_TYPES['nomeOficial']
  })
</script>

<template>
  <ProjectsLayout>
    <template #main-content>
      <CardProject
        v-for="(project, index) in filteredProjects"
        :key="index"
        :projectId="project.id"
        :projectTitle="project.nome_oficial"
        :year="project?.ano"
        :author="project?.autor"
        :country="project?.pais"
        :state="project?.estado"
        :city="project?.cidade"
        :imageFileName="project.images[0]?.file"
        :imgAltText="project.images[0]?.name"
      />
    </template>
    <template #aside-content>
      <div class="filter-types">
        <h5>Procurando um projeto?</h5>
        <h5>Buscar por:</h5>

        <form @submit.prevent>
          <div
            class="radio-wrapper"
            v-for="option in PROJECT_FILTER_OPTIONS"
            :key="option.id"
          >
            <input
              ref="radioRef"
              type="radio"
              role="radio"
              :name="option.name"
              :id="option.id"
              v-model="selectedOption"
              @click="selectOption"
              :value="option.id"
            />
            <label :for="option.name">{{ option.label }}</label>
          </div>

          <div>
            <input
              type="text"
              :placeholder="`Buscar projeto por ${PROJECT_FILTER_OPTIONS[selectedOption - 1]?.name}`"
              class="input input-bordered"
              v-model="searchText"
              :class="{ 'border-red-300': filterErrorMsg, 'focus:outline-red-300': filterErrorMsg }"
            />
          </div>
        </form>
      </div>
    </template>
    <template #pagination>
      <span
        v-if="filteredProjects.length === 0"
        class="font-semibold text-lg leading-5 pb-8"
      >
        Não foram econtrados projetos com o parâmetro fornecido.
      </span>
      <div
        v-if="filteredProjects.length > 0"
        class="join"
      >
        <button class="join-item btn btn-active">1</button>
        <button class="join-item btn">2</button>
        <button class="join-item btn">3</button>
        <button class="join-item btn">4</button>
      </div>
    </template>
  </ProjectsLayout>
</template>

<style scoped>
  .filter-types {
    @apply flex flex-col;
  }

  .radio-wrapper {
    @apply flex items-center py-1;
  }

  .filter-types label {
    @apply text-sm ps-2 font-normal;
  }

  h5 {
    @apply leading-5;
  }

  input[type='radio'] {
    @apply cursor-pointer;
  }

  .input {
    @apply h-[2.5rem] px-2 w-full max-w-xs mt-3 text-sm;
  }
</style>
