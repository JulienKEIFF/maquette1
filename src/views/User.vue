<template>
  <div id="client">
    <navbar />

    <div id="title">{{"Espace client"}}</div>
    <infoClient />
    
    <footer-vue />
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import FooterVue from '../components/footerVue.vue'
import infoClient from '../components/user/info'

export default {
  name: "user",
  components:{
    infoClient,
    Navbar,
    FooterVue
  }
}
</script>

<style scoped lang="scss">
#client{
  margin: 0 auto;
  #title{
    position: absolute;
    width: 90%;
    font-size: 4em;
    font-weight: lighter;
    margin-left: 5%;
    margin-bottom: 2%;
    padding-top: 2%;
    border-bottom: 2px solid #222222;
    color: #222222;
    z-index: 1;
  }
}
</style>