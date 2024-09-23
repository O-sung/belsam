<template>
  <div class="bg-[#aace48] text-white md:text-lg">
    <div class="mb-3 py-3 text-center">
      <div class="px-4" id="contact">
        <p>CONNECT WITH US</p>

        <ul class="flex gap-5 items-center justify-center">
          <li>
            <a
              href="https://instagram.com/belsampefumes?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2"
            >
              <font-awesome-icon icon="fa-brands fa-instagram" class="text-[#f05d5d]" />
              Instagram
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/@BELSAMPERFUME"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2"
            >
              <font-awesome-icon icon="fa-brands fa-youtube" class="text-[#f05d5d]" />
              YouTube
            </a>
          </li>
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
