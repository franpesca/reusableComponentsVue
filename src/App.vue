<template>
  <div class="wrapper">
    <router-link to="/raccoonRain">enable RaccoonRain</router-link>
    <router-link to="/raccoonLoader">enable RaccoonLoader</router-link>
    <router-view></router-view>
    <!-- <bouncing-image imgurl="https://stickeroid.com/uploads/pic/fx0n217l-full/thumb/stickeroid_5bf54fc73c5ad.png"/> -->
  </div>
</template>

<script>
// import BouncingImage from './components/BoucingImage.vue'
export default {
  name: 'app',
  data:()=>{
    return {
      random: true,
    }
  },
}
</script>

<style>

.wrapper {
  padding: 50px;
  animation: backgroundFading 3s linear infinite;
  height: 100vh;
  display: flex;
  justify-content: center;
}


@keyframes backgroundFading {
  10%{
    backgorund: rgb(217, 170, 0);
  }
  50%{
    background: rgb(255, 242, 0);;
  }
  100%{
    background: rgb(229, 97, 187);
  }
}

</style>
