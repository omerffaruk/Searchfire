<template>
  <header></header>
  <main class="main">
    <router-view />
  </main>
  <footer></footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: futura-pt, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #121e28;
}

a {
  color: inherit;
  text-decoration: none;
}

.main {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
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
