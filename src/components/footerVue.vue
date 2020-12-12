<template>
  <div class="footer">
    <div v-for="info in infosFooter" :key="info" class="footer-links">
      {{info}}
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
    margin-top: 5%;
    top: 50%;
    width: 100%;
    height: 100px;
    background: white;
    box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 1%;
    .footer-links{
      flex: 1 0 45%;
      position: relative;
      left: 5%;
      height: 1%;
      width: 20%;
      background: red;
    }
  }
</style>