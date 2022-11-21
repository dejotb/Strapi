<template>
  <div class="home">
    <galleryView />
  </div>
</template>

<script>
// @ is an alias to /src
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
  max-width: 1100px;
  margin: 0 auto;
}
</style>
