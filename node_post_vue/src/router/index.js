import { createRouter, createWebHistory } from 'vue-router'
import Popbti from '@/views/PopbtiView.vue'

const routes = [
  {
    path: '/',
    name: 'popbti',
    component: Popbti
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router