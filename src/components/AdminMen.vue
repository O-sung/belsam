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
          <!-- Button to delete image -->
          <button @click="deleteImage(item.id, item.img)" class="bg-red-500 text-white px-4 py-2">
            Delete
          </button>
          <!-- Button to trigger price editing modal -->
          <button @click="editPrice(item.id)" class="bg-blue-500 text-white px-4 py-2">
            Edit Price
          </button>
        </div>
      </div>
    </div>

    <!-- Modal for editing price -->
    <div
      v-if="editingPrice"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
    >
      <div class="bg-white p-8 rounded">
        <h2 class="text-xl mb-4">Edit Price</h2>
        <input
          v-model="newPrice"
          type="text"
          class="border p-2 mb-4 w-full"
          placeholder="Enter new price"
        />
        <div class="flex justify-end">
          <button @click="updatePrice" class="bg-green-500 text-white px-4 py-2 mr-2">Save</button>
          <button @click="cancelEdit" class="bg-gray-500 text-white px-4 py-2">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage'

const menPerfumes = ref([])

const editingPrice = ref(false)
const currentPerfumeId = ref(null)
const newPrice = ref('')

// Method to delete image
const deleteImage = async (id, imageUrl) => {
  try {
    const storage = getStorage()
    const imageRef = storageRef(storage, imageUrl)
    await deleteObject(imageRef) // Delete image from Firebase Storage

    // Remove from local menPerfumes array
    menPerfumes.value = menPerfumes.value.filter((perfume) => perfume.id !== id)
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

// Method to update the price
const updatePrice = () => {
  const perfume = menPerfumes.value.find((item) => item.id === currentPerfumeId.value)
  if (perfume) {
    perfume.price = newPrice.value
  }
  cancelEdit() // Close the modal after updating
}

// Method to cancel editing
const cancelEdit = () => {
  editingPrice.value = false
  currentPerfumeId.value = null
  newPrice.value = ''
}
</script>

<style scoped>
/* Add necessary styles for modal positioning, etc. */
</style>
