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
        <div class="link">
          <a class="a-link" href="/product">En savoir plus</a> <br>
          <div class="icon-cart">
            <svg height="512pt" viewBox="0 -31 512.00026 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/><path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/><path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg>
          </div>
        </div>
        
      </div>

      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-product-list",
  props:{
    productInfo: Object
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
a{text-decoration: none; color: black; transition-duration: 0.5s;}
.icon-cart{width: 2vw; height: 2vw; margin-left: 3%; }
.icon-cart svg{height: 100%; width: 100%;}
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
        display: flex;
        text-align: center;
        position: absolute;
        bottom: -300%;
        width: 80%;
        height: 100%;
        border: none;
        background: none;
        font-size: 120%;
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