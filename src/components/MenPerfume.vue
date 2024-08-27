<template>
  <div>
    <div>
      <div v-for="item in perfume" :key="item.id">
        <img :src="item.img" alt="Men Perfume" />
        <p>{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const perfume = [
  {
    id: 1,
    price: '$112',
    img: '/public/pef1.jpg'
  }
]
</script>

<style lang="scss" scoped></style>
