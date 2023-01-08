<template>
  <nav>
    <router-link to="/">Illustrations | </router-link>
    <router-link to="/about">Canvas | </router-link>
    <router-link to="/about">Auctions | </router-link>
    <router-link to="/about">About | </router-link>
    <router-link to="/about">Contact</router-link>
    <router-view />
  </nav>
</template>

<script></script>

<style scoped>
nav {
  /* padding: 30px; */
  /* display: flex; */
  /* grid-gap: 2rem; */
  justify-content: center;
  max-width: 100vw;
  font-size: 1.5rem;
}

nav a {
  /* font-weight: bold; */
  /* color: #2c3e50; */
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

nav a.router-link-exact-active {
  color: grey;
}
nav a:hover {
  color: #e18acf;
}
</style>
