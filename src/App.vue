<template>
  <div id="app">
    <navbar />

    <transition name="fade">
      <router-view></router-view>
    </transition>

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
