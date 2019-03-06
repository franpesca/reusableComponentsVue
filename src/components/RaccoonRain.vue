<template>
<div>
<raccoon-droplet
          v-bind:key="n"
          :index="n"
          v-for="n in 400"
          />
</div>
    
</template>
<script>
import RaccoonDroplet from './RaccoonDroplet.vue'
export default {
  name: 'racconRain',
  components: {
    RaccoonDroplet
  }
}
</script>
<style>

</style>


