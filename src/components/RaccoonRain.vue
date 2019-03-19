<template>
   <div class="">
      <raccoon-droplet
         v-bind:key="n"
         :index="n"
         v-for="n in 150"
         />
   </div>
</template>
<script>
import RaccoonDroplet from './RaccoonDroplet.vue'
export default {
  name: 'RacconRain',
  components: {
    RaccoonDroplet,
  }
}
</script>
<style>
  
</style>


