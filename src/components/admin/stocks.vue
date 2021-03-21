<template>
  <div id="tab">
      <div class="top">
          <div class="img"> Image de l'article </div>
          <div class="name">{{top.name}}</div>
          <div class="shop">{{top.shop}}</div>
          <div class="qte">{{top.qte}}</div>
          <div class="qte">Lien vers l'article</div>
      </div>

      <div class="content">
          <div class="line" v-for="(line, i) in content" :key="i">
              <div class="img"> <img :src="getLogo(line.image)" /> </div>
              <div class="name">{{line.name}}</div>
              <div class="shop">{{line.shop}}</div>
              <div class="qte">{{line.qte}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "stock-tab",
    props: ["top", "content"],
    methods: {
        getLogo:  function(item){
            return require(`../../assets/img/${item}`);
        }
    }
}
</script>

<style scoped lang="scss">
#tab{
    .top{
        display: flex;
        margin-bottom: 1%;
        .img, .name, .shop, .qte {width: 20%; text-align: center;}
    }
    .content{
        .line{
            display: flex;
            height: 10vh;
            padding: 0.5%;
            .img, .name, .shop, .qte {display: flex; width: 20%; justify-content: center; text-align: center; align-items: center; }
        }
    }
}
.line:nth-child(odd){background: #ddd;}
img{width: 50%; height: 90%; object-fit: cover;}
</style>