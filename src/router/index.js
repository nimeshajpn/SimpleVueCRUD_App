
import HomeContent from '@/views/HomeContent.vue'
import AboutVue from '@/views/About.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeContent
  },
  {
    path: '/About',
    name: 'About',
    component: AboutVue
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
