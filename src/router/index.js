import { createRouter, createWebHistory } from 'vue-router'
import AllView from '../views/AllView.vue';
import Favorite from '../views/FavoriteView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AllView,
    },
    {
      path: '/favorite',
      component: Favorite,
    },
  ],
})

export default router
