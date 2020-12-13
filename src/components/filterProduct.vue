<template>
  <div id="filter">

    <div class="title">Recherche avancé:</div>
  
  <div id="filter-group">
    <div class="block">
      <label for="search">Rechercher dans cette catégorie</label>
      <input type="text" name="search" placeholder="Ex: douche">
    </div>  

    <div class="block">
      <label for="price">Prix</label>
      <div>
        <input class="input-number" type="number" name="price" placeholder="0 €"> - <input class="input-number" type="number" name="price" placeholder="2000 €">
      </div>
    </div>

    <div class="block validate">
      <div class="center">
        <label for="avaible">Produit disponible uniquement</label>
        <input type="checkbox" name="avaible">
      </div>
    </div>

    <div class="block validate">
      <button class="btn">Valider les critères</button>
    </div>
  </div>
  
  </div>
</template>

<script>
export default {
  name: "filter-product",
  data(){
    return{
      searchInput: "",
      priceMinInput: "",
      priceMaxInput: "",
      availableOnlyInput: false
    }
  }
}
</script>

<style scoped lang="scss">
#filter{
  margin: 0 auto;
  margin-top: 0%;
  padding: 1% 0;
  width: 80vw;
  background: #ffffff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  .title{
    width: 96%;
    padding-bottom: 0.5%;
    margin-left: 2%;
    font-size: 1.5em;
    margin-bottom: 2%;
    border-bottom:#a1a1a1 1px solid;
  }
  #filter-group{
    display: flex;
    justify-content: space-around;
    .block{
      padding: 0 2%;
      width: 33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-right: 1px #a1a1a1 solid;
      label{
        margin-bottom: 1%;
        margin-right: 2%;
      }
      input{
        border: #a1a1a1 1px solid;
      }
      &:last-of-type{
        border: none;
      }
    }
    .validate{
      width: 20%;
    }
  }
}
</style>