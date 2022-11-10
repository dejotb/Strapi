<template>
  <ul class="gallery__container">
    <li v-for="(image, index) in images" :key="index">
      <img
        :src="image.attributes.Image.data[0].attributes.url"
        alt="image"
        loading="lazy"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "galleryView",
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
<style scoped>
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
/* li:nth-of-type(3n) { */
/* background-color: red; */
/* display: inline-block; */
/* margin: 0 10px; */
/* } */

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
  /* overflow: hidden; */
}

li:nth-child(2n) {
  grid-row: span 2;
}
li:nth-child(5n) {
  grid-column: span 2;
}
/* li:nth-child(3) {
  grid-column: span 2;
} */

.gallery__container {
  display: grid;
  grid-gap: 20px;
  /* justify-content: center; */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  /* grid-auto-rows: 300px; */
  /* align-items: center; */
  /* background-color: pink; */
  grid-auto-rows: 300px 300px 400px;
  grid-auto-flow: dense;
  /* transition: grid-columns-rows 1s; */
}
</style>
