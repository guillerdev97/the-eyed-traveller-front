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
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/myview",
      name: "myview",
      component: () => import("../views/MyImagesView.vue"),
    },
  ],
});

export default router;
