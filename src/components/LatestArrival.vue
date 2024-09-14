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
            alt="Women Perfume"
            class="h-64 w-full object-top object-cover md:h-64 lg:h-80"
          />
        </div>

        <p class="mt-4 font-bold">{{ item.latestName }}</p>

        <div class="flex justify-between items-center mt-1 mb-3">
          <p>{{ item.price }}</p>

          <button
            class="bg-[#f05d5d] px-3 py-1 rounded-lg text-white hover:bg-[#627727]"
            @click="addToCart(item)"
          >
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

const latestPerfume = ref([])
// const cart = ref([])

const fetchLatestPerfume = async () => {
  try {
    const response = await crud.getAllDoc('products')

    const latestPerfumeData = response.filter((item) => item.type === 'latest')

    latestPerfume.value = latestPerfumeData
  } catch (error) {
    console.error('Error fetching Latest Arrivals:', error)
  }
}

onMounted(fetchLatestPerfume)

const currentPage = ref(1)
const itemsPerPage = 12

const totalPages = computed(() => Math.ceil(latestPerfume.value.length / itemsPerPage))

const paginatedPerfume = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return latestPerfume.value.slice(start, end)
})

// const addToCart = (item) => {
//   const cartItem = {
//     id: item.id,
//     latestName: item.latestName,
//     image: item.image,
//     price: item.price,
//     quantity: 1
//   }

//   const existingItemIndex = cart.value.findIndex((cartItem) => cartItem.id === item.id)

//   if (existingItemIndex !== -1) {
//     cart.value[existingItemIndex].quantity += 1
//   } else {
//     cart.value.push(cartItem)
//   }

//   localStorage.setItem('cart', JSON.stringify(cart.value))
//   alert(`${item.latestName} has been added to the cart.`)
// }

// Add items to the cart and store in localStorage
const addToCart = (item) => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || []

  const cartItem = {
    id: item.id, // Ensure you are tracking items by ID
    womenName: item.latestName, // Correct name field
    image: item.image, // Add the image for display in the cart
    price: item.price, // Ensure the price field is passed
    quantity: 1 // Default quantity to 1 (this can be modified later)
  }

  // Check if the item already exists in the cart
  const existingItemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id)

  if (existingItemIndex !== -1) {
    // If the item exists, update its quantity
    existingCart[existingItemIndex].quantity += 1
  } else {
    // Otherwise, add it to the cart
    existingCart.push(cartItem)
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(existingCart))
  alert(`${item.latestName} has been added to the cart.`)
}
</script>

<style lang="scss" scoped></style>
