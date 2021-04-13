<template>
  <div class="footer">
    
    <div class="link">
      <div v-for="info in infosFooter" :key="info" class="footer-links">
        {{info}}
      </div>
    </div>
  
    <div class="social">
      <div v-for="info in socialMedia" :key="info" class="footer-links">
        {{info}}
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'footer-vue',
  data(){
    return{
      infosFooter: ["CGV", "CGU", "Notre groupe", "Assistance"]
    }
  }
}
</script>

<style scoped lang="scss">
.footer{
  position: relative;
  margin-top: 5%;
  top: 50%;
  width: 100%;
  height: 100px;
  background: white;
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.15);
  .link{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 5%;
    width: 35%;
    height: 100%;
    .footer-links:nth-child(1){width: 15%;}
    .footer-links:nth-child(2){width: 15%;}
    .footer-links:nth-child(3){width: 25%;}
  }
  .footer-links{
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 40%;
    color: #444444;
    font-size: 1.2em;
    cursor: pointer;
    transition-duration: 0.4s;
    width: 40%;
    &:hover{
      transition-duration: 0.4s;
      color: #777777;
    }
  }
}

@media screen and (orientation: portrait){
  .footer-links{
    font-size: 0.9em !important;
  }
  .social{
    width: 45% !important;
  }
  .footer-links{
    width: 100%;
  }
}
</style>