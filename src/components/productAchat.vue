<template>
  <div id="product-page">
    <home-product class="product-item" v-for="product in productList" :key="product.id" :productInfo="product" />
  </div>
</template>

<script>
import homeProduct from './homeProduct'
export default {
  name: "product-achat",
  components:{
    homeProduct
  },
  data() {
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
#product-page{
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
}

@media screen and (orientation: portrait) {
  #product-page {
    width: 90%;
  }
}
</style>