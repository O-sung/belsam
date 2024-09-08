<template>
  <div class="pt-16 px-8 pb-8">
    <h1 class="text-2xl mb-6">Admin Page - Manage Men Perfumes</h1>

    <div class="flex justify-center gap-8 text-[#f05d5d]">
      <RouterLink to="/" class="text-base">Home</RouterLink>
      <RouterLink to="/admin-men" class="text-base">Men</RouterLink>
      <RouterLink to="/admin-women" class="text-base">Women</RouterLink>
      <RouterLink to="/admin-latest" class="text-base">About Us</RouterLink>
    </div>

    <div
      v-if="filteredMenPerfumes.length"
      class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div v-for="item in filteredMenPerfumes" :key="item.id" class="shadow-lg px-3 py-2">
        <div>
          <img
            :src="item.image"
            alt="Men Perfume"
            class="h-64 w-full object-cover object-top md:h-64 xl:h-80"
          />
        </div>

        <p class="mt-4 font-bold">{{ item.pefName }}</p>

        <p class="mt-4">{{ item.price }}</p>

        <div class="flex justify-between items-center mt-1 mb-3">
          <button @click="deleteImage(item.id)" class="bg-red-500 text-white px-4 py-2">
            Delete
          </button>

          <button @click="editPrice(item.id)" class="bg-blue-500 text-white px-4 py-2">
            Edit Price
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="editingPrice"
      class="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75"
    >
      <div class="bg-white p-6 rounded-lg">
        <h2 class="text-xl mb-4">Edit Price</h2>

        <input
          type="text"
          v-model="newPrice"
          placeholder="Enter new price"
          class="border p-2 mb-4 w-full"
        />

        <div class="flex gap-4">
          <button @click="updatePrice" class="bg-green-500 text-white px-4 py-2">Save</button>
          <button @click="cancelEdit" class="bg-gray-500 text-white px-4 py-2">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { crud } from '../../services/index.mjs'

const menPerfumes = ref([])
const editingPrice = ref(false)
const currentPerfumeId = ref(null)
const newPrice = ref('')

const fetchMenPerfumes = async () => {
  try {
    const perfumes = await crud.getAllDoc('products')
    menPerfumes.value = perfumes
  } catch (error) {
    console.error('Error fetching men perfumes:', error)
  }
}

onMounted(fetchMenPerfumes)

// Computed property to filter only men's perfumes
// const filteredMenPerfumes = computed(() => {
//   return menPerfumes.value.filter((perfume) => perfume.type === 'men')
// })

const filteredMenPerfumes = computed(() => {
  return menPerfumes.value
    .filter((perfume) => perfume.type === 'men')
    .sort((a, b) => {
      if (!a.createdAt || !b.createdAt) {
        return 0 // Or any other default sorting logic
      }
      return b.createdAt.seconds - a.createdAt.seconds
    })
})

const deleteImage = async (id) => {
  try {
    await crud.removeDoc('products', id)
    await fetchMenPerfumes()

    alert('Perfume deleted successfully')
  } catch (error) {
    console.error('Error deleting image:', error)
  }
}

const editPrice = (id) => {
  const perfume = menPerfumes.value.find((item) => item.id === id)
  if (perfume) {
    currentPerfumeId.value = id
    newPrice.value = perfume.price
    editingPrice.value = true
  }
}

const updatePrice = async () => {
  try {
    await crud.updateDocument('products', currentPerfumeId.value, { price: `₦${newPrice.value}` })
    await fetchMenPerfumes()
    alert('Price updated successfully')
    cancelEdit()
  } catch (error) {
    console.error('Error updating price:', error)
  }
}

const cancelEdit = () => {
  editingPrice.value = false
  currentPerfumeId.value = null
  newPrice.value = ''
}
</script>

<style scoped></style>
