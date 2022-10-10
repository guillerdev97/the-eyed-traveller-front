<script>
export default {
  name: "TheHeader",
};
</script>

<template>
  <header
    class="d-flex flex-column justify-content-around align-items pt-3 pb-3"
  >
    <nav class="d-flex justify-content-between align-items w-75 border mb-2">
      <h4>The Eyed Traveller</h4>

      <div class="d-flex justify-content-around align-items w-25 border">
        <div>
          <p>Create your account</p>
        </div>
        <div>
          <p>Sign in</p>
        </div>
      </div>
    </nav>

    <nav
      class="d-flex justify-content-center align-items-center w-75 border mb-5"
    >
      <div class="d-flex justify-content-around align-items w-25 border">
        <p>Food</p>
        <p>Attractions</p>
      </div>
    </nav>

    <div
      class="d-flex flex-column justify-content-center align-items w-75 border"
    >
      <h1 class="mb-2">Find your next travel</h1>
      <h4 class="mb-5">
        Search images, find them and travel through your eyes
      </h4>
    </div>

    <section>
      <form>
        <input type="text" placeholder="🔍" />
        <input type="submit" />
      </form>
    </section>
  </header>
</template>

<style scoped>
@import "../assets/main.css";

header {
  color: white;
  background-color: var(--base-color-blue);
  width: 100%;
}
img #logo {
  width: 100%;
  height: 95%;
}
header,
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.appTitle {
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  font-size: 3vh;
  color: var(--base-color-orange);
}
.user p,
#logout {
  color: var(--base-color-white);
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 1.5vh;
}
.user div {
  margin: 0 0.5vw 0 0.5vw;
}
#logout {
  border: none;
  width: 5vw;
  height: 4vh;
  border-radius: 10vh;
  background-color: var(--purple-dark);
}
</style>
