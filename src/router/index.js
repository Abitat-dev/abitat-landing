import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:'/landing'
  },
  {
    path: '/landing',
    name: 'Home',
    component: Home,
    meta:{
      title:'Abitat'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
