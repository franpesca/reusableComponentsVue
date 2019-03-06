<template>
  <div v-bind:style="styleObject" class="droplet">
    <img src="https://www.pngrepo.com/download/191426/raccoon.png"/>
  </div>
</template>
<script>
import RaccoonLoader from './RaccoonLoader.vue'
export default {
  name: 'raccoondroplet',
  components: {
    RaccoonLoader
  },
  props: {
    index: Number
  },
  data: function() {   
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
    } 
    const y = getRandomIntInclusive(0, window.innerHeight)
    console.log(y,'y')
    const x = getRandomIntInclusive(0, window.innerWidth)
    const delay = getRandomIntInclusive(0,10)
    const duration = getRandomIntInclusive(1, 4)
     return {
       styleObject: {
         top: y+"px",
         left:x+"px",
         opacity: 0,
         animation: `rain ${duration}s forwards`,
         animationDelay: delay + "s"
       }
     }
}
}
</script>
<style>
  .droplet{
    position: fixed;
  }

  img {
    max-width: 80px;
    display: block;
  }
  @keyframes rain {
    0%{
      opacity: .7;
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


