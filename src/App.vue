<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed w-full z-30">
    <div class="bg-[#f05d5d] bg-opacity-100 py-2 px-3 xl:py-3">
      <nav class="hidden lg:flex justify-between items-center">
        <div>
          <img src="/public/logo.jpg" class="w-12 h-12" />
        </div>

        <div class="flex justify-center gap-8 text-white">
          <RouterLink to="/" class="text-base">Home</RouterLink>
          <RouterLink to="/men" class="text-base">Men</RouterLink>
          <RouterLink to="/women" class="text-base">Women</RouterLink>
          <RouterLink to="/about" class="text-base">About Us</RouterLink>
          <RouterLink to="/about" class="text-base">Contact Us</RouterLink>
          <RouterLink to="/about" class="text-base">Blog</RouterLink>
        </div>

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
          <RouterLink to="/about" @click="closeHam()">Blog</RouterLink>
        </div>

        <div @click="openHam()" class="z-50">
          <font-awesome-icon
            :icon="isHamOpened ? 'fa-xmark' : 'fa-bars'"
            :class="isHamOpened ? 'text-white' : 'text-red-600'"
            class="fa-xl"
          />
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
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
</script>

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
