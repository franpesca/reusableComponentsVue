<template>
  <div id="main-wrapper" :class="colours[counter]">
      <h2 class="primary">{{title}}</h2>
      <div class="theme-btn-container">
        <button class="secondary" @click="changeTheme">change theme</button>
        <h3 class="primary">{{colours[counter]}}</h3>
      </div>  
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:()=>{
    return {
      title: "Select your theme:",
      random: true,
      colours: ["sunset","nature","blue"],
      counter: 0,
    }
  },
  methods: {
    changeTheme: function(){
      if (this.counter < this.colours.length-1) {
        this.counter ++
      } else {
        this.counter = 0
      }
    }
  }
}
</script>

<style>

button{
  height: 40px; 
  border: none; 
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
}
button:active, button:focus {
  outline: none;
}
.theme-btn-container{
  display: flex; 
  width: 200px;
  justify-content: space-between;
  align-items: center;
}

#main-wrapper.sunset {
    background: 
        linear-gradient(red, transparent),
        linear-gradient(to top left, rgb(255, 157, 0), transparent),
        linear-gradient(to top right, rgb(255, 242, 0), transparent);
    background-blend-mode: screen;
}

#main-wrapper.sunset .primary{
  color: rgb(74, 151, 74);
}
#main-wrapper.sunset .secondary{
  background-color: rgb(127, 240, 127);
}

#main-wrapper.nature {
    background: 
      linear-gradient(rgb(16, 81, 16), transparent),
      linear-gradient(to top left, rgb(20, 110, 24), transparent),
      linear-gradient(to top right, rgb(144, 248, 112), transparent);
    background-blend-mode: screen;
}

#main-wrapper.nature .primary{
  color: rgb(11, 115, 219); 
}
#main-wrapper.nature .secondary{
  background-color: rgb(0, 166, 255);
}

#main-wrapper.blue {
    background: 
      linear-gradient(rgb(4, 9, 79), transparent),
      linear-gradient(to top left, rgb(12, 121, 238), transparent),
      linear-gradient(to top right, rgb(133, 200, 244), transparent);
    background-blend-mode: screen;
}

#main-wrapper.blue .primary{
  color: rgb(255, 179, 0);
}
#main-wrapper.blue .secondary{
  background-color: rgb(241, 241, 72);
}

#main-wrapper {
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 50px;
  /* animation: backgroundFading 3s linear infinite; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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


/* @keyframes backgroundFading {
  10%{
    backgorund: rgb(217, 170, 0);
  }
  50%{
    background: rgb(255, 242, 0);;
  }
  100%{
    background: rgb(229, 97, 187);
  }
} */

</style>
