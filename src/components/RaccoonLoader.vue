

<template>
  <div>
    <bouncing-image :imgurl="url" />
  </div>

</template>
<script>
// eslint-disable
import BouncingImage from './BoucingImage.vue'
export default {
  name: 'loader',
  components: {
    BouncingImage,
  },
  props: {
    random: Boolean,
  },
  data: function() {
    let url

    console.log(this.random)
    if (this.random) {

      // pick a random image from an array
      // set url as the random image 

      const raccoonList = ["https://img.lovepik.com/element/40061/6842.png_860.png", "https://www.clipartmax.com/png/middle/2-24441_cute-raccoon-png-hd-transparent-cute-raccoon-hd-raccoon-clip-art.png","https://www.pngrepo.com/download/191011/raccoon.png","https://www.clipartmax.com/png/middle/133-1333497_raccoon-cartoon-animal-images-cute-baby-raccoon-drawing.png","https://c7.uihere.com/files/121/638/460/raccoon-rat-euclidean-vector-illustration-raccoon-vector.jpg"]

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
    } 
      var randomNumber = getRandomIntInclusive(0, raccoonList.length) 
      url=raccoonList[randomNumber]
    }  else {
      url = "https://www.pngrepo.com/download/191426/raccoon.png"
    }

    return {
      url: url
    }
  }
  }
</script>
<style>

</style>

