<template>
  <div class="product">
    <filter-product />
    <product-achat />
  </div>
</template>

<script>
import ProductAchat from '../components/productAchat.vue'
import filterProduct from '../components/filterProduct.vue'

export default {
  name: 'Product',
  components: {
    ProductAchat,
    filterProduct
  }
}
</script>
