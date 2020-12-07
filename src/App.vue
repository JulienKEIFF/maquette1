<template>
  <div id="app">
    <navbar />
    <router-view/>
    <footer-vue />
  </div>
</template>

<script>
import FooterVue from './components/footerVue.vue'
import Navbar from './components/navbar.vue'
export default {
  components:{
    Navbar,
    FooterVue
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
  padding-bottom: 0;
}
#app {
  padding-top: 15vh;
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  background: #eee;
  width: 100%;
  height: 100%;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
