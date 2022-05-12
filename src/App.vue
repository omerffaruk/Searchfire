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
</style>
