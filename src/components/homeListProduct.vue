<template>
  <div id="home-list-product">
    <h1>Nos meilleurs ventes </h1>
    <home-product class="product-item" v-for="product in productList" :key="product.id" :productInfo="product" />

    <h1>Nos produits phares</h1>
    <home-product class="product-item" v-for="product in productList" :key="product.id" :productInfo="product" />
  </div>
</template>

<script>
import homeProduct from './homeProduct.vue'
export default {
  components: { homeProduct },
  name: "home-product-list",
  data(){
    return{
      productList: [{
        name: "Produit 1",
        id: 0,
        img: "img1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.",
        price: "35€"
      },
      {
        name: "Produit 2",
        id: 1,
        img: "img2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.",
        price: "120€"
      },
      {
        name: "Produit 3",
        id: 2,
        img: "img3.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.",
        price: "120€"
      },
      {
        name: "Produit 4",
        id: 3,
        img: "img1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.",
        price: "120€"
      },
      {
        name: "Produit 5",
        id: 4,
        img: "img2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.",
        price: "120€"
      },
      {
        name: "Produit 6",
        id: 5,
        img: "img3.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.",
        price: "1200€"
      }]
    }
  }
}
</script>

<style scoped lang="scss">
#home-list-product{
  margin: 0 auto;
  margin-top: 2%;
  padding-top: 1%;
  width: 80vw;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 1 1 30%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  h1 {
    flex: 1 1 70%;
    margin-left: 2%;
    margin-right: 2.2%;
    font-size: 2.5em;
    border-bottom: 0.3vh solid black;
  }
}

@media screen and (orientation: portrait) {
  #home-list-product{
    width: 95vw;
    padding-top: 4%;
  }
}
</style>