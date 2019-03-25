<template>
    <div class="homepgwr">
      <div class="circle"> 
        <router-link to="/raccoonRain">RaccoonRain</router-link>
      </div>
      <div class="circle">
        <router-link to="/raccoonLoader">RaccoonLoader</router-link>
      </div>
    </div>   
</template>

<script>
export default {
  name: 'Homepage',

}
</script>

<style>

.homepgwr{
  display: flex;
}

.circle {
  border-radius: 50%;
	width: 200px;
	height: 200px; 
  margin: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
