<template>
  <div class="vertical-menu">
    <a>|||</a>
    <a href="/admin" :class="$route.path == '/admin' ? 'active' : '' ">Accueil</a>
    <a href="/admin/customer" :class="$route.path == '/admin/customer' ? 'active' : '' ">Gestion Client</a>
    <a href="/admin/stock" :class="$route.path == '/admin/stock' ? 'active' : '' ">Gestion des stocks</a>
    <a href="/admin/shop" :class="$route.path == '/admin/shop' ? 'active' : '' ">Gestion des magasins</a>
    <a href="/" :class="false ? 'active' : '' " id="end">Retour au site</a>
  </div>
</template>

<script>
export default {
  name: 'navbarVert',
}
</script>

<style scoped lang="scss">
.vertical-menu { width: 10vw; position: fixed; z-index: 2; margin-top: 3.8%; height: 100vh; background-color: #ddd }

.vertical-menu a {
  background-color: #ddd;
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

#end{margin-top: 65vh; }
</style>