<template>
  <div class="bg-[#aace48] text-white">
    <div class="mb-3 py-3 flex">
      <div class="px-4">
        <p>CONNECT WITH US</p>
        <ul class="flex gap-5">
          <li>
            <a href="https://instagram.com/belsampefumes?igshid=NTc4MTIwNjQ2YQ==">Instagram</a>
          </li>
          <li><a href="https://www.youtube.com/@BELSAMPERFUME">YouTube</a></li>
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
