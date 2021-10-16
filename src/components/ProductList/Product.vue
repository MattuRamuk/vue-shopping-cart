<template>
  <div class="container">
      <v-layout>
        <v-flex md12>
          <v-card>
            <v-card-title>
              <h2>{{ product.name }}</h2>
              <v-spacer></v-spacer>
              <h4>{{ product.price  | currency }}</h4>
            </v-card-title>
            <v-card-text>
              <p>{{ product.description }}</p>
              
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color=success
              >Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  </div>

</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      quantity : 0
    }
  }
}
</script>

<style>

</style>