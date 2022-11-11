<template>
  <section>
    <ul class="gallery__container">
      <li v-for="(image, index) in images" :key="index">
        <img
          :src="image.attributes.Image.data[0].attributes.url"
          alt="image"
          loading="lazy"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // name: "galleryView",
  props: {
    msg: String,
  },

  created() {
    this.getImages();
  },
  data() {
    return {
      images: [],
    };
  },

  methods: {
    async getImages() {
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

      console.log(data.data);

      this.images = data.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  background-color: #ece8f5;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

li img {
  width: 100%;
  height: 100%;
  /* aspect-ratio: 1/1; */
  object-fit: cover;
  object-position: 50% 50%;
  cursor: pointer;
  border-radius: 10px;
  /* overflow: hidden; */
}

li:nth-child(2n) {
  @media (min-width: 600px) {
    grid-row: span 2;
  }
}
li:nth-child(5n) {
  @media (min-width: 600px) {
    grid-column: span 2;
  }
}

.gallery__container {
  display: grid;
  grid-template-columns: repeat((auto-fit, minmax(200px, 400px)));
  grid-auto-rows: 400px;
  justify-content: center;
  grid-gap: 10px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 300px 300px 400px;
    grid-gap: 20px;
    grid-auto-flow: dense;
  }
}
</style>
