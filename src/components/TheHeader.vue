<script>
import { RouterLink } from "vue-router";

export default {
  name: "TheHeader",

  components: { RouterLink },
};
</script>

<template>
  <header
    class="d-flex flex-column justify-content-around align-items-center pt-3 pb-3"
  >
    <nav class="d-flex justify-content-between align-items-center w-75 mb-3">
      <a href="/"><h4 id="title" class="fw-bold">The Eyed Traveller</h4></a>

      <div id="login" class="d-flex justify-content-around align-items-center">
        <div>
          <p class="pt-1 pb-1">Create your account</p>
        </div>

        <div>
          <p class="pt-1 pb-1">Sign in</p>
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

    <section>
      <form>
        <input id="input" type="text" placeholder="🔍 Where are you going?" />
        <input id="submit" type="submit" value="Search" />
      </form>
    </section>
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

#input {
  padding: 1vh 1.5vw;
  color: rgb(99, 99, 99);
  border: 3px solid #febb02;
  outline: none;
}
#input:hover {
  box-shadow: 0.1px 0.1px 0.1px 1px rgb(127, 127, 127) inset;
}
#input:focus {
  color: rgb(99, 99, 99);
}

#submit {
  padding: 1vh 1.5vw;
  color: white;
  background-color: var(--base-color-bluelight);
  border: 3px solid #febb02;
  transition: all 0.2s ease-in;
}
#submit:hover {
  background-color: #005998;
}
</style>
