<template>
  <div id="app">
    <navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <router-view />
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
  beforeCreate() {
      eventBus.$on('addToCart', (data) => {
        console.log("adding product");

        Cart.unshift(data);

        console.log(Cart);
      });
   }
};
</script>
<style scoped>
  @import url("//cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css");
</style>
