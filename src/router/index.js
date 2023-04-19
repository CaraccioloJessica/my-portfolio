import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../components/pages/Home.vue')
  },
  {
    path: '/about',
    component: () => import('../components/pages/About.vue'),
  },
  {
    path: '/projects',
    component: () => import('../components/pages/Projects.vue'),
  },
  {
    path: '/projects/:id',
    component: () => import('../components/pages/projectDetails.vue'),
  },
  {
    path: '/contact',
    component: () => import('../components/pages/Contact.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router