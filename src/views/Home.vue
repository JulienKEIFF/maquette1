<template>
  <div class="home">
    <home-carrousel />
    <home-list-product />
  </div>
</template>

<script>
import HomeCarrousel from '../components/homeCarrousel.vue'
import HomeListProduct from '../components/homeListProduct.vue'

export default {
  name: 'Home',
  components: {
    HomeCarrousel,
    HomeListProduct
  }
}
</script>
