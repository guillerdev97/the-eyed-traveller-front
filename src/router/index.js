import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/food",
      name: "food",
      component: () => import("../views/FoodView.vue"),
    },
    {
      path: "/attractions",
      name: "attractions",
      component: () => import("../views/AttractionsView.vue"),
    },
  ],
});

export default router;
