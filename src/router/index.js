import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/Qa.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/Video.vue')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/My.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
