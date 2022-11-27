<template>
  <div class="home">
    <!-- <the-carousel /> -->
    <the-lightbox></the-lightbox>
  </div>
</template>

<script>
// @ is an alias to /src
// import galleryView from "@/components/GalleryView.vue";
// import TheCarousel from "@/components/TheCarousel.vue";
import TheLightbox from "@/components/TheLightbox.vue";

export default {
  name: "HomeView",

  components: {
    // galleryView
    // TheCarousel,
    TheLightbox,
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
