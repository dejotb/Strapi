<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <galleryView msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import galleryView from "@/components/IllustrationsGallery.vue";

export default {
  name: "HomeView",

  components: {
    galleryView,
  },
};
</script>

<style>
.home {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
