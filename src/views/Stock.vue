<template>
  <div id="admin">
    <bandeau :title="'Gestion des stocks'" />
    <navbarVert /> 
    <div id="content">
      Stock
    </div>
  </div>
</template>

<script>
import bandeau from '../components/admin/info_bandeau'
import navbarVert from '../components/admin/navbarVertical'

export default {
  name: "Admin-Stock",
  components: {bandeau, navbarVert}
}
</script>

<style scoped lang="scss">
#admin{ margin-top: -15vh; }
#content{
  min-height: 100vh;
  width: 80vw;
  padding-left: 13vw;
  padding-top: 5%;
}
</style>