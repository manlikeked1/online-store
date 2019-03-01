<template>

  <nav class="sticky-top">
    <ul>
      <!-- <li><router-link to="/">Welcome</router-link></li> -->
      <li><router-link to="/allproducts">AllProducts</router-link></li>
      <li><router-link to="/smartphones">Smartphones</router-link></li>
      <li><router-link to="/notebooks">Notebooks</router-link></li>
      <li>
        <div class="dropdown open">
          <button class="btn btn-primary" type="button" id="triggerId"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cart
            <i class="mdi mdi-cart"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="triggerId" >
            <div class="col" v-for = "product in bigCart" :key = "product.id">
              <div class="cartItem bg-white shadow-sm ">
                <div class="row align-items-justify mb-3">
                  <div class="col-2">
                    <div class="item-img pull-left">
                      <img style="width: 60px; height:60px" class="card-img-top" v-bind:src="product.image">
                    </div>
                  </div>
                  <div class="col-6">
                    <div>{{ product.name }}</div>
                  </div>
                  <div class="col-4">
                    <div>&#8358;{{ product.price }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="" v-if = "bigCart.length==0">No Item in Cart</div>
            <router-link to="/cart" exact>
              <button class="btn btn-primary" v-if="bigCart.length > 0">View Cart
                <i class="mdi mdi-cart"></i>
              </button>
            </router-link>
            <button class="btn btn-danger clear" v-on:click="clearCart(product)" v-if="bigCart.length > 0">Clear Cart</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="notification"   v-if="bigCart.length > 0">
      {{bigCart.length}}
    </div>



  </nav>
</template>
<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'Navbar',
  components:{
    'product-card': ProductCard,
  },
  data(){
    return{
    
      }
    },
    methods:{
    clearCart(product) {
      var cart = this.myCart;
     cart.splice(cart);
   },
 },
 computed: {
   bigCart(){
     return this.$store.getters.getBigCart
   }
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

  .notification {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position:absolute;
    top: 10px;
    left: 59rem;
    font-weight:bold;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
    
  }

  .router-link-active{

    color:#fff;
  }
  /* ul{
    display: inline-block;
  } */
  .my-cart{
    margin-left: 300px;
  }

  .dropdown-menu{
      width:400px;
      height: 400px;
      overflow-y: scroll;

  }
  .clear{
    margin-left: 10rem;
  }
  


</style>
