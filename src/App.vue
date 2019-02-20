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


export default {
  components: {
    Navbar
  }
};
</script>
<style scoped>
  @import url("//cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css");
</style>
