<template>
  <div id="commentaire">
      <h1>Commentaires produits</h1>
      <div id="container-comm">
          <comm 
          :pseudo="'Julien'" 
          :message="'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores error dicta omnis consequatur ea fuga dolores pariatur vitae eum, similique saepe commodi, ipsam quo deleniti. Atque dignissimos facere odit quo.'"
          :note="3"
          :date="'Le 20 Janvier 2021'" />
      </div>
  </div> 
</template>

<script>
import comm from './comm'

export default {
    name: "commentaire",
    components: {
        comm
    }
}
</script>

<style scoped lang="scss">
#commentaire{
    margin-top: 10vh;
    h1{
        font-size: 2em;
    }
    #container-comm {
        display: flex;
        gap: 1%;
        justify-content: space-between;
    }
}
</style>