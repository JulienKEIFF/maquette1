<template>
  <div id="admin">
    <navbarVert /> 
    <div id="content">
      <div class="title">Liste des clients</div>

      <customer :name='item.name' :id='item.id' v-for="(item, i) in customer" :key="i" />
    </div>
  </div>
</template>

<script>
import navbarVert from '../components/admin/navbarVertical'
import customer from '../components/admin/customer'

export default {
  name: "Admin-Customer",
  components: {navbarVert, customer},
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
  width: 80vw;
  padding-left: 13vw;
  padding-top: 2%;
  .title{
    margin-bottom: 2%;
  }
}
</style>