<script>
export default {
  name: "ThePagination",

  data() {
    return {
      NUM_RESULTS: 3,
      pag: 1,
    };
  },

  props: {
    data: {
      type: Array,
      required: true,
    },
    bool: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section
    v-if="this.data !== undefined"
    id="pagination"
    class="d-flex flex-column justify-content-around align-items-center"
  >
    <div id="images">
      <div
        class="m-auto mt-3 ml-3 mr-3 mb-4"
        v-for="(image, index) in data"
        :key="index"
        v-show="(pag - 1) * NUM_RESULTS <= index && pag * NUM_RESULTS > index"
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
            <div v-if="this.bool === 'user'">❌</div>
            <div v-if="this.bool === 'my'"><a href="/imagesettings">⚙️</a></div>
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
            v-show="(pag * NUM_RESULTS) / data.length < 1"
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
  margin-bottom: 3vh !important;
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
