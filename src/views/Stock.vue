<template>
  <div id="admin">
    <bandeau :title="'Gestion des stocks'" />
    <navbarVert /> 
    <div id="content">
      <stock :top="top" :content="content" />
    </div>
  </div>
</template>

<script>
import bandeau from '../components/admin/info_bandeau'
import navbarVert from '../components/admin/navbarVertical'
import stock from '../components/admin/stocks'

export default {
  name: "Admin-Stock",
  components: {bandeau, navbarVert, stock},
  data(){
    return{
      top: {name: "Nom de l\'article", shop: 'Magasin de référence', qte: 'Quantité'},
      content: [
        { image: 'img1.jpg', name: 'Article 1', shop: 'LYON, TOULON', qte: '103' },
        { image: 'img2.jpg', name: 'Article 2', shop: 'TOULON, LILLES, NANTES', qte: '156' },
        { image: 'img3.jpg', name: 'Article 3', shop: 'TOULON', qte: '13' },
        { image: 'img4.jpg', name: 'Article 4', shop: 'LILLES, VERSAILLE, TOULON, BORDEAUX, NANTES, LYON', qte: '350' },
        { image: 'img5.jpg', name: 'Article 5', shop: 'NANTES, LYON', qte: '46' },
        { image: 'img3.jpg', name: 'Article 6', shop: 'LYON', qte: '52' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#admin{ margin-top: -15vh; }
#content{
  min-height: 86vh;
  width: 80vw;
  padding-left: 13vw;
  padding-top: 7%;
}
</style>