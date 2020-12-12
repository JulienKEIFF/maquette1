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
      infosFooter: ["CGV", "CGU", "Notre groupe", "Assistance"],
      socialMedia: ["Facebook", "Twitter", "Site web"]
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
      display: inline-flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 10%;
      width: 20%;
      height: 100%;
    }
    .social{
      position: absolute;
      display: inline-flex;
      flex-direction: row;
      flex-wrap: wrap;
      top: 50%;
      right: 10%;
      transform: translateY(-50%);
      margin-left: 10%;
      width: 30%;
      height: 100%;
      align-items: center;
      .footer-links{
        width: 33%;
        justify-content: flex-end;
      }
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
</style>