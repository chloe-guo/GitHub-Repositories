<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style lang="scss">
// -----google font-----
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&display=swap");

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #707070;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: .5px;
}

html,
body,
#app {
  font-family: "Montserrat", sans-serif;
  background: #FFFFFF;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #707070;
  letter-spacing: .5px;
}

a, button {
  display: block;
  cursor: pointer !important;
}
</style>