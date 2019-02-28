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
        <div class="col-md-6">
          <div class="card-text"><strong>&#8358; {{productPrice}}</strong></div>
        </div>
        <div class="col-md-6">
          <div class="text"> <strong>Quantity: {{productQuantity}}</strong></div>
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

  ],
  // data:{
  //   counter:10
  // }
  methods:{
    // addToCart(product) {
    //   // eventBus.$emit('addToCart', product);
    // },
    addToCart(product) {

      this.productQuantity--;
      eventBus.$emit('addToCart', product);
      if(this.productQuantity < 0){
        this.productQuantity = 0;
        alert('Sorry product is finished!');
      }
    },

    // counter(quantity){
      // eventBus.$emit('counter--',quantity);
  //   },
  //   handler : function(addToCart,counter){
  //     this.addToCart(product);
  //     this.counter(quantity);
  //
  // }
  // handler:function(product,productQuantity){
  //   this.addToCart(product);
  //   this.counter(productQuantity)
  //
  // }

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
