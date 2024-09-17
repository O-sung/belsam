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

      <div class="hero2 py-6 pl-4 w-full relative xl:pt-10">
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
        <div class="w-4/5 mx-auto lg:w-[40%] lg:ml-24">
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
        <h2 class="sm:text-center lg:text-2xl lg:text-left">LATEST ARRIVAL</h2>
      </div>

      <div
        class="grid grid-cols-1 gap-6 sm:mx-auto sm:w-3/5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-full"
      >
        <div v-for="item in perfume" :key="item.id" class="shadow-lg px-3 py-2">
          <div>
            <img
              :src="item.perfumeImg"
              alt="Perfume Image"
              class="h-72 w-full object-cover md:h-64 xl:h-80"
            />
          </div>

          <p class="mt-4">LATEST ARRIVAL</p>

          <div class="flex items-center justify-between mt-3">
            <div>
              <p class="text-base">{{ item.pefName }}</p>
            </div>

            <div>
              <p>{{ item.pefPrice }}</p>
            </div>
          </div>
        </div>

        <!-- <div v-for="item in perfume" :key="item.id" class="shadow-lg px-3 py-2">
          <div>
            <img
              :src="item.imgUrl"
              alt="Perfume Image"
              class="h-64 w-full object-cover md:h-64 xl:h-80"
            />
          </div>
          <p class="mt-4">MEN PERFUME</p>
          <div class="flex justify-between items-center mt-1 mb-3">
            <p>{{ item.price }}</p>
            <button>More Info</button>
          </div>
        </div> -->
      </div>

      <div class="mt-4">
        <RouterLink to="/latest">SEE MORE &rarr;</RouterLink>
      </div>
    </div>

    <!-- Body Spray Collection -->
    <div class="collection relative mt-10 h-96 pt-16 px-6 md:pt-8">
      <div>
        <h2 class="font-bold text-4xl text-white">Body Spray Collection</h2>
      </div>

      <div class="absolute bottom-4 right-6 flex gap-4">
        <RouterLink
          to="/men"
          class="bg-[#aace48] text-white py-1 px-4 rounded md:text-lg md:py-2 md:px-5"
          >MEN</RouterLink
        >
        <RouterLink
          to="/women"
          class="bg-[#f05d5d] text-white py-1 px-4 rounded md:text-lg md:py-2 md:px-5"
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
// import { ref, computed, onMounted } from 'vue'
// import axios from 'axios'

const perfume = [
  {
    id: 1,
    perfumeImg: '../public/pef11.jpg',
    pefName: '24K',
    pefPrice: '₦5,000'
  },
  {
    id: 2,
    perfumeImg: '../public/pef10.jpg',
    pefName: 'Colour Me',
    pefPrice: '₦5,000'
  },
  {
    id: 3,
    perfumeImg: '../public/pef6.jpg',
    pefName: 'Wishbone',
    pefPrice: '₦5,000'
  },
  {
    id: 4,
    perfumeImg: '../public/pef6.jpg',
    pefName: 'Wishbone',
    pefPrice: '₦5,000'
  }
]

// const perfumes = ref([])

// const fetchPerfumes = async () => {
//   try {
//     const response = await axios.get('/api/perfumes')
//     perfumes.value = response.data
//   } catch (error) {
//     console.error('Error fetching perfumes:', error)
//   }
// }

// onMounted(fetchPerfumes)
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
