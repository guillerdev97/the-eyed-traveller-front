<script>
export default {
  name: "TheCarousel",
};
</script>

<template>
  <div id="carousel">
    <div id="first" class="d-flex justify-content-between align-items-center">
      <div class="img d-flex justify-content-between align-items-end">
        <p class="img-text">1</p>
        <p class="img-text">Text</p>
      </div>
      <div class="img d-flex justify-content-between align-items-end">
        <p class="img-text">2</p>
        <p class="img-text">Text</p>
      </div>
      <div class="img d-flex justify-content-between align-items-end">
        <p class="img-text">3</p>
        <p class="img-text">Text</p>
      </div>
      <div class="img d-flex justify-content-between align-items-end">
        <p class="img-text">4</p>
        <p class="img-text">Text</p>
      </div>
    </div>

    <div
      id="second"
      class="carousel-item d-flex justify-content-between align-items-center"
    >
      <div class="img d-flex justify-content-between align-items-end">
        <p class="img-text">5</p>
        <p class="img-text">Text</p>
      </div>
      <div class="img d-flex justify-content-between align-items-end">
        <p class="img-text">6</p>
        <p class="img-text">Text</p>
      </div>
      <div class="img d-flex justify-content-between align-items-end">
        <p class="img-text">7</p>
        <p class="img-text">Text</p>
      </div>
      <div class="img d-flex justify-content-between align-items-end">
        <p class="img-text">8</p>
        <p class="img-text">Text</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/main.css";

#carousel {
  width: 80vw;
  height: 30vh;
  margin: 9vh auto;
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
  border: 1px solid black;
}

button span {
  color: black;
}
</style>
