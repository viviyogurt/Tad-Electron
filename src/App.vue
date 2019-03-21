<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: '微软雅黑', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
