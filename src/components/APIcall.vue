<script>


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
      fetch('../data/database.json')
        .then(response => response.json())
        .then(data => {
          // Now, 'data' variable holds the content of the JSON file.
          console.log(data)
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
        <li v-for="item in data" :key="item.id">
          <!-- {{ item.images }} -->
          <!-- <img v-if="item.images[0]?.file" :src="'../scr/data/' + item.images[0].file" alt="File" /> -->
          <img v-if="item.images[0]?.file" :src="`${item.images[0].file}`" alt="File" />

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
