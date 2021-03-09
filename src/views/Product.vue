<template>
  <div id="product-page">
    <navbar />

    <div id="body">

      <top />
      <similaire />
      <commentaire />

    </div>

    <footer-vue/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import footerVue from '../components/footerVue'
import top from '../components/product/product_top'
import similaire from '../components/product/similaire'
import commentaire from '../components/product/commentaire'
export default {
  name: 'Product',
  components: {
    navbar,
    footerVue,
    top,
    similaire,
    commentaire
  }
}
</script>
    FooterVue

<style lang="scss">
#body{
  position: relative;
  width: 90%;
  margin-left: 3%;
  background: white;
  padding: 2%;
}
</style>