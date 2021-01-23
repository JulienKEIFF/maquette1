<template>
  <div class="home">
    <navbar />

    <home-carrousel />
    <home-list-product />
    
    <footer-vue />
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import FooterVue from '../components/footerVue.vue'
import HomeCarrousel from '../components/homeCarrousel.vue'
import HomeListProduct from '../components/homeListProduct.vue'

export default {
  name: 'Home',
  components: {
    HomeCarrousel,
    HomeListProduct,
    Navbar,
    FooterVue
  }
}
</script>
