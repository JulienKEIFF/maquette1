<template>
  <div id="admin">
    <bandeau :title="'Administration'" />
    <navbarVert /> 
    <div id="content">
      <chart />
    </div>
  </div>
</template>

<script>
import bandeau from '../components/admin/info_bandeau'
import navbarVert from '../components/admin/navbarVertical'
import chart from '../components/admin/chart'

export default {
  name: "Admin",
  components: {bandeau, navbarVert, chart}
}
</script>

<style scoped lang="scss">
#admin{ margin-top: -15vh; height: 100%;}
#content{
  min-height: 100vh;
  width: 80vw;
  padding-left: 13vw;
}
</style>