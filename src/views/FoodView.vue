<script>
import TheHeader from "../components/TheHeader.vue";
import { apiImages } from "../services/apiImages.js";

export default {
  name: "FoodView",

  data() {
    return {
      foodImages: [],
      NUM_RESULTS: 3,
      pag: 1,
    };
  },

  methods: {
    async listFoodImages() {
      const response = await apiImages.listImages();

      const array = response.data.data;

      array.forEach((image) => {
        if (image.category_id === 1) {
          this.foodImages.push(image);
        }
      });
    },
  },

  created() {
    this.listFoodImages();
  },

  components: { TheHeader },
};
</script>

<template>
  <TheHeader />

  <section
    id="pagination"
    class="d-flex flex-column justify-content-around align-items-center"
  >
    <div id="images">
      <!-- grid images -->
      <div
        class="m-auto mt-3 ml-3 mr-3 mb-4"
        v-for="(image, index) in foodImages"
        :key="index"
        v-show="(pag - 1) * NUM_RESULTS <= index && pag * NUM_RESULTS > index"
      >
        <!-- image -->
        <div
          class="img d-flex flex-column justify-content-between align-items-center"
        >
          <!-- image link to detail -->
          <router-link
            :to="{
              name: 'detail',
              params: { id: image.id },
            }"
            ><div>
              <img :src="image.image" class="image" alt="" /></div
          ></router-link>
          <!-- image title -->
          <div class="d-flex justify-content-end align-items-center w-100 text">
            <p>{{ image.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- navigation -->
    <nav aria-label="Page navigation" class="text-center">
      <ul class="text-center next">
        <li>
          <a
            href="#"
            aria-label="Previous"
            v-show="pag != 1"
            @click.prevent="pag -= 1"
          >
            <span class="fs-5" aria-hidden="true">Back</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Next"
            v-show="(pag * NUM_RESULTS) / foodImages.length < 1"
            @click.prevent="pag += 1"
          >
            <span class="fs-5" aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style>
@import "../assets/main.css";

#pagination {
  width: 80vw;
  margin: 20vh auto;
}

#images {
  width: 70vw;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

.next {
  width: 80vw;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  color: var(--base-color-blue);
}
</style>
