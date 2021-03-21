<template>
  <div class="bandeau">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'bandeau-info',
  props: ['title']
}
</script>

<style scoped lang="scss">
.bandeau{
  position: fixed;
  background: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.418);
  height: 7vh;
  width: 100vw;
  margin-top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
</style>