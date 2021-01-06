<template>
  <div id="client">
    <div id="title">{{"Espace client"}}</div>
    
    <infoClient />
  </div>
</template>

<script>
import infoClient from '../components/user/info'

export default {
  name: "user",
  components:{
    infoClient,
  }
}
</script>

<style scoped lang="scss">
#client{
  background: white;
  width: 93vw;
  margin: 0 auto;
  #title{
    width: 95%;
    font-size: 4em;
    font-weight: lighter;
    margin-left: 2%;
    margin-bottom: 2%;
    padding-top: 2%;
    border-bottom: 2px solid #222222;
    color: #222222;
  }
}
</style>