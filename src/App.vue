<template>
  <the-header> </the-header>
  <the-navigation></the-navigation>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { TheNavigation, TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Indie Flower", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ece8f5;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  /* overflow: hidden; */
  /* width: 100vw; */
  /* max-width: 100vw; */
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
