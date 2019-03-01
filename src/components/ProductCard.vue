<template lang="html">
  <div class="card">
    <div class="row">
      <div class="col p-3">
        <div class="card-img-top" :style="{backgroundImage: 'url('+productImage+')'}">
        </div>
      </div>
    </div>
    <div class="card-body">
    <h5 class="card-title">{{productName}}</h5>
      <div class="row">
        <div class="col-md-5">
          <div class="card-text"><strong>&#8358; {{productPrice}}</strong></div>
        </div>
        <div class="col-md-7">
          <div class="text"> <strong>Quantity: {{productStock}}</strong></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
            <button class="btn btn-primary btn-block" @click=" addToCart(wholeProduct)">Add to cart <i class="mdi mdi-cart"></i></button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { eventBus } from './../main.js';
// import quantity from './../data/Quantity.js'
export default {
  props: [
    'productName',
    'productPrice',
    'productQuantity',
    'productImage',
    'wholeProduct',
    'productStock',

  ],
  methods:{
    addToCart(product) {
      this.$store.commit('addToCart',product)

    },
},
}
</script>

<style scoped>

button {
  /* padding-bottom: 80px; */
  margin-top: 20px;
}
.btn {
  /* padding-: 30px; */
  background-color: green;
  /* margin-top: 70px; */

}
.card-img-top{
  /* margin-top: 200px; */
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center,center;

  /* background: grey; */

}
.card{
  margin-bottom: 30px;
  /* padding-top: 70px; */
}
.text{
  padding-left:40px;
}
</style>
