<template>
  <div class="pt-16 lg:pt-20 xl:pt-24">
    <div class="ml-4 mb-8 px-4 py-1 bg-[#e0b7b7] inline-block lg:hidden">
      <RouterLink to="/">HOME</RouterLink>
    </div>

    <div
      class="px-8 mb-4 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:px-14 xl:grid-cols-4"
    >
      <div v-for="item in paginatedPerfume" :key="item.id" class="shadow-lg px-3 py-2">
        <div>
          <img :src="item.img" alt="Men Perfume" class="h-64 w-full object-cover md:h-64 xl:h-80" />
        </div>

        <p class="mt-4">MEN PERFUME</p>

        <div class="flex justify-between items-center mt-1 mb-3">
          <p>{{ item.price }}</p>
          <button>More Info</button>
        </div>
      </div>
    </div>

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
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const perfume = [
  {
    id: 1,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 2,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 3,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 4,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 5,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 6,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 7,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 8,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 9,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 9,
    price: '$112',
    img: '/public/pef1.jpg'
  },
  {
    id: 9,
    price: '$112',
    img: '/public/pef4.jpg'
  },
  {
    id: 9,
    price: '$112',
    img: '/public/pef3.jpg'
  },
  {
    id: 9,
    price: '$112',
    img: '/public/pef6.jpg'
  }
]

const currentPage = ref(1)
const itemsPerPage = 12

const totalPages = computed(() => Math.ceil(perfume.length / itemsPerPage))

const paginatedPerfume = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return perfume.slice(start, end)
})
</script>

<style lang="scss" scoped></style>
