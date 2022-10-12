<script>
import TheHeader from "../components/TheHeader.vue";
import CategoriesHome from "../components/CategoriesHome.vue";
import TheTrendingHome from "../components/TheTrendingHome.vue";

export default {
  name: "HomeView",
  components: { TheHeader, CategoriesHome, TheTrendingHome },
};
</script>

<template>
  <TheHeader />
  <CategoriesHome />
  <TheTrendingHome />
</template>

<style></style>
