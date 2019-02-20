<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <div class="row">
              <div class="col-6">
                <div class="card-text">&#8358; {{product.price}}</div>
              </div>
              <div class="col-6">
                <div class="text"> {{product.quantity}}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                  <button class="btn btn-primary" type="submit">Add to cart <span><i class="mdi mdi-cart"></i></span></button>

              </div>


            </div>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Smartphones',
  data(){
    return {
      products:[
        {
            id: 1,
            name: 'Smartphone Xiaomi Mi A1 dual Andriod one 7.1',
            price: 50000,
            category: 'phone',
            quantity: 'Quantity: 10',
            image: 'https://i.gadgets360cdn.com/products/large/1532429104_635_xiaomi_mi_a2.jpg',
        },
        {
            id: 2,
            name: 'Smartphone Samsung Galaxy s7 Edge',
            price: 300000,
            category: 'phone',
            quantity: 'Quantity: 10',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71a5okghrPL._SY550_.jpg',
        },
        {
            id: 3,
            name: 'Smartphone Moto G 5S Dual Chip Andriod 7.0',
            price: 90000,
            category: 'phone',
            quantity: 'Quantity: 10',
            image: 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/11519589/835611259/smartphone-motorola-moto-g5-plus-tv-xt1683-azul-com-32gb-tela-5-2-dual-chip-android-7-0-4g-camera-12mp-processador-octa-core-e-2gb-de-ram-11519589.jpg',
        },
        {
            id: 4,
            name: 'iPhone 8 Dourado 64GB Tela 4.7" iOS 11',
            price: 550000,
            category: 'phone',
            quantity: 'Quantity: 10',
            image: 'https://http2.mlstatic.com/iphone-8-dourado-64gb-tela-47-ios-11-4g-wi-fi-cmera-12mp-D_NQ_NP_988008-MLB27067186327_032018-F.jpg',
        },
        {
            id: 5,
            name: 'Smartphone Motorola Moto G6 Plus',
            price: 100000,
            category: 'phone',
            quantity: 'Quantity: 10',
            image: 'https://zdnet3.cbsistatic.com/hub/i/r/2018/05/14/08fb60b2-2a50-4e72-97d9-904dda2b8b5b/thumbnail/770x433/aca450e62396972ebf3b6cba079939e7/moto-g6-plus-header.jpg',
        },
        {
            id: 6,
            name: 'Smartphone Motorola Moto Z3 Play',
            price: 60000,
            category: 'phone',
            quantity: 'Quantity: 10',
            image: 'https://www.bhphotovideo.com/images/images500x500/moto_pa9s0000us_moto_z3_play_64gb_1406219.jpg',
        },
      ]

    }
  }
};
</script>

<style scoped>
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
