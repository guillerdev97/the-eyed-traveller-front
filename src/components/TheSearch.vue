<script></script>

<template>
  <section>
    <form>
      <input id="input" type="text" placeholder="🔍 Where are you going?" />
      <input id="submit" type="submit" value="Search" />
    </form>
  </section>
</template>

<style>
@import "../assets/main.css";

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
