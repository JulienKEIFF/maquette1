<template>
  <div id=info-client>
    <div class="left">
      <div id="logo-client">
        <svgAccount class="logo" color="#444" />
        <span class="name">John Doe</span>
        <span class="city">
          <svgPin class="pin" color="#444" />
          Lille
        </span>
      </div>
      
    </div>

    <div class="right">
      <div class="section">
        <div class="title">Votre dernière commandes - {{cost}}€</div>
        
        <div class="last-checkout"> 
           <card v-for="(item, i) in lastCheckout" :key="i" :data="item" fontSize="150%" :background="true" :margin='0' />
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import svgAccount from "./account-svg"
import svgPin from "./pin-svg"
import Card from '../cartItem'

export default {
  name: "clientinfo",
  components:{
    svgAccount,
    svgPin,
    Card
  },
  data(){
    return{
      lastCheckout: [{
        name: "Produit 1 | 207cm x 100cm",
        img: "img3.jpg",
        qte: 2,
        price: 115.99
      },{
        name: "Produit 3 | Coloris 2",
        img: "img1.jpg",
        qte: 1,
        price: 16.99
      },{
        name: "Produit 2 | 39cm x 25cm",
        img: "img2.jpg",
        qte: 5,
        price: 19.99
      }],
      cost: 0
    }
  }, 
  methods:{
    calcCost: function calcCost(){
      for (let i = 0; i < this.lastCheckout.length; i++) {
        const product = this.lastCheckout[i];
        this.cost = this.cost + (product.price * product.qte);
      }
      this.cost = Math.round(this.cost * 100) / 100;
    }
  },
  mounted: function(){
    this.calcCost();
  }
}
</script>

<style scoped lang="scss">
#info-client{
  height: 100%;
  width: 97.5%;
  margin-top: 5%;
  padding-bottom: 2%;
  display: flex;
  .left{
    width: 33%;
    #logo-client{
      width: 100%;
      .logo{
        width: 50%;
        margin: 0 auto;
      }
    }
    .name{
      display: inline-block;
      margin-top: 5%;
      width: 100%;
      text-align: center;
      font-size: 2em;
      font-weight: bold;
    }
    .city{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      font-size: 2em;
      .pin{
        width: 7%;
        margin-right: 2%;
        display: inline-block;
      }
    }
  }

  .right{
    margin-left: 2%;
    width: 73%;
    .title{
      font-size: 2em;
    }
  }
}
</style>