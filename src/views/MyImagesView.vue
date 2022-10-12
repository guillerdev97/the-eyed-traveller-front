<script>
import TheHeader from "../components/TheHeader.vue";
import ThePagination from "../components/ThePagination.vue";
import { apiFavorites } from "../services/apiFavorites.js";

export default {
  name: "MyImagesView",

  data() {
    return {
      myImages: [],
      my: "my",
      user: "user",
      favImages: [],
    };
  },

  methods: {
    async listMyImages() {
      const response = await apiFavorites.listMyImages();

      this.myImages = response.data.myImages;
    },

    async listFavImages() {
      const response = await apiFavorites.listOtherImages();

      this.favImages = response.data.userImages;
    },
  },

  created() {
    this.listMyImages();
    this.listFavImages();
  },

  components: { TheHeader, ThePagination },
};
</script>

<template>
  <TheHeader />
  <h4 class="text-center mt-5">My Fav Images</h4>
  <ThePagination :data="myImages" :bool="my" />
  <h4 class="text-center mt-5">My Fav User Images</h4>
  <ThePagination :data="favImages" :bool="user" />
</template>

<style scoped>
@import "../assets/main.css";

h4 {
  margin-bottom: -17vh;
}
</style>
