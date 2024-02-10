import { createRouter, createWebHistory } from 'vue-router'


// Main
import Main from '@/views/MainView.vue'

// Popup
import PopupDetail from '@/views/PopupDetailView.vue'

// Map
import MapMain from '@/views/MapMainView.vue'
import MapSearch from '@/views/MapSearchView.vue'

// Test
import Test from '@/views/TestView.vue'
import BottomSheet from '@/views/VueBottomSheet.vue'
import Gibon from '@/views/GibonView.vue'
import Gibon2 from '@/views/GibonView2.vue'

// Popbti
import Popbti from '@/views/PopbtiView.vue'
import PopbtiResult from '@/views/PopbtiResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/popup',
      name: 'PopupDetail',
      component: PopupDetail
    },
    {
      path: '/map',
      name: 'MapMain',
      component: MapMain
    },
    {
      path: '/map/search',
      name: 'MapSearch',
      component: MapSearch
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/bottomsheet',
      name: 'BottomSheet',
      component: BottomSheet
    },
    {
      path: '/popbti/:mbti_id',
      name: 'PopbtiResult',
      component: PopbtiResult
    },
    {
      path: '/popbti',
      name: 'Popbti',
      component: Popbti
    },
    {
      path: '/gibon',
      name: 'Gibon',
      component: Gibon
    },
    {
      path: '/gibon2',
      name: 'Gibon2',
      component: Gibon2
    },



  ]
})

export default router
