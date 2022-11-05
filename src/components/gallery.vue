<template>
  <button @click="getImages">CLICK me</button>
  <ul class="container">
    <li v-for="(image, index) in images" :key="index">
      <img :src="image.attributes.Image.data[0].attributes.url" alt="image" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
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
  background-color: pink;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container {
  display: grid;
  justify-items: center;
  align-items: center;
  min-width: 200px;
  min-height: 200px;
  background-color: pink;
}
</style>
