<script>
import TheAuthHeader from "../components/TheAuthHeader.vue";
import LoginForm from "../components/LoginForm.vue";

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
