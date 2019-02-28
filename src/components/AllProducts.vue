<template lang="html">
  <div class="container">
  <h2 class="header">All Products.</h2>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
          <product-card :productName="product.name"
                        :productPrice="product.price"
                        :productQuantity="product.quantity"
                        :productImage="product.image"
                        :wholeProduct="product"
                        :productStock="product.stock"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components:{
    'product-card': ProductCard,
  },
  data() {
        return {
            // products: allProducts,
        }
    },
    computed:{
      products (){
        return this.$store.getters.getAllProducts
      }
    }

}
</script>
<style scoped>
.header {
  text-align: left;

}

</style>
