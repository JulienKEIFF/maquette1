<template>
  <div class="carrousel">

    <div id="img-div" >
      <transition name="fade" mode="out-in">
        <img :src="getLogo(imgLink[page])" class="img" ref="img" v-if="show" />
      </transition>
        <img :src="page == imgLink.length-1 ? getLogo(imgLink[0]) : getLogo(imgLink[page+1])" class="next img" />
    </div>

    <h1 class="info-txt">{{ texte[page] | capitalize}}</h1>
    
    <div class="point-list">
      <div class="point" :class="i === page ? 'active' : ''" v-on:click="changePage(i)" v-for="(item, i) in imgLink" :key="i"></div>
    </div>
  </div>
</template>

<script>
let timeOutPage;
export default {
  name: "home-carrousel",
  data(){
    return{
      imgLink: ["img1.jpg", "img2.jpg", "img3.jpg"],
      texte: ["Promotion sur les pare-douches", ["Au coin du feu"], ["Reduction sur les encart de cheminé"]],
      first: true,
      page: 0,
      show: true
    }
  },
  methods:{
    getLogo:  function(item){
      return require(`../assets/img/${item}`);
    },
    paginate: function(){
      if(this.first){
        this.changePage(this.page);
        this.first = false;
      }else{
        this.changePage(this.page+1);
      }
      if(this.page === this.imgLink.length) this.page = 0;
      timeOutPage = setTimeout(this.paginate, 6000);
    },
    changePage: function(page){
      this.show = false;
      this.page = page;
      setTimeout(()=>{this.show = true}, 300);
    }
  },
  mounted: function(){
    this.paginate()
  }
}
</script>

<style scoped lang="scss">
.carrousel{
  position: relative;
  height: 60vh;
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  #img-div{
    height: 100%;
    width: 100%;
    .img{
      display: inline-block;
      position: relative;
      height: 100%;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      object-fit: cover;
    }
    .img.next{
      position: relative;
    }
  }
  .info-txt{
    transition-delay: 1s;
    transition-duration: 0.5s;
    position: relative;
    bottom: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 41%;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    color: #2c3e50;
  }
  .point-list{
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    .point{
      height: 1vw;
      width: 1vw;
      background: grey;
      border-radius: 50%;
      margin: 0 0.3vw;
      cursor: pointer;
    }
    .active{
      background: black;
    }
  }
  &:hover>.info-txt{
    bottom: 44%;
    transition-delay: 0s;
    transition-duration: 0.5s;
  }
}

@media screen and (orientation: portrait){
  .carrousel{
    width: 100vw;
    height: 35vh;
  }
  .point{
    height: 2vw !important;
    width: 2vw !important;
    margin: 0 1vw !important;
  }
  .info-txt{
    font-size: 1.2em;
    height: 40% !important;
    text-align: center;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>