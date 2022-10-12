<script>
import TheHeader from "../components/TheHeader.vue";
import { apiImages } from "../services/apiImages.js";
import { apiFavorites } from "../services/apiFavorites.js";

export default {
  name: "DetailView",

  data() {
    return {
      checkToken: false,
      images: [],
      image: {},
    };
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  methods: {
    // get images
    async getImages() {
      const response = await apiImages.listImages();

      this.images = response.data.data;

      this.checkIdWithImage();
    },

    checkIdWithImage() {
      this.images.forEach((image) => {
        if (image.id == this.id) {
          this.image = image;
        }
      });
    },

    getToken() {
      const token = localStorage.getItem("token");

      if (token) {
        this.checkToken = true;

        return;
      }

      this.checkToken = false;
    },

    async addFavImage() {
      const verify = confirm("Are you sure you want to add this image to fav?");

      if (verify === true) {
        const response = await apiFavorites.addFavImage(this.id);

        if (response.data.msg === "Repeat") {
          alert("This image owns you!");

          this.$router.push("/home");

          return;
        }

        alert("This image has been added to your fav images!");

        this.$router.push("/myview");
      }
    },
  },

  created() {
    this.getImages();
    this.getToken();
  },

  components: { TheHeader },
};
</script>

<template>
  <TheHeader />
  <main class="d-flex justify-content-center align-items-center">
    <div
      class="img d-flex flex-column justify-content-between align-items-center"
    >
      <div>
        <img :src="this.image.image" class="image" alt="" />
      </div>
      <div class="d-flex justify-content-center align-items-center w-100 text">
        <p>{{ this.image.title }}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center info">
        <p>⭐ {{ image.favs_quantity }}</p>
        <p>{{ image.city }}</p>
        <p>Location <a :href="this.image.location">☝🏻</a></p>
      </div>
    </div>
  </main>

  <div v-if="this.checkToken === true" class="fav">
    <button v-on:click="addFavImage" id="favButton" class="mt-3" type="button">
      Add to favorites!
    </button>
  </div>
  <div v-if="this.checkToken === false" class="fav">
    <a href="/login"
      ><button id="favButton" class="mt-3" type="button">
        Login to add!
      </button></a
    >
  </div>

  <div class="button">
    <a href="/home"><button class="mt-3" type="button">Home</button></a>
  </div>
</template>

<style scoped>
@import "../assets/main.css";

main {
  width: 80vw;
  margin: 10vh auto;
}
.img {
  width: 30vw;
  height: 50vh;
}
.image {
  width: 27vw;
  height: 40vh;
  border-radius: 5px;
  box-shadow: 0 0 0.3vw rgb(155, 155, 155);
}
.info {
  width: 26vw;
}

.fav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: auto;
  margin-top: -5vh;
  margin-bottom: 10vh;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: auto;
  margin-top: -5vh;
  margin-bottom: 10vh;
}
#favButton {
  padding: 1vh 1.1vw;
  font-size: 1.3vw;
  color: white;
  background-color: rgb(1, 161, 1);
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
}
#favButton:hover {
  background-color: rgb(1, 132, 1);
}
button {
  padding: 1vh 1.3vw;
  color: white;
  background-color: var(--base-color-bluelight);
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
}
button:hover {
  background-color: #005998;
}
</style>
