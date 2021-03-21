<template>
  <div id="admin">
    <bandeau :title="'Gestion des magasins'" />
    <navbarVert /> 
    <div id="content">
      <shopCard v-for="(shop, i) in shops" :key="i" :shop="shop" />
      <shopCard :plus="true" />
    </div>
  </div>
</template>

<script>
import bandeau from '../components/admin/info_bandeau'
import navbarVert from '../components/admin/navbarVertical'
import shopCard from '../components/admin/shop_card'

export default {
  name: "Admin-Shop",
  components: {bandeau, navbarVert, shopCard},
  data(){
    return{
      shops: [
        {name: "Lilles", address: "22 rue du Général XXX<br>59XXX<br>Lille"},
        {name: "Versaille", address: "53 Avenue des nations<br>78XXX<br>Versaille"},
        {name: "Toulon", address: "2 rue Jeanne d'Arc<br>83XXX<br>Toulon"},
        {name: "Bordeaux", address: "22 rue du Général XXX<br>59XXX<br>Lille"},
        {name: "Nantes", address: "22 rue du Général XXX<br>59XXX<br>Lille"},
        {name: "Lyon", address: "22 rue du Général XXX<br>59XXX<br>Lille"}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#admin{ margin-top: -15vh; }
#content{
  min-height: 90vh;
  padding-top: 5%;
  width: 80vw;
  padding-left: 13vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>