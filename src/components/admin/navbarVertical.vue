<template>
  <div class="vertical-menu">
    <a>|||</a>
    <a href="/admin" :class="$route.path == '/admin' ? 'active' : '' ">Acceuil</a>
    <a href="/admin/customer" :class="$route.path == '/admin/customer' ? 'active' : '' ">Gestion Client</a>
    <a href="/admin/stock" :class="$route.path == '/admin/stock' ? 'active' : '' ">Gestion des stocks</a>
    <a href="/admin/shop" :class="$route.path == '/admin/shop' ? 'active' : '' ">Gestion des magasins</a>
    <a href="/" :class="false ? 'active' : '' ">Retour au site</a>
  </div>
</template>

<script>
export default {
  name: 'navbarVert',
  mounted: function(){
    console.log(this.$route)
  }
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