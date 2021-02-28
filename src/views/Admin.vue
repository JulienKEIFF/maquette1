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

<style scoped lang="scss">
#admin{ margin-top: -15vh; height: 100%;}
#content{
  width: 80vw;
  padding-left: 13vw;
}
</style>