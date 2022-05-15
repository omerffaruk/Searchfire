<template>
  <section v-if="getCart.length > 0" className="cart-page">
    <article className="cart-header">
      <h2>Your Bag</h2>
      <p>Items in your bag are not reserved.</p>
    </article>
    <article className="cart-items-container">
      <template v-for="cartProduct in getCart" :key="cartProduct.product.id">
        <CartProduct :cartProduct="cartProduct" />
      </template>
    </article>
    <article className="cart-summary">
      <p className="summary">Order Summary</p>
      <div className="amount">
        <p>{{ totalItems }} {{ totalItems > 1 ? "items" : "item" }}</p>
        <p>£ {{ totalPrice }}</p>
      </div>
      <div className="cart-summary-delivery">
        <p>Delivery</p>
        <p>{{ deliveryPrice === "0.00" ? "FREE" : deliveryPrice }}</p>
      </div>
      <div className="cart-summary-total">
        <p>TOTAL</p>
        <p>£ {{ total }}</p>
      </div>
    </article>
    <button className="checkout-btn">CHECKOUT</button>
    <router-link to="/">
      <button className="checkout-btn continue">Continue to Shopping</button>
    </router-link>
  </section>
  <section v-else>
    <p>No product in the cart</p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CartProduct from "@/components/CartProduct.vue";

export default {
  components: {
    CartProduct,
  },
  computed: {
    ...mapGetters(["getCart"]),
    totalItems() {
      return this.getCart.reduce((total, cartProduct) => {
        return total + cartProduct.quantity;
      }, 0);
    },
    totalPrice() {
      return this.getCart.reduce((total, cartProduct) => {
        return (
          total +
          cartProduct.product.price.min * cartProduct.quantity
        ).toFixed(2);
      }, 0);
    },
    deliveryPrice() {
      return (this.totalPrice > 100 ? 0 : 8).toFixed(2);
    },
    total() {
      return (
        parseFloat(this.totalPrice) + parseFloat(this.deliveryPrice)
      ).toFixed(2);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/config.scss";
.cart-page {
  display: grid;
  grid-template-columns: 1fr;
  width: 95%;
  grid-gap: 1rem;
  margin: auto;
  max-width: 1440px;
  font-family: "Montserrat", sans-serif;
}
.cart-header h2 {
  font-size: 1.5rem;
  text-transform: uppercase;
}
.cart-header p {
  font-size: 0.875rem;
  font-weight: 300;
}

.cart-summary {
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 300;
}
.cart-summary .summary {
  font-weight: 500;
  font-size: 1.2rem;
}
.cart-summary-total {
  font-weight: 500;
}
.cart-summary-delivery,
.cart-summary-total,
.cart-summary-voucher,
.cart-summary .amount {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
}
.checkout-btn {
  background-color: $button-background-color;
  color: $button-text-color;
  font-weight: 600;
  letter-spacing: 0.6px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin: auto;
  padding: 1rem 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s ease;
  width: 80%;
}
.checkout-btn:hover {
  opacity: 0.8;
}
.cart-page a {
  width: 100%;
  align-self: center;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .cart-header {
    align-self: start;
    grid-area: cart-header;
  }
  .cart-header h2 {
    font-size: 2.75rem;
  }
  .cart-header p {
    font-size: 1rem;
  }
  .cart-items-container {
    grid-area: cart-items;
  }
  .cart-summary {
    grid-area: cart-summary;
    align-self: end;
  }
  .checkout-btn {
    grid-area: checkout-btn;
    align-self: start;
    margin: 0 auto;
  }
  .continue {
    grid-area: continue;
    align-self: center;
  }
  .cart-page {
    grid-template-columns: 5fr 2fr;
    grid-template-rows: 100px, 200px auto;
    grid-gap: 3rem;
    align-items: end;
    grid-template-areas:
      "cart-header cart-summary"
      "cart-items checkout-btn"
      "cart-items continue";
  }
}
</style>
