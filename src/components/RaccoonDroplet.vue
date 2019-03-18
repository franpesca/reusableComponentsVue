<template>
  <div v-bind:style="styleObject" class="droplet">
    <img src="https://www.pngrepo.com/download/191426/raccoon.png"/>
  </div>
</template>
<script>
export default {
  name: 'raccoondroplet',
  props: {
    index: Number
  },
  data() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        y : 0,
        x : 0,
        delay: 0,
        duration : 10,
        
    }
  },
  mounted: function() {
          this.letItDrop()
  },
  computed: {
    styleObject: function(){
      return{
          top: this.x+"px",
          left: this.y+"px",
          opacity: 1,
          animation: `rain ${this.duration}s forwards`,
          animationDelay: this.delay + "s"
      }
     }
  },
  methods: {
    getRandomIntInclusive: function(min, max) {
      console.log("random")
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
      },
    getRandomHeight: function(){
      return this.getRandomIntInclusive(0, this.innerHeight)
    },
    getRandomWidth: function(){
      return this.getRandomIntInclusive(0, this.innerWidth)
    },
    getRandomDelay: function(){
      return this.getRandomIntInclusive(0, 7)
    },
    getRandomDuration: function(){
      return this.getRandomIntInclusive(1, 3)
    },
    letItDrop(){ 
        // Promise.all([
          this.x = this.getRandomHeight() ,
          this.y = this.getRandomWidth() ,
          this.delay =  this.getRandomDelay(),
          this.duration =  this.getRandomDuration()
        // ])
        // .then(res => {
        //   console.log('logghe', res)
        //   [this.x, this.y, this.delay, this.duration] = res;
        // });
        console.log(`ciao`, this.x, this.y, this.delay, this.duration);       
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


