import { createStore } from "vuex";

const clientId = process.env.VUE_APP_CLIENT_ID;
const apiUrl = process.env.VUE_APP_API_URL;
const fetchUrl = `${apiUrl}/searcha?client_id=${clientId}/`;

export default createStore({
  state: {
    products: [],
  },
  getters: {
    allProducts: (state) => state.products,
  },
  actions: {
    async fetchProducts({ commit }, query = "", limit = 12, page = 1) {
      fetch(`${fetchUrl}&query=${query}&limit=${limit}&page=${page}`)
        .then((res) => res.json())
        .then((data) => commit("setProducts", data.products));
    },
  },
  mutations: {
    setProducts: (state, products) => (state.products = products),
  },
});
