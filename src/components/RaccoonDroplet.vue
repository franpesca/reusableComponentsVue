<template>
  <div v-bind:style="styleObject" class="droplet"></div>
</template>
<script>
export default {
  name: 'raccoondroplet',
  data: function() {   
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
    } 
    const y = getRandomIntInclusive(0, window.innerHeight)
    console.log(y,'y')
    const x = getRandomIntInclusive(0, window.innerWidth)
     return {
       styleObject: {
         top: y+"px",
         left:x+"px",
       }
     }
}
}
</script>
<style>
  .droplet{
    position: fixed;
    width: 50px;
    height: 50px;
    background-color: red;
    animation: rain 3s forwards;
  }
  @keyframes rain {
    0%{
      opacity: 1;
      transform: translateY(0px);
    }
    1%{

    }
    100%{
      opacity: 0;
      transform: translateY(50px);
    }
  }
</style>


