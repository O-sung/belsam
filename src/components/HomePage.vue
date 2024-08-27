<template>
  <div>
    <div class="pt-14 md:flex">
      <div class="hero pt-56 pb-12 pl-8 w-full lg:pt-72 xl:pt-96">
        <div class="bg-[#aace48] bg-opacity-40 inline-block py-3 pl-2 pr-12">
          <p class="text-white text-lg">
            Fragrances <br />
            For special <br />
            Moment....
          </p>
        </div>
      </div>

      <div class="hero2 py-6 pl-4 w-full relative -z-10 xl:pt-10">
        <div class="mb-72 lg:mb-90">
          <p class="text-white">
            It's Okay To <br />
            Take Time For <br />
            Yourself
          </p>
        </div>

        <div class="absolute bottom-4 right-4">
          <RouterLink to="/about" class="text-white">ABOUT US &rarr;</RouterLink>
        </div>
      </div>
    </div>

    <div class="mx-auto lg:w-[90%] md:flex justify-center">
      <div class="md:flex-1">
        <img src="/public/bel.jpg" class="w-full object-top object-cover xl:h-[500px]" />
      </div>

      <div class="h-80 flex items-center justify-center px-8 md:flex-1 lg:h-auto lg:pl-8 lg:pr-0">
        <p class="font-semibold lg:text-lg lg:font-bold">
          A Bottle Of Perfume Holds Magic And Wonder, Making Every Moment Memorable And Every
          Presence Unforgetable.
        </p>
      </div>
    </div>

    <div>
      <div class="promise h-96 flex items-center lg:mb-8">
        <div class="w-4/5 mx-auto lg:w-[90%]">
          <h2 class="font-bold text-lg lg:text-3xl lg:mb-4">Our Promise:</h2>

          <p class="lg:text-xl lg:font-semibold">
            We believe that perfume is more than just a scent; it is an experience, a memory, a
            signature. With each bottle, we promise to deliver a product that enhances your
            individuality and leaves you feeling confident and beautiful.
          </p>
        </div>
      </div>

      <div class="probg"></div>
    </div>

    <!-- LATEST ARRIVAL -->
    <div class="mx-auto w-[90%]">
      <div class="mb-3 mt-4 lg:mb-6">
        <h2 class="sm:text-center lg:text-2xl">LATEST ARRIVAL</h2>
      </div>

      <div
        class="grid grid-cols-1 gap-6 sm:mx-auto sm:w-3/5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div v-for="item in latest" :key="item.id" class="shadow-lg px-3 py-2">
          <div>
            <img
              :src="item.latestImg"
              alt="Perfume Image"
              class="h-72 w-full object-cover md:h-64 xl:h-80"
            />
          </div>

          <div class="flex items-center justify-between mt-3">
            <div>
              <p class="text-base">{{ item.pefName }}</p>
            </div>

            <div>
              <p>{{ item.pefPrice }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <RouterLink to="/">SEE MORE &rarr;</RouterLink>
      </div>
    </div>

    <!-- Body Spray Collection -->
    <div class="collection relative mt-10 h-96 pt-16 px-6 md:pt-8">
      <div>
        <h2 class="font-bold text-4xl">Body Spray Collection</h2>
      </div>

      <div class="absolute bottom-4 right-6 flex gap-4">
        <RouterLink
          to="/men"
          class="bg-[#aace48] text-white py-1 px-4 rounded md:text-lg md:py-2 md:px-5"
          >MEN</RouterLink
        >
        <RouterLink
          to="/women"
          class="bg-[#e0b7b7] text-white py-1 px-4 rounded md:text-lg md:py-2 md:px-5"
          >WOMEN</RouterLink
        >
      </div>
    </div>

    <!-- BELSAM PERFUMES -->
    <div>
      <div class="">
        <img src="/public/belbg.jpg" alt="" class="w-full h-64 object-cover md:h-72 lg:h-96" />
      </div>
    </div>

    <!-- TESTIMONIALS -->
    <div></div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const latest = [
  {
    id: 1,
    latestImg: '/public/pef11.jpg',
    pefName: '24K',
    pefPrice: '$112'
  },
  {
    id: 2,
    latestImg: '/public/pef10.jpg',
    pefName: 'Colour Me',
    pefPrice: '$112'
  },
  {
    id: 3,
    latestImg: '/public/pef6.jpg',
    pefName: 'Wishbone',
    pefPrice: '$112'
  },
  {
    id: 4,
    latestImg: '/public/pef6.jpg',
    pefName: 'Wishbone',
    pefPrice: '$112'
  }
]
</script>

<style scoped>
.hero {
  background-image: url(/public/bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.hero2 {
  background-image: url(/public/bg2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.promise {
  background: linear-gradient(#ffffff7e, #ffffff85), url(/public/bel2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.collection {
  background-image: linear-gradient(#5c5252ad, #35313165), url(/public/female1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
