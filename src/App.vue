<template>
  <div id="app">
    <navbar :cartNo="numberInCart" />
    <div class="container">
      <div class="row">
        <div class="col">
          <transition name="appear">
            <router-view />
         </transition>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import {eventBus} from "./main.js";

import Cart from '@/data/cart.js';

export default {
  components: {
    Navbar
  },
  computed: {
    numberInCart() {
      return Cart.length;
    }
  },
  beforeCreate() {
      eventBus.$on('addToCart', (data) => {
        console.log("adding product");

        Cart.unshift(data);

        console.log(Cart);
      });
   },
//     eventBus.$on('counter',(data) => {
//       productQuantity.unshift(data);
//     });
}
</script>
<style lang="css" scoped>
  @import url("//cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css");

  /* .expand-transition {
  transition: all .2s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
} */
.leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
  .appear-enter-active {
    animation: appear-animation .5s;
  }
  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }
  @keyframes appear-animation {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 9;
    }
  }

</style>
