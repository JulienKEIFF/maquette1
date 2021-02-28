<template>
  <div id="admin">
    <navbarVert /> 
    <div id="content">
      <chart />
    </div>
  </div>
</template>

<script>
import navbarVert from '../components/admin/navbarVertical'
import chart from '../components/admin/chart'

export default {
  name: "Admin",
  components: {navbarVert, chart}
}
</script>

<style>
#app{
  padding-top: 0;
  height: 120vh;
}
#content{
  width: 80vw;
  padding-left: 13vw;
}
</style>