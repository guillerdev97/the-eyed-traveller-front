<script>
export default {
  name: "LandingView",

  methods: {
    pushToHome() {
      this.$router.push("/home");
    },

    duration() {
      setTimeout(this.pushToHome, 2000);
    },
  },

  created() {
    this.duration();
  },
};
</script>

<template>
  <svg class="ring" viewBox="25 25 50 50" stroke-width="5">
    <circle cx="50" cy="50" r="20" />
  </svg>
</template>

<style></style>
