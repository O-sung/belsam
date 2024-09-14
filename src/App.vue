<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// Cart count logic
const cartItemCount = ref(0)

const getCartItemCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  cartItemCount.value = cart.reduce((total, item) => total + item.quantity, 0)
}

onMounted(() => {
  getCartItemCount()

  // Listen for updates to the cart and refresh count
  window.addEventListener('storage', getCartItemCount)
})

const isHamOpened = ref(false)

const openHam = () => {
  isHamOpened.value = !isHamOpened.value
}

const closeHam = () => {
  isHamOpened.value = false
}
</script>

<template>
  <header class="fixed w-full z-30">
    <div class="bg-[#f05d5d] bg-opacity-100 py-2 px-3 xl:py-3">
      <nav class="hidden lg:flex justify-between items-center">
        <div>
          <img src="/public/logo.jpg" class="w-8 h-8" />
        </div>

        <div class="flex justify-center gap-8 text-white">
          <RouterLink to="/" class="text-base">Home</RouterLink>
          <RouterLink to="/men" class="text-base">Men</RouterLink>
          <RouterLink to="/women" class="text-base">Women</RouterLink>
          <RouterLink to="/about" class="text-base">About Us</RouterLink>
          <RouterLink to="/about" class="text-base">Contact Us</RouterLink>
          <RouterLink to="/admin" class="text-base">Admin</RouterLink>
        </div>

        <div class="flex items-center">
          <div>
            <input
              type="text"
              placeholder="Search All Items"
              class="px-4 py-1 text-center border border-[#aace48] border-e-0 outline-none rounded-s-full"
            />
            <button
              class="px-5 py-1 border-[#aace48] border border-l-0 text-white -ml-3 rounded-full bg-[#aace48]"
              id="search-btn"
            >
              SEARCH
            </button>
          </div>

          <!-- Cart Icon -->
          <div class="relative ml-4">
            <RouterLink to="/cart">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-white fa-xl" />
              <span
                v-if="cartItemCount > 0"
                class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
              >
                {{ cartItemCount }}
              </span>
            </RouterLink>
          </div>
        </div>
      </nav>

      <nav class="flex items-center justify-between lg:hidden">
        <div>
          <img src="/public/logo.jpg" alt="LOGO" class="w-10 h-10" />
        </div>

        <div
          class="text-base w-full absolute flex flex-col items-center gap-8 bg-[#f05d5d] text-white top-0 left-0 pt-20 pb-32 ease-in duration-300"
          :class="isHamOpened ? 'top-0' : 'top-[-1000%]'"
        >
          <RouterLink to="/" @click="closeHam()">Home</RouterLink>
          <RouterLink to="/men" @click="closeHam()">Men</RouterLink>
          <RouterLink to="/women" @click="closeHam()">Women</RouterLink>
          <RouterLink to="/about" @click="closeHam()">About Us</RouterLink>
          <RouterLink to="/about" @click="closeHam()">Contact Us</RouterLink>
          <RouterLink to="/admin" @click="closeHam()">Admin</RouterLink>
          <RouterLink to="/cart" @click="closeHam()">Cart</RouterLink>
        </div>

        <div @click="openHam()" class="z-50">
          <font-awesome-icon
            :icon="isHamOpened ? 'fa-xmark' : 'fa-bars'"
            :class="isHamOpened ? 'text-white' : 'text-white'"
            class="fa-xl"
          />
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<!-- <script>
export default {
  data() {
    return {
      isHamOpened: false
    }
  },

  methods: {
    openHam() {
      this.isHamOpened = !this.isHamOpened
    },
    closeHam() {
      this.isHamOpened = false
    }
  }
}
</script> -->

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
}

nav a.router-link-exact-active {
  text-align: center;
  color: #aace48;
  padding-bottom: 2px;
  border-bottom: 3px solid #aace48;
  height: 100%;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  text-decoration: none;
}
</style>
