<template>
  <div class="grid">
    <div
      v-for="n in images"
      :key="n.id"
      class="grid__item"
      @click="lightboxVisible = true"
      :slide="Number(n.id) - 1"
    >
      <img :src="n.url" alt="" loading="lazy" />
    </div>
  </div>
  <teleport to="body">
    <div class="lightbox" v-show="lightboxVisible">
      <div class="lightbox__dialog">
        <div class="lightbox__content">
          <div class="lightbox__header">
            <span></span>
            <span class="lightbox__close" @click.stop="lightboxVisible = false"
              >&times;</span
            >
          </div>
          <div class="lightbox__body">
            <the-carousel :current-slide="slide"></the-carousel>
          </div>
          <div class="lightbox__footer"></div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
// import { ref } from "vue";
import TheCarousel from "./TheCarousel.vue";
// const lightboxVisible = ref(false);
// const slide = ref(0);

export default {
  components: {
    TheCarousel,
  },

  data() {
    return {
      images: [],
      lightboxVisible: false,
      slide: 0,
    };
  },

  methods: {
    async getImages() {
      try {
        const getApi = await fetch(
          "https://strapi-production-4272.up.railway.app/api/illustrations?populate=Image",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await getApi.json();

        const results = await data.data.map((el) => {
          console.log(el);
          return {
            id: el.id,
            caption: el.attributes.Title,
            url: el.attributes.Image.data[0].attributes.formats.small.url,
          };
        });

        this.images = results;
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    await this.getImages();
  },
};
</script>

<style scoped lang="scss">
.grid {
  padding: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 345px));

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(100px, 345px));
  }

  grid-auto-rows: max-content;
  grid-auto-flow: dense;
  gap: 10px;

  &__item {
    width: auto;
    overflow: hidden;

    & img {
      scale: 1;
      width: 100%;
      height: 100%;
      min-height: 180px;
      max-height: 345px;
      object-fit: cover;
      background-color: pink;
      cursor: pointer;
      transition: all 2.2s cubic-bezier(0.14, 0.4, 0.09, 0.99);
    }

    & img:hover {
      scale: 1.15;
    }
  }
}
.lightbox {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);

  &__dialog {
    position: relative;
    z-index: 101;
    margin: auto;
    padding: 0;
    width: inherit;
    height: inherit;
  }

  &__content {
    position: relative;
    z-index: 102;
    overflow: auto;
    width: inherit;
    height: inherit;
    // display: grid;
    // align-items: center;
    // align-items: end;
  }

  &__header {
    padding: 10px;
    width: calc(100vw - 30px);
    position: absolute;
    z-index: 104;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
  }

  &__body {
    position: relative;
    z-index: 103;
  }
  &__footer {
    padding: 10px;
    width: calc(100vw - 30px);
    position: absolute;
    z-index: 104;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
  }

  &__close {
    color: white;
    cursor: pointer;
    font-weight: bold;

    & svg,
    & svg i,
    & svg img {
      pointer-events: none;
    }

    &:hover,
    &:focus {
      color: #999;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
