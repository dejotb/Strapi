<template>
  <div class="home">
    <the-carousel />
  </div>
</template>

<script>
// @ is an alias to /src
// import galleryView from "@/components/GalleryView.vue";
import TheCarousel from "@/components/TheCarousel.vue";

export default {
  name: "HomeView",

  components: {
    // galleryView
    TheCarousel,
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
