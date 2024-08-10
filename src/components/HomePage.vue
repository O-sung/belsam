<template>
  <div>
    <div class="pt-14">
      <div class="hero pt-56 pb-12 pl-8 h-96">
        <div class="bg-[#aace48] bg-opacity-40 inline-block py-3 pl-2 pr-12">
          <p class="text-white text-lg">
            Fragrances <br />
            For special <br />
            Moment....
          </p>
        </div>
      </div>

      <div class="hero2 py-6 pl-4 h-96 relative -z-10">
        <div class="">
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

    <div>
      <div>
        <img src="/bel.jpg" />
      </div>

      <div class="h-80 flex items-center justify-center px-8">
        <p class="font-semibold">
          A Bottle Of Perfume Holds Magic And Wonder, Making Every Moment Memorable And Every
          Presence Unforgetable.
        </p>
      </div>
    </div>

    <div class="promise h-96 flex items-center">
      <div class="w-4/5 mx-auto">
        <h2 class="font-bold text-lg">Our Promise:</h2>

        <p>
          We believe that perfume is more than just a scent; it is an experience, a memory, a
          signature. With each bottle, we promise to deliver a product that enhances your
          individuality and leaves you feeling confident and beautiful.
        </p>
      </div>
    </div>

    <!-- LATEST ARRIVAL -->
    <div>
      <div>
        <h2>LATEST ARRIVAL</h2>
      </div>

      <div class=''>
        <div>
          <div>
            <img src='' alt='' />
          </div>

          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Body Spray Collection -->
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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
</style>
