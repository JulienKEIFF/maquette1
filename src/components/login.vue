<template>
  <div id="cart">
    <div id="triangle"></div>
    <div id="title">{{"Identification"}}</div>
    
    <div id="form">
      <label for="username">Nom d'utilisateur</label> <br>
      <input name="username" type="text"> <br>
      <label for="username" class="password">Mot de passe</label> <br>
      <input name="username" type="password"> <br>
      <span class="info">Mot de passe oublié ?</span>
    </div>

    

    <div id="button">
      <button id="validate" @click="validate()">Valider</button>
      <button id="clear">Créer un compte</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "cart",
  components:{
  },
  methods:{
    validate: function(){
      if (this.$route.name !== "user") {
        console.log(this.$route.name)
        this.$router.push({ path: '/user' });
      }
        this.$emit('validate')
    }
  }
}
</script>

<style scoped lang="scss">
#cart{
  position: absolute;
  width: 25vw;
  right: 2vw;
  top: 5vh;
  background: white;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  z-index: 21;
  #triangle{
    position: absolute;
    top: -5%;
    right: 4%;
    width: 0;
    height: 0;
    border-left: 2vh solid transparent; 
    border-bottom: 2vh solid white;
    border-right: 2vh solid transparent;
  }
  #title{
    width: 93%;
    font-size: 1.3em;
    margin-left: 3%;
    margin-top: 2.5%;
    padding-bottom: 0.7%;
    border-bottom: 1px solid black;
  }
  #form{
    width: 93%;
    margin-left: 3%;
    margin-top: 3%;
    padding-bottom: 4%;
    border-bottom: 1px solid black;
    .password{
      display: inline-block;
      margin-top: 2%;
    }
    .info{
      font-size: 0.7em;
      color: blue;
      cursor: pointer;
    }
  }
  #button{
    display: flex;
    justify-content: space-between;
    width: 93%;
    margin-left: 3%;
    height: 4vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    button{
      background: none;
      border: none;
      width: 45%;
      font-size: 1.1em;
      cursor: pointer;
      transition: 0.2s;
    }
    #clear{
      background: #e1e1e1;
      &:hover{
        background: #d2d2d2;
      }
    }
    #validate{
      background: #a7d1a7;
      &:hover{
        background: #94b894;
      }
    }
  }
}

@media screen and (orientation: portrait) {
  #cart{
    position: absolute;
    width: 95vw;
    right: 2vw;
    top: 5vh;
    background: white;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
    z-index: 21;
    #triangle{
      position: absolute;
      top: -5%;
      right: 2%;
      width: 0;
      height: 0;
      border-left: 2vh solid transparent; 
      border-bottom: 2vh solid white;
      border-right: 2vh solid transparent;
    }
    #title{
      width: 93%;
      font-size: 1.3em;
      margin-left: 3%;
      margin-top: 2.5%;
      padding-bottom: 0.7%;
      border-bottom: 1px solid black;
    }
    #form{
      width: 93%;
      margin-left: 3%;
      margin-top: 3%;
      padding-bottom: 4%;
      border-bottom: 1px solid black;
      .password{
        display: inline-block;
        margin-top: 2%;
      }
      .info{
        font-size: 0.7em;
        color: blue;
        cursor: pointer;
      }
    }
    #button{
      display: flex;
      justify-content: space-between;
      width: 93%;
      margin-left: 3%;
      height: 4vh;
      margin-top: 1vh;
      margin-bottom: 1vh;
      button{
        background: none;
        border: none;
        width: 45%;
        font-size: 1.1em;
        cursor: pointer;
        transition: 0.2s;
      }
      #clear{
        background: #e1e1e1;
        &:hover{
          background: #d2d2d2;
        }
      }
      #validate{
        background: #a7d1a7;
        &:hover{
          background: #94b894;
        }
      }
    }
  }
}
</style>