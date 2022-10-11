<script>
import TheHeader from "../components/TheHeader.vue";
import TrendingHome from "../components/TrendingHome.vue";
import TheCarousel from "../components/TheCarousel.vue";

export default {
  name: "HomeView",
  components: { TheHeader, TrendingHome, TheCarousel },
};
</script>

<template>
  <TheHeader />
  <TrendingHome />
  <TheCarousel />
</template>

<style></style>
