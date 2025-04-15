import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '../basic-pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView/index.vue'),
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/Design/custom-design.vue'),
    },
    {
      path: '/design/list',
      name: 'designList',
      component: () => import('../views/Design/index.vue'),
    },

    { path: '/:notfound(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
