<template>
  <div id="admin">
    <bandeau :title="'Gestion des clients'" />
    <navbarVert /> 
    <div id="content">
      <div class="title">Liste des clients <input type="text" placeholder="Rechercher un client"> </div>

      <customer :name='item.name' :id='item.id' v-for="(item, i) in customer" :key="i" />
    </div>
  </div>
</template>

<script>
import bandeau from '../components/admin/info_bandeau'
import navbarVert from '../components/admin/navbarVertical'
import customer from '../components/admin/customer'

export default {
  name: "Admin-Customer",
  components: {bandeau, navbarVert, customer},
  data(){
    return{
      customer:[
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
        {name: 'John DOE', id: 'DS546DQSe5'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#admin{ margin-top: -15vh; }
#content{
  min-height: 100vh;
  width: 80vw;
  padding-left: 13vw;
  padding-top: 5%;
  padding-bottom: 2%;
  .title{
    margin-bottom: 2%;
    font-size: 2em;
    font-weight: 500;
    input{
      margin-left: 20%;
      width: 60%;
      height: 3vh;
      border-radius: 2% / 50%;
      border: none;
      padding: 0.25% 2%;
      &:focus{
        outline: none;
      }
    }
  }
}
</style>