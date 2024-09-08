<template>
  <div class="pt-16 lg:pt-20 xl:pt-24 px-8">
    <h1 class="text-2xl font-bold mb-4 lg:mb-12">Admin - Upload New Perfume</h1>

    <div class="px- mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div class="shadow-lg p-4 mb-8">
        <h2 class="text-xl font-semibold mb-4">Men Perfume</h2>

        <form @submit.prevent="submitForm('men')">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="menPrice">Price:</label>

            <input
              v-model="menPrice"
              type="text"
              id="menPrice"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="menImage"
              >Perfume Image:</label
            >

            <input
              @change="handleImageUpload('men', $event)"
              type="file"
              id="menImage"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            class="bg-[#f05d5d] hover:bg-[#a55050] text-white font-bold py-2 px-4 rounded transition-all duration-300 focus:outline-none focus:shadow-outline"
          >
            Upload Men Perfume
          </button>
        </form>
      </div>

      <div class="shadow-lg p-8 mb-8">
        <h2 class="text-xl font-semibold mb-4">Women Perfume</h2>
        <form @submit.prevent="submitForm('women')">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="womenPrice"
              >Price:</label
            >
            <input
              v-model="womenPrice"
              type="text"
              id="womenPrice"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="womenImage"
              >Perfume Image:</label
            >
            <input
              @change="handleImageUpload('women', $event)"
              type="file"
              id="womenImage"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            class="bg-[#f05d5d] hover:bg-[#a55050] text-white font-bold py-2 px-4 rounded transition-all duration-300 focus:outline-none focus:shadow-outline"
          >
            Upload Women Perfume
          </button>
        </form>
      </div>

      <div class="shadow-lg p-8 mb-8">
        <h2 class="text-xl font-semibold mb-4">Latest Arrival Perfume</h2>
        <form @submit.prevent="submitForm('latest')">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="latestPrice"
              >Price:</label
            >
            <input
              v-model="latestPrice"
              type="text"
              id="latestPrice"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="latestImage"
              >Perfume Image:</label
            >
            <input
              @change="handleImageUpload('latest', $event)"
              type="file"
              id="latestImage"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            class="bg-[#f05d5d] hover:bg-[#a55050] text-white font-bold py-2 px-4 rounded transition-all duration-300 focus:outline-none focus:shadow-outline"
          >
            Upload Latest Arrival
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { crud, UploadImg } from '../../services/index.mjs'
// import axios from 'axios'

const menPrice = ref(`₦`)
const womenPrice = ref('₦')
const latestPrice = ref('₦')

let menImageFile = null
let womenImageFile = null
let latestImageFile = null

const handleImageUpload = (type, event) => {
  const file = event.target.files[0]
  if (type === 'men') menImageFile = file
  if (type === 'women') womenImageFile = file
  if (type === 'latest') latestImageFile = file
}

const submitForm = async (type) => {
  let formData = {}

  if (type === 'men') {
    const res = await UploadImg(menImageFile)
    if (res) {
      console.log(res)
      formData.menImageFile = res.url
      formData = { price: menPrice.value, image: res.url, type: type }
    }
  } else if (type === 'women') {
    const res = await UploadImg(womenImageFile)
    if (res) {
      console.log(res)
      formData.womenImageFile = res.url
      formData = { price: womenPrice.value, image: res.url, type: type }
    }
  } else if (type === 'latest') {
    const res = await UploadImg(latestImageFile)
    if (res) {
      console.log(res)
      formData.latestImageFile = res.url
      formData = { price: latestPrice.value, image: res.url, type: type }
    }
  }

  try {
    // const res = await UploadImg()
    console.log(formData)
    const resp = await crud.addDocWithoutId('products', formData)
    console.log(resp)
    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} Perfume uploaded successfully!`)

    // Clear the input fields after successful upload
    if (type === 'men') {
      menPrice.value = '₦'
      menImageFile = null
    } else if (type === 'women') {
      womenPrice.value = ''
      womenImageFile = null
    } else if (type === 'latest') {
      latestPrice.value = ''
      latestImageFile = null
    }

    // Reset the file input field
    document.getElementById(`${type}Image`).value = ''
  } catch (error) {
    console.error(`Error uploading ${type} perfume:`, error)
    alert(`Failed to upload ${type} perfume. Please try again.`)
  }
  // console.log(formData)
}
</script>

<style lang="scss" scoped></style>
