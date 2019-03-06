<template>
  <div class="wrapper">
      <!-- <raccoon-loader v-bind:random="random"/>   -->
 <raccoon-rain/>
    <!-- <bouncing-image imgurl="https://stickeroid.com/uploads/pic/fx0n217l-full/thumb/stickeroid_5bf54fc73c5ad.png"/> -->
  </div>
  <!-- <toggle imgurl="http://cdn.onlinewebfonts.com/svg/img_358086.png"/> -->
</template>

<script>
// import BouncingImage from './components/BoucingImage.vue'
import RaccoonLoader from './components/RaccoonLoader.vue'
import RaccoonRain from './components/RaccoonRain.vue'

export default {
  name: 'app',
  components: {
    // BouncingImage,
    RaccoonLoader,
    RaccoonRain
  },
  data:()=>{
    return {
      random: true
    }
  },
}
</script>

<style>

.wrapper {
  padding: 50px;
  /* display: flex; */
}

</style>
