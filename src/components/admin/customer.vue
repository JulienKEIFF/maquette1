<template>
  <div class="container">
    <div class="name">{{name}}</div>
    <div class="id">{{id}}</div>

    <div class="infos">
      <button>Voir le profil</button>
      <button>Voir les commandes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customer-item',
  props: ['name', 'id'],
}
</script>

<style scoped lang="scss">
.container{
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  height: 5vh;
  border-radius: 10vw / 10vw;
  margin-bottom: 1%;
  div{
    display: inline-block;
    margin: 0 1%; 
  }
  .infos{
    position: absolute;
    right: 0;
    width: 18%;
    button{
      margin: 0 2%;
      border-radius: 20vw / 20vw;
      padding: 2% 5%;
      border: none;
      transition: 0.2s;
      &:focus{
        outline: none;
      }
      &:hover{
        background: #4CAF50;
        color: white;
      }
    }
  }
}
</style>