<template lang="html">
  <div class="container">
    <h2 class="header">Notebooks.</h2>
    <div class="row">
      <div class="col-md-4" v-for="product in notebooks" :key="product.id">
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
// import notebooks from './../data/notebooks.js'

export default {
  name: 'Notebooks',
  components:{
    'product-card':ProductCard,
  },
  data(){
    return {
      // products: notebooks,

    }
  },
  computed: {
    notebooks(){
      return this.$store.getters.getNotebooks
    }
  }
};
</script>

<style scoped>
header{
  text-align: left;
}
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
