<template>
  <div id="navbar">
    
    <div id="info">
      <input type="text" name="search" id="search" placeholder="Rechercher un produit"> <label for="search"></label>
      <p class="click" v-for="item in info" :key="item">{{ item }}</p>
    </div>
  
    <div id="nav">
      <p class="page" v-for="(item, i) in page" :key="item" v-on:click="checkPath(i)">{{ item | uppercase }} <span class="bar"></span> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data(){
    return{
      info: ["Retrait des produit sous 2H", "Trouver un point de retrait", "Suivis de commande", "S'identifier", "Panier"],
      page: ["LOGO", "Espace Pare-douche", "Espace Cloison et parois", "Espace cheminée"]
    }
  },
  methods: {
    checkPath: function(value){
      if(value == 0 && this.$route.path !== "/") { this.$router.push({ path: '/' }) };
      if(value == 1) { this.$router.push({ path: '/product' }) };
    }
  }
}
</script>

<style scoped lang="scss">
  #navbar{
    width: 100vw;
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #eee;
    #info{
      height: 2vh;
      padding: 10px 0px;
      margin-right: 50px;
      width: 98.5%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      #search{
        position: absolute;
        left: 5%;
        border-radius: 3% 3% 3% 3% / 50% 50% 50% 50% ;
        border: none;
        width: 20vw;
        height: 20%;
        &::placeholder{
          padding-left: 3%;
        }
      }
      .click{
        display: flex;
        align-items: center;
        margin: 0;
        padding-right: 0.5%;
        padding-left: 0.5%;
        border-left: 1px solid black;
        font-size: 90%;
        cursor: pointer;
        &:first-of-type{
          border: none;
        }
        &:hover{
          color: #6b6b6b;
        }
      }
    }
    #nav{
      width: 100%;
      height: 7vh;
      background: white;
      display: flex;
      flex-direction: row;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
      .page{
        justify-content: center;
        position: relative;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0 1%;
        margin: 0 0.5%;
        font-size: 2.5vh;
        cursor: pointer;
        &:hover>.bar{
          transition-duration: 0.2s;
          width: 100%;
          opacity: 1;
        }
        &:first-of-type{
          margin-left: 5%;
        }
        .bar{
          transition-duration: 0.2s;
          background: black;
          position: absolute;
          width: 0%;
          opacity: 0;
          height: 4%;
          bottom: 20%;
        }
      }
    }
  }
</style>