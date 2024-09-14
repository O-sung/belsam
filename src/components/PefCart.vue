<template>
  <div class="container mx-auto pt-16 p-2">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

    <div v-if="cartItems.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="border-b-2 pb-2 text-left">Product</th>
              <th class="border-b-2 pb-2 text-left">Quantity</th>
              <th class="border-b-2 pb-2 text-left">Price</th>
              <th class="border-b-2 pb-2 text-left">Remove</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index" class="border-b">
              <td class="py-4">
                <div class="flex items-center">
                  <img :src="item.image" alt="Perfume" class="h-16 w-16 object-cover mr-4" />
                  <!-- Display the appropriate product name -->
                  <span>{{ getProductName(item) }}</span>
                </div>
              </td>

              <td class="py-4">{{ item.quantity }}</td>

              <td class="py-4">{{ item.price }}</td>

              <td class="py-4">
                <button
                  @click="removeFromCart(item)"
                  class="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Cart Summary -->
      <div class="p-4 border border-gray-200 rounded">
        <h2 class="text-2xl font-bold mb-4">Cart Summary</h2>
        <p class="mb-4">Total Items: {{ totalItems }}</p>
        <p class="mb-4">Total Price: ₦{{ totalPrice.toFixed(2) }}</p>
        <button class="bg-green-600 text-white px-6 py-2 rounded" @click="proceedToCheckout">
          Place your Order
        </button>
      </div>
    </div>

    <div v-else class="text-center">
      <h2 class="text-2xl">Your cart is empty.</h2>
      <RouterLink to="/men" class="text-blue-500 underline mt-4 inline-block">
        Continue Shopping
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Cart items stored in localStorage
const cartItems = ref([])

// Fetch cart items from localStorage
const getCartItems = () => {
  cartItems.value = JSON.parse(localStorage.getItem('cart')) || []
}

// Remove an item from the cart
const removeFromCart = (itemToRemove) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== itemToRemove.id)
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
  updateCartData()
}

// Get the correct product name based on its type (men, women, or latest)
const getProductName = (item) => {
  if (item.menName) {
    return item.menName
  } else if (item.womenName) {
    return item.womenName
  } else if (item.latestName) {
    return item.latestName
  }
  return 'Unknown Product'
}

// Compute total items and total price
const totalItems = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0)
})

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    // Ensure price exists and is a valid string
    const itemPrice = item.price ? item.price.replace(/[₦,]/g, '') : '0'
    return total + parseFloat(itemPrice) * item.quantity
  }, 0)
})

// Function to update cart data in localStorage
const updateCartData = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
}

// Fetch the cart items when the page loads
onMounted(() => {
  getCartItems()
})

// WhatsApp Number of the seller (in international format)
const whatsappNumber = '+2349030756031'

// Proceed to checkout action (Send WhatsApp Message)
const proceedToCheckout = () => {
  if (cartItems.value.length > 0) {
    // Create a message with all the items in the cart
    let message = `Order Summary:\n\n`
    cartItems.value.forEach((item) => {
      const productName = getProductName(item)
      message += `Product: ${productName}\nQuantity: ${item.quantity}\nPrice: ${item.price}\n\n`
    })
    message += `Total Price: ₦${totalPrice.value.toFixed(2)}\n\nThank you!`

    // WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
  } else {
    alert('Your cart is empty. Please add some items before proceeding to checkout.')
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

th,
td {
  padding: 8px;
}
</style>
