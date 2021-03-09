<template>
  <div class="product">
    <navbar />

    <filter-product />
    <product-achat />

    <footer-vue />
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import FooterVue from '../components/footerVue.vue'
import ProductAchat from '../components/productAchat.vue'
import filterProduct from '../components/filterProduct.vue'
export default {
  name: 'Product',
  components: {
    ProductAchat,
    filterProduct,
    Navbar,
    FooterVue
  }
}
</script>