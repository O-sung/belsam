<template>
  <div class="bg-[#aace48] text-white">
    <div class="mb-3 py-3 flex">
      <div>
        <p>COMPANY</p>
        <ul>
          <li>About Us</li>
          <li>About Us</li>
        </ul>
      </div>

      <div>
        <p>CONNECT WITH US</p>
        <ul>
          <li>About Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
    <hr />

    <div class="text-center py-1">
      <p class="text-xs">Copyright &copy; {{ currentYear }}. Powered by Belsam</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style></style>
