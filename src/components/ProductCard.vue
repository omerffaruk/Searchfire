<template>
  <li class="product__card">
    <img class="image" :src="product.image_url" alt="product" />
    <div class="info">
      <p class="brand">{{ product.brand }}</p>
      <p class="title">{{ product.title }}</p>
      <p class="price">
        From <span>£{{ product.price.min }}</span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
};
</script>

<style lang="scss">
.product {
  &__card {
    display: grid;
    grid-template-rows: 2fr 1fr;
    justify-content: stretch;
    align-items: stretch;
    height: 100%;

    .image {
      width: 100%;
      object-fit: contain;
      transition: transform 0.6s ease;
      &:hover {
        transform: scale(0.95);
      }
    }
    .info {
      width: 100%;
      height: 100%;
      padding-right: 0.6rem;
      font-family: futura-pt;
      text-align: left;
      line-height: 21px;

      .brand {
        text-transform: uppercase;
        font-size: 0.84em;
        letter-spacing: 0.08em;
        font-weight: bold;
      }

      .price span {
        // color: $primary-color;
        font-weight: bold;
      }
      .buttons {
        display: grid;
        width: 60%;
        margin: 0.5rem 0;

        button {
          width: 100%;
          padding: 0.5rem 0.3rem;
          background-color: black;
          color: white;
          border: none;
          font-size: 1.1rem;
          border-radius: 5%;
        }
      }
    }
  }
}
</style>
