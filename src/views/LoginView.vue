<script>
import TheAuthHeader from "../components/TheAuthHeader.vue";
import LoginForm from "../components/forms/LoginForm.vue";

export default {
  name: "LoginView",
  components: { TheAuthHeader, LoginForm },
};
</script>

<template>
  <TheAuthHeader />
  <LoginForm />
</template>

<style></style>
