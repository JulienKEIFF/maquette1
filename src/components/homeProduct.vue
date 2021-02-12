<template>
  <div class="home-product">
    <img :src="getImg(productInfo.img)" alt="" class="image-product">
    <div class="price">
      <div class="price-text">
        {{productInfo.price}}
      </div>
      <div class="price-bg"></div>
    </div>
    <div class="info">
      <div class="text">
        {{productInfo.name | capitalize}}
        <br>
        <span>
          {{productInfo.desc}}
        </span>
        <br>
        <a class="link" href="/product">En savoir plus</a>
        <cart class="icon" color="#444444" />
      </div>

      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
import Card from './icon/cart-icon.vue'
export default {
  name: "home-product-list",
  props:{
    productInfo: Object
  },
  components: {
    Card
  },
  data(){
    return{

    }
  },
  methods:{
    getImg: function(item){
      return require(`../assets/img/${item}`)
    }
  }
}
</script>

<style scoped lang="scss">
.home-product{
  position: relative;
  width: 30%;
  height: 50vh;
  background: grey;
  margin-bottom: 2%;
  box-shadow: black 1% 1% 1%;
  .image-product{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .price{
    position: absolute;
    top: 0;
    right: 0;
    width: 6vw;
    height: 6vw;
    overflow: hidden;
    .price-bg{
      position: absolute;
      top: -1vw;
      right: -1vw;
      border-radius: 50%;
      height: 6vw;
      width: 100%;
      background: white;
      opacity: 0.8;
    }
    .price-text{
      position: absolute;
      top: 25%;
      right: 0%;
      z-index: 1;
      font-size: 1.5em;
      font-weight: bold;
      color: #444;
      width: 80%;
      text-align: center;
    }
  }
  .info{
    position: absolute;
    bottom: 0%;
    height: 10%;
    width: 100%;
    overflow: hidden;
    .bg{
      height: 100%;
      width: 100%;
      background: white;
      opacity: 0.8;
    }
    .text{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 150%;
      transition-duration: 0.5s;
      border-bottom: rgba(0, 0, 0, 0) 2px solid;
      span{
        position: absolute;
        top: 130%;
        height: 150%;
        text-align: center;
        font-size: 75%;
      }
      .link{
        text-align: center;
        position: absolute;
        bottom: -350%;
        width: 80%;
        height: 100%;
        text-decoration: none;
        color: #000;
        border: none;
        background: none;
        font-size: 1.2em;
        &:hover{
          color: #2c3e50;
          cursor: pointer;
        }
      }
    }
    transition-duration: 0.5s;
  }
  .icon {width: 10%; height: 10%;}
}
@media screen and (orientation: landscape){
.home-product:hover{
    .info{
      transition-duration: 0.5s;
      height: 40%;
      .text{
        transition-duration: 0.5s;
        height: 20%;
        border-bottom: black 2px solid;
      }
    }
  }
}

@media screen and (orientation: portrait){
  .home-product{
    position: relative;
    width: 90%;
    height: 20vh;
    margin-bottom: 2vh;
    background: rgb(245, 245, 245);
    .image-product{
      width: 40%;
    }
    .price{
      top: auto;
      bottom: 2%;
      right: 2%;
      width: 50%;
      height: 18%;
      display: flex;
      align-items: center;
      .price-bg{
        position: absolute;
        background: transparent;
      }
      .price-text{
        position: absolute;
        top: auto;
        width: 100%;
        text-align: right;
        font-size: 1.3em;
      }
    }
    .info{
      position: absolute;
      padding-top: 2%;
      top: 0%;
      right: 0;
      height: 100%;
      width: 60%;
      overflow: hidden;
      .bg{
        background: none;
      }
      .text{
        position: relative;
        left: 5%;
        transform: translateX(0%);
        width: 90%;
        height: 100%;
        justify-content: unset;
        align-items: unset;
        span{
          top: 17% !important;
          border-top: 1px solid black;
          padding-top: 3%;
          position: absolute;
          top: 25%;
          height: 67%;
          text-align: left;
          font-size: 0.65em;
        }
        .link{
          text-align: left;
          position: absolute;
          bottom: 10%;
          font-weight: bold;
          width: 80%;
          height: 10%;
          border: none;
          background: none;
          font-size: 0.7em;
        }
      }
    }
  }
}

</style>