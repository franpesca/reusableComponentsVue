<template>
  <div>
    <bouncing-image :imgurl="url" />
  </div>

</template>
<script>
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

      const raccoonList = ["https://img.lovepik.com/element/40061/6842.png_860.png", "https://www.clipartmax.com/png/middle/2-24441_cute-raccoon-png-hd-transparent-cute-raccoon-hd-raccoon-clip-art.png","https://banner2.kisspng.com/20171220/zww/raccoon-png-5a3ae8b55c0504.26825113151381010137694998.jpg","https://www.clipartmax.com/png/middle/133-1333497_raccoon-cartoon-animal-images-cute-baby-raccoon-drawing.png","https://c7.uihere.com/files/121/638/460/raccoon-rat-euclidean-vector-illustration-raccoon-vector.jpg"]

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







<template>
  <div>
    <bouncing-image :imgurl="url" />
  </div>

</template>
<script>
// eslint-disable
import BouncingImage from './BoucingImage.vue'
import { METHODS } from 'http';
export default {
  name: 'loader',
  components: {
    BouncingImage,
  },
  props: {
    random: Boolean,
  },

  data: function() {
    return {
      url: "https://www.pngrepo.com/download/191426/raccoon.png",
      raccoonList:["https://img.lovepik.com/element/40061/6842.png_860.png", "https://www.clipartmax.com/png/middle/2-24441_cute-raccoon-png-hd-transparent-cute-raccoon-hd-raccoon-clip-art.png","https://banner2.kisspng.com/20171220/zww/raccoon-png-5a3ae8b55c0504.26825113151381010137694998.jpg","https://www.clipartmax.com/png/middle/133-1333497_raccoon-cartoon-animal-images-cute-baby-raccoon-drawing.png","https://c7.uihere.com/files/121/638/460/raccoon-rat-euclidean-vector-illustration-raccoon-vector.jpg"]
    }
  },
  methods: {
      // pick a random image from an array
      // set url as the random image 
      letItRain: function()
  }
    
    console.log(this.random)
    if (this.random) {


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


  
  
</script>
<style>

</style>










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


