<template>
  <nav>
    <h1>Insecure Notes Application</h1>
    <p>Christoph Merck, Marcel Hartmann</p>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

nav {
  padding: 30px;
  text-align: center;
}
</style>
