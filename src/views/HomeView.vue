<template>
  <div class="home">
    <!-- <the-carousel /> -->
    <ul>
      <galleryView></galleryView>
    </ul>
  </div>
</template>

<script>
import galleryView from "@/components/GalleryView.vue";

export default {
  name: "HomeView",

  components: {
    galleryView,
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
