<template>
  <header></header>
  <main class="main">
    <router-view />
  </main>
  <footer></footer>
</template>

<style lang="scss">
#app {
  font-family: futura-pt, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color: #efefef4b;
}

.main {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
