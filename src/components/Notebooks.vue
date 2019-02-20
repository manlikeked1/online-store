<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <div class="row">
              <div class="col-6">
                <div class="card-text">&#8358; {{product.price}}</div>
              </div>
              <div class="col-6">
                <div class="text"> {{product.quantity}}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                  <button class="btn btn-primary" type="submit">Add to cart <span><i class="mdi mdi-cart"></i></span></button>

              </div>


            </div>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Notebooks',
  data(){
    return {
      products:[
      {
          id: 7,
          name: 'Notebook Lenovo Ideapad 320 Intel Core i5-7200u 8GB',
          price: 240000,
          category: 'notebook',
          quantity: 'Quantity: 10',
          image: 'https://d3d71ba2asa5oz.cloudfront.net/50000171/images/80xm0000us-fb-rca1.jpg',
      },
      {
        id: 8,
          name: 'Notebook Dell Inspironi15-3567-A30P Intel Core 7a i5 4GB',
          price: 240000,
          category: 'notebook',
          quantity: 'Quantity: 10',
          image: 'https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133276/5/133276561SZ.jpg',
      },
      {
          id: 9,
          name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
          price: 180000,
          category: 'notebook',
          quantity: 'Quantity: 10',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51eKsdLRrYL._SY355_.jpg',
      },
      {
          id: 10,
          name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
          price: 300000,
          category: 'notebook',
          quantity: 'Quantity: 10',
          image: 'https://images-na.ssl-images-amazon.com/images/I/81AhD58b0EL._SL1500_.jpg',
      },
      {
          id: 11,
          name: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
          price: 200000,
          category: 'notebook',
          quantity: 'Quantity: 10',
          image: 'https://a-static.mlcdn.com.br/618x463/notebook-vaio-fit-15s-intel-core-i7-8gb-1tb-led-156-windows-10/magazineluiza/217301400/f5e5316a987670f2e3d5b433c151b471.jpg',
      },
      {
          id: 12,
          name: 'Notebook Dell Alienware -i7 16GB',
          price: 1500000,
          category: 'notebook',
          quantity: 'Quantity: 10',
          image: 'https://images.yaoota.com/WSFoC5I6dcPXLMDtBfw6lBdZteI=/trim/yaootaweb-production-ng/media/crawledproductimages/c47c5ac55cba90dd219ca9c90f1e46382b7602e2.jpg',
      },

  ]

    }
  }
};
</script>

<style scoped>
body {
  background-color: grey !important;
}
button {
  /* padding-bottom: 80px; */
  margin-top: 20px;
}
.btn {
  /* padding-: 30px; */
  width: 300px;
  height: 40px;
  background-color: green;
}
.card-img-top{
  /* margin-top: 200px; */
  height: 300px;
  /* background: grey; */

}
.card{
  margin-bottom: 30px;
}
.text{
  padding-left: 40px;
}
</style>
