<template>
  <div>
    <div>
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
      <hr />
    </div>

    <div class="text-center">
      <p>Copyright &copy; {{ currentYear }}. Powered by Belsam</p>
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
