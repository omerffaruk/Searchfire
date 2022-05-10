<template>
  <ul class="products__container">
    <a
      v-for="product in allProducts"
      :key="product.id"
      class="products__product"
    >
      <ProductCard v-if="product.in_stock" :product="product" />
    </a>
  </ul>
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

<style lang="scss">
.products {
  &__container {
    display: grid;
    grid-template-columns: repeat(1fr);
    grid-gap: 10px;
    list-style-type: none;
    padding: 0;
    a {
      text-decoration: none;
    }
  }
}
@media screen and (min-width: 475px) {
  .products__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 875px) {
  .products__container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .products__container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
