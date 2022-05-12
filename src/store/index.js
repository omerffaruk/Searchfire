import { createStore } from "vuex";

const clientId = process.env.VUE_APP_CLIENT_ID;
const apiUrl = process.env.VUE_APP_API_URL;
const fetchUrl = `${apiUrl}/searcha?client_id=${clientId}/`;

const store = createStore({
  state: {
    products: [],
    pageProducts: [],
  },
  getters: {
    allProducts: (state) => state.products,
    pageProducts: (state) => state.pageProducts,
    getProductById: (state) => (id) => {
      return state.products.find((prod) => prod.id === id);
    },
  },
  actions: {
    async fetchAllProducts({ commit }, query = "", limit = 48, page = 1) {
      try {
        fetch(`${fetchUrl}&query=${query}&limit=${limit}&page=${page}`)
          .then((res) => res.json())
          .then((data) => commit("setProducts", data.products));
      } catch (err) {
        console.log(err);
      }
    },
    async fetchPageProducts({ commit }, query = "", limit = 12, page = 1) {
      fetch(`${fetchUrl}&query=${query}&limit=${limit}&page=${page}`)
        .then((res) => res.json())
        .then((data) => commit("setPageProducts", data.products));
    },
  },
  mutations: {
    setProducts: (state, products) => (state.products = products),
    setPageProducts: (state, products) => (state.pageProducts = products),
  },
});

export default store;
