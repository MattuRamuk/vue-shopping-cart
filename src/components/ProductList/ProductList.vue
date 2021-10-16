<template>
  <div class="container">
      <h1>Product List Component</h1>
     <product
      v-for="product in products"
      :key="product.id"
      :product="product"
     ></product>
  </div>
</template>

<script>
import Product from './Product'
export default {
  components : {
    Product
  },
  computed : {
    products() {
      return this.$store.getters.getProducts
    }
  } 
}
</script>

<style>

</style>