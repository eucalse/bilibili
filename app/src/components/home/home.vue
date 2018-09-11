<template>
  <div class="home">
    <div class="navBar">
      <img class="nav-user" src="../../../static/头像.png">
      <router-link to="/search"><img class="nav-search" src="../../../static/search.png"></router-link>
      <img class="nav-game" src="../../../static/game.png">
      <img class="nav-message" src="../../../static/message.png">
    </div>
    <div class="home-nav">
      <router-link class="home-nav-item" to="/home/zhibo">直播</router-link>
      <router-link class="home-nav-item" to="/home/tuijian">推荐</router-link>
      <router-link class="home-nav-item" to="/home/zhuifan">追番</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

}
</script>

<style>
  .home-nav {
    height: 40px;
    padding: 6px;
  }
  .home-nav-item {
    margin-left: 40px;
    color: #757575;
  }
  .home-pane {
    background-color: #f5f5f5;
  }
</style>
