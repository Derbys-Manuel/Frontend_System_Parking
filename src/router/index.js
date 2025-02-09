import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Index.vue'
import ParkingList from '@/views/Parking/ParkingList.vue'
import ParkingNew from '@/views/Parking/ParkingNew.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Parking',
    name: 'Parking',
    component: ParkingList
  },
  {
    path: '/Parking_New',
    name: 'Parking_New',
    component: ParkingNew
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
