<script>
import { RouterLink } from "vue-router";
import { apiAuth } from "../services/apiAuth.js";
import TheSearch from "./TheSearch.vue";

export default {
  name: "TheHeader",

  data() {
    return {
      token: false,
      name: null,
    };
  },

  methods: {
    checkToken() {
      const token = localStorage.getItem("token");

      if (token != undefined) {
        this.token = true;
      }
    },

    async logout() {
      await apiAuth.logout();

      localStorage.removeItem("token");
      localStorage.removeItem("name");

      this.$router.push("/login");
    },

    headerName() {
      const name = localStorage.getItem("name");
      this.name = name;
    },
  },

  created() {
    this.checkToken();
    this.headerName();
  },

  components: { RouterLink, TheSearch },
};
</script>

<template>
  <header
    class="d-flex flex-column justify-content-around align-items-center pt-3 pb-3"
  >
    <nav class="d-flex justify-content-between align-items-center w-75 mb-3">
      <router-link to="/">
        <h4 id="title" class="fw-bold">The Eyed Traveller</h4>
      </router-link>

      <div id="login" class="d-flex justify-content-around align-items-center">
        <div v-if="this.token === false">
          <router-link to="/register"
            ><p class="pt-1 pb-1">Create your account</p></router-link
          >
        </div>

        <div v-if="this.token === false">
          <router-link to="/login"
            ><p class="pt-1 pb-1">Sign in</p></router-link
          >
        </div>
        <p id="name" v-if="name != undefined">Hola, {{ name }}</p>
        <div v-if="this.token === true">
          <router-link to="/login"
            ><p class="pt-1 pb-1">Log out</p></router-link
          >
        </div>
      </div>
    </nav>

    <nav class="d-flex justify-content-center align-items-center w-75 mb-5">
      <div
        id="categories"
        class="d-flex justify-content-around align-items w-50"
      >
        <router-link class="link" to="/">
          <p class="pt-2 pb-2">Explore</p>
        </router-link>

        <router-link class="link" to="/food">
          <p class="pt-2 pb-2">Food</p>
        </router-link>

        <router-link class="link" to="/attractions">
          <p class="pt-2 pb-2">Attractions</p>
        </router-link>
      </div>
    </nav>

    <div class="d-flex flex-column justify-content-center align-items w-75">
      <h1 class="mb-2 fw-bold fs-1">Find your next travel</h1>

      <h4 class="mb-5">
        Search images, keep them and travel through your eyes...
      </h4>
    </div>

    <TheSearch />
  </header>
</template>

<style scoped>
@import "../assets/main.css";

.link.active {
  background-color: rgba(255, 255, 255, 0.098);
  border: 1px solid white;
  border-radius: 20px;
}

header {
  color: white;
  background-color: var(--base-color-blue);
  width: 100%;
}

#title {
  cursor: pointer;
}

#login {
  width: 20vw;
}
#login p {
  padding-left: 0.7vw;
  padding-right: 0.7vw;
  font-size: 1.3vw;
  color: var(--base-color-bluelight);
  background-color: white;
  transition: all 0.2s ease-in;
}
#login p:hover {
  cursor: pointer;
  background-color: rgb(223, 237, 251);
}

#categories p {
  padding-left: 1.4vw;
  padding-right: 1.4vw;
  color: white;
  border-radius: 20px;
  transition: all 0.2s ease-in;
}
#categories p:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.098);
}

#name {
  color: white;
  background-color: none !important;
  border: none;
}
</style>
