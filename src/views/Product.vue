<template>
  <div class="product">
    <product-achat />
  </div>
</template>

<script>
import ProductAchat from '../components/productAchat.vue'
// @ is an alias to /src

export default {
  name: 'Product',
  components: {
    ProductAchat
  }
}
</script>
