<template>
  <div class="pt-16 lg:pt-20 xl:pt-24">
    <div class="ml-4 mb-8 px-4 py-1 bg-[#f05d5d] text-white inline-block lg:hidden">
      <RouterLink to="/">HOME</RouterLink>
    </div>

    <div class="px-8 mb-4 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      <div v-for="item in paginatedPerfume" :key="item.id" class="shadow-lg px-3 py-2">
        <div>
          <img
            :src="item.image"
            alt="Men Perfume"
            class="h-64 w-full object-cover md:h-64 lg:h-96"
          />
        </div>

        <p class="mt-4">WOMEN PERFUME</p>

        <div class="flex justify-between items-center mt-1 mb-3">
          <p>{{ item.price }}</p>

          <button class="bg-[#f05d5d] px-3 py-1 rounded-lg text-white hover:bg-[#627727]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center my-8">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="['mx-2 px-4 py-2 border', { 'bg-[#f05d5d] text-white': currentPage === page }]"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { crud } from '../../services/index.mjs'

const womenPerfume = ref([])

const fetchWomenPerfume = async () => {
  try {
    const response = await crud.getAllDoc('products')

    const womenPerfumeData = response.filter((item) => item.type === 'women')

    womenPerfume.value = womenPerfumeData
  } catch (error) {
    console.error('Error fetching Women Perfumes:', error)
  }
}

onMounted(fetchWomenPerfume)

const currentPage = ref(1)
const itemsPerPage = 12

const totalPages = computed(() => Math.ceil(womenPerfume.value.length / itemsPerPage))

const paginatedPerfume = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return womenPerfume.value.slice(start, end)
})
</script>

<style lang="scss" scoped></style>
