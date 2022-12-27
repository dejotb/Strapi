<template>
  <the-header> </the-header>
  <nav>
    <router-link to="/">Illustrations</router-link> |
    <router-link to="/about">Canvas</router-link> |
    <router-link to="/about">Auctions</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/">Contact</router-link>
    <router-view />
  </nav>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

nav {
  /* padding: 30px; */
  max-width: 100vw;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
