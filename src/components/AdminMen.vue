<template>
  <div class="p-8">
    <h1 class="text-2xl mb-6">Admin Page - Manage Men Perfumes</h1>
    <div
      v-if="menPerfumes.length"
      class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div v-for="item in menPerfumes" :key="item.id" class="shadow-lg px-3 py-2">
        <div>
          <img :src="item.img" alt="Men Perfume" class="h-64 w-full object-cover md:h-64 xl:h-80" />
        </div>
        <p class="mt-4">{{ item.price }}</p>
        <div class="flex justify-between items-center mt-1 mb-3">
          <button @click="deleteImage(item.id)" class="bg-red-500 text-white px-4 py-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const menPerfumes = ref([])

const fetchMenPerfumes = async () => {
  try {
    const response = await axios.get('/api/perfumes/men')
    menPerfumes.value = response.data
  } catch (error) {
    console.error('Error fetching men perfumes:', error)
  }
}

onMounted(fetchMenPerfumes)

const deleteImage = async (id) => {
  try {
    await axios.delete(`/api/perfumes/delete/men/${id}`)
    menPerfumes.value = menPerfumes.value.filter((item) => item.id !== id)
  } catch (error) {
    console.error('Error deleting image:', error)
  }
}
</script>

<style scoped></style>
