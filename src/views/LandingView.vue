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

    clearStorage() {
      localStorage.removeItem("token");
    },
  },

  created() {
    this.duration();
    this.clearStorage();
  },
};
</script>

<template>
  <!-- loaders ui ball -->
  <div class="d-flex justify-content-center align-items-center">
    <svg class="ring" viewBox="25 25 50 50" stroke-width="5">
      <circle cx="50" cy="50" r="20" />
    </svg>
  </div>
</template>

<style scoped>
@import "../assets/main.css";

div {
  width: 100;
  height: 100vh;
}
/* loaders ui ball web */
.ring {
  --uib-size: 40px;
  --uib-speed: 2s;
  --uib-color: var(--base-color-blue);

  height: var(--uib-size);
  width: var(--uib-size);
  vertical-align: middle;
  transform-origin: center;
  animation: rotate var(--uib-speed) linear infinite;
}

.ring circle {
  fill: none;
  stroke: var(--uib-color);
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes stretch {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -124px;
  }
}
</style>
