<template>
  <div id="admin">
    <navbarVert /> 
    <div id="content">
      Stock
    </div>
  </div>
</template>

<script>
import navbarVert from '../components/admin/navbarVertical'

export default {
  name: "Admin-Stock",
  components: {navbarVert}
}
</script>

<style scoped lang="scss">
#admin{ margin-top: -15vh; }
#content{
  width: 80vw;
  padding-left: 13vw;
}
</style>