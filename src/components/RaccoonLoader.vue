<template>
  <div>
    <bouncing-image :imgurl="url" />
  </div>
</template>
<script>
import BouncingImage from './BoucingImage.vue'
export default {
  name: 'RaccoonLoader',
  components: {
    BouncingImage,
  },
  props: {
    random: Boolean,
  },
  data: function() {
    return {
      url: "",
      randomNumber: "",
      raccoonList:["https://img.lovepik.com/element/40061/6842.png_860.png", "https://www.clipartmax.com/png/middle/2-24441_cute-raccoon-png-hd-transparent-cute-raccoon-hd-raccoon-clip-art.png","http://pngimg.com/uploads/raccoon/raccoon_PNG16976.png","http://pngimg.com/uploads/raccoon/raccoon_PNG16966.png","http://pngimg.com/uploads/raccoon/raccoon_PNG16975.png","http://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43bcb0.png"],
    }
  },
  mounted: function() {
    this.setRandomNumber()
  },
  methods: {
    getRandomIntInclusive: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
    } ,
    setRandomNumber() {
       this.randomNumber = this.getRandomIntInclusive(0, this.raccoonList.length) 
       if (this.random) {
          this.url=this.raccoonList[this.randomNumber]
       } else {
         this.url="https://www.pngrepo.com/download/191426/raccoon.png"
       }
       return
    }
}
  }
</script>
<style>

</style>