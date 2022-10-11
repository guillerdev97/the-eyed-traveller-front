<script>
import { apiAuth } from "../services/apiAuth.js";

export default {
  name: "UpdateForm",

  data() {
    return {
      userId: "",
      warning: false,
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async userProfile() {
      const response = await apiAuth.userProfile();

      this.userId = response.data.data.id;
      this.form.name = response.data.data.name;
      this.form.email = response.data.data.email;
    },

    async updateUser() {
      alert("Are you sure you want to update user data?");

      if (this.form.password === "") {
        this.warning = true;

        return;
      }

      await apiAuth.updateUser(this.userId, this.form);

      alert("Data has been updated");

      this.$router.push("/myview");
    },

    clearOnFocus() {
      this.warning = false;
    },
  },

  created() {
    this.userProfile();
  },
};
</script>

<template>
  <h4 class="mt-5 mb-5 text-center">
    Update your account and continue exploring
  </h4>

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
            <label for="name" class="mb-1">Name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              placeholder=""
              v-model="form.name"
            />
          </div>

          <div>
            <label for="email" class="mb-1">Email</label>
            <input
              id="email"
              type="text"
              class="form-control"
              placeholder="E-mail"
              v-model="form.email"
            />
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
            <p v-if="this.warning">Empty input...</p>
          </div>

          <button id="update" v-on:click="updateUser">
            Update your account
          </button>
        </div>
      </div>
    </div>

    <div class="mt-5 d-flex justify-content-center align-items-center">
      <button id="delete" v-on:click="deleteUser">Delete your account</button>
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

#update {
  padding: 1vh 1.3vw;
  color: white;
  background-color: var(--base-color-bluelight);
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
}
#update:hover {
  background-color: #005998;
}

#delete {
  padding: 1vh 1.1vw;
  color: white;
  background-color: rgb(227, 73, 73);
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  font-size: 1vw;
}
#delete:hover {
  background-color: rgb(225, 37, 37);
}
</style>
