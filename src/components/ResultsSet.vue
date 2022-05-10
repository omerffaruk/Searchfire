<template>
  <div class="products__container">
    <div
      v-for="product in allProducts"
      :key="product.id"
      class="products__product"
    >
      <ProductCard v-if="product.in_stock" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ResultsSet",
  components: {
    ProductCard,
  },
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
