<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.tabs {
  text-align: center;
  height: 50px;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  margin-left: 0px;
  padding: 0;
  padding-top: 10px
}
.tab {
  width: 40px;
  margin: 15px;
  margin-bottom: 3px;
}
.tab > img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
a,a:focus,a:hover {
  text-decoration: none;
  color: black;
}
.navBar {
  display: block;
  height: 60px;
  background-color: #fc7299
}
.nav-user {
  width: auto;
  height: auto;
  max-width: 30px;
  max-height: 30px;
  margin: 10px;
}
.nav-search {
  display: inline-block;
  width: auto;
  height: auto;
  max-width: 180px;
  max-height: 50px;
  margin-left: 18px;
  margin-top: 3px;
}
.nav-game, .nav-message {
  width: auto;
  height: auto;
  max-width: 30px;
  max-height: 30px;
  margin: 5px;
}
</style>
