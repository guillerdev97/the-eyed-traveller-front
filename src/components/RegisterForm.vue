<script>
export default {
  name: "RegisterForm",

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
};
</script>

<template>
  <h4 class="mt-5 mb-5 text-center">Create an account and start to explore</h4>

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
              placeholder="Name"
            />
          </div>

          <div>
            <label for="email" class="mb-1">Email</label>
            <input
              id="email"
              type="text"
              class="form-control"
              placeholder="E-mail"
            />
          </div>

          <div>
            <label for="password" class="mb-1">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>

          <div>
            <label for="confirmation" class="mb-1">Confirm your password</label>
            <input
              id="confirmation"
              type="password"
              class="form-control"
              placeholder="Confirm password"
            />
          </div>

          <button id="create">Create your account</button>
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
