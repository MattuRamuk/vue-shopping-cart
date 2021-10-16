<template>
  <div>
    <v-app-bar
      color="info accent-4"
      dense
      dark
    >
      
      <v-toolbar-title>
        <router-link 
          to="/"
          tag="span"
          style="cursor: pointer"
          >
          {{appName}}
        </router-link>
      </v-toolbar-title>
      <v-btn class="ml-2">
        <router-link
          to="/ProductList"
          tag="span"
          exact-active-class="active"
        >
        <span>Products</span>
        
        </router-link>
        
      </v-btn>


      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link
          to="/cart"
          tag="span"

        >
          <v-icon>mdi-cart</v-icon>
        </router-link>
        
      </v-btn>

     
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data()
  {
    return {
      appName : 'Shopping Cart'
    }
  }
}
</script>

<style>

</style>