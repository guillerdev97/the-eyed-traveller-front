import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/LandingView.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/home",
      name: "home",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/food",
      name: "food",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/FoodView.vue"),
    },
    {
      path: "/attractions",
      name: "attractions",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/AttractionsView.vue"),
    },

    {
      path: "/myview",
      name: "myview",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/MyImagesView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    router.push({
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    });
  }
});

export default router;
