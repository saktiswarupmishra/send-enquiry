import { createRouter, createWebHistory } from 'vue-router'
import SendEnquiry from '../views/SendEnquiry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/send-enquiry'
    },
    {
      path: '/send-enquiry',
      name: 'send-enquiry',
      component: SendEnquiry
    }
  ]
})

export default router
