async function getProducts() {
    const getApi = await fetch('http://localhost:1337/api/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await getApi.json();

    //  console.log(data);
     return data;
}


async function getImages() {
    const getApi = await fetch('https://strapi-production-4272.up.railway.app/api/illustrations?populate=Image', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await getApi.json();



console.log(data.data);

     return data.data;
}


// getImages()


const container = document.querySelector('.container')

// console.log(container);


async function getData() {
   const data = await getProducts();
   const result = await data.data
    const output = await result.map(el => el.attributes);
    return output
}


function createMarkup(data) {
    const markup = `<h1>${data.title}</h1>`
    container.insertAdjacentHTML('afterbegin', markup)
}


function createImage(data) {
    const markup = `<img src="${data}" alt="">`
    container.insertAdjacentHTML('afterbegin', markup)
}

async function showImgs() {
    const images = await getImages();
    images.forEach(element => {
        console.log();
        createImage(element.attributes.Image.data[0].attributes.url)
    });
}


async function showData() {
    const data = await getData()
    // console.log(data);

    data.forEach(element => {
        createMarkup(element)
    });
}

//test
// showData()
showImgs()