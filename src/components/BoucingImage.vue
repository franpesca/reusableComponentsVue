<template>
  <div class="ball-wrapper">
        <img :src="imgurl" class="bounce"> 
        <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  name: 'BoucingImage',
  props: {
    imgurl: String
  }
}
</script>

<style scoped>
  img{
    max-width: 50px;
    display: block;
  }
  .ball-wrapper{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .shadow{
    width: 50px;
    background-color: black;
    height: 3px;
    animation: enlarge 1s infinite alternate;
  }

@keyframes enlarge{
    from {
    width:50px;
    background-color: black;
    opacity: 1;
    height: 3px;
    border-radius: 35%;
  }
  to {
    width:80px;
    background-color: grey;
    opacity: .5;
    height: 8px;
    border-radius: 50%;
  }
}


@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
}

  .bounce { 
  animation: bounce 1s infinite alternate;
   
}


</style>
