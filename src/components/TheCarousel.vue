<template>
  <section>
    <Swiper
      @swiper="onSwiper"
      :slides-per-view="1"
      :space-between="50"
      :modules="[Navigation, Pagination, A11y, Lazy]"
      navigation
      :pagination="{ clickable: true, dynamicBullets: true }"
      grab-cursor
      :preload-images="false"
      lazy
    >
      <SwiperSlide v-for="n in images" :key="n" class="customSlide">
        <img :data-src="n.url" :alt="n.caption" class="swiper-lazy" />
        <div class="swiper-lazy-preloader"></div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
// import { ref, watch, toRefs } from "vue";
import { Navigation, Pagination, A11y, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

// const props = defineProps({
//   currentSlide: Number,
// });

// const swiperRef = ref(null);

// const { currentSlide } = toRefs(props);

// watch(currentSlide, () => {
//   if (swiperRef.value !== null) {
//     swiperRef.value.slideTo(props.currentSlide);
//   }
// });

// const onSwiper = (swiper) => {
//   swiperRef.value = swiper;
// };

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      images: [],
    };
  },

  setup() {
    return {
      Navigation,
      Pagination,
      A11y,
      Lazy,
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
          return {
            id: el.id,
            caption: el.attributes.Title,
            url: el.attributes.Image.data[0].attributes.url,
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

<style scoped>
.customSlide {
  display: grid;
  place-items: center;
  max-height: 100vh;
}
</style>
