<template>
  <div class="pt-16 lg:pt-20 xl:pt-24 px-8">
    <h1 class="text-2xl font-bold mb-4">Admin - Upload New Perfume</h1>

    <form @submit.prevent="submitForm" class="shadow-lg p-8">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Price:</label>
        <input
          v-model="price"
          type="text"
          id="price"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image">Perfume Image:</label>
        <input
          @change="handleImageUpload"
          type="file"
          id="image"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Upload
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const price = ref('')
let imageFile = null

const handleImageUpload = (e) => {
  imageFile = e.target.files[0]
}

const submitForm = async () => {
  const formData = new FormData()
  formData.append('price', price.value)
  formData.append('image', imageFile)

  try {
    const response = await axios.post('/api/perfumes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(response)

    alert('Perfume uploaded successfully!')
    price.value = ''
    imageFile = null
  } catch (error) {
    console.error('Error uploading perfume:', error)
    alert('Failed to upload perfume. Please try again.')
  }
}
</script>

<style lang="scss" scoped></style>
