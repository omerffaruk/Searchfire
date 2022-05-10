<template>
  <div class="products__container">
    <div
      v-for="product in allProducts"
      :key="product.id"
      class="products__product"
    >
      <h3>{{ product.title }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ResultsSet",
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  },
};
</script>

<style></style>
