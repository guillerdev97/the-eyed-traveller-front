<script>
import { apiImages } from "../services/apiImages.js";

export default {
  name: "CreateForm",

  data() {
    return {
      form: {
        image: "",
        title: "",
        location: "",
        category_id: Number,
        city: "",
      },
    };
  },

  methods: {
    async create() {
      const verify = confirm("Do you want to create an image with this data?");

      if (verify === true) {
        const response = await apiImages.createImage(this.form);

        if (response === undefined) {
          alert("Repeat operatio");

          return;
        }

        alert("Congrats!");

        this.$router.push("/myview");
      }

      return;
    },
  },
};
</script>

<template>
  <h4 class="mt-5 mb-5 text-center">Create an image</h4>

  <div class="card">
    <div
      class="tab-content d-flex justify-content-center align-items-center m-auto"
      id="pills-tabContent"
    >
      <div
        class="tab-pane fade show active m-auto"
        id="pills-user"
        role="tabpanel"
        aria-labelledby="pills-user-tab"
      >
        <div class="form">
          <div>
            <label for="title" class="mb-1">Title</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="Title"
              v-model="form.title"
            />
          </div>

          <div>
            <label for="image" class="mb-1">Image</label>
            <input
              id="image"
              type="text"
              class="form-control"
              placeholder="Image"
              v-model="form.image"
            />
          </div>

          <div>
            <label for="location" class="mb-1">Location</label>
            <input
              id="location"
              type="text"
              class="form-control"
              placeholder="Location"
              v-model="form.location"
            />
          </div>

          <div>
            <label for="city" class="mb-1">City</label>
            <input
              id="city"
              type="text"
              class="form-control"
              placeholder="City"
              v-model="form.city"
            />
          </div>

          <div>
            <label for="category" class="mb-1"
              >Category (1food or 2attractions)</label
            >
            <input
              id="category"
              type="number"
              class="form-control"
              placeholder=""
              v-model="form.category_id"
            />
          </div>

          <button id="create" class="mb-5" v-on:click="create">
            Create your image
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/main.css";

h4 {
  letter-spacing: 0.1vw;
}

.card {
  width: 50vw;
  height: 50vh;
  margin: 5vh auto;
  border: none;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2vw;
  gap: 2vw;
}
.form label {
  font-size: 1.3vw;
}
.form input {
  padding: 1vh 1.3vw;
  border: 0.2vw solid var(--base-color-bluelight);
  outline: none;
}
input:focus {
  box-shadow: 0 0 0.2vw var(--base-color-bluelight);
}

#create {
  padding: 1vh 1.3vw;
  color: white;
  background-color: var(--base-color-bluelight);
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
}
#create:hover {
  background-color: #005998;
}
</style>
