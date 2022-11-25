<template>
  <Swiper
    :slides-per-view="1"
    :space-between="5"
    :modules="[Navigation, Pagination, A11y, Virtual]"
    navigation
    :pagination="{ clickable: true, dynamicBullets: true }"
    grab-cursor
    virtual
  >
    <SwiperSlide v-for="n in images" :key="n" :virtualIndex="n">
      <img :src="n.url" alt="" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Navigation, Pagination, A11y, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

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
      Virtual,
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

  mounted() {
    this.getImages();
  },
};
</script>
