<template>
  <div class="container">
    <div v-if="!plus" class="name">{{shop.name}}</div>
    <div v-if="!plus" class="address" v-html="shop.address"></div>

    <div v-if="!plus" class="actions">
      <button>Editer</button>
      <button class="red">Suprimmer</button>
    </div>

    <div v-if="plus" class="center">Ajouter une boutique</div>
  </div>
</template>

<script>
export default {
  name: "shop-card",
  props: ["shop", "plus"]
}
</script>

<style scoped lang="scss">
.container{
  position: relative;
  background: #fff;
  width: 14%;
  height: 28vh;
  margin: 0.5% 1%;
  padding: 1%;
  border-radius: 5%;
  .name{
    padding-bottom: 5%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    border-bottom: 1px solid black;
  }
  .address{
    margin-top: 5%;
    height: 50%;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .actions{
    position: absolute;
    bottom: 5%;
    right: 7%;
    width: 70%;
    button{
      margin: 0 2%;
      border-radius: 20vw / 20vw;
      padding: 3% 7%;
      border: none;
      transition: 0.2s;
      &:focus{
        outline: none;
      }
      &:hover{
        background: #4CAF50;
      }
    }
  }

  .center{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5em;
    cursor: pointer;
  }
}
.red:hover{background: rgb(236, 105, 105) !important;}
</style>