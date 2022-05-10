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
  background-color: #efefef4b;
}
#app {
  font-family: futura-pt, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #121e28;
}

.main {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
