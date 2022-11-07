import AddContentVue from '@/views/AddContent.vue'
import EditContentVue from '@/views/EditContent.vue'
import HomeContent from '@/views/HomeContent.vue'
import ViewContentVue from '@/views/ViewContent.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeContent
  },
  {
    path: '/Add',
    name: 'Add',
    component: AddContentVue
  },
  {
    path: '/View',
    name: 'View',
    component: ViewContentVue
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: EditContentVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
