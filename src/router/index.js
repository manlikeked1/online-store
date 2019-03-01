import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '@/components/AllProducts';
import Smartphones from '@/components/Smartphones';
import Notebooks from '@/components/Notebooks';
import ProductItem from '@/components/ProductItem';
import Cart from '@/components/Cart';
import Welcome from '@/components/Welcome';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'welcome',
      component:Welcome
    },
    {
      path: '/allproducts',
      name: 'allProducts',
      component: AllProducts
    },
    {
      path: '/smartphones',
      name: 'smartphones',
      component: Smartphones
    },
    {
      path: '/notebooks',
      name: 'notebooks',
      component: Notebooks
    },
    {
      path: '/productItem',
      name: 'productitem',
      component: ProductItem
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },


    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: NotFound
    // }
  ]
});
