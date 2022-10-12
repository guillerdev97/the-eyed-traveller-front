<script>
import { RouterLink } from "vue-router";

export default {
  name: "CategoriesHome",

  components: { RouterLink },
};
</script>

<template>
  <main class="mt-5">
    <section
      id="categories"
      class="d-flex justify-content-between align-items-center"
    >
      <div
        id="food"
        class="d-flex flex-column justify-content-end align-items-start"
      >
        <p class="mb-3">For food lovers...<br />the best restaurants!</p>
        <router-link to="/food"><button>Food</button></router-link>
      </div>
      <div
        id="attractions"
        class="d-flex flex-column justify-content-end align-items-start"
      >
        <p class="mb-3">Do not miss the corners of each city!</p>
        <router-link to="/attractions"
          ><button>Attractions</button></router-link
        >
      </div>
    </section>
  </main>
</template>

<style scoped>
@import "../assets/main.css";

main {
  width: 80vw;
  margin: auto;
}

main > p {
  color: rgb(151, 151, 151);
}

#categories div {
  width: 38vw;
  height: 23vh;
  padding: 1.5vh 1vw;
  color: white;
  border-radius: 5px;
  box-shadow: 0 0 0.2vw gray;
}
#food {
  background-image: url("../assets/img/trending-food.jpeg");
  background-size: 40vw 40vh;
  background-repeat: no-repeat;
}
#attractions {
  background-image: url("../assets/img/trending-attraction.jpg");
  background-size: 40vw 30vh;
  background-repeat: no-repeat;
}
#categories button {
  padding: 1vh 1.3vw;
  color: white;
  background-color: var(--base-color-bluelight);
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
}
#categories button:hover {
  background-color: #005998;
}
</style>
