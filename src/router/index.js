import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/front/HomeView.vue'),
      children: [
        {
          path: '', //沒有填入入徑，將被預設為子路由
          name: '首頁',
          component: () => import('../views/front/IndexView.vue')
        },
        {
          path: 'order',
          name: '點餐',
          component: () => import('../views/front/OrderView.vue')
        }
      ]
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
