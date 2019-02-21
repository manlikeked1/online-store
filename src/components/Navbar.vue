<template>
  <nav class="sticky-top">
    <ul>
      <li><router-link to="/">AllProducts</router-link></li>
      <li><router-link to="/smartphones">Smartphones</router-link></li>
      <li><router-link to="/notebooks">Notebooks</router-link></li>
      <li>
        <router-link class="btn btn-primary py-1 px-3 mr-5" :to="{name: 'cart'}">
          Cart ({{bigCart.length}})
          <i class="mdi mdi-cart"></i>
        </router-link>
      </li>

    </ul>

  </nav>
</template>
<script>
import Cart from "./../data/cart.js";
import { eventBus } from './../main.js';

export default {
  name: 'Navbar',
  data(){
    return{
      bigCart: [],
    }
  },
  mounted() {
    this.bigCart = Cart;
  }
}
</script>
<style scoped>
ul{
  list-style-type:none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color:#fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius:10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 70px;
  /* padding-top: 50px; */

}
.router-link-active{

  color:#fff;
}
/* ul{
    display: inline-block;
} */
.btn{
    margin-left: 300px;
}




</style>
