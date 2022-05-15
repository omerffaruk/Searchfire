<template>
  <header>
    <router-link to="/">
      <img src="./assets/salesfire.png" alt="logo" />
    </router-link>
    <SearchBar v-if="isHomeView()" />
    <div class="icons">
      <router-link to="/cart">
        <img src="./assets/bag.svg" alt="cart" />
      </router-link>
      <img
        @click="toggleColorScheme"
        v-if="!getLightScheme"
        src="./assets/close-light.svg"
        alt="dark color scheme"
      />
      <img
        @click="toggleColorScheme"
        v-if="getLightScheme"
        src="./assets/open-light.svg"
        alt="light color scheme"
      />
    </div>
  </header>
  <main class="main">
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import store from "@/store/index";
import { mapGetters } from "vuex";

export default {
  components: {
    SearchBar,
  },
  methods: {
    isHomeView() {
      return this.$route.path === "/" ? true : false;
    },
    toggleColorScheme() {
      store.commit("setLightScheme");
      const bodyClassName = store.getters.getLightScheme ? "light" : "dark";
      document.body.className = bodyClassName;
    },
  },
  computed: {
    ...mapGetters(["getLightScheme"]),
  },
};
</script>

<style lang="scss">
@import "./assets/config.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.light {
  @include set-background-color($light-background-color);
}
.dark {
  @include set-background-color($dark-background-color);
}
#app {
  font-family: futura-pt, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
}

a {
  color: inherit;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

header img {
  max-height: 50px;
  background-color: white;
}

.icons {
  display: flex;
  justify-content: flex-end;
}

.icons img {
  max-height: 30px;
  margin: auto 0;
}

.icons > *:last-child {
  margin-bottom: 0.3rem;
}

.main {
  min-height: 100vh;
}

/* clears the ‘X’ from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}
input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}
/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
