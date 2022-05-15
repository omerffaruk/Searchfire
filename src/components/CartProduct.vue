<template>
  <div className="cart-item">
    <router-link
      :to="{ name: `product`, params: { productid: cartProduct.product.id } }"
    >
      <div className="cart-item-img-container">
        <img
          :src="cartProduct.product.image_url"
          alt="cartProduct.product.title"
          className="cart-item-img"
        />
      </div>
    </router-link>
    <div className="cart-item-explanations">
      <p>{{ cartProduct.product.brand }}</p>
      <p>{{ cartProduct.product.title }}</p>
      <p>£{{ cartProduct.product.price.min.toFixed(2) }}</p>
      <p>Quantity: {{ cartProduct.quantity }}</p>
    </div>
    <button @click="removeFromCart" className="cart-item-close">X</button>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  name: "CartProduct",
  props: ["cartProduct"],
  methods: {
    removeFromCart() {
      store.commit("removeItemFromCart", this.cartProduct);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/config.scss";
.cart-items-container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: 1rem;
  box-shadow: 2px 2px 10px darkgray;
}
.cart-item {
  border: 1px solid lightgray;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-columns: minmax(auto, 2fr) minmax(auto, 3fr) minmax(auto, 1fr);
  position: relative;
  padding: 10px 8px;
}
.cart-item img {
  width: 100%;
  height: 100%;
  max-width: 240px;
  object-fit: contain;
}
.cart-item-explanations {
  display: grid;
  justify-self: end;
  text-align: end;
  padding-bottom: 1rem;
  height: 240px;
}
.cart-item-explanations p {
  font-weight: 300;
  text-transform: uppercase;
  font-style: italic;
}
.cart-item-explanations .price {
  font-weight: 500;
}
.cart-item-close {
  border: none;
  padding: 0.3rem;
  cursor: pointer;
  font-size: 1.3rem;
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: $button-background-color;
  color: $button-text-color;
  transition: all 0.3s ease;
}
.cart-item-close:hover {
  background-color: $button-hover-background-color;
}

@media screen and (max-width: 550) {
  .cart-item {
    grid-template-columns: 1fr;
  }
}
</style>
