<template>
  <div class="product__container">
    <img class="product__image" :src="product.image_url" alt="product" />
    <div class="product__info">
      <h3 class="product__title">{{ product.brand }} - {{ product.title }}</h3>
      <p class="product__price">From £{{ product.price.min }}</p>
    </div>
    <div class="product__buttons">
      <button class="product__button">View</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
};
</script>

<style></style>
