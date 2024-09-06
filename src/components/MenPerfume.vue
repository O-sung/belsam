<template>
  <div class="pt-16 lg:pt-20 xl:pt-24">
    <div class="ml-4 mb-8 px-4 py-1 bg-[#e0b7b7] inline-block lg:hidden">
      <RouterLink to="/">HOME</RouterLink>
    </div>

    <!-- Loop through the men's perfumes -->
    <div class="px-6 mb-4 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <div v-for="item in paginatedPerfume" :key="item.id" class="shadow-lg px-3 py-2">
        <div>
          <img :src="item.image" alt="Perfume" class="h-64 w-full object-cover md:h-64 xl:h-80" />
        </div>

        <p class="mt-4">MEN PERFUME</p>

        <div class="flex justify-between items-center mt-1 mb-3">
          <p>{{ item.price }}</p>
          <button>More Info</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <div class="flex justify-center my-8">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="currentPage = page"
      :class="['mx-2 px-4 py-2 border', { 'bg-[#e0b7b7] text-white': currentPage === page }]"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { crud } from '../../services/index.mjs'

const menPerfumes = ref([])

// Fetch men's perfumes from Firestore
const fetchMenPerfumes = async () => {
  try {
    // Fetch perfume data from Firestore where type is 'men'
    const response = await crud.getAllDoc('products') // Adjust 'products' to your Firestore collection name

    // Filter out only the men's perfumes
    const menPerfumeData = response.filter((item) => item.type === 'men')

    menPerfumes.value = menPerfumeData
  } catch (error) {
    console.error('Error fetching men perfumes:', error)
  }
}

// Fetch men's perfumes when the component is mounted
onMounted(fetchMenPerfumes)

const currentPage = ref(1)
const itemsPerPage = 12

const totalPages = computed(() => Math.ceil(menPerfumes.value.length / itemsPerPage))

const paginatedPerfume = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return menPerfumes.value.slice(start, end)
})
</script>

<style lang="scss" scoped></style>
