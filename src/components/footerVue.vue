<template>
  <div class="footer">
    {{"verre-tech" | uppercase}}
  </div>
</template>

<script>
export default {
  name: 'footer-vue',
  infosFooter: [""]
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
  }
</style>