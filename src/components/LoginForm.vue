<script>
import { apiAuth } from "../services/apiAuth.js";

export default {
  name: "LoginForm",

  data() {
    return {
      incorrect: false,
      noRegister: false,
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    clearStorage() {
      localStorage.clear();
    },

    async correctLogin() {
      const response = await apiAuth.login(this.form);

      // bad response cases
      if (response === undefined) {
        this.noRegister = true;
        return;
      }

      if (response === "Incorrect password") {
        this.incorrect = true;
        return;
      }

      if (response === "User no registered") {
        this.noRegister = true;
        return;
      }

      // good response cases
      if (response != undefined) {
        const token = response.data.access_token;
        const name = response.data.data.name;

        localStorage.setItem("token", token);
        localStorage.setItem("name", name);

        this.$router.push("/myview");
        return;
      }
    },

    clearOnFocus() {
      this.incorrect = false;
      this.noRegister = false;
    },
  },

  created() {
    this.clearStorage();
  },
};
</script>

<template>
  <h4 class="mt-5 mb-5 text-center">Sign in and start to explore</h4>

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
            <label for="email" class="mb-1">¿Who are you?</label>
            <input
              id="email"
              type="text"
              class="form-control"
              placeholder="E-mail"
              v-model="form.email"
              v-on:focus="clearOnFocus"
            />
            <p v-if="this.noRegister">User no registered</p>
          </div>

          <div>
            <label for="password" class="mb-1">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="form.password"
              v-on:focus="clearOnFocus"
            />
            <p v-if="this.incorrect">Incorrect password</p>
          </div>

          <button id="enter" v-on:click="correctLogin">Enter</button>
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

#enter {
  padding: 1vh 1.3vw;
  color: white;
  background-color: var(--base-color-bluelight);
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
}
#enter:hover {
  background-color: #005998;
}
</style>
