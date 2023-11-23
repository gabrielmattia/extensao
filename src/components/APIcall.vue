<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        data: null,
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        axios
          .get('http://localhost:8000/api/projects')
          .then((response) => {
            this.data = response.data
            console.log('data: ', this.data)
          })
          .catch((error) => {
            console.error('Error fetching data:', error)
          })
      },
    },
  }
</script>

<template>
  <div class="welcome-content">
    <h2>Welcome!!!</h2>
    <div v-if="data">
      <h2>Fetched Data</h2>
      <ul>
        <li
          v-for="item in data"
          :key="item.id"
        >
          <!-- {{ item.images }} -->
          <img
            v-if="item.images[0]?.file"
            :src="'http://localhost:8000/storage/' + item.images[0].file"
            alt="File"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .welcome-content {
    @apply min-h-[80vh] grid grid-cols-4 gap-8 items-start justify-center py-8;
  }
</style>
