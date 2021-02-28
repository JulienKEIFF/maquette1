<template>
  <div class="vertical-menu">
    <a>|||</a>
    <a href="#" :class="true ? 'active' : '' ">Acceuil</a>
    <a href="#" :class="false ? 'active' : '' ">Gestion Client</a>
    <a href="#" :class="false ? 'active' : '' ">Gestion des stocks</a>
    <a href="#" :class="false ? 'active' : '' ">Gestion des magasins</a>
    <a href="#" :class="false ? 'active' : '' ">Retour au site</a>
  </div>
</template>

<script>
export default {
  name: 'navbarVert'
}
</script>

<style scoped lang="scss">
.vertical-menu { width: 10vw; position: fixed; }

.vertical-menu a {
  background-color: #eee;
  color: black;
  display: block;
  padding: 12px; 
  text-decoration: none;
}

.vertical-menu a:hover {
  background-color: #ccc;
}

.vertical-menu a.active {
  background-color: #4CAF50;
  color: white;
}
</style>