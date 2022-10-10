<script>
export default {
  name: "TheAuthHeader",
};
</script>

<template>
  <header class="d-flex justify-content-center align-items-center pt-3 pb-3">
    <nav class="d-flex justify-content-between align-items-center w-75">
      <a href="/"><h4 id="title" class="fw-bold">The Eyed Traveller</h4></a>
      <h1 class="fw-bold fs-2">Find your next travel</h1>
    </nav>
  </header>
</template>

<style scoped>
@import "../assets/main.css";

header {
  color: white;
  background-color: var(--base-color-blue);
  width: 100%;
}

#title {
  cursor: pointer;
}
</style>
