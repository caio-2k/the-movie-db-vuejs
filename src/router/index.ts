import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

export const constantRoutes = [
  {
      path: '/app',
      name: 'Layout',
      component: () => import('../components/Layout/index.vue'),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "/favorites",
          name: "favorites",
          component: () => import("../views/Favorites.vue"),
        },
      ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
})

export default router