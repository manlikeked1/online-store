<template lang="html">
  <div class="container mt-1">
    <h1 class="mb-4"><strong>My Cart</strong></h1>
    <div class="row" v-if="myCart == 0">
      <div class="col-12">
        <div class="bg-white shadow-sm rounded p-4">No item in cart.</div>
      </div>
    </div>
       <div class="row mt-2">
           <div class="col-md-12" v-for="product in myCart" :key="product.id">
             <div class="cartItem bg-white shadow-sm rounded p-2 mb-3">
               <div class="row align-items-center">
                 <div class="col-md-1">
                   <img style="width: 60px; height:60px" class="card-img-top" v-bind:src="product.image">
                 </div>
                 <div class="col-md-6">
                   <div class="cart-name"><strong>{{product.name}}</strong></div>
                 </div>
                 <div class="col-md-4">
                    <div class="cart-price"><strong>&#8358;{{product.price}}</strong></div>
                 </div>
                 <div class="col-md-1">
                     <div class="btn btn-circle " @click="removeFromCart(product)">
                       <i class="mdi mdi-window-close"></i>
                     </div>
                 </div>
               </div>
             </div>
           </div>
          </div>
          <div class="total" v-if="totalPrice">
            <strong>  Total : &#8358;{{totalPrice}}</strong>
          </div>
        </div>



</template>


<script>
import Cart from "./../data/cart.js"
import allProducts from './../data/allProducts.js'

export default {
   name: 'Cart',
   data() {
    return {
      myCart: Cart,
      products: allProducts,
     }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;

      this.myCart.forEach( item => {
        totalPrice +=item.price;
      })

      return totalPrice;
    },
    sortedMyCart() {
      var sortedCart = [...new Set(this.myCart)];

      // return this.myCart.filter(function(product, position) {
      //   return this.myCart.indexOf(product)  == !position;
      // });
      return sortedCart;
    }
  },
  methods: {
    removeFromCart(product) {
      var cart = this.myCart;
      var positionOfProduct = cart.indexOf(product);
      cart.splice(positionOfProduct, 1);
    }
  },
  mounted() {

  }
}
    </script>

    <style scoped>
    .btn {
      /* padding-: 30px; */
      background-color: lightgrey;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      /* margin-top: 70px; */

    }

    .total{
      float: right;
    }
    </style>
