<template>
  <div id="similaire">
      <h1>Nos produits similaire</h1>
      <div id="container-simi">
          <item class="product-item" :productInfo="product" />
          <item class="product-item" :productInfo="product2" />
          <item class="product-item" :productInfo="product" />
      </div>
  </div>
</template>

<script>
import item from '../homeProduct'
export default {
    name: "similaire",
    components: {
        item
    },
    data(){
        return{
            product: {
                name: "Produit 2",
                id: 0,
                img: "img2.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.",
                price: "120€"
            },
            product2: {
                name: "Produit 3",
                id: 0,
                img: "img3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum turpis et.",
                price: "350€"
            }
        }
    }
}
</script>

<style scoped lang="scss">
#similaire{
    margin-top: 10vh;
    h1{
        font-size: 2em;
    }
    #container-simi {
        display: flex;
        gap: 1%;
        justify-content: space-between;
    }
}
</style>