<template>
  <div class="product-page-grid">
    <div class="image-container">
      <img :src="product.image_url" alt="product" />
    </div>
    <div class="info-container">
      <h2>{{ product.brand }}</h2>
      <h3>{{ product.title }}</h3>
      <p class="price">From £{{ product.price.min.toFixed(2) }}</p>
      <p>{{ product.in_stock ? "Available" : "Currently not in stock" }}</p>
      <div class="button-container">
        <div class="plus-minus-amount">
          <button class="btn" @click="increaseQuantity">+</button>
          <p class="quantity">{{ quantity }}</p>
          <button class="btn" @click="decreaseQuantity">-</button>
        </div>
        <div class="add-cart-button">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductView",
  props: ["productid"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["fetchAllProducts"]),
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      } else {
        this.quantity = 0;
      }
    },
  },
  computed: {
    ...mapGetters(["getProductById"]),
    product() {
      return this.getProductById(this.productid) || {};
    },
  },
  created() {
    this.fetchAllProducts();
  },
};
</script>

<style lang="scss">
.product-page-grid {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  margin: 2rem auto 0;

  .image-container {
    img {
      width: 90%;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 80%;
    max-width: 460px;
    margin: 10px auto 0;
    font-family: future-pt;

    & > * {
      margin: 0.5rem 0;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      font-style: italic;
    }
    .price {
      font-size: 1.4em;
      font-weight: bold;
    }
    .button-container > * {
      margin-bottom: 1rem;
      border-radius: 3%;
    }

    .plus-minus-amount {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;

      & > * {
        padding: 10px 30px;
        font-size: 1rem;
      }
    }
    .add-cart-button > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 10px 20px;
      font-size: 1rem;
      border: 1px solid black;
      background-color: black;
      color: white;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: #1a1919;
        color: white;
      }
    }
  }
}

.btn,
.quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  color: #3c4043;
  cursor: pointer;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  max-width: 100%;
  padding: 2px 24px;
  margin-right: 10px;
}

.btn:hover {
  background: #f6f9fe;
  color: #174ea6;
  cursor: pointer;
}

.btn:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}
@media screen and (min-width: 992px) {
  .product-page-grid {
    grid-template-columns: 4fr 3fr;
    max-width: 80%;
    column-gap: 1rem;
    .img-container img {
      width: 600px;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    .info-container {
      padding: 4rem 0;
    }
  }
}
</style>
