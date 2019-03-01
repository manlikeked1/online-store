<template>
    <div>
        <div class="jumbotron container">
            <h1 class="display">Welcome!</h1>
            <hr class="my-4">
            <hr class="my-4">
            <hr class="my-4">
            <div class="row justify-content-center">
                <div class="col-4">
                    <div class="btn btn-lg mine">
                        <router-link  to ='/allProducts'>View All Products</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // image: require(''),
        }
    }
}
</script>
<style scoped>
.jumbotron {
    color: black;
}
body {
    background-color: rgb(71, 40, 40)
}
.display {
    text-align: center;
    text-decoration-style: dotted;
    text-decoration: antiquewhite;
    font-family: Batang;
}
.btn {
    font-family: serif;
    font-style: italic;
    color: antiquewhite;
    /* text-align: center !important; */

}

.mine{
    display: flex;
    justify-content: center;
}




</style>

