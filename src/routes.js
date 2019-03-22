import RaccoonRain from './components/RaccoonRain.vue'
import RaccoonLoader from './components/RaccoonLoader.vue'
import HomePage from './components/HomePage.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage},
  { path: '/raccoonRain', component: RaccoonRain },
  { path: '/raccoonLoader', component: RaccoonLoader }
]

export default new VueRouter({
  mode: 'history',
  routes 
})





