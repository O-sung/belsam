<template>
  <div class="p-8">
    <h1 class="text-2xl mb-6">Admin Page - Manage Men Perfumes</h1>

    <div
      v-if="filteredMenPerfumes.length"
      class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div v-for="item in filteredMenPerfumes" :key="item.id" class="shadow-lg px-3 py-2">
        <div>
          <img
            :src="item.image"
            alt="Men Perfume"
            class="h-64 w-full object-cover md:h-64 xl:h-80"
          />
        </div>
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
      <!-- Edit Price Modal -->
      <div class="bg-white p-6 rounded-lg">
        <h2 class="text-xl mb-4">Edit Price</h2>
        <input
          type="number"
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
import { crud } from '../../services/index.mjs' // Import Firebase services
// import { storage, deleteObject } from 'firebase/firestore'

const menPerfumes = ref([])
const editingPrice = ref(false)
const currentPerfumeId = ref(null)
const newPrice = ref('')

// Fetch men perfumes from Firestore
const fetchMenPerfumes = async () => {
  try {
    const perfumes = await crud.getAllDoc('products') // Assuming 'products' is your collection name
    menPerfumes.value = perfumes
  } catch (error) {
    console.error('Error fetching men perfumes:', error)
  }
}

onMounted(fetchMenPerfumes)

// Computed property to filter only men's perfumes
const filteredMenPerfumes = computed(() => {
  return menPerfumes.value.filter((perfume) => perfume.type === 'men')
})

// const filteredMenPerfumes = computed(() => {
//   return menPerfumes.value
//     .filter((perfume) => perfume.type === 'men')
//     .sort((a, b) => {
//       if (!a.createdAt || !b.createdAt) {
//         return 0 // Or any other default sorting logic
//       }
//       return b.createdAt.seconds - a.createdAt.seconds
//     })
// })

const deleteImage = async (id) => {
  try {
    // Delete metadata from Firestore
    await crud.removeDoc('products', id)
    // Re-fetch data after successful deletion
    await fetchMenPerfumes()

    alert('Perfume deleted successfully')
    // ... rest of your code for updating local state or displaying a message
  } catch (error) {
    console.error('Error deleting image:', error)
  }
}

// Method to start editing the price
const editPrice = (id) => {
  const perfume = menPerfumes.value.find((item) => item.id === id)
  if (perfume) {
    currentPerfumeId.value = id
    newPrice.value = perfume.price
    editingPrice.value = true
  }
}

// Method to update the price in Firestore
const updatePrice = async () => {
  try {
    await crud.updateDocument('products', currentPerfumeId.value, { price: `₦${newPrice.value}` })
    await fetchMenPerfumes() // Refetch data after update
    alert('Price updated successfully')
    cancelEdit()
  } catch (error) {
    console.error('Error updating price:', error)
  }
}

// Method to cancel editing
const cancelEdit = () => {
  editingPrice.value = false
  currentPerfumeId.value = null
  newPrice.value = ''
}
</script>

<style scoped></style>
