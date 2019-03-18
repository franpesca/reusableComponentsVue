<template>
  <div class="">
      <!-- <div v-if="!isRainActive"> -->
        <!-- <button @click="enableRaccoonRain">
        <img class="racconPazzo" src="https://www.pngrepo.com/download/191426/raccoon.png">
      </button> -->
      <!-- </div> -->
      <!-- <div v-else> -->
         <raccoon-droplet
            v-bind:key="n"
            :index="n"
            v-for="n in 150"
            />
      <!-- </div> -->
  </div>
</template>
<script>
import RaccoonDroplet from './RaccoonDroplet.vue'
export default {
  name: 'racconRain',
  components: {
    RaccoonDroplet
  },
  // data() {
  //   return {
  //     isRainActive: false,
  //   }
  // },
  // methods: {
  //   enableRaccoonRain(){
  //     this.isRainActive = true
  //   }
  // }
}
</script>
<style scoped>
  /* .parent{
    position: relative;
    animation: backgroundChange 10s;
  }
  @keyframes backgroundChange  {
    0%{
      background: rgb(143, 215, 35);
    }
    100%{
      background:green;
    }
  }

  button{
    outline: none;
    border-style: none;
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  @keyframes wow{
    0%{
      width: 580px;
    }
    100%{
      width: 600px;
    }
  }
  .racconPazzo{
    animation: wow 1s linear infinite;
    width: 500px;
  } */
</style>


