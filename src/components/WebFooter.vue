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
    </div>

    <div>
      <p>Copyright &copy; {{ currentYear }}</p>
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
