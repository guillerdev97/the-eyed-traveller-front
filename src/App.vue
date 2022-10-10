<script>
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",

  components: { RouterView, TheHeader },
};
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style></style>
