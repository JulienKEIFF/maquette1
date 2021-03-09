<template>
  <div id="top">
    <div id="img-container">
      <img :src="require(`../../assets/img/img1.jpg`)" alt="" />
    </div>

    <div id="info-container">
      <h1>Pare douche KRYSTAL™</h1>
      <p id="descr">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        quod illum vel voluptatibus nostrum corrupti in ut, id, ipsum nulla eos
        sed. Vel natus repellat nemo optio neque quasi eos?
      </p>

      <h2>Style du produit disponible</h2>
      <div id="style">
        <button :class="active === 1 ? 'active' : ''" @click="active = 1">123cm X 150cm - Style A</button>
        <button :class="active === 2 ? 'active' : ''" @click="active = 2">123cm X 150cm - Style B</button>
        <button :class="active === 3 ? 'active' : ''" @click="active = 3">150cm X 180cm - Style C</button>
      </div>

      <h2>Prix : 135,22€</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-product",
  data(){
    return {
      active: 1
    }
  }
};
</script>

<style scoped lang="scss">
#img-container {
  width: 45%;
  img {
    width: 100%;
  }
}
#info-container {
  display: inline-block;
  position: absolute;
  top: 1%;
  right: 2%;
  width: 50%;
  #style {
    display: flex;
    gap: 2%;
    button {
      display: inline-block;
      border: dotted black 2px;
      height: 7vh;
      border-radius: 20% / 50%;
      padding: 2%;
      cursor: pointer;
      transition-duration: 0.2s;
      &:focus{
        outline: none;
      }
    } 
    button.active {
      border: black 2px solid;
      background: #d4e157;
    }
  }
}
</style>