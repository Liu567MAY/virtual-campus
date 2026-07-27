import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'campus',
    component: () => import('../components/UserPanel.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
