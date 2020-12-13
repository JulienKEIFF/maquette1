<template>
  <div class="cart-item">
    
    <div class="info">
      <img :src="getImg(data.img)" class="item-img" >

      <div class="item-name">
        {{data.name}}
      </div>

      <div class="item-quantity">
        X{{data.qte}}
      </div>

      <div class="item-price">
        {{data.price}} €
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props:{
    data: Object
  },
  methods:{
    getImg: function(item){
      return require(`../assets/img/${item}`)
    }
  }
}
</script>

<style scoped lang="scss">
.cart-item{
  position: relative;
  height: 5vh;
  margin: 1% 0;
  width: 100%;
  .info{
    height: 100%;
    display: flex;
    align-items: center;
    .item-img{
      height: 100%;
      width: 15%;
      object-fit: cover;
      margin-right: 2%;
    }
    .item-name{
      width: 55%;
    }
    .item-quantity{
      width: 7%
    }
    .item-price{
      width: 20%;
      text-align: right;
    }
  }
}
</style>