<template lang="html">
  <div class="container mt-1">
    <h1 class="mb-4"><strong>My Cart</strong></h1>
    <div class="row" v-if="bigCart == 0">
      <div class="col-12">
        <div class="bg-white shadow-sm rounded p-4">No item in cart.</div>
      </div>
    </div>
    <div class="row mt-2">
           <div class="col-md-12" v-for="product in distinctCart" :key="product.id">
             <div class="cartItem bg-white shadow-sm rounded p-2 mb-3">
               <div class="row align-items-center mb-3">
                 <div class="col-md-1">
                   <img style="width: 60px; height:60px" class="card-img-top" v-bind:src="product.image">
                 </div>
                 <div class="col-md-7">
                   <div class="cart-name"><strong>{{product.name}}</strong></div>
                 </div>
                 <div>
                    <i class="mdi mdi-plus-box" @click="addCart(product)" ></i> 
                        {{product.quantity}}  
                     <i class="mdi mdi-minus-box" @click="removeCart(product)"></i>
                </div>
                <div class="col-md-2">
                    <div class="cart-price"><strong>&#8358;{{product.price}}</strong></div>
                 </div>
                 <div class="col-md-1">
                     <div class="btn btn-circle " @click="removeProduct(product)">
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
// import card from "./card.vue";

export default {
   name: 'Cart',
   data() {
    return {
     }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;

      this.bigCart.forEach( item => {
        totalPrice +=item.price;
      })

      return totalPrice;
    
    },
      bigCart (){
        return this.$store.getters.getBigCart
      },
      distinctCart(){
        return this.$store.getters.getDistinctCart
      }
  },
  methods: {
    removeFromCart(product) {
      var cart = this.bigCart;
      // var positionOfProduct = cart.indexOf(product);
      cart.splice(cart.indexOf(product), 1);
    },
    removeCart(cart) {
      this.$store.commit('removeFromCart',cart)
    },
    addCart(cart) {
      this.$store.commit('addToCart',cart)
    },
    removeProduct(cart){
        this.$store.commit('removeProduct', cart)
    },
  },

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
