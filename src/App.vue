<template>
  <div id="app">
    
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
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

@media screen and (orientation: portrait){
  #app{
    padding-top: 14vh;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
