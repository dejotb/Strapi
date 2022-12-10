<template>
  <section>
    <ul class="gallery__container">
      <li v-for="(image, index) in images" :key="index" class="gallery__item">
        <img
          :src="image.imgUrl"
          :alt="image.caption"
          :data-id="image.id"
          loading="lazy"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [],
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

        const results = data.data.map((el) => {
          return {
            id: el.id,
            caption: el.attributes.Title,
            imgUrl: el.attributes.Image.data[0].attributes.url,
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
section {
  padding: 1rem;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

.gallery {
  &__container {
    padding: 1rem;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 345px));
    grid-auto-rows: max-content;
    gap: 10px;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, minmax(100px, 345px));
    }
  }

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
</style>
