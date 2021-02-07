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
        <div class="bar" style="background: #333; height: 2px; margin-left: 2vw"></div>

        <div id="parameters">
          <button class="btn-parameter">Voir mes informations personnel</button>
          <button class="btn-parameter">Changer mon magasin par défaut</button>
        </div>
      </div>
      
    </div>

    <div class="right">
      <div class="section">
        <div class="title">Votre dernière commandes</div>
        <div class="sub-title">20 Janvier 2021 - {{cost}}€  <button class="btn">Voir la facture</button></div>
        
        <div class="last-checkout"> 
           <card class="card" v-for="(item, i) in lastCheckout" :key="i" :data="item" fontSize="150%" :background="true" :margin='0' />
        </div>

      </div>

      <div class="section">
        <div class="title">Vos anciennes commandes</div>
        <div class="sub-title">16 Décembre 2020 - {{cost}}€ <button class="btn">Voir la facture</button></div>
        
        <div class="last-checkout"> 
           <card class="card" v-for="(item, i) in lastCheckout" :key="i" :data="item" fontSize="150%" :background="true" :margin='0' />
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
  position: relative;
  height: 100%;
  width: 90vw;
  margin-top: 0%;
  padding: 2vw;
  padding-top: 10%;
  left: 2.5vw;
  display: flex;
  background: #FFF;
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
      position: relative;
      font-size: 2em;
    }
    .sub-title{
      margin-top: 2%;
      font-size: 1.5em;
      position: relative;
    }
  }

  .section{
    margin-top: 5%;
    &:first-of-type{
      margin-top: 1%;
    }
  }

  .bar{
    display: inline-block;
    position: relative;
    width: 80%; 
    background: #000;
    height: 10%;
  }

  .btn{
    position: absolute;
    display: inline-block;
    background: #ddd;
    height: 100%;
    width: 15%;
    right: 2%;
    top: 0;
    border-radius: 10% / 50%;
    border: none;
    transition-duration: 0.2s;
    font-size: 0.6em;
    padding: 0.2% 0;
    cursor: pointer;
    &:active {
      background: #ccc;
    }
    &:focus{
      outline: none;
    }
  }

  #parameters{
    position: relative;
    height: 20vh;
    width: 80%;
    margin-left: 2vw;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    align-content: center;
    .btn-parameter{
      display: inline-block;
      background: #ddd;
      margin: 0 auto;
      margin-bottom: 4%;
      height: 5vh;
      width: 75%;
      top: 0;
      border-radius: 7% / 50%;
      border: none;
      transition-duration: 0.2s;
      font-size: 1.2em;
      padding: 0.2% 0;
      cursor: pointer;
      &:active {
        background: #ccc;
      }
      &:focus{
        outline: none;
      }
    }
  }
}
</style>