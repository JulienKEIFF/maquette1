<template>
  <div id=info-client>
    <div class="left">
      <div id="logo-client">
        <svgAccount class="logo" color="#444" />
        <span class="name">John Doe</span>
        <span class="city">
          <svgPin class="pin" color="#444" />
          Lille
        </span>
      </div>
      
    </div>

    <div class="right">
      <div class="section">
        <div class="title">Mon compte:</div>
      </div>
    </div>

  </div>
</template>

<script>
import svgAccount from "./account-svg"
import svgPin from "./pin-svg"

export default {
  name: "clientinfo",
  components:{
    svgAccount,
    svgPin
  },
  data(){
    return{

    }
  }, 
  methods:{

  }
}
</script>

<style scoped lang="scss">
#info-client{
  height: 100%;
  width: 97.5%;
  margin-top: 5%;
  padding-bottom: 2%;
  display: flex;
  .left{
    width: 33%;
    border-right: 1px solid black;
    #logo-client{
      width: 100%;
      .logo{
        width: 50%;
        margin: 0 auto;
      }
    }
    .name{
      display: inline-block;
      margin-top: 5%;
      width: 100%;
      text-align: center;
      font-size: 2em;
      font-weight: bold;
    }
    .city{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-align: center;
      font-size: 2em;
      .pin{
        width: 7%;
        margin-right: 2%;
        display: inline-block;
      }
    }
  }

  .right{
    margin-left: 2%;
    width: 73%;
    .title{
      font-size: 2em;
      text-decoration: underline;
    }
  }
}
</style>