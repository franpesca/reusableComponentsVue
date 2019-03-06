<template>
  <div class="wrapper">
    <bouncing-image imgurl="http://cdn.onlinewebfonts.com/svg/img_358086.png"/>
  </div>
  <!-- <toggle imgurl="http://cdn.onlinewebfonts.com/svg/img_358086.png"/> -->
</template>

<script>
import BouncingImage from './components/BoucingImage.vue'

export default {
  name: 'app',
  components: {
    BouncingImage,
  }
}
</script>

<style>

.wrapper {
  padding: 50px;
}

</style>
