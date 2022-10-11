<script>
export default {
  name: "TheCarousel",
};
</script>

<template>
  <div id="carousel" class="carousel slide border" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        class="carousel-item active d-flex justify-content-between align-items-center"
        data-bs-interval="2000"
      >
        <div class="img d-flex justify-content-start align-items-end">
          <p class="img-text">Text</p>
        </div>
        <div class="img d-flex justify-content-start align-items-end">
          <p class="img-text">Text</p>
        </div>
        <div class="img d-flex justify-content-start align-items-end">
          <p class="img-text">Text</p>
        </div>
        <div class="img d-flex justify-content-start align-items-end">
          <p class="img-text">Text</p>
        </div>
      </div>

      <div
        class="carousel-item d-flex justify-content-between align-items-center"
        data-bs-interval="2000"
      >
        <div class="img d-flex justify-content-start align-items-end">
          <p class="img-text">Text</p>
        </div>
        <div class="img d-flex justify-content-start align-items-end">
          <p class="img-text">Text</p>
        </div>
        <div class="img d-flex justify-content-start align-items-end">
          <p class="img-text">Text</p>
        </div>
        <div class="img d-flex justify-content-start align-items-end">
          <p class="img-text">Text</p>
        </div>
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControlsNoTouching"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
@import "../assets/main.css";

#carousel {
  width: 80vw;
  height: 30vh;
  margin: 9vh auto;
}

.img {
  width: 17vw;
  height: 30vh;
  border: 1px solid black;
}

button span{
   color: black;
}
</style>
