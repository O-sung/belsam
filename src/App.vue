<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed w-full">
    <div class="bg-[#e0b7b7] bg-opacity-100 py-2 px-3">
      <nav class="hidden lg:block">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Perfume</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/about">Contact Us</RouterLink>
        <RouterLink to="/about">Blog</RouterLink>

        <div>
          <input type="text" placeholder="Search All Items" />
          <button class="px-3 rounded-full bg-[#aace48]" id="search-btn">SEARCH</button>
        </div>
      </nav>

      <nav class="flex items-center justify-between lg:hidden">
        <div>
          <img src="/public/logo.jpg" alt="LOGO" class="w-10 h-10" />
        </div>

        <div
          class="text-base w-full absolute flex flex-col items-center gap-8 bg-[#e0b7b7] top-0 left-0 pt-20 pb-32 ease-in duration-300"
          :class="isHamOpened ? 'top-0' : 'top-[-1000%]'"
        >
          <RouterLink to="/" @click="closeHam()">Home</RouterLink>
          <RouterLink to="/about" @click="closeHam()">Perfume</RouterLink>
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
  color: #aace48;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}
</style>
