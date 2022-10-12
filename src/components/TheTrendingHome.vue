<script>
import { apiFavorites } from "../services/apiFavorites.js";
import { RouterLink } from "vue-router";

export default {
  name: "TheTrending",

  data() {
    return {
      firstTrending: [],
      endTrending: [],
    };
  },

  methods: {
    // get popular images
    async getTrendingImages() {
      const response = await apiFavorites.trendingImages();

      const array = response.data.data;

      const startArray = [];
      const endArray = [];
      array.forEach((image, index) => {
        if (index < 4) {
          startArray.push(image);

          return;
        }

        if (index > 3) {
          endArray.push(image);

          return;
        }
      });

      this.firstTrending = startArray;
      this.endTrending = endArray;
    },
  },

  created() {
    this.getTrendingImages();
  },

  components: { RouterLink },
};
</script>

<template>
  <div class="titles">
    <h4>Most popular images</h4>
    <p>Take a view to the trending images of the moment</p>
  </div>
  <div class="d-flex justify-content-between align-items-center trending">
    <div
      id="first"
      v-for="(image, index) in firstTrending"
      :key="index"
      class="d-flex justify-content-between align-items-center"
    >
      <div
        class="img d-flex flex-column justify-content-between align-items-center"
      >
        <router-link
          :to="{
            name: 'detail',
            params: { id: image.id },
          }"
          ><div>
            <img :src="image.image" class="image" alt="" /></div
        ></router-link>
        <div
          class="d-flex justify-content-between align-items-center w-100 text"
        >
          <p>{{ index + 1 }}</p>
          <p>{{ image.title }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-between align-items-center trending">
    <div
      id="second"
      v-for="(image, index) in endTrending"
      :key="index"
      class="d-flex justify-content-between align-items-center"
    >
      <div
        class="img d-flex flex-column justify-content-between align-items-center"
      >
        <router-link
          :to="{
            name: 'detail',
            params: { id: image.id },
          }"
          ><div>
            <img :src="image.image" class="image" alt="" /></div
        ></router-link>
        <div
          class="d-flex justify-content-between align-items-center w-100 text"
        >
          <p>{{ index + 5 }}</p>
          <p>{{ image.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/main.css";

.titles {
  width: 80vw;
  margin: 7vh auto;
  margin-bottom: -2vh;
}
.trending {
  width: 80vw;
  height: 30vh;
  margin: 6vh auto;
}
#first {
  margin-bottom: 2.5vh;
}
#second {
  margin-bottom: 6.5vh;
}
.img {
  width: 17vw;
  height: 30vh;
}

.image {
  width: 17vw;
  height: 25vh;
  border-radius: 5px;
  box-shadow: 0 0 0.2vw rgb(155, 155, 155);
  transition: all 0.2s ease-in;
}
.image:hover {
  cursor: pointer;
  box-shadow: 0 0 0.6vw rgb(155, 155, 155);
}

.text {
  padding-left: 0.8vw;
  padding-right: 0.8vw;
}

button span {
  color: black;
}
</style>
